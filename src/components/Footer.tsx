import React from 'react';
import { Send, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Казино',
      links: ['О нас', 'Контакты', 'Ответственная игра']
    },
    {
      title: 'Поддержка',
      links: ['Политика конфиденциальности', 'Условия использования', 'FAQ']
    }
  ];

  return (
    <footer className="bg-slate-950 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Zap className="w-8 h-8 text-cyan-400" />
                <div className="absolute inset-0 w-8 h-8 text-cyan-400 animate-pulse"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                КАЗИНО
              </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Лучшие онлайн-казино с крипто-оплатой. Объективные обзоры, 
              честные бонусы и быстрые выплаты для игроков из СНГ.
            </p>
            
            {/* Telegram Support */}
            <button className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 glow-button">
              <Send className="w-5 h-5" />
              <span>Поддержка в Telegram</span>
            </button>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-white font-semibold">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © {currentYear} КАЗИНО. Все права защищены.
          </p>
          <p className="text-gray-500 text-xs">
            18+ Играйте ответственно. Политика конфиденциальности.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;