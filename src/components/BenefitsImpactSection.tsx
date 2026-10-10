import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Trash2,
  Repeat,
  Compass,
  Factory,
  Sparkles,
  Calculator,
} from 'lucide-react';

export const BenefitsImpactSection: React.FC = () => {
  // Interactive Calculator Slider State
  const [projectUnits, setProjectUnits] = useState<number>(2500);

  // Estimations based on ~2.8 kg plastic per unit and typical plastic bottle equivalents (~25g each)
  const plasticDivertedKg = Math.round(projectUnits * 2.8);
  const plasticBottlesEquivalent = Math.round(plasticDivertedKg / 0.025);
  const co2AvoidedKg = Math.round(projectUnits * 0.95); // Avoided high-temp kiln clay firing emissions
  const landfillVolumeM3 = (plasticDivertedKg / 280).toFixed(1); // Uncompacted municipal waste volume

  const impactCards = [
    {
      title: 'Reduce Plastic Waste',
      subtitle: 'Diverting Landfill & Marine Bound Polymers',
      description:
        'Transform discarded rigid and flexible plastics into high-density building units, capturing synthetic waste before it fragments into harmful microplastics in waterways.',
      icon: Trash2,
      statTag: 'Direct Polymer Interception',
    },
    {
      title: 'Support Circular Economy',
      subtitle: 'Closing the Material Lifecycle Loop',
      description:
        'Shift construction from the linear "take-make-dispose" pattern into a durable multi-decade utility cycle where infrastructure components can eventually be shredded and repurposed again.',
      icon: Repeat,
      statTag: 'Closed-Loop Material Flow',
    },
    {
      title: 'Alternatives to Conventional Materials',
      subtitle: 'Conserving Topsoil & Natural Aggregates',
      description:
        'By partially replacing virgin river sand, mined aggregate, and fired clay, our concept eases critical resource strain on sensitive riverbeds and agricultural soils.',
      icon: Compass,
      statTag: 'Resource Depletion Relief',
    },
    {
      title: 'Encourage Responsible Manufacturing',
      subtitle: 'Decentralized, Low-Energy Pressing',
      description:
        'Eliminating massive fossil-fueled brick kilns lowers direct combustion emissions. Smaller hydraulic compaction plants can be deployed close to municipal recycling centers.',
      icon: Factory,
      statTag: 'Zero High-Heat Firing',
    },
  ];

  return (
    <section id="impact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-900/60 border-t border-forest-800/30 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-emerald-950/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-forest-900/80 border border-emerald-500/20 text-xs font-semibold text-emerald-300">
            <Sparkles className="w-3.5 h-3.5 text-lime-400" />
            <span>Circularity & Sustainability Outcomes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Designed for Real World{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-300">
              Environmental Impact.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Four foundational pillars guiding our engineering decisions and partnership initiatives.
          </p>
        </div>

        {/* 4 Animated Core Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="p-7 rounded-3xl bg-charcoal-850/80 border border-forest-800/40 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5 backdrop-blur-md flex flex-col justify-between group shadow-lg hover:shadow-emerald-950/20"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-charcoal-950 border border-forest-700/60 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 group-hover:border-emerald-400 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-mono text-lime-400 uppercase tracking-wider block mb-1">
                    {card.subtitle}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-forest-800/40 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Pillar #{idx + 1}</span>
                  <span className="text-emerald-400 font-semibold">{card.statTag}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Plastic & Carbon Diversion Calculator */}
        <div className="rounded-3xl bg-gradient-to-br from-charcoal-900 via-forest-950 to-charcoal-850 border border-emerald-500/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-forest-800/50">
            <div>
              <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-lime-400 uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>Impact Forecaster</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Estimate Project Material Diversion
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Adjust the project scale below to visualize potential plastic offset and avoided kiln carbon emissions.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-charcoal-950 px-3 py-1.5 rounded-lg border border-forest-700">
              Hypothetical Model (2.8kg/unit basis)
            </span>
          </div>

          <div className="space-y-8">
            {/* Slider */}
            <div className="space-y-3 max-w-2xl">
              <div className="flex justify-between items-center text-sm">
                <span className="font-semibold text-slate-200">
                  Project Brick Requirement:
                </span>
                <span className="text-xl font-black font-mono text-lime-400 bg-charcoal-950 px-3 py-1 rounded-lg border border-forest-700">
                  {projectUnits.toLocaleString()} Bricks
                </span>
              </div>

              <input
                type="range"
                min="500"
                max="25000"
                step="500"
                value={projectUnits}
                onChange={(e) => setProjectUnits(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer h-2.5 bg-charcoal-950 rounded-lg appearance-none"
              />

              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>500 (Garden partition)</span>
                <span>5,000 (Perimeter boundary)</span>
                <span>25,000 (Community structure)</span>
              </div>
            </div>

            {/* Calculated Output Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-charcoal-950/80 border border-emerald-500/25">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Plastic Diverted</div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-emerald-300 mt-1">
                  {plasticDivertedKg.toLocaleString()} <span className="text-xs font-normal text-slate-400">kg</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">Post-consumer polymers</div>
              </div>

              <div className="p-4 rounded-2xl bg-charcoal-950/80 border border-lime-500/25">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Equivalent Bottles</div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-lime-300 mt-1">
                  ~{(plasticBottlesEquivalent / 1000).toFixed(0)}k <span className="text-xs font-normal text-slate-400">units</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">Standard 500ml equivalents</div>
              </div>

              <div className="p-4 rounded-2xl bg-charcoal-950/80 border border-teal-500/25">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Landfill Volume Saved</div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-teal-300 mt-1">
                  {landfillVolumeM3} <span className="text-xs font-normal text-slate-400">m³</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-1">Conserved municipal dump space</div>
              </div>

              <div className="p-4 rounded-2xl bg-charcoal-950/80 border border-green-500/25">
                <div className="text-[11px] font-mono text-slate-400 uppercase">Kiln CO₂ Avoided</div>
                <div className="text-2xl sm:text-3xl font-black font-mono text-white mt-1">
                  ~{co2AvoidedKg.toLocaleString()} <span className="text-xs font-normal text-slate-400">kg</span>
                </div>
                <div className="text-[10px] text-emerald-400 mt-1">Estimated avoided thermal emissions</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
