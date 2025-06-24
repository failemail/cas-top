import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TopCasinos from './components/TopCasinos';
import BonusCalculator from './components/BonusCalculator';
import Reviews from './components/Reviews';
import NewsSection from './components/NewsSection';
import FAQ from './components/FAQ';
import SEOContent from './components/SEOContent';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import FloatingElements from './components/FloatingElements';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 relative">
      <ParticleBackground />
      <FloatingElements />
      <div className="relative z-20">
        <Header />
        <Hero />
        <TopCasinos />
        <BonusCalculator />
        <Reviews />
        <NewsSection />
        <FAQ />
        <SEOContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;