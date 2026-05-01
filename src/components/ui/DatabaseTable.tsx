import React from 'react';
import type { DatabaseTable as ITable } from '../../types/blueprint';
import { GlassCard } from './GlassCard';
import { Key } from 'lucide-react';

interface DatabaseTableProps {
  table: ITable;
}

export const DatabaseTable: React.FC<DatabaseTableProps> = ({ table }) => {
  return (
    <GlassCard className="p-0 overflow-hidden border-cyan-500/20">
      <div className="bg-white/5 border-b border-white/10 px-6 py-5 flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
        <h3 className="font-mono text-cyan-50 text-lg font-bold tracking-wide">
          {table.name}
        </h3>
      </div>
      <div className="divide-y divide-white/5">
        {table.fields.map((col, idx) => (
          <div key={idx} className="flex items-center justify-between px-6 py-4 hover:bg-white/[0.03] transition-colors">
            <div className="flex items-center gap-3">
              <span className="text-base text-slate-100 font-mono tracking-tight">{col.name}</span>
              {col.required && (
                <Key className="w-4 h-4 text-yellow-500 drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
              )}
            </div>
            <span className="text-sm text-purple-300 font-mono font-semibold bg-purple-500/15 px-3 py-1 rounded-md border border-purple-500/20">
              {col.type}
            </span>
          </div>
        ))}
        {table.fields.length === 0 && (
          <div className="px-6 py-5 text-base text-slate-500 italic">
            No fields defined.
          </div>
        )}
      </div>
    </GlassCard>
  );
};
