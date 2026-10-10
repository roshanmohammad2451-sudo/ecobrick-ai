import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Boxes,
  Feather,
  DollarSign,
  Ruler,
  Leaf,
  Layers,
  Info,
  Maximize2,
} from 'lucide-react';

export const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'benefits' | 'specs' | 'composition'>('benefits');

  const benefits = [
    {
      id: 'waste-recovery',
      icon: Boxes,
      title: 'Plastic Waste Recovery',
      goal: 'Divert ~2.5 to 3.2 kg of post-consumer plastic per standard masonry unit.',
      description:
        'Turns high-volume packaging waste (HDPE milk jugs, detergent bottles, polypropylene caps) into high-density structural mass instead of municipal landfill filler.',
      statusTag: 'Target: ~3kg Diverted / Unit',
    },
    {
      id: 'affordability',
      icon: DollarSign,
      title: 'Potential Affordability',
      goal: 'Target lower lifecycle unit cost compared to imported fired clay bricks.',
      description:
        'By utilizing low-cost municipal sorted plastics and eliminating energy-expensive high-temperature kiln firing, manufacturing energy overhead is significantly reduced.',
      statusTag: 'Design Goal: Low Energy Overhead',
    },
    {
      id: 'lightweight',
      icon: Feather,
      title: 'Lightweight Ergonomic Design',
      goal: 'Target ~25%–35% weight reduction versus standard dense concrete blocks.',
      description:
        'Hollow core architecture and lower polymer density enable faster handling, reduced freight fuel consumption, and improved construction site ergonomics.',
      statusTag: 'Design Goal: Improved Ergonomics',
    },
    {
      id: 'consistent-dimensions',
      icon: Ruler,
      title: 'Consistent Dimensions & Interlocking',
      goal: 'High-precision steel mold tolerance with tongue-and-groove interlocking.',
      description:
        'Unlike irregular clay bricks that warp in kilns, hydraulic mold compression ensures sub-millimeter uniformity, enabling self-aligning mortar-saving assembly.',
      statusTag: 'Design Goal: High Precision Molding',
    },
    {
      id: 'material-innovation',
      icon: Leaf,
      title: 'Sustainable Material Innovation',
      goal: 'Zero agricultural clay depletion and zero kiln flue-gas emissions.',
      description:
        'Replaces finite natural aggregates with recycled polymer binders, fostering a circular construction model where retired bricks can theoretically be reground.',
      statusTag: 'Design Goal: Circular Lifecycle',
    },
  ];

  const specs = [
    { label: 'Standard Dimensions', value: '230 mm × 115 mm × 75 mm', detail: 'Modular standard format with 2 top interlocking alignment studs' },
    { label: 'Target Dry Weight', value: '1.95 kg – 2.25 kg', detail: '~30% lighter than standard concrete masonry unit' },
    { label: 'Core Geometry', value: '3 Cavity Lightweight Core', detail: 'Improves thermal barrier and reduces material mass while maintaining rigidity' },
    { label: 'Target Compressive Strength', value: '12 – 18 MPa (Target)', detail: 'Design objective for non-load-bearing & low-rise partition walls' },
    { label: 'Thermal Resistance (R-value)', value: 'Target R-1.2 per unit', detail: 'Natural thermal insulative property of dense thermoplastics' },
    { label: 'Moisture Absorption', value: '< 1.8% Target', detail: 'Significantly lower porosity than conventional fired clay or cement mortar' },
  ];

  return (
    <section id="showcase" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-900/40 border-b border-forest-800/30 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-600/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-forest-900/90 border border-emerald-500/20 text-xs font-semibold text-emerald-300">
            <Layers className="w-3.5 h-3.5 text-lime-400" />
            <span>Prototype Design & Architecture</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Resilience.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-300">
              Built for Circularity.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Our modular brick design pairs recycled thermoplastic binders with inert mineral aggregates to create a uniform, resilient building element.
          </p>

          {/* Prominent Design Goal Disclaimer */}
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-amber-300 bg-amber-950/40 border border-amber-500/30 px-3.5 py-1.5 rounded-full">
            <Info className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
            <span>Design Goals & Engineering Targets • Subject to Certified Lab Testing</span>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-charcoal-950/80 border border-forest-800/60 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('benefits')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'benefits'
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Intended Benefits
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'specs'
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Target Specifications
            </button>
            <button
              onClick={() => setActiveTab('composition')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'composition'
                  ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Material Layer Architecture
            </button>
          </div>
        </div>

        {/* TAB 1: Intended Benefits Cards */}
        {activeTab === 'benefits' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.id}
                  className="rounded-3xl p-7 bg-charcoal-850/80 border border-forest-800/40 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-emerald-950/30 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-charcoal-950 border border-forest-700/60 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:border-emerald-400 transition-all">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-forest-950 border border-emerald-500/30 text-emerald-300">
                        Design Goal
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {b.title}
                    </h3>

                    <div className="text-xs font-semibold text-lime-400 mb-3 font-mono">
                      {b.goal}
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {b.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-forest-800/40 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>Validation Phase: Internal R&D</span>
                    <span className="text-emerald-400 font-semibold">{b.statusTag}</span>
                  </div>
                </div>
              );
            })}

            {/* Extra CTA Box */}
            <div className="rounded-3xl p-7 bg-gradient-to-br from-forest-900/90 via-charcoal-850 to-charcoal-900 border border-emerald-500/40 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-lime-400 uppercase tracking-wider">
                  Pilot Batch Inquiries
                </span>
                <h3 className="text-xl font-extrabold text-white mt-2 mb-3">
                  Want to Test Prototype Samples?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  We are actively partnering with university civil engineering departments and testing laboratories to benchmark physical properties.
                </p>
              </div>

              <a
                href="#partners"
                className="mt-6 py-3 px-4 text-center rounded-xl bg-gradient-to-r from-lime-400 to-emerald-500 font-bold text-xs text-charcoal-950 hover:opacity-95 transition-opacity"
              >
                Inquire About Test Samples
              </a>
            </div>
          </motion.div>
        )}

        {/* TAB 2: Target Specifications Table & Visual Blueprint */}
        {activeTab === 'specs' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Specs List */}
            <div className="lg:col-span-7 space-y-3">
              {specs.map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-2xl bg-charcoal-850/80 border border-forest-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <div className="text-xs font-semibold text-slate-400">{item.label}</div>
                    <div className="text-xs text-slate-400">{item.detail}</div>
                  </div>
                  <div className="text-sm font-mono font-bold text-emerald-300 sm:text-right whitespace-nowrap bg-charcoal-950 px-3 py-1.5 rounded-lg border border-forest-700/60">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Blueprint Visualizer Graphic */}
            <div className="lg:col-span-5 p-6 rounded-3xl bg-charcoal-950 border border-emerald-500/30 flex flex-col items-center justify-center text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

              <div className="relative z-10 w-full max-w-xs space-y-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-forest-900 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                  <Maximize2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white">Modular Interlocking Dimensions</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Interlocking lugs eliminate dry-stack misalignment and reduce the volume of bonding mortar required on job sites.
                </p>

                <div className="p-3 rounded-xl bg-forest-950/90 border border-emerald-500/20 text-xs font-mono text-emerald-300 text-left space-y-1">
                  <div>• Stud Height: 12 mm</div>
                  <div>• Wall Core Thickness: 24 mm</div>
                  <div>• Mold Pressure: 150 Metric Tons</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* TAB 3: Material Layer Architecture */}
        {activeTab === 'composition' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="p-6 rounded-3xl bg-charcoal-850/80 border border-forest-800/40 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-forest-900 border border-emerald-400/40 flex items-center justify-center text-emerald-400 font-mono font-bold text-sm">
                45%
              </div>
              <h4 className="text-base font-bold text-white">Thermoplastic Polymer Matrix</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Recycled HDPE & PP polymer flakes provide ductile binder strength, chemical inertia, and water-impermeability across the core volume.
              </p>
              <div className="text-[11px] font-mono text-emerald-400">Post-consumer bottles, tubs, caps</div>
            </div>

            <div className="p-6 rounded-3xl bg-charcoal-850/80 border border-forest-800/40 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-forest-900 border border-lime-400/40 flex items-center justify-center text-lime-400 font-mono font-bold text-sm">
                50%
              </div>
              <h4 className="text-base font-bold text-white">Inert Mineral Aggregate</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Repurposed stone dust, foundry sands, or fly ash act as structural reinforcement particles, increasing compressive resistance and fire behavior.
              </p>
              <div className="text-[11px] font-mono text-lime-400">Industrial mineral by-products</div>
            </div>

            <div className="p-6 rounded-3xl bg-charcoal-850/80 border border-forest-800/40 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-forest-900 border border-teal-400/40 flex items-center justify-center text-teal-400 font-mono font-bold text-sm">
                5%
              </div>
              <h4 className="text-base font-bold text-white">Eco Coupling & UV Stabilizers</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Safe compatibilizers and non-toxic mineral thermal stabilizers bridge the bond between plastic and mineral phases while preventing solar UV degradation.
              </p>
              <div className="text-[11px] font-mono text-teal-400">Surface durability & color fastness</div>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};
