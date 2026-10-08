import React from 'react';
import { Sparkles, Key, Bookmark } from 'lucide-react';
import { AISettings } from '../types';

interface NavbarProps {
  settings: AISettings;
  onOpenSettings: () => void;
  shortlistCount: number;
  onOpenShortlist: () => void;
  onResetRecommendation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  settings,
  onOpenSettings,
  shortlistCount,
  onOpenShortlist,
  onResetRecommendation
}) => {
  const hasKey = Boolean(settings.openaiKey || settings.geminiKey || settings.groqKey);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Brand */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={onResetRecommendation}>
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                NexusAI
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Recommender
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">AI Shopping Assistant & Deal Finder</p>
          </div>
        </div>

        {/* Center / Status */}
        <div className="hidden md:flex items-center gap-2">
          <div className="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${hasKey ? 'bg-emerald-400' : 'bg-cyan-400'}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${hasKey ? 'bg-emerald-500' : 'bg-cyan-500'}`}></span>
            </span>
            <span>
              Engine: <strong className="text-white font-medium">
                {hasKey 
                  ? (settings.openaiKey ? 'OpenAI GPT-4o-mini' : settings.geminiKey ? 'Gemini 1.5 Flash' : 'Groq LLaMA')
                  : 'Smart AI Heuristic (Built-in)'
                }
              </strong>
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          {/* Settings / API Key Button */}
          <button
            onClick={onOpenSettings}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition shadow-sm hover:border-slate-600"
            title="Configure AI API Keys (OpenAI, Gemini, Groq)"
          >
            <Key className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">AI Settings</span>
            {hasKey ? (
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            ) : (
              <span className="px-1 py-0.2 rounded text-[10px] bg-slate-700 text-slate-400">Demo</span>
            )}
          </button>

          {/* Shortlist Button (Replaces Cart) */}
          <button
            onClick={onOpenShortlist}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 hover:text-white transition text-xs font-medium"
            title="View shortlisted products"
          >
            <Bookmark className="w-4 h-4 text-rose-400" />
            <span className="hidden sm:inline">Shortlist</span>
            {shortlistCount > 0 && (
              <span className="ml-1 bg-rose-500 text-white text-[10px] font-bold rounded-full h-4 min-w-[16px] px-1 flex items-center justify-center shadow">
                {shortlistCount}
              </span>
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
