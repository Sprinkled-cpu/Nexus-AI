export type ProductCategory = 
  | 'smartphones' 
  | 'laptops' 
  | 'audio' 
  | 'music'
  | 'food'
  | 'wearables' 
  | 'gaming' 
  | 'cameras'
  | 'home'
  | 'accessories';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: ProductCategory;
  price: number; // In INR (₹)
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  features: string[];
  tags: string[];
  specs: Record<string, string>;
  inStock: boolean;
  popular?: boolean;
}

export interface RecommendedProduct extends Product {
  recommendationReason: string;
  matchScore: number;
  isTopPick?: boolean;
}

export interface ExtractedCriteria {
  budgetMax?: number;
  budgetMin?: number;
  category?: string;
  primaryIntent?: string;
  desiredFeatures?: string[];
}

export interface AIRecommendationResponse {
  query: string;
  summary: string;
  extractedCriteria: ExtractedCriteria;
  recommendedProducts: RecommendedProduct[];
  providerUsed: 'openai' | 'gemini' | 'groq' | 'smart-heuristic';
  rawLatencyMs?: number;
}

export type AIProvider = 'openai' | 'gemini' | 'groq' | 'smart-heuristic';

export interface AISettings {
  provider: AIProvider;
  openaiKey: string;
  geminiKey: string;
  groqKey: string;
}

export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function getAmazonSearchUrl(query: string): string {
  return `https://www.amazon.in/s?k=${encodeURIComponent(query)}`;
}

export function getFlipkartSearchUrl(query: string): string {
  return `https://www.flipkart.com/search?q=${encodeURIComponent(query)}`;
}

