import { Product, RecommendedProduct, AIRecommendationResponse, AISettings, ExtractedCriteria, formatINR } from '../types';
import { PRODUCTS } from '../data/products';

const STORAGE_KEY = 'ai_recommender_settings';

export function getSavedSettings(): AISettings {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to read settings from localStorage', e);
  }

  return {
    provider: (import.meta.env.VITE_AI_PROVIDER as any) || 'smart-heuristic',
    openaiKey: import.meta.env.VITE_OPENAI_API_KEY || '',
    geminiKey: import.meta.env.VITE_GEMINI_API_KEY || '',
    groqKey: import.meta.env.VITE_GROQ_API_KEY || ''
  };
}

export function saveSettings(settings: AISettings): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch (e) {
    console.error('Failed to save settings', e);
  }
}

/**
 * Intelligent NLP & Semantic Fallback Recommendation Engine
 * Supports INR (₹), 'k' multipliers, 'lakh' multipliers, and diverse categories (music, food, gadgets, home, etc.)
 */
export function runHeuristicRecommendation(query: string, allProducts: Product[]): AIRecommendationResponse {
  const q = query.toLowerCase();

  // 1. Extract budget max (e.g., "₹10,000", "10k", "50k", "under 1 lakh", "below 30000 rs", "< 5000 rupees")
  let budgetMax: number | undefined;

  // Check for 'lakh' (e.g. "1 lakh", "1.5 lakh")
  const lakhMatch = q.match(/(\d+(?:\.\d+)?)\s*(?:lakh|lac)/i);
  if (lakhMatch) {
    budgetMax = Math.round(parseFloat(lakhMatch[1]) * 100000);
  } else {
    // Check for 'k' notation (e.g. "10k", "30k", "50k")
    const kMatch = q.match(/(?:under|below|less than|within|max|up to|<|budget\s*of)\s*(\d{1,3})\s*k\b/i) ||
                   q.match(/(\d{1,3})\s*k\s*(?:budget|inr|rs|rupees)?\b/i);
    if (kMatch) {
      budgetMax = parseInt(kMatch[1], 10) * 1000;
    } else {
      // Standard numeric with ₹, rs, rupees, or standalone number
      const numMatch = q.match(/(?:under|below|less than|max|up to|<|within)\s*(?:₹|rs\.?|inr)?\s*(\d{3,7})/i) ||
                       q.match(/(?:₹|rs\.?|inr)\s*(\d{3,7})/i) ||
                       q.match(/(\d{3,7})\s*(?:rs|rupees|inr|₹)/i);
      if (numMatch) {
        const parsed = parseInt(numMatch[1], 10);
        if (!isNaN(parsed) && parsed > 50 && parsed <= 5000000) {
          budgetMax = parsed;
        }
      }
    }
  }

  // 2. Extract targeted category (Music, Food, Tech, Home, etc.)
  let detectedCategory: string | undefined;
  
  if (/music|guitar|piano|keyboard|ukulele|instrument|turntable|vinyl|mic|microphone|audio interface|acoustic|strings|recording|studio/i.test(q)) {
    detectedCategory = 'music';
  } else if (/food|coffee|chocolate|tea|snack|snacks|olive oil|ramen|edible|gourmet|grocery|dry fruit|nuts|almond|drink|beverage|eating/i.test(q)) {
    detectedCategory = 'food';
  } else if (/phone|smartphone|android|iphone|mobile|5g phone/i.test(q)) {
    detectedCategory = 'smartphones';
  } else if (/laptop|macbook|notebook|pc|computer|mac/i.test(q)) {
    detectedCategory = 'laptops';
  } else if (/headphone|earbud|airpod|soundcore|boat|earphone/i.test(q)) {
    detectedCategory = 'audio';
  } else if (/air fryer|kitchen|espresso|coffee machine|cooking|home appliance/i.test(q)) {
    detectedCategory = 'home';
  } else if (/watch|smartwatch|fitness tracker|garmin|amazfit/i.test(q)) {
    detectedCategory = 'wearables';
  } else if (/gaming|console|ps5|playstation|switch|deck|steam deck/i.test(q)) {
    detectedCategory = 'gaming';
  } else if (/camera|vlog|photo|mirrorless/i.test(q)) {
    detectedCategory = 'cameras';
  } else if (/mouse|charger|power bank|accessory|accessories/i.test(q)) {
    detectedCategory = 'accessories';
  }

  // 3. Extract desirable features
  const desirableKeywords = [
    'camera', 'battery', 'anc', 'noise cancelling', 'gaming', 'lightweight',
    'oled', 'fast charging', 'portable', 'ergonomic', 'running', 'gps', 'coding',
    'acoustic', 'touch sensitive', 'arabica', 'dark chocolate', 'healthy', 'organic',
    'wireless', 'bluetooth', 'espresso', 'air fryer'
  ];
  const detectedFeatures = desirableKeywords.filter(k => q.includes(k));

  // 4. Score each product
  const scored = allProducts.map(product => {
    let score = 0;
    const reasons: string[] = [];

    // Category match bonus
    if (detectedCategory) {
      if (product.category === detectedCategory) {
        score += 55;
      } else {
        score -= 30; // category mismatch penalty
      }
    }

    // Budget check (in INR)
    if (budgetMax !== undefined) {
      if (product.price <= budgetMax) {
        score += 40;
        const diff = budgetMax - product.price;
        if (diff <= (budgetMax * 0.15)) {
          reasons.push(`Priced at ${formatINR(product.price)}, fitting your ${formatINR(budgetMax)} budget with high-tier specifications`);
        } else {
          reasons.push(`Well within your ${formatINR(budgetMax)} budget at ${formatINR(product.price)} (saving you ${formatINR(diff)})`);
        }
      } else {
        // Over budget penalty
        score -= 60;
      }
    }

    // Keyword & Tag matching
    const productHaystack = `${product.name} ${product.brand} ${product.description} ${product.features.join(' ')} ${product.tags.join(' ')}`.toLowerCase();
    
    const words = q.split(/[\s,]+/).filter(w => w.length > 2 && !['want', 'with', 'under', 'from', 'best', 'the', 'and', 'for', 'show', 'stuff', 'type', 'types'].includes(w));
    for (const word of words) {
      if (productHaystack.includes(word)) {
        score += 10;
      }
    }

    // Detected feature matches
    for (const feat of detectedFeatures) {
      if (productHaystack.includes(feat)) {
        score += 18;
        reasons.push(`Selected for top-tier ${feat} capability`);
      }
    }

    // High rating bonus
    if (product.rating >= 4.7) {
      score += 5;
    }

    // Compose final tailored reason
    let finalReason = reasons.slice(0, 2).join('. ');
    if (!finalReason) {
      finalReason = `Matches your interest in ${product.category} with an outstanding ${product.rating}★ rating.`;
    } else {
      finalReason += '.';
    }

    const normalizedScore = Math.min(99, Math.max(50, Math.round(50 + score * 0.5)));

    return {
      ...product,
      matchScore: normalizedScore,
      recommendationReason: finalReason,
      isTopPick: false,
      _rawScore: score
    };
  });

  // Sort and filter to top relevant items
  const sorted = scored
    .filter(item => item._rawScore > 0 || !detectedCategory)
    .sort((a, b) => b._rawScore - a._rawScore);

  const topResults = (sorted.length > 0 ? sorted.slice(0, 4) : scored.slice(0, 3)).map((item, idx) => ({
    ...item,
    isTopPick: idx === 0
  }));

  const criteria: ExtractedCriteria = {
    budgetMax,
    category: detectedCategory,
    desiredFeatures: detectedFeatures.length > 0 ? detectedFeatures : undefined,
    primaryIntent: query
  };

  const categoryName = detectedCategory 
    ? (detectedCategory === 'music' ? 'musical instruments & gear' : detectedCategory === 'food' ? 'gourmet food & delicacies' : detectedCategory)
    : 'products';

  const summary = topResults.length > 0
    ? `For your query "${query}", I analyzed our catalog and found ${topResults.length} ideal ${categoryName}${budgetMax ? ` within your ${formatINR(budgetMax)} budget` : ''}. Here are the top recommendations tailored for you:`
    : `Here are our top-rated recommendations matching "${query}":`;

  return {
    query,
    summary,
    extractedCriteria: criteria,
    recommendedProducts: topResults,
    providerUsed: 'smart-heuristic'
  };
}

/**
 * Call OpenAI API for structured product recommendations in INR (₹)
 */
async function callOpenAI(
  query: string, 
  apiKey: string, 
  allProducts: Product[]
): Promise<AIRecommendationResponse> {
  const catalogSummary = allProducts.map(p => ({
    id: p.id,
    name: p.name,
    brand: p.brand,
    category: p.category,
    price: `₹${p.price.toLocaleString('en-IN')}`,
    rating: p.rating,
    tags: p.tags,
    features: p.features.slice(0, 3)
  }));

  const systemPrompt = `You are an expert AI product recommendation assistant for an online marketplace.
All prices are in Indian Rupees (INR / ₹).
The catalog contains diverse items: Musical instruments, Gourmet Food & coffee, Smartphones, Laptops, Audio, Kitchen, Gaming, and Wearables.
Given the user's preference and the product catalog, select 2 to 4 products that best match their needs, budget, and desired features.
For each recommended product, provide:
- productId: exact id from the catalog
- matchScore: integer between 50 and 99 indicating degree of match
- reason: a concise 1-2 sentence explanation addressing why this matches the user's prompt (quote prices in ₹, e.g. ₹9,490)
- isTopPick: boolean (true for the #1 best recommendation)

You MUST respond strictly with valid JSON conforming to this schema:
{
  "summary": "Conversational 1-2 sentence response to user",
  "extractedCriteria": {
    "budgetMax": number or null,
    "category": "string or null",
    "primaryIntent": "concise description of what user wants",
    "desiredFeatures": ["array", "of", "features"]
  },
  "recommendations": [
    {
      "productId": "id",
      "matchScore": 95,
      "reason": "reason quoting ₹ prices",
      "isTopPick": true
    }
  ]
}`;

  const userPrompt = `Product Catalog:
${JSON.stringify(catalogSummary)}

User Preference:
"${query}"`;

  const startTime = performance.now();
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey.trim()}`
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt }
      ],
      response_format: { type: 'json_object' },
      temperature: 0.3
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`OpenAI API error (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  const rawContent = data.choices?.[0]?.message?.content;
  if (!rawContent) throw new Error('Empty response from OpenAI');

  const parsed = JSON.parse(rawContent);
  const latency = Math.round(performance.now() - startTime);

  const recommendedProducts: RecommendedProduct[] = [];
  if (Array.isArray(parsed.recommendations)) {
    for (const rec of parsed.recommendations) {
      const match = allProducts.find(p => p.id === rec.productId);
      if (match) {
        recommendedProducts.push({
          ...match,
          matchScore: rec.matchScore || 85,
          recommendationReason: rec.reason || `Recommended based on your preferences.`,
          isTopPick: Boolean(rec.isTopPick)
        });
      }
    }
  }

  if (recommendedProducts.length === 0) {
    return runHeuristicRecommendation(query, allProducts);
  }

  return {
    query,
    summary: parsed.summary || `Here are our top recommendations for "${query}":`,
    extractedCriteria: parsed.extractedCriteria || {},
    recommendedProducts,
    providerUsed: 'openai',
    rawLatencyMs: latency
  };
}

/**
 * Call Google Gemini API
 */
async function callGemini(
  query: string, 
  apiKey: string, 
  allProducts: Product[]
): Promise<AIRecommendationResponse> {
  const catalogSummary = allProducts.map(p => ({
    id: p.id,
    name: p.name,
    brand: p.brand,
    category: p.category,
    price: `₹${p.price.toLocaleString('en-IN')}`,
    rating: p.rating,
    tags: p.tags,
    features: p.features.slice(0, 3)
  }));

  const prompt = `You are an expert AI product recommendation assistant. All prices are in Indian Rupees (INR / ₹).
Analyze this user preference: "${query}"
Catalog:
${JSON.stringify(catalogSummary)}

Recommend 2-4 products from the catalog. Return STRICTLY JSON with this structure:
{
  "summary": "Conversational answer to user",
  "extractedCriteria": {
    "budgetMax": number or null,
    "category": "string or null",
    "primaryIntent": "string",
    "desiredFeatures": ["string"]
  },
  "recommendations": [
    {
      "productId": "id",
      "matchScore": 95,
      "reason": "Specific reason why this fits budget & specs in ₹",
      "isTopPick": true
    }
  ]
}`;

  const startTime = performance.now();
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey.trim()}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.3
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API error (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawText) throw new Error('Empty Gemini response');

  const parsed = JSON.parse(rawText);
  const latency = Math.round(performance.now() - startTime);

  const recommendedProducts: RecommendedProduct[] = [];
  if (Array.isArray(parsed.recommendations)) {
    for (const rec of parsed.recommendations) {
      const match = allProducts.find(p => p.id === rec.productId);
      if (match) {
        recommendedProducts.push({
          ...match,
          matchScore: rec.matchScore || 85,
          recommendationReason: rec.reason || `Recommended match.`,
          isTopPick: Boolean(rec.isTopPick)
        });
      }
    }
  }

  if (recommendedProducts.length === 0) {
    return runHeuristicRecommendation(query, allProducts);
  }

  return {
    query,
    summary: parsed.summary || `Recommendations based on your request:`,
    extractedCriteria: parsed.extractedCriteria || {},
    recommendedProducts,
    providerUsed: 'gemini',
    rawLatencyMs: latency
  };
}

/**
 * Call Groq API
 */
async function callGroq(
  query: string,
  apiKey: string,
  allProducts: Product[]
): Promise<AIRecommendationResponse> {
  const catalogSummary = allProducts.map(p => ({
    id: p.id,
    name: p.name,
    brand: p.brand,
    category: p.category,
    price: `₹${p.price.toLocaleString('en-IN')}`,
    rating: p.rating,
    tags: p.tags,
    features: p.features.slice(0, 3)
  }));

  const systemPrompt = `You are an expert AI product recommendation assistant. Prices are in Indian Rupees (₹). Respond ONLY with valid JSON.
{
  "summary": "Conversational 1-2 sentence response to user",
  "extractedCriteria": {
    "budgetMax": number or null,
    "category": "string or null",
    "primaryIntent": "intent",
    "desiredFeatures": ["array"]
  },
  "recommendations": [
    {
      "productId": "id",
      "matchScore": 95,
      "reason": "Clear concise reason quoting ₹",
      "isTopPick": true
    }
  ]
}`;

  const startTime = performance.now();
  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey.trim()}`
    },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: `Catalog: ${JSON.stringify(catalogSummary)}\n\nUser request: "${query}"` }
      ],
      response_format: { type: 'json_object' },
      temperature: 0.2
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Groq API error (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  const rawText = data.choices?.[0]?.message?.content;
  const parsed = JSON.parse(rawText);
  const latency = Math.round(performance.now() - startTime);

  const recommendedProducts: RecommendedProduct[] = [];
  if (Array.isArray(parsed.recommendations)) {
    for (const rec of parsed.recommendations) {
      const match = allProducts.find(p => p.id === rec.productId);
      if (match) {
        recommendedProducts.push({
          ...match,
          matchScore: rec.matchScore || 85,
          recommendationReason: rec.reason || `Recommended item.`,
          isTopPick: Boolean(rec.isTopPick)
        });
      }
    }
  }

  return {
    query,
    summary: parsed.summary,
    extractedCriteria: parsed.extractedCriteria || {},
    recommendedProducts,
    providerUsed: 'groq',
    rawLatencyMs: latency
  };
}

/**
 * Main dispatcher: decides which provider to invoke, with seamless fallback
 */
export async function getProductRecommendations(
  query: string,
  settings: AISettings,
  products: Product[] = PRODUCTS
): Promise<AIRecommendationResponse> {
  const trimmed = query.trim();
  if (!trimmed) {
    throw new Error('Please enter your preferences or budget.');
  }

  try {
    if (settings.provider === 'openai' && settings.openaiKey) {
      return await callOpenAI(trimmed, settings.openaiKey, products);
    }

    if (settings.provider === 'gemini' && settings.geminiKey) {
      return await callGemini(trimmed, settings.geminiKey, products);
    }

    if (settings.provider === 'groq' && settings.groqKey) {
      return await callGroq(trimmed, settings.groqKey, products);
    }

    if (settings.openaiKey) {
      return await callOpenAI(trimmed, settings.openaiKey, products);
    }
    if (settings.geminiKey) {
      return await callGemini(trimmed, settings.geminiKey, products);
    }
    if (settings.groqKey) {
      return await callGroq(trimmed, settings.groqKey, products);
    }
  } catch (err: any) {
    console.warn('External AI API call failed, falling back to smart-heuristic engine:', err);
    const fallback = runHeuristicRecommendation(trimmed, products);
    fallback.summary = `(API Notice: ${err.message || 'Key unavailable'}. Running via Smart AI Heuristic Engine) — ` + fallback.summary;
    return fallback;
  }

  await new Promise(r => setTimeout(r, 380));
  return runHeuristicRecommendation(trimmed, products);
}
