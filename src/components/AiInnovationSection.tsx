import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  BrainCircuit,
  Sliders,
  Info,
  Activity,
  Zap,
} from 'lucide-react';

export const AiInnovationSection: React.FC = () => {
  // Interactive material sandbox sliders
  const [hdpeRatio, setHdpeRatio] = useState<number>(35);
  const [ppRatio, setPpRatio] = useState<number>(15);
  const [mineralRatio, setMineralRatio] = useState<number>(50);

  // Compute simulated predictions based on slider inputs
  // (Clearly marked as simulated parametric estimations for concept demonstration)
  const simulatedStrength = (
    8.5 +
    (hdpeRatio * 0.08) +
    (ppRatio * 0.14) +
    (mineralRatio * 0.12)
  ).toFixed(1);

  const simulatedMeltTemp = (180 + ppRatio * 0.4 + hdpeRatio * 0.1).toFixed(0);
  const simulatedImpactResistance = (7.2 + hdpeRatio * 0.06 - mineralRatio * 0.02).toFixed(1);
  const simulatedPlasticRecycledKg = ((hdpeRatio + ppRatio) * 0.05).toFixed(2);

  const aiCapabilities = [
    {
      title: 'Predictive Mix Formulation',
      description:
        'Post-consumer plastic bales vary in melt flow index and density. Our planned AI model explores non-linear polymer blend ratios to recommend optimal additive pairings before physical batch compounding.',
      icon: BrainCircuit,
      status: 'Planned Algorithmic Architecture',
    },
    {
      title: 'Feedstock Variability Compensation',
      description:
        'Instead of requiring expensive virgin resins, algorithmic compensation calculates exact compression pressure and cooling curves tailored to variable regional waste supplies.',
      icon: Sliders,
      status: 'In Conceptual Formulation',
    },
    {
      title: 'Computer Vision Quality Inspection',
      description:
        'Planning edge computer vision models positioned above mold ejection lines to detect micro-surface voids, internal delamination, and dimensional shrinkage in real time.',
      icon: Activity,
      status: 'Hardware/Sensor Blueprint',
    },
  ];

  return (
    <section id="innovation" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-950 overflow-hidden">
      {/* Background cyber grid & glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-lime-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-forest-900/80 border border-emerald-500/20 text-xs font-semibold text-emerald-300">
            <Cpu className="w-3.5 h-3.5 text-lime-400" />
            <span>AI Material Optimization Roadmap</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Smarter Materials.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-300">
              More Sustainable Construction.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Harnessing predictive modeling to overcome the primary bottleneck of recycled plastics: feedstock inconsistency.
          </p>

          {/* AI Roadmap Disclaimer */}
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-amber-300 bg-amber-950/40 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
            <Info className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span>Research Roadmap • Proprietary AI Models Currently in Architecture & Prototyping</span>
          </div>
        </div>

        {/* 3 AI Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {aiCapabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-7 rounded-3xl bg-charcoal-900/80 border border-forest-800/40 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-charcoal-950 border border-forest-700/60 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:border-emerald-400 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-forest-950 border border-forest-700 text-slate-400">
                      R&D Phase
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-forest-800/40 text-[11px] font-mono text-emerald-400/90 flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{cap.status}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Simulation Sandbox: AI Material Optimization Simulator */}
        <div className="rounded-3xl bg-gradient-to-br from-charcoal-900 via-charcoal-850 to-forest-950 border border-emerald-500/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-8 pb-6 border-b border-forest-800/50">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-lime-400 uppercase tracking-wider">
                <Zap className="w-4 h-4" />
                <span>Conceptual Interactive Model</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Polymer Composition Simulator (Demonstration Model)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Explore how varying polymer blend ratios are modeled to forecast mechanical parameters and calculate plastic diversion.
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-charcoal-950 border border-emerald-500/30 text-emerald-300">
              Interactive Sandbox
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls: Sliders */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* HDPE Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-200 font-semibold">HDPE Post-Consumer Flake:</span>
                  <span className="text-emerald-400 font-bold">{hdpeRatio}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  value={hdpeRatio}
                  onChange={(e) => setHdpeRatio(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-2 bg-charcoal-950 rounded-lg appearance-none"
                />
                <span className="text-[11px] text-slate-400 block">Detergent bottles, milk jugs, high tensile strength.</span>
              </div>

              {/* PP Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-200 font-semibold">Polypropylene (PP) Caps & Crates:</span>
                  <span className="text-lime-400 font-bold">{ppRatio}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={ppRatio}
                  onChange={(e) => setPpRatio(Number(e.target.value))}
                  className="w-full accent-lime-400 cursor-pointer h-2 bg-charcoal-950 rounded-lg appearance-none"
                />
                <span className="text-[11px] text-slate-400 block">Provides rigidity and higher heat deflection resistance.</span>
              </div>

              {/* Mineral Filler Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-200 font-semibold">Inert Mineral Sand / Fly-Ash Filler:</span>
                  <span className="text-teal-400 font-bold">{mineralRatio}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="65"
                  value={mineralRatio}
                  onChange={(e) => setMineralRatio(Number(e.target.value))}
                  className="w-full accent-teal-400 cursor-pointer h-2 bg-charcoal-950 rounded-lg appearance-none"
                />
                <span className="text-[11px] text-slate-400 block">Stabilizes mold shrinkage and enhances compressive matrix.</span>
              </div>

              <div className="p-3 rounded-xl bg-charcoal-950/80 border border-forest-800/60 text-[11px] text-slate-400 font-mono">
                Total Blend Mass: {(hdpeRatio + ppRatio + mineralRatio)}% (Normalized in model)
              </div>
            </div>

            {/* Right Display: Simulated Outputs */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-charcoal-950/90 border border-emerald-500/30 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Est. Compressive Load
                  </span>
                  <div className="text-3xl font-black font-mono text-emerald-300 mt-2">
                    {simulatedStrength} <span className="text-sm font-normal text-slate-400">MPa</span>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 mt-3 pt-3 border-t border-forest-800/40">
                  Target for non-structural masonry: &gt;10 MPa
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-charcoal-950/90 border border-lime-500/30 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Target Melt Window
                  </span>
                  <div className="text-3xl font-black font-mono text-lime-300 mt-2">
                    {simulatedMeltTemp} <span className="text-sm font-normal text-slate-400">°C</span>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 mt-3 pt-3 border-t border-forest-800/40">
                  Low-temp low-energy thermal envelope
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-charcoal-950/90 border border-teal-500/30 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400">
                    Impact Toughness Index
                  </span>
                  <div className="text-3xl font-black font-mono text-teal-300 mt-2">
                    {simulatedImpactResistance} <span className="text-sm font-normal text-slate-400">kJ/m²</span>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 mt-3 pt-3 border-t border-forest-800/40">
                  Elastic energy dissipation capacity
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-charcoal-950/90 border border-emerald-500/40 bg-gradient-to-br from-charcoal-950 to-forest-950 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-lime-400">
                    Diverted Plastic / Unit
                  </span>
                  <div className="text-3xl font-black font-mono text-white mt-2">
                    {simulatedPlasticRecycledKg} <span className="text-sm font-normal text-slate-400">kg</span>
                  </div>
                </div>
                <span className="text-[10px] text-emerald-300/80 mt-3 pt-3 border-t border-forest-800/40">
                  Post-consumer polymer mass locked
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
