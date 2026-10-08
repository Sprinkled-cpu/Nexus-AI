import React from 'react';
import { Sparkles, Brain } from 'lucide-react';

export const LoadingSkeleton: React.FC = () => {
  return (
    <div className="space-y-6 animate-pulse">
      {/* Banner Skeleton */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4">
        <div className="p-3 rounded-xl bg-slate-800 text-emerald-400">
          <Brain className="w-6 h-6 animate-spin" />
        </div>
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-slate-800 rounded w-1/3"></div>
          <div className="h-3 bg-slate-800/60 rounded w-2/3"></div>
        </div>
      </div>

      {/* Grid Cards Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="rounded-2xl bg-slate-900 border border-slate-800 p-4 space-y-4">
            <div className="aspect-[4/3] bg-slate-800/80 rounded-xl"></div>
            <div className="h-4 bg-slate-800 rounded w-3/4"></div>
            <div className="h-12 bg-slate-800/50 rounded-lg"></div>
            <div className="h-3 bg-slate-800/60 rounded w-1/2"></div>
            <div className="flex justify-between items-center pt-2 border-t border-slate-800">
              <div className="h-6 bg-slate-800 rounded w-16"></div>
              <div className="h-8 bg-slate-800 rounded w-20"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
