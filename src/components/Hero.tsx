import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Layers, Recycle, ChevronDown } from 'lucide-react';
import { BrickVisualizer3D } from './BrickVisualizer3D';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const topOffset = 80;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - topOffset;
      window.scrollTo({ top: pos, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-600/15 via-lime-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[450px] h-[450px] bg-forest-700/15 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Construction & Architectural Grid Backdrop */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Headline, Description & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
        >
          {/* Startup Tagline Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-forest-900/90 border border-emerald-500/30 text-xs sm:text-sm text-emerald-300 shadow-inner">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-emerald-300 to-green-200">
              Turn Waste Into Possibility
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300 hidden sm:inline">AI-Assisted Material Optimization</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
            Turning Plastic Waste Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-300 underline decoration-emerald-500/40 decoration-wavy decoration-2">
              Building Blocks
            </span>{' '}
            for a Better Future.
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            <strong className="text-white font-semibold">EcoBrick AI</strong> is developing sustainable construction bricks from suitable plastic waste, helping reduce pollution and support a circular economy through predictive polymer science.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto pt-2">
            <button
              onClick={() => scrollTo('#solution')}
              className="px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-charcoal-950 bg-gradient-to-r from-lime-400 via-emerald-400 to-eco-bright shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2 group"
            >
              <span>Explore Our Solution</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => scrollTo('#partners')}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-slate-200 hover:text-white bg-charcoal-900/90 hover:bg-forest-900/70 border border-emerald-500/30 hover:border-emerald-400 transition-all flex items-center justify-center space-x-2 shadow-sm"
            >
              <span>Partner With Us</span>
              <Sparkles className="w-4 h-4 text-lime-400" />
            </button>
          </div>

          {/* Highlights / Trust metrics banner */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-forest-800/60 w-full max-w-xl text-left">
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold font-mono text-emerald-300">~2.8 kg</span>
              <span className="text-xs text-slate-400">Target Plastic / Brick</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold font-mono text-lime-300">Zero-Kiln</span>
              <span className="text-xs text-slate-400">Low-Carbon Curing</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold font-mono text-teal-300">Modular</span>
              <span className="text-xs text-slate-400">Interlocking Form</span>
            </div>
          </div>

          {/* Transparency Disclaimer Note */}
          <div className="flex items-center space-x-2 text-[11px] text-slate-400 bg-charcoal-900/60 px-3 py-1.5 rounded-lg border border-charcoal-700/50">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
            <span>
              Early-stage R&D prototype. Mechanical properties & durability metrics subject to certified laboratory validation.
            </span>
          </div>
        </motion.div>

        {/* Right Column: 3D Animated Recycled Brick Visualizer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          {/* Glassmorphism Container with glowing ambient backdrop */}
          <div className="relative rounded-3xl bg-gradient-to-b from-charcoal-900/90 via-charcoal-850/80 to-forest-950/90 border border-emerald-500/20 shadow-2xl shadow-emerald-950/50 p-2 sm:p-4 overflow-hidden backdrop-blur-xl">
            
            {/* Header info within card */}
            <div className="flex items-center justify-between px-3 pt-2 pb-1 border-b border-forest-800/40">
              <div className="flex items-center space-x-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-slate-200">Interactive 3D Prototype</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400/90 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20">
                EcoBrick v0.3 Core
              </span>
            </div>

            {/* Three.js Interactive Brick */}
            <BrickVisualizer3D className="w-full" />

            {/* Quick Feature Badges below visualizer */}
            <div className="grid grid-cols-2 gap-2 mt-2 px-1 text-xs">
              <div className="p-2 rounded-xl bg-charcoal-900/80 border border-forest-700/40 flex items-center space-x-2">
                <Recycle className="w-4 h-4 text-lime-400 flex-shrink-0" />
                <span className="text-slate-300 text-[11px]">HDPE / PP Polymer Blend Target</span>
              </div>
              <div className="p-2 rounded-xl bg-charcoal-900/80 border border-forest-700/40 flex items-center space-x-2">
                <Layers className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-300 text-[11px]">Modular Interlocking System</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator prompt */}
      <button
        onClick={() => scrollTo('#problem')}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 text-slate-400 hover:text-emerald-300 transition-colors pointer-events-auto"
        aria-label="Scroll to the problem section"
      >
        <span className="text-[11px] tracking-wider uppercase font-mono">Explore</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-emerald-400" />
      </button>
    </section>
  );
};
