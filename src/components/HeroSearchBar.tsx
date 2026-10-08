import React, { useState } from 'react';
import { Sparkles, Search, X, Loader2, ArrowRight } from 'lucide-react';
import { SAMPLE_QUERIES } from '../data/products';

interface HeroSearchBarProps {
  onSearch: (query: string) => void;
  isLoading: boolean;
  activeQuery: string;
  onClear: () => void;
}

export const HeroSearchBar: React.FC<HeroSearchBarProps> = ({
  onSearch,
  isLoading,
  activeQuery,
  onClear
}) => {
  const [inputVal, setInputVal] = useState(activeQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputVal.trim() && !isLoading) {
      onSearch(inputVal);
    }
  };

  const handleChipClick = (queryText: string) => {
    setInputVal(queryText);
    onSearch(queryText);
  };

  const handleClear = () => {
    setInputVal('');
    onClear();
  };

  return (
    <div className="relative max-w-4xl mx-auto text-center px-4 pt-10 pb-6">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium mb-4">
        <Sparkles className="w-3.5 h-3.5" />
        <span>Natural Language AI Product Filtering</span>
      </div>

      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-3">
        Find the perfect gear with{' '}
        <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
          AI Precision
        </span>
      </h1>

      <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mb-8">
        Ask for anything — musical instruments, gourmet food & snacks, phones, laptops, audio gear, or kitchen appliances in Indian Rupees (₹).
      </p>

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="relative max-w-3xl mx-auto">
        <div className="relative flex items-center rounded-2xl bg-slate-900/90 border-2 border-slate-700/80 p-2 shadow-2xl focus-within:border-emerald-500 focus-within:ring-4 focus-within:ring-emerald-500/10 transition-all">
          <div className="pl-3 pr-2 text-slate-400">
            <Search className="w-5 h-5" />
          </div>

          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="e.g. 'acoustic guitar under ₹10,000', 'specialty coffee & snacks', 'phone under 30k'..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none px-2 py-2"
            disabled={isLoading}
          />

          {inputVal && (
            <button
              type="button"
              onClick={handleClear}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition mr-2"
              title="Clear input"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <button
            type="submit"
            disabled={!inputVal.trim() || isLoading}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/25 disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="hidden sm:inline">Analyzing...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Recommend</span>
                <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Quick Suggestion Chips */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs">
        <span className="text-slate-500 text-xs">Try asking:</span>
        {SAMPLE_QUERIES.map((sample, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleChipClick(sample.query)}
            disabled={isLoading}
            className="px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1.5 active:scale-95"
          >
            {sample.label}
          </button>
        ))}
      </div>
    </div>
  );
};
