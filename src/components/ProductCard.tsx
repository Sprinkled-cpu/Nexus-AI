import React from 'react';
import { Star, Sparkles, Check, Info, Award, ExternalLink, Bookmark, BookmarkCheck } from 'lucide-react';
import { Product, RecommendedProduct, formatINR, getAmazonSearchUrl, getFlipkartSearchUrl } from '../types';

interface ProductCardProps {
  product: Product | RecommendedProduct;
  onSelect: (product: Product) => void;
  isShortlisted?: boolean;
  onToggleShortlist: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelect,
  isShortlisted = false,
  onToggleShortlist
}) => {
  const isRecommended = 'recommendationReason' in product;
  const recProduct = isRecommended ? (product as RecommendedProduct) : null;
  const isTopPick = recProduct?.isTopPick;

  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const amazonUrl = getAmazonSearchUrl(product.name);
  const flipkartUrl = getFlipkartSearchUrl(product.name);

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

      {/* Bookmark / Shortlist button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onToggleShortlist(product);
        }}
        className={`absolute top-3 right-3 z-20 p-2 rounded-xl backdrop-blur-md transition shadow ${
          isShortlisted 
            ? 'bg-rose-500 text-white' 
            : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60'
        }`}
        title={isShortlisted ? 'Remove from Shortlist' : 'Save / Bookmark Product'}
      >
        {isShortlisted ? <BookmarkCheck className="w-4 h-4" /> : <Bookmark className="w-4 h-4" />}
      </button>

      {/* Image & Badges */}
      <div 
        onClick={() => onSelect(product)} 
        className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950 cursor-pointer"
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        {/* Category & Discount Badges */}
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

        {/* Price & Action Section */}
        <div className="pt-3 border-t border-slate-800 flex flex-col gap-3 mt-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-extrabold text-white">{formatINR(product.price)}</span>
              {product.originalPrice && (
                <span className="text-xs text-slate-500 line-through">
                  {formatINR(product.originalPrice)}
                </span>
              )}
            </div>

            <button
              onClick={() => onSelect(product)}
              className="text-xs text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Compare Specs</span>
            </button>
          </div>

          {/* Buy Links (Amazon & Flipkart) - BuyHatke Style */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            <a
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 hover:text-amber-200 text-xs font-semibold transition group/btn"
              title="Check price & buy on Amazon India"
            >
              <span className="font-bold">Amazon</span>
              <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={flipkartUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-blue-500/15 hover:bg-blue-500/25 border border-blue-500/40 text-blue-300 hover:text-blue-200 text-xs font-semibold transition group/btn"
              title="Check deals & buy on Flipkart"
            >
              <span className="font-bold">Flipkart</span>
              <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
