import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TopCasinos from '../components/TopCasinos';
import BonusCalculator from '../components/BonusCalculator';
import Reviews from '../components/Reviews';
import NewsSection from '../components/NewsSection';
import FAQ from '../components/FAQ';
import SEOContent from '../components/SEOContent';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead />
      <Header />
      <Hero />
      <TopCasinos />
      <BonusCalculator />
      <Reviews />
      <NewsSection />
      <FAQ />
      <SEOContent />
      <Footer />
    </>
  );
};

export default HomePage;