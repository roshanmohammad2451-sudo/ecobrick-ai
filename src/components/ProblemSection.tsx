import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Trash2, ArrowUpRight, Flame, ShieldAlert, Sparkles } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const stats = [
    {
      id: 'plastic-waste',
      value: '400M+',
      unit: 'Tonnes / Year',
      title: 'Global Plastic Waste Generation',
      description:
        'The world produces over 400 million tonnes of plastic waste annually. Single-use polymers congest municipal waste systems and degrade ecosystems over centuries.',
      source: 'UN Environment Programme (UNEP)',
      icon: Trash2,
      accent: 'from-amber-500/20 to-orange-500/10',
      borderAccent: 'border-orange-500/30',
      badgeColor: 'text-amber-400 bg-amber-950/40 border-amber-500/30',
    },
    {
      id: 'low-recycling',
      value: '< 10%',
      unit: 'Recycled Globally',
      title: 'Current Plastic Recycling Rate',
      description:
        'Despite widespread awareness, less than 10% of all plastic ever produced has been recycled. The majority is landfilled, incinerated, or leaks into waterways.',
      source: 'OECD Global Plastics Outlook',
      icon: ShieldAlert,
      accent: 'from-rose-500/20 to-red-500/10',
      borderAccent: 'border-rose-500/30',
      badgeColor: 'text-rose-400 bg-rose-950/40 border-rose-500/30',
    },
    {
      id: 'construction-emissions',
      value: '37%',
      unit: 'Global Carbon Share',
      title: 'Emissions From Built Environment',
      description:
        'Traditional construction materials are extremely carbon-intensive. Firing clay bricks consumes vast amounts of fossil fuel and strips fertile agricultural topsoil.',
      source: 'UNEP / GlobalABC Status Report',
      icon: Flame,
      accent: 'from-emerald-500/20 to-teal-500/10',
      borderAccent: 'border-emerald-500/30',
      badgeColor: 'text-emerald-400 bg-emerald-950/40 border-emerald-500/30',
    },
  ];

  return (
    <section id="problem" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-900/60 overflow-hidden border-y border-forest-800/30">
      {/* Background ambient gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-950/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-charcoal-800 border border-emerald-500/20 text-xs font-semibold text-emerald-300">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>The Environmental Challenge</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Plastic Waste Is a Problem.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-300">
              What If It Became a Resource?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Millions of tonnes of durable synthetic polymers are discarded after a single use, while modern infrastructure faces skyrocketing material costs and environmental constraints.
          </p>
        </div>

        {/* 3 Animated Verified Statistic Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative rounded-3xl p-7 bg-charcoal-850/90 border ${stat.borderAccent} shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-1.5 backdrop-blur-md flex flex-col justify-between`}
              >
                {/* Background glow header */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${stat.accent} rounded-bl-full pointer-events-none opacity-40 group-hover:opacity-70 transition-opacity`} />

                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-charcoal-900 border border-forest-700/50 shadow-inner group-hover:border-emerald-500/50 transition-colors">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <span className={`text-[11px] font-mono font-bold px-2.5 py-1 rounded-full border ${stat.badgeColor}`}>
                      Verified Metric
                    </span>
                  </div>

                  {/* Main Large Stat Number */}
                  <div className="mb-3">
                    <div className="flex items-baseline space-x-2">
                      <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400/90 font-mono">
                      {stat.unit}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 mb-2">
                    {stat.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Source Verification Citation */}
                <div className="pt-6 mt-6 border-t border-forest-800/40 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center space-x-1">
                    <span>Source:</span>
                    <strong className="text-slate-300 font-medium">{stat.source}</strong>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Visual Paradigm Shift: Conventional vs EcoBrick AI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-charcoal-950/80 border border-forest-700/40 p-6 sm:p-8 backdrop-blur-xl"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-3">
              <div className="inline-flex items-center space-x-2 text-xs font-semibold text-lime-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Paradigm Shift</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Reimagining Construction Through Upcycling
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Rather than viewing discarded plastics as permanent waste, EcoBrick AI aims to harness their structural polymer properties. Non-biodegradable plastics can provide high tensile strength and moisture resistance when compounded responsibly.
              </p>
            </div>

            {/* Quick side-by-side indicator */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto">
              <div className="p-4 rounded-2xl bg-charcoal-900 border border-red-500/20 space-y-1.5">
                <div className="text-xs font-mono font-bold text-rose-400 uppercase">Conventional Masonry</div>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  <li>Kiln firing at 900°C–1,100°C</li>
                  <li>Depletes fertile topsoil clay</li>
                  <li>Heavy transport logistics</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-forest-950/80 border border-emerald-500/40 space-y-1.5 shadow-lg shadow-emerald-950/30">
                <div className="text-xs font-mono font-bold text-emerald-400 uppercase">EcoBrick AI Concept</div>
                <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                  <li>Zero kiln firing (ambient cooling)</li>
                  <li>Transforms post-consumer plastics</li>
                  <li>Lightweight interlocking format</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
