import React from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ProductShowcase } from './components/ProductShowcase';
import { AiInnovationSection } from './components/AiInnovationSection';
import { BenefitsImpactSection } from './components/BenefitsImpactSection';
import { PartnershipContactSection } from './components/PartnershipContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-charcoal-950 text-slate-100 relative selection:bg-emerald-500 selection:text-charcoal-950">
      {/* Floating Particle & Subtle Leaf Canvas */}
      <ParticleBackground />

      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* Hero Section */}
        <Hero />

        {/* The Problem Section */}
        <ProblemSection />

        {/* Our Solution Section */}
        <SolutionSection />

        {/* Product Showcase */}
        <ProductShowcase />

        {/* AI & Innovation Section */}
        <AiInnovationSection />

        {/* Benefits & Impact Section */}
        <BenefitsImpactSection />

        {/* Partnerships & Contact Form */}
        <PartnershipContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
