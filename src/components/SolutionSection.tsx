import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Recycle,
  Filter,
  Layers,
  FlaskConical,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  Settings,
  Sparkles,
} from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      title: 'Collect Suitable Plastic Waste',
      shortDesc: 'Aggregating targeted non-hazardous polymers from packaging and commercial recyclers.',
      icon: Recycle,
      details: {
        materials: ['HDPE (High-Density Polyethylene)', 'PP (Polypropylene)', 'LDPE Films'],
        process: 'Partnerships with regional sorting depots and municipal aggregators ensure consistent feedstock streams free from hazardous contaminants.',
        focus: 'Targeting robust thermoplastics with high tensile elasticity and reliable thermal processing windows.',
        metric: '~2.8 kg polymer per standard modular unit',
      },
    },
    {
      step: '02',
      title: 'Sort, Clean & Process',
      shortDesc: 'Precision washing, contaminant decontamination, and shredding into uniform flakes.',
      icon: Filter,
      details: {
        materials: ['Multi-stage sink-float density tanks', 'Thermal friction washers', 'Precision rotary granulators'],
        process: 'Removes organic residues, labels, and moisture. Material is shredded into 3–6mm flakes ready for composite stabilization.',
        focus: 'Eliminating moisture and foreign particles to ensure zero air voids in the final mold cavity.',
        metric: '< 0.5% target residual moisture content',
      },
    },
    {
      step: '03',
      title: 'Controlled Manufacturing',
      shortDesc: 'Thermal compounding with mineral stabilizers and high-pressure hydraulic molding.',
      icon: Layers,
      details: {
        materials: ['Thermally regulated compounding chamber', 'Eco-mineral fillers (sand / fly-ash / stone dust)', 'High-tonnage hydraulic mold'],
        process: 'Polymers are softened in a controlled 170°C–210°C thermal envelope, blended with inert mineral aggregates, and pressed under 150+ tons of pressure.',
        focus: 'Zero kiln firing or high-heat calcination. Blocks cure via regulated ambient cooling.',
        metric: 'Zero flue-gas emissions during low-temp melt',
      },
    },
    {
      step: '04',
      title: 'Test Quality & Optimize Composition',
      shortDesc: 'Batch mechanical stress evaluation feeding back into AI parameter formulation models.',
      icon: FlaskConical,
      details: {
        materials: ['Compressive load test rigs (ASTM C67 protocols)', 'Water absorption immersion tanks', 'AI predictive regression engine'],
        process: 'Each sample batch undergoes compressive tolerance and thermal expansion testing. Real results train the AI model to refine future recipes.',
        focus: 'Continuous reinforcement of tensile strength, fire retardancy, and interlocking friction tolerances.',
        metric: 'Closed-loop data feedback for each blend ratio',
      },
    },
  ];

  return (
    <section id="solution" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background glow elements */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-forest-700/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-forest-900/80 border border-emerald-500/20 text-xs font-semibold text-emerald-300">
            <Sparkles className="w-3.5 h-3.5 text-lime-400" />
            <span>Four-Stage Transformation Model</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Meet{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-300">
              EcoBrick AI.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            A responsible, science-driven approach to turning discarded plastics into durable modular construction units through controlled low-energy compounding.
          </p>
        </div>

        {/* Process Steps Timeline: Desktop Horizontal / Mobile Vertical */}
        <div className="relative mb-14">
          
          {/* Connecting line (Desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12%] right-[12%] h-1 bg-charcoal-700 -z-0">
            <div
              className="h-full bg-gradient-to-r from-lime-400 via-emerald-400 to-eco-bright transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          {/* Step Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              const isActive = activeStep === idx;

              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`relative text-left p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between group focus:outline-none ${
                    isActive
                      ? 'bg-charcoal-850 border-2 border-emerald-400 shadow-xl shadow-emerald-950/50 scale-[1.02]'
                      : 'bg-charcoal-900/80 border border-forest-800/40 hover:border-emerald-500/40 hover:bg-charcoal-850/60'
                  }`}
                >
                  {/* Step Number & Icon */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                          isActive
                            ? 'bg-gradient-to-br from-lime-400 to-emerald-600 text-charcoal-950 shadow-md shadow-emerald-500/30 font-bold'
                            : 'bg-charcoal-950 border border-forest-700 text-emerald-400 group-hover:border-emerald-400'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 bg-charcoal-950/80 px-2.5 py-1 rounded-full border border-forest-800">
                        STEP {item.step}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Interactive hint */}
                  <div className="pt-4 mt-4 border-t border-forest-800/40 flex items-center justify-between text-xs font-medium">
                    <span className={isActive ? 'text-emerald-300' : 'text-slate-400 group-hover:text-slate-200'}>
                      {isActive ? 'Active Breakdown' : 'Click to inspect'}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${
                        isActive ? 'rotate-90 text-emerald-400' : 'text-slate-500 group-hover:translate-x-1'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Deep Dive Active Step Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-gradient-to-br from-charcoal-900 via-charcoal-850 to-forest-950/90 border border-emerald-500/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Column: Details */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                    PHASE {steps[activeStep].step} SPECIFICATION
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {steps[activeStep].details.metric}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {steps[activeStep].title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {steps[activeStep].details.process}
                </p>

                <div className="pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono mb-2">
                    Key Feedstock & Equipment Parameters:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {steps[activeStep].details.materials.map((m) => (
                      <span
                        key={m}
                        className="text-xs px-3 py-1.5 rounded-xl bg-charcoal-950 border border-forest-700/60 text-slate-200 flex items-center space-x-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 flex-shrink-0" />
                        <span>{m}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Focus Highlight Card */}
              <div className="lg:col-span-4 p-5 rounded-2xl bg-charcoal-950/90 border border-forest-700/60 space-y-3">
                <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wide text-lime-400 font-mono">
                  <Settings className="w-4 h-4" />
                  <span>Quality Assurance Focus</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {steps[activeStep].details.focus}
                </p>
                <div className="text-[11px] font-mono text-emerald-400/90 bg-forest-950/70 p-2.5 rounded-lg border border-emerald-500/20">
                  Data Logged: Continuous sensory & thermal logging to generate AI training matrices.
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Essential Testing & Certification Disclosure */}
        <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-charcoal-900/60 border border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center space-x-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-200">
                Testing & Certification Transparency Statement
              </div>
              <p className="text-xs text-slate-400 mt-0.5 max-w-3xl leading-relaxed">
                EcoBrick AI is in early prototype development. Structural load-bearing capacity, shear strength, fire retardancy, and weathering durability require formal validation through accredited third-party testing laboratories (ASTM / ISO / EN standards) prior to commercial structural application.
              </p>
            </div>
          </div>
          <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-charcoal-950 text-amber-300 border border-amber-500/30 whitespace-nowrap self-start sm:self-auto">
            R&D Status
          </span>
        </div>

      </div>
    </section>
  );
};
