import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Users,
  HardHat,
  Compass,
  Recycle,
  Factory,
  Globe2,
  CheckCircle,
  Mail,
  AlertCircle,
  Building2,
  ArrowRight,
} from 'lucide-react';

export const PartnershipContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    partnershipInterest: 'Construction Company / Developer',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const partnerTypes = [
    {
      title: 'Construction & Developers',
      desc: 'Pilot testing eco-brick partitions, non-structural paving, and modular landscaping.',
      icon: HardHat,
    },
    {
      title: 'Contractors & Architects',
      desc: 'Designing sustainable urban elements with recycled interlocking masonry units.',
      icon: Compass,
    },
    {
      title: 'Plastic Waste Recyclers',
      desc: 'Supplying consistent post-consumer HDPE, LDPE, and PP feedstock streams.',
      icon: Recycle,
    },
    {
      title: 'Material Suppliers',
      desc: 'Providing mineral fillers, inert aggregates, and eco-compatibilizers.',
      icon: Factory,
    },
    {
      title: 'Sustainability Groups',
      desc: 'Advancing research validation, academic life-cycle analysis, and community pilots.',
      icon: Globe2,
    },
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.organization.trim()) errs.organization = 'Organization or company name is required.';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please provide at least 15 characters describing your partnership interest.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebratory eco-confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#22c55e', '#84cc16', '#4ade80', '#ffffff'],
      });
    }, 900);
  };

  const mailtoLink = `mailto:partnerships@ecobrick.ai?subject=Partnership Inquiry - ${encodeURIComponent(
    formData.organization || 'Prospective Partner'
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterest: ${formData.partnershipInterest}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="partners" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-charcoal-950 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lime-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-forest-900/80 border border-emerald-500/20 text-xs font-semibold text-emerald-300">
            <Users className="w-3.5 h-3.5 text-lime-400" />
            <span>Collaborative Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let&rsquo;s Build a Greener{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-emerald-400 to-teal-300">
              Future Together.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Pioneering a circular building materials market requires collaboration across the entire supply chain. Join our early partner network.
          </p>
        </div>

        {/* 5 Targeted Partner Cards Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {partnerTypes.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={pt.title}
                className="p-5 rounded-2xl bg-charcoal-900/80 border border-forest-800/40 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-charcoal-950 border border-forest-700/60 flex items-center justify-center text-emerald-400 mb-3 group-hover:scale-105 group-hover:border-emerald-400 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-emerald-300 transition-colors">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-forest-800/30 text-[10px] font-mono text-emerald-400/80">
                  Track #{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Partnership Contact Form & Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Outreach Info & Benefits */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-charcoal-900/90 border border-emerald-500/30 backdrop-blur-xl space-y-6">
              <span className="text-xs font-mono font-bold text-lime-400 uppercase tracking-wider block">
                Direct Contact Channel
              </span>
              <h3 className="text-2xl font-bold text-white">
                Interested in testing samples or supplying polymer streams?
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you operate a municipal MRF (material recovery facility), manage commercial development projects, or lead academic life-cycle research, our team welcomes your partnership inquiry.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center space-x-3 text-sm text-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-forest-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Direct Email</div>
                    <a
                      href="mailto:partnerships@ecobrick.ai"
                      className="font-mono text-emerald-300 hover:underline"
                    >
                      partnerships@ecobrick.ai
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-sm text-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-forest-950 border border-emerald-500/30 flex items-center justify-center text-lime-400 flex-shrink-0">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Pilot Innovation Lab</div>
                    <span className="text-slate-300">Circular Technology Incubator</span>
                  </div>
                </div>
              </div>

              {/* Demo Notice Disclaimer */}
              <div className="p-4 rounded-xl bg-charcoal-950 border border-forest-800/60 text-xs text-slate-400 leading-relaxed">
                <strong className="text-slate-200 block mb-1">Interactive Startup Demo:</strong>
                Submitting this form verifies and logs your partnership interest in the demo interface. You can also use the direct mailto button to launch your local email client with all entered details.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-charcoal-900/90 border border-emerald-500/30 shadow-2xl backdrop-blur-xl relative">
              
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-10 text-center space-y-5"
                  >
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center text-emerald-400">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-bold text-white">
                      Inquiry Received Successfully!
                    </h3>

                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you for connecting with <strong className="text-emerald-300">EcoBrick AI</strong>. We have logged your request for <span className="font-mono text-lime-300">{formData.organization}</span> and our partnership coordinator will reach out to <span className="font-mono text-emerald-300">{formData.email}</span>.
                    </p>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={mailtoLink}
                        className="px-5 py-2.5 rounded-xl bg-forest-900 border border-emerald-500/40 text-emerald-300 hover:text-white text-xs font-bold transition-colors flex items-center space-x-2"
                      >
                        <Mail className="w-4 h-4" />
                        <span>Send Duplicate Via Email Client</span>
                      </a>

                      <button
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: '',
                            organization: '',
                            email: '',
                            phone: '',
                            partnershipInterest: 'Construction Company / Developer',
                            message: '',
                          });
                        }}
                        className="px-5 py-2.5 rounded-xl bg-charcoal-950 border border-forest-700 text-slate-300 hover:text-white text-xs font-semibold"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="flex items-center justify-between pb-2 border-b border-forest-800/40">
                      <h3 className="text-xl font-bold text-white">Become a Partner</h3>
                      <span className="text-xs font-mono text-emerald-400">All fields * except phone</span>
                    </div>

                    {/* Name & Organization */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Elena Vance"
                          className={`w-full px-4 py-3 rounded-xl bg-charcoal-950 border ${
                            errors.name ? 'border-red-500' : 'border-forest-700/60'
                          } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors`}
                        />
                        {errors.name && (
                          <span className="text-[11px] text-red-400 mt-1 block flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3 inline mr-1" />
                            {errors.name}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Organization / Company *
                        </label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          placeholder="e.g. Apex Civil Build Group"
                          className={`w-full px-4 py-3 rounded-xl bg-charcoal-950 border ${
                            errors.organization ? 'border-red-500' : 'border-forest-700/60'
                          } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors`}
                        />
                        {errors.organization && (
                          <span className="text-[11px] text-red-400 mt-1 block flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3 inline mr-1" />
                            {errors.organization}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Work Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="elena@apexcivil.com"
                          className={`w-full px-4 py-3 rounded-xl bg-charcoal-950 border ${
                            errors.email ? 'border-red-500' : 'border-forest-700/60'
                          } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors`}
                        />
                        {errors.email && (
                          <span className="text-[11px] text-red-400 mt-1 block flex items-center space-x-1">
                            <AlertCircle className="w-3 h-3 inline mr-1" />
                            {errors.email}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1.5">
                          Phone Number (Optional)
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (555) 019-2834"
                          className="w-full px-4 py-3 rounded-xl bg-charcoal-950 border border-forest-700/60 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Partnership Interest Dropdown */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Partnership Interest Track *
                      </label>
                      <select
                        value={formData.partnershipInterest}
                        onChange={(e) => setFormData({ ...formData, partnershipInterest: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-charcoal-950 border border-forest-700/60 text-sm text-white focus:outline-none focus:border-emerald-400 transition-colors"
                      >
                        <option value="Construction Company / Developer">Construction Company / Developer</option>
                        <option value="Contractor or Architectural Firm">Contractor or Architectural Firm</option>
                        <option value="Plastic Waste Recycler / MRF">Plastic Waste Recycler / MRF</option>
                        <option value="Mineral / Chemical Supplier">Mineral / Chemical Supplier</option>
                        <option value="Academic / Research Institution">Academic / Research Institution</option>
                        <option value="Impact Investor / Innovation Mentor">Impact Investor / Innovation Mentor</option>
                        <option value="Other / General Inquiry">Other / General Inquiry</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Collaboration Message *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your organization, anticipated volume or test requirements, and timeline..."
                        className={`w-full px-4 py-3 rounded-xl bg-charcoal-950 border ${
                          errors.message ? 'border-red-500' : 'border-forest-700/60'
                        } text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors resize-none`}
                      />
                      {errors.message && (
                        <span className="text-[11px] text-red-400 mt-1 block flex items-center space-x-1">
                          <AlertCircle className="w-3 h-3 inline mr-1" />
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-charcoal-950 bg-gradient-to-r from-lime-400 via-emerald-400 to-eco-bright shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-charcoal-950 border-t-transparent rounded-full animate-spin" />
                          <span>Routing Inquiry...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <span>Submit Partnership Inquiry</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
