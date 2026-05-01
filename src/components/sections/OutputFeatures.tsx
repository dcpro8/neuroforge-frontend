import React from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { useStore } from '../../store/useStore';

export const OutputFeatures: React.FC = () => {
  const features = useStore((state) => state.blueprint?.features);

  if (!features || features.length === 0) return null;

  return (
    <SectionWrapper
      title="Core Features"
      description="The essential functionality and MVP capabilities of your application."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, idx) => (
          <GlassCard key={idx} className="flex flex-col h-full">
            <div className="flex justify-between items-start mb-4 gap-4">
              <h3 className="text-lg font-semibold text-white leading-tight">
                {feature.name}
              </h3>
              <Badge priority={feature.priority}>{feature.priority}</Badge>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed flex-grow">
              {feature.description}
            </p>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
};
