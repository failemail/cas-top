import React, { useState } from 'react';
import { Menu, X, Zap, BookOpen } from 'lucide-react';

interface HeaderProps {
  onArticlesClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onArticlesClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { label: 'Казино', href: '#casinos' },
    { label: 'Бонусы', href: '#bonuses' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'Новости', href: '#news' },
    { label: 'FAQ', href: '#faq' }
  ];

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLoginClick = () => {
    const casinosSection = document.getElementById('casinos');
    if (casinosSection) {
      casinosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleArticlesClick = () => {
    if (onArticlesClick) {
      onArticlesClick();
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative">
              <Zap className="w-8 h-8 text-cyan-400" />
              <div className="absolute inset-0 w-8 h-8 text-cyan-400 animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              КАЗИНО
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
            <button
              onClick={handleArticlesClick}
              className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              <BookOpen className="w-4 h-4" />
              <span>Статьи</span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
            </button>
          </nav>

          {/* Login Button */}
          <button 
            onClick={handleLoginClick}
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 glow-button"
          >
            Играть
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-500/20">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-left"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleArticlesClick}
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-left"
              >
                <BookOpen className="w-4 h-4" />
                <span>Статьи</span>
              </button>
              <button 
                onClick={handleLoginClick}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 glow-button w-fit"
              >
                Играть
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;