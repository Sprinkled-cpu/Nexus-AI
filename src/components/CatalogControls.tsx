import React from 'react';
import { Filter, SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { ProductCategory } from '../types';

interface CatalogControlsProps {
  categories: { id: ProductCategory | 'all'; label: string }[];
  activeCategory: ProductCategory | 'all';
  onCategoryChange: (cat: ProductCategory | 'all') => void;
  sortBy: 'relevance' | 'price-asc' | 'price-desc' | 'rating';
  onSortChange: (sort: 'relevance' | 'price-asc' | 'price-desc' | 'rating') => void;
  hasActiveRecommendation: boolean;
  totalDisplayed: number;
}

export const CatalogControls: React.FC<CatalogControlsProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
  hasActiveRecommendation,
  totalDisplayed
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
      
      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none text-xs">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`px-3.5 py-1.5 rounded-full font-medium whitespace-nowrap transition-all ${
              activeCategory === cat.id
                ? 'bg-emerald-500 text-slate-950 font-semibold shadow-md shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Sorting & Count */}
      <div className="flex items-center justify-between md:justify-end gap-3 text-xs text-slate-400">
        <span className="text-slate-400">
          Showing <strong className="text-white font-semibold">{totalDisplayed}</strong> {totalDisplayed === 1 ? 'item' : 'items'}
        </span>

        <div className="flex items-center gap-2">
          <ArrowUpDown className="w-3.5 h-3.5 text-slate-500" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as any)}
            className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-emerald-500 text-xs"
          >
            {hasActiveRecommendation && (
              <option value="relevance">Sort: AI Match Score</option>
            )}
            <option value="rating">Sort: Highest Rated</option>
            <option value="price-asc">Sort: Price (Low to High)</option>
            <option value="price-desc">Sort: Price (High to Low)</option>
          </select>
        </div>
      </div>

    </div>
  );
};
