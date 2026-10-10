import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenPartnerModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Problem', href: '#problem' },
    { label: 'Our Solution', href: '#solution' },
    { label: 'Product Showcase', href: '#showcase' },
    { label: 'AI Innovation', href: '#innovation' },
    { label: 'Impact', href: '#impact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-charcoal-950/85 backdrop-blur-xl border-b border-forest-700/30 py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center space-x-3 group focus:outline-none"
            aria-label="EcoBrick AI Homepage"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-forest-900/80 border border-eco-bright/30 p-1 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-eco-accent group-hover:scale-105 shadow-md shadow-emerald-950/40">
              <img
                src="/ecobrick-logo.png"
                alt="EcoBrick AI Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback in case of image load delay
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-eco-bright/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                  EcoBrick <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-eco-bright">AI</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] uppercase font-mono font-bold tracking-wider bg-emerald-500/10 text-emerald-300 rounded border border-emerald-500/20">
                  R&D Pilot
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide hidden sm:block">
                Turn Waste Into Possibility
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-forest-900/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="#partners"
              onClick={(e) => scrollToSection(e, '#partners')}
              className="relative group px-4 py-2 text-sm font-semibold text-charcoal-950 bg-gradient-to-r from-lime-400 via-emerald-400 to-eco-bright rounded-xl shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center space-x-1.5 overflow-hidden"
            >
              <span className="relative z-10">Partner With Us</span>
              <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href="#partners"
              onClick={(e) => scrollToSection(e, '#partners')}
              className="px-3 py-1.5 text-xs font-semibold text-charcoal-950 bg-eco-bright rounded-lg"
            >
              Partner
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-charcoal-900 border border-forest-700/40 text-slate-200 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-charcoal-950/95 backdrop-blur-2xl border-b border-forest-700/40 px-5 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-forest-900/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-forest-800/40 flex flex-col space-y-2">
            <a
              href="#partners"
              onClick={(e) => scrollToSection(e, '#partners')}
              className="w-full py-3 text-center text-sm font-bold text-charcoal-950 bg-gradient-to-r from-lime-400 to-eco-bright rounded-xl shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Explore Partnership Program</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <p className="text-center text-[11px] text-slate-400 pt-1">
              Tagline: &ldquo;Turn Waste Into Possibility.&rdquo;
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
