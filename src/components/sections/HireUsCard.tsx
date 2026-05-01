import React, { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { GlowButton } from '../ui/GlowButton';
import { useStore } from '../../store/useStore';
import { Hammer, Loader2, CheckCircle2 } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';

export const HireUsCard: React.FC = () => {
  const blueprint = useStore(state => state.blueprint);
  const idea = useStore(state => state.idea);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'>('idle');

  if (!blueprint) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || '/api'}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, idea })
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      toast.success('Message sent! I will reach out soon.');
    } catch (err) {
      toast.error('Failed to send message. Is the server running?');
      setStatus('idle');
    }
  };

  return (
    <div className="w-full py-16 mt-12 mb-8">
      <Toaster position="bottom-center" toastOptions={{ style: { background: '#0f172a', color: '#fff', border: '1px solid #14b8a6' } }} />
      <GlassCard className="relative p-10 flex flex-col items-center text-center overflow-hidden border-emerald-500/30">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent pointer-events-none" />
        
        <div className="relative z-10 space-y-6 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
            Need Help Building This?
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            You have the perfect architecture blueprint. Now you need execution. Contact me to discuss how we can bring your SaaS idea to life.
          </p>
          
          {status === 'success' ? (
             <div className="mt-8 flex items-center justify-center text-emerald-400 gap-3 border border-emerald-500/20 bg-emerald-500/10 p-4 rounded-xl">
                 <CheckCircle2 className="w-6 h-6" />
                 <span className="font-semibold text-lg">Lead Recorded Successfully!</span>
             </div>
          ) : (
             <form onSubmit={handleSubmit} className="pt-6 flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
               <input
                 type="email"
                 required
                 placeholder="you@example.com"
                 className="flex-1 bg-slate-900/80 border border-slate-700/50 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 disabled={status === 'loading'}
               />
               <GlowButton type="submit" variant="secondary" disabled={status === 'loading'} className="px-10 py-4 text-lg">
                 {status === 'loading' ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Hammer className="w-5 h-5 mr-2" />}
                 Contact Me
               </GlowButton>
             </form>
          )}
        </div>
      </GlassCard>
    </div>
  );
};
