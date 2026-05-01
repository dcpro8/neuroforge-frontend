import React from 'react';
import { IdeaInput } from '../components/sections/IdeaInput';
import { OutputFeatures } from '../components/sections/OutputFeatures';
import { OutputDatabase } from '../components/sections/OutputDatabase';
import { OutputAPIs } from '../components/sections/OutputAPIs';
import { OutputUI } from '../components/sections/OutputUI';
import { OutputRoadmap } from '../components/sections/OutputRoadmap';
import { useStore } from '../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

import { ExportToolbar } from '../components/sections/ExportToolbar';

export const Home: React.FC = () => {
  const { blueprint, loading } = useStore();

  return (
    <div className="min-h-screen relative w-full overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-50">
      {/* Background Styling */}
      <div className="fixed inset-0 z-0 bg-[#050505]" />
      <div 
        className="fixed inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
        }}
      />
      
      {/* Ambient glow effects */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-600/10 blur-[120px] pointer-events-none z-0 mix-blend-screen" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none z-0 mix-blend-screen" />

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <IdeaInput />

        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              key="loading-skeleton"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full flex flex-col items-center justify-center py-24 space-y-6"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-[20px] bg-cyan-500/30 animate-pulse" />
                <Loader2 className="w-16 h-16 text-cyan-400 animate-spin relative z-10" />
              </div>
              <p className="text-cyan-400/80 font-mono tracking-widest uppercase text-sm animate-pulse">
                Parsing Neural Pathways...
              </p>
            </motion.div>
          )}

          {!loading && blueprint && (
            <motion.div
              id="blueprint-results"
              key="results"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-12"
            >
              <ExportToolbar />
              <OutputFeatures />
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <OutputDatabase />
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <OutputAPIs />
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <OutputUI />
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <OutputRoadmap />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Home;
