import React from 'react';
import { X, Star, Check, Sparkles, Shield, Truck, RotateCcw, ExternalLink, Bookmark, BookmarkCheck } from 'lucide-react';
import { Product, RecommendedProduct, formatINR, getAmazonSearchUrl, getFlipkartSearchUrl } from '../types';

interface ProductDetailsModalProps {
  product: (Product | RecommendedProduct) | null;
  onClose: () => void;
  isShortlisted?: boolean;
  onToggleShortlist: (product: Product) => void;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  onClose,
  isShortlisted = false,
  onToggleShortlist
}) => {
  if (!product) return null;

  const isRecommended = 'recommendationReason' in product;
  const recProduct = isRecommended ? (product as RecommendedProduct) : null;

  const amazonUrl = getAmazonSearchUrl(product.name);
  const flipkartUrl = getFlipkartSearchUrl(product.name);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {product.category}
            </span>
            <span className="text-xs text-slate-400 font-medium">{product.brand}</span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Image */}
            <div className="rounded-xl overflow-hidden aspect-square bg-slate-950 relative border border-slate-800">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              {isRecommended && recProduct && (
                <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-emerald-500/90 text-slate-950 text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  {recProduct.matchScore}% AI Match
                </div>
              )}
            </div>

            {/* Info Summary */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-white">{product.name}</h2>
              
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="ml-1 font-bold">{product.rating}</span>
                </div>
                <span className="text-slate-500">|</span>
                <span className="text-slate-400">{product.reviewsCount.toLocaleString()} customer reviews</span>
              </div>

              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-2xl font-black text-white">{formatINR(product.price)}</span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-500 line-through">
                    {formatINR(product.originalPrice)}
                  </span>
                )}
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Available in Stock
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {product.description}
              </p>

              {/* AI Recommendation Reason */}
              {isRecommended && recProduct && (
                <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-400 mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>AI Reasoning for You:</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed text-[12px]">
                    {recProduct.recommendationReason}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* BuyHatke-Style Store Comparison & Direct Purchase Section */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Where to Buy & Check Deals</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                    BuyHatke Style
                  </span>
                </h4>
                <p className="text-xs text-slate-400">
                  Compare prices and grab the best active discounts on top Indian retailers:
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* Amazon India Card */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-amber-500/30 flex flex-col justify-between gap-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-amber-400">Amazon India</span>
                    <span className="text-[10px] bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/20">
                      Prime Eligible
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Verified sellers, customer reviews, and fast Prime delivery.
                  </p>
                </div>

                <a
                  href={amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition shadow-md shadow-amber-500/20"
                >
                  <span>Buy on Amazon</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Flipkart Card */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-blue-500/30 flex flex-col justify-between gap-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sm text-blue-400">Flipkart</span>
                    <span className="text-[10px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded border border-blue-500/20">
                      SuperCoin Offers
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Bank card EMI offers, Flipkart Assured delivery, and exchange deals.
                  </p>
                </div>

                <a
                  href={flipkartUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg bg-blue-500 hover:bg-blue-400 text-white font-bold text-xs transition shadow-md shadow-blue-500/20"
                >
                  <span>Buy on Flipkart</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="text-[11px] text-slate-500 flex items-center gap-1.5 pt-1">
              <span>💡</span>
              <span>Pro Tip: Check both stores for bank card discounts (HDFC, ICICI, SBI) and coupon codes before purchasing.</span>
            </div>
          </div>

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Key Highlights</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-slate-800/40 border border-slate-800">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Specs */}
          {product.specs && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Technical Specifications</h4>
              <div className="rounded-xl border border-slate-800 overflow-hidden divide-y divide-slate-800 text-xs">
                {Object.entries(product.specs).map(([label, val]) => (
                  <div key={label} className="grid grid-cols-3 p-2.5 bg-slate-900/40">
                    <span className="text-slate-400 font-medium">{label}</span>
                    <span className="col-span-2 text-slate-200">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Guarantee Badges */}
          <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] text-slate-400 border-t border-slate-800">
            <div className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-emerald-400" />
              <span>Fast Shipping</span>
            </div>
            <div className="flex items-center gap-1.5">
              <RotateCcw className="w-4 h-4 text-cyan-400" />
              <span>Hassle-Free Returns</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-purple-400" />
              <span>Genuine Warranty</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-between gap-3">
          <button
            onClick={() => onToggleShortlist(product)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border transition ${
              isShortlisted
                ? 'bg-rose-500/20 border-rose-500/40 text-rose-300 hover:bg-rose-500/30'
                : 'bg-slate-800 border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700'
            }`}
          >
            {isShortlisted ? <BookmarkCheck className="w-4 h-4 text-rose-400" /> : <Bookmark className="w-4 h-4" />}
            <span>{isShortlisted ? 'Saved to Shortlist' : 'Save for Later'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:bg-slate-800 transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
