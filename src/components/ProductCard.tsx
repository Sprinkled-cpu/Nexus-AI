import { Star, Sparkles, Check, ShoppingCart, Info, Award } from 'lucide-react';
import { Product, RecommendedProduct, formatINR } from '../types';

interface ProductCardProps {
  product: Product | RecommendedProduct;
  onSelect: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  onAddToCart
}) => {
  const isRecommended = 'recommendationReason' in product;
  const recProduct = isRecommended ? (product as RecommendedProduct) : null;
  const isTopPick = recProduct?.isTopPick;

  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div 
      className={`group relative flex flex-col rounded-2xl bg-slate-900 border transition-all duration-300 hover:-translate-y-1 overflow-hidden shadow-lg ${
        isTopPick 
          ? 'border-amber-400/80 shadow-amber-400/10 ring-1 ring-amber-400/30'
          : isRecommended
            ? 'border-emerald-500/60 shadow-emerald-500/10 ring-1 ring-emerald-500/20'
            : 'border-slate-800 hover:border-slate-700 shadow-slate-950/40'
      }`}
    >
      {/* Top Banner Ribbon for Top Pick */}
      {isTopPick && (
        <div className="absolute top-0 right-0 z-20">
          <div className="bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-bl-xl shadow-md flex items-center gap-1">
            <Award className="w-3.5 h-3.5" />
            Top AI Pick
          </div>
        </div>
      )}

      {/* Image & Badges */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        {/* Category & Stock Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-slate-900/90 text-slate-300 backdrop-blur-md border border-slate-700/60">
            {product.category}
          </span>
          {discountPercent > 0 && (
            <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-rose-500 text-white w-fit shadow">
              {discountPercent}% OFF
            </span>
          )}
        </div>

        {/* Match Score Badge (if AI recommended) */}
        {isRecommended && recProduct && (
          <div className="absolute bottom-3 right-3 z-10">
            <div className={`px-2.5 py-1 rounded-lg backdrop-blur-md text-xs font-bold flex items-center gap-1.5 shadow-lg ${
              isTopPick 
                ? 'bg-amber-400/90 text-slate-950'
                : 'bg-emerald-500/90 text-slate-950'
            }`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>{recProduct.matchScore}% Match</span>
            </div>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5">
        
        {/* Brand & Rating */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
          <span className="font-semibold uppercase tracking-wider text-slate-400">{product.brand}</span>
          <div className="flex items-center gap-1 text-amber-400">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="font-bold text-slate-200">{product.rating}</span>
            <span className="text-slate-500 text-[11px]">({product.reviewsCount.toLocaleString()})</span>
          </div>
        </div>

        {/* Product Title */}
        <h3 
          onClick={() => onSelect(product)}
          className="text-base font-bold text-white group-hover:text-emerald-400 transition cursor-pointer line-clamp-1 mb-2"
        >
          {product.name}
        </h3>

        {/* AI Recommendation Reason Callout */}
        {isRecommended && recProduct && (
          <div className="my-2 p-3 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs">
            <div className="flex items-center gap-1.5 font-semibold text-emerald-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why AI Recommended This:</span>
            </div>
            <p className="text-slate-300 leading-relaxed text-[12px]">
              {recProduct.recommendationReason}
            </p>
          </div>
        )}

        {/* Description */}
        <p className="text-xs text-slate-400 line-clamp-2 mb-3">
          {product.description}
        </p>

        {/* Top 2 Features */}
        <div className="space-y-1.5 mb-4 text-xs text-slate-300 flex-1">
          {product.features.slice(0, 2).map((feat, idx) => (
            <div key={idx} className="flex items-start gap-1.5 text-[11px] text-slate-300">
              <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="line-clamp-1">{feat}</span>
            </div>
          ))}
        </div>

        {/* Price & Action Buttons */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3 mt-auto">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-extrabold text-white">{formatINR(product.price)}</span>
              {product.originalPrice && (
                <span className="text-xs text-slate-500 line-through">
                  {formatINR(product.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-400 font-medium">Free 2-day delivery</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelect(product)}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition"
              title="View Specifications"
            >
              <Info className="w-4 h-4" />
            </button>
            <button
              onClick={() => onAddToCart(product)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition shadow-md shadow-emerald-500/20 active:scale-95"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>Add</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
