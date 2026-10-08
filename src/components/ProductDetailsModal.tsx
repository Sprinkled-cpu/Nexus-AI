import React from 'react';
import { X, Star, Check, Sparkles, ShoppingCart, Shield, Truck, RotateCcw } from 'lucide-react';
import { Product, RecommendedProduct } from '../types';

interface ProductDetailsModalProps {
  product: (Product | RecommendedProduct) | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  onClose,
  onAddToCart
}) => {
  if (!product) return null;

  const isRecommended = 'recommendationReason' in product;
  const recProduct = isRecommended ? (product as RecommendedProduct) : null;

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
                <span className="text-slate-400">{product.reviewsCount} customer reviews</span>
              </div>

              <div className="flex items-baseline gap-3 pt-1">
                <span className="text-2xl font-black text-white">${product.price}</span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  In Stock
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

          {/* Key Features */}
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
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-purple-400" />
              <span>2-Year Warranty</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900/80 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:bg-slate-800 transition"
          >
            Close
          </button>
          <button
            onClick={() => {
              onAddToCart(product);
              onClose();
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition shadow-lg shadow-emerald-500/20"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Add to Cart - ${product.price}</span>
          </button>
        </div>

      </div>
    </div>
  );
};
