import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';
import { Loader2 } from 'lucide-react';

interface GlowButtonProps extends Omit<HTMLMotionProps<'button'>, 'disabled'> {
  children: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
}

export const GlowButton: React.FC<GlowButtonProps> = ({
  children,
  className,
  isLoading,
  disabled,
  variant = 'primary',
  ...props
}) => {
  const baseStyles = 'relative flex items-center justify-center gap-2 overflow-hidden rounded-xl font-bold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none';
  
  const variants = {
    primary: 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500/20 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] focus:ring-cyan-500 hover:border-cyan-400',
    secondary: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/50 hover:bg-emerald-500/20 hover:text-emerald-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] focus:ring-emerald-500 hover:border-emerald-400',
    danger: 'bg-red-500/10 text-red-400 border border-red-500/50 hover:bg-red-500/20 hover:text-red-300 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] focus:ring-red-500 hover:border-red-400',
  };

  return (
    <motion.button
      whileHover={!disabled && !isLoading ? { scale: 1.05 } : undefined}
      whileTap={!disabled && !isLoading ? { scale: 0.95 } : undefined}
      className={cn(baseStyles, variants[variant], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="h-5 w-5 animate-spin" />}
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-shimmer" />
    </motion.button>
  );
};
