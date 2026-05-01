import React from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { GlassCard } from '../ui/GlassCard';
import { useStore } from '../../store/useStore';
import { LayoutTemplate } from 'lucide-react';

export const OutputUI: React.FC = () => {
  const ui = useStore((state) => state.blueprint?.ui);

  if (!ui || ui.length === 0) return null;

  return (
    <SectionWrapper
      title="User Interface"
      description="Screen to component mapping for maximum reusability."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ui.map((screen, idx) => (
          <GlassCard key={idx} className="group hover:border-purple-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:scale-110 transition-transform">
                <LayoutTemplate className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">{screen.name}</h3>
            </div>
            
            {screen.description && (
              <p className="text-sm text-slate-400 mb-4">{screen.description}</p>
            )}

            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">Components</h4>
              {screen.components.map((component, cIdx) => (
                <div key={cIdx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  <span className="text-sm font-mono text-slate-300">
                    {'<'}{component.replace(/</g, '').replace(/>/g, '')} {'/>'}
                  </span>
                </div>
              ))}
              {screen.components.length === 0 && (
                <div className="text-sm text-slate-500 italic">No specific components listed.</div>
              )}
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
};
