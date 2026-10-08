import React, { useState } from 'react';
import { X, Key, ShieldCheck, Cpu, ExternalLink, Check, AlertCircle } from 'lucide-react';
import { AISettings, AIProvider } from '../types';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  settings: AISettings;
  onSave: (newSettings: AISettings) => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({
  isOpen,
  onClose,
  settings,
  onSave
}) => {
  const [provider, setProvider] = useState<AIProvider>(settings.provider);
  const [openaiKey, setOpenaiKey] = useState(settings.openaiKey);
  const [geminiKey, setGeminiKey] = useState(settings.geminiKey);
  const [groqKey, setGroqKey] = useState(settings.groqKey);
  const [showSavedFeedback, setShowSavedFeedback] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({
      provider,
      openaiKey,
      geminiKey,
      groqKey
    });
    setShowSavedFeedback(true);
    setTimeout(() => {
      setShowSavedFeedback(false);
      onClose();
    }, 600);
  };

  const handleClear = () => {
    setOpenaiKey('');
    setGeminiKey('');
    setGroqKey('');
    setProvider('smart-heuristic');
    onSave({
      provider: 'smart-heuristic',
      openaiKey: '',
      geminiKey: '',
      groqKey: ''
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-6 text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-white">AI Model & API Configuration</h3>
              <p className="text-xs text-slate-400">Choose your AI recommendation engine</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Security badge */}
        <div className="my-4 p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 flex items-start gap-3 text-xs text-emerald-200">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong>Client-Side & Zero-Log:</strong> Keys are stored only in your local browser storage (<code className="text-emerald-300">localStorage</code>) and sent exclusively to the selected AI provider.
          </div>
        </div>

        {/* Mode selector */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1.5">
              Select Recommendation Engine
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button
                type="button"
                onClick={() => setProvider('openai')}
                className={`p-3 rounded-xl border text-left transition ${
                  provider === 'openai' 
                    ? 'border-emerald-500 bg-emerald-500/10 text-white font-medium'
                    : 'border-slate-800 bg-slate-800/50 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="font-medium text-slate-200">OpenAI GPT-4o-mini</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Industry standard JSON mode</div>
              </button>

              <button
                type="button"
                onClick={() => setProvider('gemini')}
                className={`p-3 rounded-xl border text-left transition ${
                  provider === 'gemini' 
                    ? 'border-emerald-500 bg-emerald-500/10 text-white font-medium'
                    : 'border-slate-800 bg-slate-800/50 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="font-medium text-slate-200">Google Gemini Flash</div>
                <div className="text-[10px] text-slate-400 mt-0.5">High-speed reasoning</div>
              </button>

              <button
                type="button"
                onClick={() => setProvider('groq')}
                className={`p-3 rounded-xl border text-left transition ${
                  provider === 'groq' 
                    ? 'border-emerald-500 bg-emerald-500/10 text-white font-medium'
                    : 'border-slate-800 bg-slate-800/50 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="font-medium text-slate-200">Groq LLaMA 3.3</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Sub-second inference</div>
              </button>

              <button
                type="button"
                onClick={() => setProvider('smart-heuristic')}
                className={`p-3 rounded-xl border text-left transition ${
                  provider === 'smart-heuristic' 
                    ? 'border-emerald-500 bg-emerald-500/10 text-white font-medium'
                    : 'border-slate-800 bg-slate-800/50 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="font-medium text-slate-200">Smart AI Heuristic (Built-in)</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Works without any API key</div>
              </button>
            </div>
          </div>

          {/* Conditional Key Input */}
          {provider === 'openai' && (
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-medium text-slate-300">OpenAI API Key</label>
                <a 
                  href="https://platform.openai.com/api-keys" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[11px] text-emerald-400 hover:underline flex items-center gap-1"
                >
                  Get OpenAI Key <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <input
                type="password"
                placeholder="sk-proj-..."
                value={openaiKey}
                onChange={(e) => setOpenaiKey(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-emerald-500 focus:outline-none text-sm text-white placeholder-slate-500"
              />
            </div>
          )}

          {provider === 'gemini' && (
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-medium text-slate-300">Google Gemini API Key</label>
                <a 
                  href="https://aistudio.google.com/app/apikey" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[11px] text-emerald-400 hover:underline flex items-center gap-1"
                >
                  Get Gemini Key (Free) <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <input
                type="password"
                placeholder="AIzaSy..."
                value={geminiKey}
                onChange={(e) => setGeminiKey(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-emerald-500 focus:outline-none text-sm text-white placeholder-slate-500"
              />
            </div>
          )}

          {provider === 'groq' && (
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-xs font-medium text-slate-300">Groq API Key</label>
                <a 
                  href="https://console.groq.com/keys" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[11px] text-emerald-400 hover:underline flex items-center gap-1"
                >
                  Get Groq Key <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <input
                type="password"
                placeholder="gsk_..."
                value={groqKey}
                onChange={(e) => setGroqKey(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800/80 border border-slate-700 focus:border-emerald-500 focus:outline-none text-sm text-white placeholder-slate-500"
              />
            </div>
          )}

          {provider === 'smart-heuristic' && (
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 space-y-1">
              <p className="font-medium text-white flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Zero Configuration Required
              </p>
              <p className="text-slate-400">
                The smart NLP heuristic engine matches user queries against product specifications, detects budget ceilings, and outputs personalized reasoning without needing third-party credits.
              </p>
            </div>
          )}
        </div>

        {/* Modal actions */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <button
            type="button"
            onClick={handleClear}
            className="text-xs text-slate-400 hover:text-rose-400 transition"
          >
            Clear Keys
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-slate-300 hover:bg-slate-800 transition"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="px-5 py-2 rounded-xl text-xs font-semibold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition flex items-center gap-1.5 shadow-lg shadow-emerald-500/20"
            >
              {showSavedFeedback ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Saved!
                </>
              ) : (
                'Save Settings'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
