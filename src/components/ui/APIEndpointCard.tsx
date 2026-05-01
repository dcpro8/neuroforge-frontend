import React from 'react';
import type { HttpMethod } from '../../types/blueprint';
import { GlassCard } from './GlassCard';
import { cn } from '../../utils/cn';

interface APIEndpointCardProps {
  method: HttpMethod;
  path: string;
  description: string;
}

export const APIEndpointCard: React.FC<APIEndpointCardProps> = ({ method, path, description }) => {
  const getMethodColor = (m: HttpMethod) => {
    switch (m) {
      case 'GET':
        return 'text-blue-400 bg-blue-500/10 border-blue-500/30';
      case 'POST':
        return 'text-green-400 bg-green-500/10 border-green-500/30';
      case 'PUT':
      case 'PATCH':
        return 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30';
      case 'DELETE':
        return 'text-red-400 bg-red-500/10 border-red-500/30';
      default:
        return 'text-slate-400 bg-slate-500/10 border-slate-500/30';
    }
  };

  return (
    <GlassCard className="group flex flex-col gap-3 p-4">
      <div className="flex items-center gap-3">
        <span
          className={cn(
            'px-2.5 py-1 rounded text-xs font-bold font-mono tracking-wider border',
            getMethodColor(method)
          )}
        >
          {method}
        </span>
        <code className="text-sm text-cyan-50 font-mono tracking-tight bg-white/5 px-2 py-1 rounded">
          {path}
        </code>
      </div>
      <p className="text-sm text-slate-400 ml-1">{description}</p>
    </GlassCard>
  );
};
