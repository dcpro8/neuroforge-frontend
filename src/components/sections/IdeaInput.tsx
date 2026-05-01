import React, { useEffect, useRef } from 'react';
import { useStore } from '../../store/useStore';
import { useGenerate } from '../../hooks/useGenerate';
import { InputField } from '../ui/InputField';
import { GlowButton } from '../ui/GlowButton';
import { Sparkles } from 'lucide-react';

export const IdeaInput: React.FC = () => {
  const { idea, setIdea, loading, error, setError, blueprint } = useStore();
  const { handleGenerate } = useGenerate();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-focus input on mount if no blueprint exists
  useEffect(() => {
    if (!blueprint && inputRef.current) {
      inputRef.current.focus();
    }
  }, [blueprint]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIdea(e.target.value);
    // Clear error on user typing
    if (error) setError(null);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleGenerate();
  };

  // If there's already a blueprint, we might still want to show a compact input,
  // but for the premium feel, the initial view is large and centered.
  const isGenerated = !!blueprint;

  return (
    <div className={`w-full max-w-5xl mx-auto transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${isGenerated ? 'pt-8 pb-12' : 'pt-[18vh] pb-[10vh]'}`}>
      <div className="text-center mb-8 md:mb-12 relative">
        {!isGenerated && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none z-0" />
        )}
        <h1 className="relative z-10 text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 mb-6 pb-5">
          NeuroForge
        </h1>
        <p className="relative z-10 text-base sm:text-lg md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto px-4 mt-4 leading-relaxed">
          Describe your application idea, and our AI architecture engine will forge a complete, production-ready blueprint in seconds.
        </p>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col items-center gap-8 relative z-10 w-full px-4 sm:px-0">
        <div className="w-full relative group max-w-4xl mx-auto">
          {!isGenerated && (
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-emerald-500 opacity-20 blur-xl group-hover:opacity-40 transition duration-1000 animate-pulse" />
          )}
          <InputField
            ref={inputRef}
            value={idea}
            onChange={onChange}
            disabled={loading}
            placeholder="e.g. A SaaS platform for freelance developers to manage invoices, time tracking, and client contracts..."
            error={error}
            className={`text-lg sm:text-xl md:text-2xl p-6 md:p-8 font-light ${isGenerated ? 'rounded-2xl' : 'rounded-3xl shadow-2xl shadow-black'}`}
            rows={isGenerated ? 2 : 4}
          />
        </div>

        <GlowButton
          type="submit"
          isLoading={loading}
          disabled={idea.trim().length === 0}
          className={`${isGenerated ? 'px-6 py-3 text-lg' : 'px-10 py-5 text-xl rounded-2xl'} w-full sm:w-auto min-w-[240px]`}
        >
          <Sparkles className="w-6 h-6 mr-2" />
          {loading ? 'Forging Architecture...' : 'Generate Blueprint'}
        </GlowButton>
      </form>
    </div>
  );
};
