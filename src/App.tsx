import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { HeroSearchBar } from './components/HeroSearchBar';
import { AiInsightsBanner } from './components/AiInsightsBanner';
import { ProductCard } from './components/ProductCard';
import { ProductDetailsModal } from './components/ProductDetailsModal';
import { ApiKeyModal } from './components/ApiKeyModal';
import { CatalogControls } from './components/CatalogControls';
import { LoadingSkeleton } from './components/LoadingSkeleton';
import { PRODUCTS } from './data/products';
import { 
  Product, 
  ProductCategory, 
  AIRecommendationResponse, 
  AISettings, 
  RecommendedProduct 
} from './types';
import { 
  getSavedSettings, 
  saveSettings, 
  getProductRecommendations 
} from './services/aiRecommendationService';
import { Sparkles, ShoppingBag, AlertTriangle, Layers } from 'lucide-react';

const CATEGORIES: { id: ProductCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Products' },
  { id: 'music', label: '🎸 Music & Instruments' },
  { id: 'food', label: '☕ Food & Gourmet' },
  { id: 'smartphones', label: '📱 Phones' },
  { id: 'laptops', label: '💻 Laptops' },
  { id: 'audio', label: '🎧 Audio' },
  { id: 'home', label: '🍳 Kitchen & Home' },
  { id: 'wearables', label: '⌚ Wearables' },
  { id: 'gaming', label: '🎮 Gaming' },
  { id: 'cameras', label: '📷 Cameras' },
  { id: 'accessories', label: '🔌 Accessories' },
];

export function App() {
  const [settings, setSettings] = useState<AISettings>(getSavedSettings);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');
  const [sortBy, setSortBy] = useState<'relevance' | 'price-asc' | 'price-desc' | 'rating'>('rating');
  const [activeQuery, setActiveQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recommendationResult, setRecommendationResult] = useState<AIRecommendationResponse | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Modals & Cart
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleSaveSettings = (newSettings: AISettings) => {
    setSettings(newSettings);
    saveSettings(newSettings);
  };

  const handleSearch = async (queryText: string) => {
    if (!queryText.trim()) return;
    setIsLoading(true);
    setErrorMessage(null);
    setActiveQuery(queryText);

    try {
      const result = await getProductRecommendations(queryText, settings, PRODUCTS);
      setRecommendationResult(result);
      setSortBy('relevance');
      setActiveCategory('all');

      // Trigger subtle celebration confetti
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
          colors: ['#10b981', '#34d399', '#38bdf8']
        });
      } catch (e) {
        // Safe fallback
      }
    } catch (err: any) {
      console.error('Failed to get recommendations', err);
      setErrorMessage(err.message || 'An error occurred while finding recommendations.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetRecommendation = () => {
    setRecommendationResult(null);
    setActiveQuery('');
    setSortBy('rating');
    setErrorMessage(null);
  };

  const handleAddToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
    setToastMessage(`Added "${product.name}" to cart!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Filtered & Sorted products computation
  const displayedProducts = useMemo(() => {
    // If AI recommendations are active
    if (recommendationResult) {
      let recs: (RecommendedProduct | Product)[] = [...recommendationResult.recommendedProducts];

      if (activeCategory !== 'all') {
        recs = recs.filter((p) => p.category === activeCategory);
      }

      if (sortBy === 'price-asc') {
        recs.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'price-desc') {
        recs.sort((a, b) => b.price - a.price);
      } else if (sortBy === 'rating') {
        recs.sort((a, b) => b.rating - a.rating);
      } else if (sortBy === 'relevance') {
        recs.sort((a, b) => {
          const scoreA = 'matchScore' in a ? (a as RecommendedProduct).matchScore : 0;
          const scoreB = 'matchScore' in b ? (b as RecommendedProduct).matchScore : 0;
          return scoreB - scoreA;
        });
      }

      return recs;
    }

    // Default catalog view
    let list = [...PRODUCTS];

    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (sortBy === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating' || sortBy === 'relevance') {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [recommendationResult, activeCategory, sortBy]);

  // Non-recommended remaining catalog items (for curiosity / browsing when AI is active)
  const remainingCatalog = useMemo(() => {
    if (!recommendationResult) return [];
    const recommendedIds = new Set(recommendationResult.recommendedProducts.map(p => p.id));
    return PRODUCTS.filter(p => !recommendedIds.has(p.id));
  }, [recommendationResult]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-slate-950 font-bold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-bounce">
          <ShoppingBag className="w-4 h-4" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        settings={settings}
        onOpenSettings={() => setIsSettingsOpen(true)}
        cartCount={cart.length}
        totalProducts={PRODUCTS.length}
        hasActiveRecommendation={Boolean(recommendationResult)}
        onResetRecommendation={handleResetRecommendation}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        
        {/* Hero Section with AI Search Input */}
        <HeroSearchBar
          onSearch={handleSearch}
          isLoading={isLoading}
          activeQuery={activeQuery}
          onClear={handleResetRecommendation}
        />

        {/* Error Notification */}
        {errorMessage && (
          <div className="max-w-3xl mx-auto mb-8 p-4 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-200 text-sm flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
            <div className="flex-1">{errorMessage}</div>
            <button
              onClick={() => setErrorMessage(null)}
              className="text-xs underline text-rose-300 hover:text-white"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Loading Skeleton */}
        {isLoading && <LoadingSkeleton />}

        {/* AI Recommendation Insights Banner */}
        {!isLoading && recommendationResult && (
          <AiInsightsBanner
            result={recommendationResult}
            onReset={handleResetRecommendation}
          />
        )}

        {/* Catalog Filter Controls */}
        {!isLoading && (
          <CatalogControls
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            sortBy={sortBy}
            onSortChange={setSortBy}
            hasActiveRecommendation={Boolean(recommendationResult)}
            totalDisplayed={displayedProducts.length}
          />
        )}

        {/* Main Product Grid */}
        {!isLoading && (
          <div>
            {displayedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {displayedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={setSelectedProduct}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 px-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                <Layers className="w-10 h-10 text-slate-600 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">No products match this category filter</h3>
                <p className="text-xs text-slate-400 mb-4">Try selecting "All Products" to view your AI recommendations.</p>
                <button
                  onClick={() => setActiveCategory('all')}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition"
                >
                  View All Recommendations
                </button>
              </div>
            )}
          </div>
        )}

        {/* Complementary Catalog Section when AI filter is active */}
        {!isLoading && recommendationResult && remainingCatalog.length > 0 && (
          <section className="mt-16 pt-12 border-t border-slate-800/80">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>Explore Other Products in Catalog</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-400 font-normal">
                    {remainingCatalog.length} more
                  </span>
                </h2>
                <p className="text-xs text-slate-400">
                  Products outside your current AI filter criteria
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 opacity-75 hover:opacity-100 transition-opacity">
              {remainingCatalog.slice(0, 4).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelect={setSelectedProduct}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </section>
        )}

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="font-semibold text-slate-200">AI Engineer Assessment</span>
            <span>— AI-Powered Product Recommendation System</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>React • TypeScript • Tailwind CSS • OpenAI / Gemini API</span>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <ApiKeyModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        settings={settings}
        onSave={handleSaveSettings}
      />

      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

    </div>
  );
}

export default App;
