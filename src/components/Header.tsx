import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, BookOpen, Briefcase } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { label: 'Проекты', href: '/#projects' },
    { label: 'Статьи', href: '/articles' },
    { label: 'О нас', href: '/#about' },
    { label: 'Контакты', href: '/#contact' }
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        const element = document.getElementById(href.substring(2));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  const handleProjectsClick = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#projects';
    } else {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleContactClick = () => {
    if (location.pathname !== '/') {
      window.location.href = '/#contact';
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="relative z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative">
              <Zap className="w-8 h-8 text-cyan-400" />
              <div className="absolute inset-0 w-8 h-8 text-cyan-400 animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              CASTOP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Projects Button */}
            <button
              onClick={handleProjectsClick}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-400/30 backdrop-blur-sm text-cyan-400 hover:text-cyan-300 transition-all duration-300 hover:scale-105 transform"
            >
              <Briefcase className="w-4 h-4" />
              <span className="font-medium">Проекты</span>
            </button>

            {/* Articles Button */}
            <Link
              to="/articles"
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full border border-orange-400/30 backdrop-blur-sm text-orange-400 hover:text-orange-300 transition-all duration-300 hover:scale-105 transform"
            >
              <BookOpen className="w-4 h-4" />
              <span className="font-medium">Статьи</span>
            </Link>
            
            {navigation.slice(2).map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item.label}
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </nav>

          {/* Contact Button */}
          <button 
            onClick={handleContactClick}
            className="hidden md:block px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 glow-button"
          >
            Связаться
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
              {/* Mobile Projects Button */}
              <button
                onClick={handleProjectsClick}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg border border-purple-400/30 backdrop-blur-sm text-cyan-400 hover:text-cyan-300 transition-all duration-300 w-fit"
              >
                <Briefcase className="w-4 h-4" />
                <span className="font-medium">Проекты</span>
              </button>

              {/* Mobile Articles Button */}
              <Link
                to="/articles"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg border border-orange-400/30 backdrop-blur-sm text-orange-400 hover:text-orange-300 transition-all duration-300 w-fit"
              >
                <BookOpen className="w-4 h-4" />
                <span className="font-medium">Статьи</span>
              </Link>
              
              {navigation.slice(2).map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-left"
                >
                  {item.label}
                </button>
              ))}
              
              <button 
                onClick={handleContactClick}
                className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 glow-button w-fit"
              >
                Связаться
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;