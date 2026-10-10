import React from 'react';
import {
  Mail,
  MapPin,
  ArrowUp,
  ShieldCheck,
  Globe,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'The Problem', href: '#problem' },
    { label: 'Our Solution', href: '#solution' },
    { label: 'Product Showcase', href: '#showcase' },
    { label: 'AI Innovation', href: '#innovation' },
    { label: 'Impact & Forecaster', href: '#impact' },
    { label: 'Partnership Program', href: '#partners' },
  ];

  return (
    <footer className="bg-charcoal-950 border-t border-forest-800/40 text-slate-400 text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-forest-900/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-xl bg-forest-900 border border-emerald-500/30 p-1 flex items-center justify-center overflow-hidden">
                <img
                  src="/ecobrick-logo.png"
                  alt="EcoBrick AI Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-2xl text-white tracking-tight">
                  EcoBrick <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-eco-bright">AI</span>
                </span>
                <p className="text-xs text-lime-400/90 font-mono tracking-wide">
                  &ldquo;Turn Waste Into Possibility.&rdquo;
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Developing sustainable construction bricks from suitable plastic waste with AI-assisted material optimization. Advancing circular building materials for an urban future.
            </p>

            {/* Social Links (Clean SVGs) */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-charcoal-900 border border-forest-800/60 hover:border-emerald-400 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-charcoal-900 border border-forest-800/60 hover:border-emerald-400 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-charcoal-900 border border-forest-800/60 hover:border-emerald-400 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="X / Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://ecobrick.ai"
                className="w-9 h-9 rounded-xl bg-charcoal-900 border border-forest-800/60 hover:border-emerald-400 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                aria-label="Global Web"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="hover:text-emerald-300 transition-colors flex items-center space-x-1.5"
                  >
                    <span className="text-emerald-500">›</span>
                    <span>{l.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information & Pilot Hub */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Pilot Communications
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="mailto:partnerships@ecobrick.ai" className="hover:text-emerald-300 font-mono">
                  partnerships@ecobrick.ai
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-lime-400 flex-shrink-0" />
                <span>Circular Innovation Pilot Lab • CleanTech Hub</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>R&D Stage: Non-Structural Prototype Testing</span>
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="px-3.5 py-2 rounded-xl bg-charcoal-900 border border-forest-800/60 text-xs text-slate-300 hover:text-white hover:border-emerald-500/40 transition-colors flex items-center space-x-2"
              >
                <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Regulatory & R&D Transparency Notice */}
        <div className="py-6 border-b border-forest-900/60 text-[11px] text-slate-400 leading-relaxed space-y-1.5">
          <p>
            <strong className="text-slate-300">Disclaimer:</strong> EcoBrick AI is an early-stage research and development startup initiative. Product specifications, physical performance metrics, and carbon reduction figures presented on this landing page reflect targeted design objectives and computational simulation models. Formal compliance with regional building codes (such as ASTM, ISO, or EN standards) requires extensive accredited laboratory certification and ongoing physical test validation.
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <div>
            © {new Date().getFullYear()} EcoBrick AI. All rights reserved. &ldquo;Turn Waste Into Possibility.&rdquo;
          </div>
          <div className="flex items-center space-x-4 text-[11px]">
            <a href="#" className="hover:text-slate-200">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-200">Terms of Innovation</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-200">Research Disclosures</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
