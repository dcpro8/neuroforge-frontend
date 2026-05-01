import React from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { DatabaseTable } from '../ui/DatabaseTable';
import { useStore } from '../../store/useStore';

export const OutputDatabase: React.FC = () => {
  const database = useStore((state) => state.blueprint?.database);

  if (!database || database.length === 0) return null;

  return (
    <SectionWrapper
      title="Database Schema"
      description="Suggested data models and relationships to support the core features."
    >
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {database.map((table, idx) => (
          <DatabaseTable key={idx} table={table} />
        ))}
      </div>
    </SectionWrapper>
  );
};
