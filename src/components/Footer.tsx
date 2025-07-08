import React from 'react';
import { Link } from 'react-router-dom';
import { Send, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Казино',
      links: [
        { label: 'Monro Casino', href: '/projects/monro-casino' },
        { label: 'IRWIN Casino', href: '/projects/irwin-casino' },
        { label: 'FLAGMAN Casino', href: '/projects/flagman-casino' },
        { label: 'Все казино', href: '/projects' }
      ]
    },
    {
      title: 'Ресурсы',
      links: [
        { label: 'Статьи', href: '/articles' },
        { label: 'О нас', href: '/#about' },
        { label: 'Контакты', href: '/#contact' },
        { label: 'Партнерский сайт', href: 'https://topikcas.ru/', external: true },
        { label: 'Политика конфиденциальности', href: '#' }
      ]
    }
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('mailto:')) {
      window.location.href = href;
    } else if (href.startsWith('https://')) {
      window.open(href, '_blank', 'noopener,noreferrer');
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
                CASTOP
              </span>
            </Link>
            <p className="text-gray-400 max-w-md">
              Лучшие криптоказино 2025 года с проверенной репутацией, мгновенными выплатами 
              и щедрыми бонусами. Играйте безопасно и выигрывайте больше.
            </p>
            
            {/* SEO Link */}
            <div className="pt-4">
              <p className="text-gray-500 text-sm mb-2">Рекомендуем также:</p>
              <a 
                href="https://topikcas.ru/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm underline"
              >
                TopikCas.ru - Обзоры и рейтинги казино
              </a>
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
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      >
                        {link.label}
                      </a>
                    ) : link.href.startsWith('/') ? (
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
            © {currentYear} CASTOP. Все права защищены.
          </p>
          <div className="flex items-center space-x-4">
            <a 
              href="https://topikcas.ru/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 text-xs"
            >
              Партнер: TopikCas.ru
            </a>
          </div>
          <p className="text-gray-500 text-xs">
            Создано с ❤️ для инновационного сообщества
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;