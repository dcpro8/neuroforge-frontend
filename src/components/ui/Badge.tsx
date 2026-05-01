import React from 'react';
import { cn } from '../../utils/cn';
import type { Priority } from '../../types/blueprint';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'outline' | 'solid';
  priority?: Priority;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'outline',
  priority,
  className,
}) => {
  const getPriorityColor = () => {
    switch (priority) {
      case 'high':
        return 'text-red-400 border-red-500/50 bg-red-500/10 shadow-[0_0_10px_rgba(239,68,68,0.2)]';
      case 'medium':
        return 'text-yellow-400 border-yellow-500/50 bg-yellow-500/10 shadow-[0_0_10px_rgba(234,179,8,0.2)]';
      case 'low':
        return 'text-emerald-400 border-emerald-500/50 bg-emerald-500/10 shadow-[0_0_10px_rgba(16,185,129,0.2)]';
      default:
        return 'text-cyan-400 border-cyan-500/50 bg-cyan-500/10 shadow-[0_0_10px_rgba(6,182,212,0.2)]';
    }
  };

  const baseStyles = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none';

  return (
    <div
      className={cn(
        baseStyles,
        variant === 'outline' ? 'border' : 'border-transparent',
        getPriorityColor(),
        className
      )}
    >
      {children}
    </div>
  );
};
