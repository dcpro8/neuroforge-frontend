import React from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Timeline } from '../ui/Timeline';
import { useStore } from '../../store/useStore';

export const OutputRoadmap: React.FC = () => {
  const roadmap = useStore((state) => state.blueprint?.roadmap);

  if (!roadmap || roadmap.length === 0) return null;

  return (
    <SectionWrapper
      title="Implementation Roadmap"
      description="Suggested phases and tasks to bring your project from idea to reality."
    >
      <Timeline phases={roadmap} />
    </SectionWrapper>
  );
};
