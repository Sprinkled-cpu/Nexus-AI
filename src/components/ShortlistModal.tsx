import React from 'react';
import { X, Bookmark, ExternalLink, Trash2, Sparkles, Star } from 'lucide-react';
import { Product, RecommendedProduct, formatINR, getAmazonSearchUrl, getFlipkartSearchUrl } from '../types';

interface ShortlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  shortlist: Product[];
  onRemove: (productId: string) => void;
  onClearAll: () => void;
  onSelectProduct: (product: Product) => void;
}

export const ShortlistModal: React.FC<ShortlistModalProps> = ({
  isOpen,
  onClose,
  shortlist,
  onRemove,
  onClearAll,
  onSelectProduct
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400">
              <Bookmark className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-semibold text-base text-white">Your Shortlisted Products</h3>
              <p className="text-xs text-slate-400">Compare and buy on Amazon or Flipkart</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {shortlist.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-slate-400 hover:text-rose-400 transition px-2 py-1"
              >
                Clear All
              </button>
            )}
            <button 
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* List Body */}
        <div className="overflow-y-auto p-4 space-y-3 flex-1">
          {shortlist.length === 0 ? (
            <div className="text-center py-16 px-4">
              <Bookmark className="w-10 h-10 text-slate-700 mx-auto mb-3" />
              <h4 className="font-bold text-white text-base mb-1">Your shortlist is empty</h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto mb-4">
                Click the bookmark icon on any recommended product to save and compare deals.
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition"
              >
                Explore Recommendations
              </button>
            </div>
          ) : (
            shortlist.map((item) => {
              const amazonUrl = getAmazonSearchUrl(item.name);
              const flipkartUrl = getFlipkartSearchUrl(item.name);
              const isRec = 'recommendationReason' in item;
              const recItem = isRec ? (item as RecommendedProduct) : null;

              return (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  {/* Thumbnail & Info */}
                  <div 
                    onClick={() => {
                      onSelectProduct(item);
                      onClose();
                    }}
                    className="flex items-center gap-3 cursor-pointer flex-1"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover shrink-0 border border-slate-800"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] uppercase font-bold text-slate-400">{item.brand}</span>
                        {isRec && recItem && (
                          <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-1.5 py-0.2 rounded border border-emerald-500/20 flex items-center gap-1 font-semibold">
                            <Sparkles className="w-2.5 h-2.5" />
                            {recItem.matchScore}% Match
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-semibold text-white line-clamp-1 hover:text-emerald-400 transition">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-bold text-emerald-400">{formatINR(item.price)}</span>
                        <div className="flex items-center text-amber-400 text-xs">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <span className="ml-1 text-[11px] text-slate-300">{item.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions: Buy on Amazon / Flipkart + Remove */}
                  <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
                    <a
                      href={amazonUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-semibold transition"
                      title="Buy on Amazon"
                    >
                      <span>Amazon</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <a
                      href={flipkartUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-blue-500/15 hover:bg-blue-500/25 border border-blue-500/40 text-blue-300 text-xs font-semibold transition"
                      title="Buy on Flipkart"
                    >
                      <span>Flipkart</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <button
                      onClick={() => onRemove(item.id)}
                      className="p-2 text-slate-500 hover:text-rose-400 hover:bg-slate-800 rounded-lg transition"
                      title="Remove from shortlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-800 bg-slate-900/90 text-center text-xs text-slate-500">
          NexusAI Recommender connects you directly to live stores for best deals and verified stock.
        </div>
      </div>
    </div>
  );
};
