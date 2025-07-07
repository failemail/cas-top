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
        title="Портфолио Web3 проектов | Инновационные решения 2025"
        description="Портфолио инновационных Web3 проектов, ИИ решений и игровых технологий. Создаем будущее цифровых технологий с экспертными статьями и кейсами."
        keywords="web3 портфолио, блокчейн проекты, ai разработка, игровые технологии, криптоказино, defi проекты, nft платформы"
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