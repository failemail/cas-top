import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="CASTOP - Лучшие криптоказино 2025 | Бонусы до 1000 USDT"
        description="Лучшие криптоказино 2025 года. Monro, IRWIN, FLAGMAN - проверенные платформы с бонусами до 1000 USDT, мгновенными выплатами и без верификации."
        keywords="castop, криптоказино, monro casino, irwin casino, flagman casino, бонус без депозита, bitcoin casino, usdt casino, telegram casino"
        url="https://cas-top.ru"
      />
      <Header />
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;