import { Bot, Sparkles, Tag, DollarSign, Layers, RotateCcw, CheckCircle } from 'lucide-react';
import { AIRecommendationResponse, formatINR } from '../types';

interface AiInsightsBannerProps {
  result: AIRecommendationResponse;
  onReset: () => void;
}

export const AiInsightsBanner: React.FC<AiInsightsBannerProps> = ({
  result,
  onReset
}) => {
  const { summary, extractedCriteria, providerUsed, rawLatencyMs, recommendedProducts, query } = result;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border border-emerald-500/30 p-5 sm:p-6 mb-8 shadow-xl">
      {/* Decorative background glow */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-4">
        
        {/* Left: AI Response & Summary */}
        <div className="space-y-3 flex-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <Bot className="w-4 h-4" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
              AI Analysis & Recommendations
            </span>

            {/* Provider Pill */}
            <span className="ml-auto md:ml-2 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700 flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              {providerUsed === 'openai' && 'OpenAI GPT-4o-mini'}
              {providerUsed === 'gemini' && 'Google Gemini Flash'}
              {providerUsed === 'groq' && 'Groq LLaMA 3.3'}
              {providerUsed === 'smart-heuristic' && 'Smart Heuristic Engine'}
              {rawLatencyMs && ` (${rawLatencyMs}ms)`}
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
            "{summary}"
          </p>

          {/* Extracted Criteria Badges */}
          <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
            <span className="text-slate-400 font-normal">Parsed Criteria:</span>

            {extractedCriteria.category && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-200">
                <Layers className="w-3 h-3 text-cyan-400" />
                Category: <span className="font-semibold text-white capitalize">{extractedCriteria.category}</span>
              </span>
            )}

            {extractedCriteria.budgetMax && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-200">
                <DollarSign className="w-3 h-3 text-emerald-400" />
                Max Budget: <span className="font-semibold text-emerald-400">{formatINR(extractedCriteria.budgetMax)}</span>
              </span>
            )}

            {extractedCriteria.desiredFeatures && extractedCriteria.desiredFeatures.map((feat, idx) => (
              <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-slate-200 capitalize">
                <Tag className="w-3 h-3 text-purple-400" />
                {feat}
              </span>
            ))}

            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-medium">
              <CheckCircle className="w-3 h-3 text-emerald-400" />
              {recommendedProducts.length} tailored matches
            </span>
          </div>
        </div>

        {/* Right Action */}
        <div className="shrink-0 flex items-center md:flex-col justify-end gap-2 pt-2 md:pt-0">
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Show Full Catalog</span>
          </button>
        </div>

      </div>
    </div>
  );
};
