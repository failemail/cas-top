import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Zap, Github, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Проекты',
      links: [
        { label: 'Web3 платформы', href: '/projects?category=Web3' },
        { label: 'ИИ решения', href: '/projects?category=AI/ML' },
        { label: 'VR/AR проекты', href: '/projects?category=VR/AR' },
        { label: 'Мобильные приложения', href: '/projects?category=Mobile' }
      ]
    },
    {
      title: 'Ресурсы',
      links: [
        { label: 'Статьи', href: '/articles' },
        { label: 'О нас', href: '/#about' },
        { label: 'Контакты', href: '/#contact' },
        { label: 'Политика конфиденциальности', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('mailto:')) {
      window.location.href = href;
    }
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/portfolio_support', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-slate-950 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center space-x-2 cursor-pointer">
              <div className="relative">
                <Zap className="w-8 h-8 text-cyan-400" />
                <div className="absolute inset-0 w-8 h-8 text-cyan-400 animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                ПОРТФОЛИО
              </span>
            </Link>
            <p className="text-gray-400 max-w-md">
              Создаем инновационные Web3 решения, ИИ платформы и игровые технологии. 
              Экспертные статьи и кейсы для разработчиков и предпринимателей.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  onClick={() => window.open(social.href, '_blank')}
                  className="w-10 h-10 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg border border-purple-400/30 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 transform"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </button>
              ))}
            </div>
            
            {/* Telegram Support */}
            <button 
              onClick={handleTelegramClick}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 glow-button"
            >
              <Send className="w-5 h-5" />
              <span>Связаться в Telegram</span>
            </button>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-white font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleLinkClick(link.href)}
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-left"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} ПОРТФОЛИО. Все права защищены.
          </p>
          <p className="text-gray-500 text-xs">
            Создано с ❤️ для инновационного сообщества
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;