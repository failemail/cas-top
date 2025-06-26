import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ParticleBackground from './components/ParticleBackground';
import FloatingElements from './components/FloatingElements';
import SEOHead from './components/SEOHead';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 relative">
        <ParticleBackground />
        <FloatingElements />
        <div className="relative z-20">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/articles/:slug" element={<ArticleDetailPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;