import { Product, RecommendedProduct, AIRecommendationResponse, AISettings, ExtractedCriteria } from '../types';
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
 * Heuristic/NLP Fallback Recommendation Engine
 * Used when no external API key is configured or when API requests encounter errors.
 */
export function runHeuristicRecommendation(query: string, allProducts: Product[]): AIRecommendationResponse {
  const q = query.toLowerCase();

  // 1. Extract budget max (e.g., "$500", "500$", "under 500", "below $1000", "< 600")
  let budgetMax: number | undefined;
  const budgetMatch = q.match(/(?:under|below|less than|max|up to|<|\$)\s*(\$?\d{2,5})/i) ||
                      q.match(/(\d{2,5})\s*(?:dollars|\$)/i);
  if (budgetMatch) {
    const rawNum = budgetMatch[1].replace('$', '');
    const parsed = parseInt(rawNum, 10);
    if (!isNaN(parsed) && parsed > 10 && parsed < 20000) {
      budgetMax = parsed;
    }
  }

  // 2. Extract targeted category
  let detectedCategory: string | undefined;
  if (/phone|smartphone|android|iphone|mobile/i.test(q)) detectedCategory = 'smartphones';
  else if (/laptop|macbook|notebook|pc|computer/i.test(q)) detectedCategory = 'laptops';
  else if (/headphone|earbud|audio|sound|airpod|music/i.test(q)) detectedCategory = 'audio';
  else if (/watch|smartwatch|fitness tracker|garmin/i.test(q)) detectedCategory = 'wearables';
  else if (/gaming|console|ps5|playstation|switch|deck/i.test(q)) detectedCategory = 'gaming';
  else if (/camera|vlog|photo/i.test(q)) detectedCategory = 'cameras';
  else if (/mouse|charger|power bank|accessory|accessories/i.test(q)) detectedCategory = 'accessories';

  // 3. Extract desirable features
  const desirableKeywords = [
    'camera', 'battery', 'anc', 'noise cancelling', 'gaming', 'lightweight',
    'oled', 'fast charging', 'portable', 'ergonomic', 'running', 'gps', 'coding', 'programming'
  ];
  const detectedFeatures = desirableKeywords.filter(k => q.includes(k));

  // 4. Score each product
  const scored = allProducts.map(product => {
    let score = 0;
    const reasons: string[] = [];

    // Category match bonus
    if (detectedCategory) {
      if (product.category === detectedCategory) {
        score += 45;
      } else {
        score -= 25; // category mismatch penalty
      }
    }

    // Budget check
    if (budgetMax !== undefined) {
      if (product.price <= budgetMax) {
        score += 35;
        const diff = budgetMax - product.price;
        if (diff <= 50) {
          reasons.push(`Priced at $${product.price}, landing right at the top of your $${budgetMax} budget with maximum specs`);
        } else {
          reasons.push(`Well within your $${budgetMax} budget at $${product.price} (saving $${diff})`);
        }
      } else {
        // Over budget penalty
        score -= 50;
      }
    }

    // Keyword & Tag matching
    const productHaystack = `${product.name} ${product.brand} ${product.description} ${product.features.join(' ')} ${product.tags.join(' ')}`.toLowerCase();
    
    // Words in user query
    const words = q.split(/\s+/).filter(w => w.length > 2 && !['want', 'with', 'under', 'from', 'best', 'the', 'and', 'for', 'show'].includes(w));
    let matchedKeywordsCount = 0;
    for (const word of words) {
      if (productHaystack.includes(word)) {
        score += 8;
        matchedKeywordsCount++;
      }
    }

    // Specific detected feature matches
    for (const feat of detectedFeatures) {
      if (productHaystack.includes(feat)) {
        score += 15;
        reasons.push(`Highlighted for its exceptional ${feat} capability`);
      }
    }

    // High rating bonus
    if (product.rating >= 4.7) {
      score += 5;
    }

    // Compose final tailored reason
    let finalReason = reasons.slice(0, 2).join('. ');
    if (!finalReason) {
      finalReason = `Matches key aspects of your search with a high ${product.rating}★ user satisfaction score.`;
    } else {
      finalReason += '.';
    }

    // Normalize score to percentage 40 - 99
    const normalizedScore = Math.min(99, Math.max(45, Math.round(50 + score * 0.5)));

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

  const categoryName = detectedCategory ? detectedCategory.replace('smartphones', 'phones') : 'items';
  const summary = topResults.length > 0
    ? `Based on your request "${query}", I analyzed our catalog and found ${topResults.length} ideal ${categoryName}${budgetMax ? ` within your $${budgetMax} budget` : ''}. Here are the top matches tailored to your specifications:`
    : `We couldn't find an exact match for "${query}", but here are our top-rated recommendations that may fit:`;

  return {
    query,
    summary,
    extractedCriteria: criteria,
    recommendedProducts: topResults,
    providerUsed: 'smart-heuristic'
  };
}

/**
 * Call OpenAI API for structured product recommendations
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
    price: p.price,
    rating: p.rating,
    tags: p.tags,
    features: p.features.slice(0, 3)
  }));

  const systemPrompt = `You are an expert AI product recommendation assistant for an electronics store.
Given the user's preference and the product catalog, select 2 to 4 products that best match their needs, budget, and desired features.
For each recommended product, provide:
- productId: exact id from the catalog
- matchScore: integer between 50 and 99 indicating degree of match
- reason: a concise 1-2 sentence explanation addressing why this matches the user's prompt (mention price, budget comparison, or specific features)
- isTopPick: boolean (true for the #1 best recommendation)

You MUST respond strictly with valid JSON conforming to this schema:
{
  "summary": "Conversational 1-2 sentence response to user greeting/preferences",
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
      "reason": "reason text",
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
  if (!rawContent) {
    throw new Error('Empty response from OpenAI');
  }

  const parsed = JSON.parse(rawContent);
  const latency = Math.round(performance.now() - startTime);

  // Map recommendation IDs back to full products
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

  // Fallback if none matched
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
    price: p.price,
    rating: p.rating,
    tags: p.tags,
    features: p.features.slice(0, 3)
  }));

  const prompt = `You are an expert AI product recommendation assistant.
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
      "reason": "Specific reason why this fits budget & specs",
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
 * Call Groq API (High-speed LLaMA-3.3-70b-versatile)
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
    price: p.price,
    rating: p.rating,
    tags: p.tags,
    features: p.features.slice(0, 3)
  }));

  const systemPrompt = `You are an expert AI product recommendation assistant. Respond ONLY with valid JSON.
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
      "reason": "Clear concise reason",
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

  // Check if user has an explicit API key configured
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

    // Auto-detect if user has any key configured even if provider isn't explicitly changed
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
    // Graceful fallback with error notification
    const fallback = runHeuristicRecommendation(trimmed, products);
    fallback.summary = `(API Notice: ${err.message || 'Key unavailable'}. Running via Smart AI Heuristic Engine) — ` + fallback.summary;
    return fallback;
  }

  // Default instant smart NLP heuristic engine
  // Simulate 350ms realistic AI reasoning latency for delightful UX
  await new Promise(r => setTimeout(r, 450));
  return runHeuristicRecommendation(trimmed, products);
}
