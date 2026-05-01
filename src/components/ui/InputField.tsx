import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

interface InputFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string | null;
}

export const InputField = forwardRef<HTMLTextAreaElement, InputFieldProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && (
          <label className="text-sm font-medium text-slate-300">
            {label}
          </label>
        )}
        <div className="relative group">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/30 to-purple-600/30 blur-md group-hover:blur-lg group-hover:opacity-100 transition duration-500 opacity-60"></div>
          <textarea
            ref={ref}
            className={cn(
              'relative w-full rounded-2xl border border-white/10 bg-black/80 text-slate-100 placeholder-slate-500 backdrop-blur-xl',
              'focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 focus:bg-black/90',
              'transition-all duration-300 resize-none min-h-[120px] leading-relaxed',
              error && 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/20',
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="text-sm text-red-400 animate-in fade-in slide-in-from-top-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

InputField.displayName = 'InputField';
