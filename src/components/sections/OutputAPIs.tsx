import React from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { APIEndpointCard } from '../ui/APIEndpointCard';
import { useStore } from '../../store/useStore';

export const OutputAPIs: React.FC = () => {
  const apis = useStore((state) => state.blueprint?.apis);

  if (!apis || apis.length === 0) return null;

  return (
    <SectionWrapper
      title="API Architecture"
      description="RESTful endpoints required for the frontend-backend communication."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {apis.map((api, idx) => (
          <APIEndpointCard
            key={idx}
            method={api.method}
            path={api.path}
            description={api.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};
