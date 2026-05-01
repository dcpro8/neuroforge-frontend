import React from 'react';
import type { RoadmapPhase } from '../../types/blueprint';
import { GlassCard } from './GlassCard';
import { Target, CheckCircle2 } from 'lucide-react';

interface TimelineProps {
  phases: RoadmapPhase[];
}

export const Timeline: React.FC<TimelineProps> = ({ phases }) => {
  if (!phases || phases.length === 0) {
    return <div className="text-slate-500 italic">No roadmap phases planned.</div>;
  }

  return (
    <div className="relative border-l-2 border-cyan-500/30 ml-3 space-y-8 pb-4">
      {phases.map((phaseItem, index) => (
        <div key={index} className="relative pl-8">
          <div className="absolute -left-[17px] top-2 h-8 w-8 rounded-full bg-black border-2 border-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.5)]">
            <Target className="w-4 h-4 text-cyan-400" />
          </div>
          
          <GlassCard className="p-5" hoverEffect={false}>
            <div className="flex items-baseline gap-3 mb-4">
              <h3 className="text-lg font-semibold text-white">
                {phaseItem.phase}
              </h3>
            </div>
            
            <ul className="space-y-2">
              {phaseItem.items.map((task, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500/70 mt-0.5 shrink-0" />
                  <span>{task}</span>
                </li>
              ))}
              {phaseItem.items.length === 0 && (
                <li className="text-sm text-slate-500 italic pb-1">No specific tasks defined.</li>
              )}
            </ul>
          </GlassCard>
        </div>
      ))}
    </div>
  );
};
