import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, TrendingUp, Zap, ExternalLink, BookOpen, Cpu, Smartphone } from 'lucide-react';

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
}

const NewsSection: React.FC = () => {
  const news: NewsItem[] = [
    {
      id: '1',
      title: 'ИИ в казино: персонализация игрового опыта',
      excerpt: 'Искусственный интеллект революционизирует онлайн-казино, создавая уникальный опыт для каждого игрока.',
      date: '18 января 2025',
      category: 'Технологии',
      readTime: '7 мин',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      slug: 'ai-powered-casino-games-2025'
    },
    {
      id: '2',
      title: 'Казино в метавселенной: будущее уже здесь',
      excerpt: 'Виртуальная реальность открывает новые горизонты для онлайн-казино. Погружение в цифровые миры игр.',
      date: '16 января 2025',
      category: 'Инновации',
      readTime: '8 мин',
      image: 'https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg',
      slug: 'metaverse-casino-virtual-reality'
    },
    {
      id: '3',
      title: 'Web3 казино: революция в онлайн-гейминге',
      excerpt: 'Блокчейн-технологии меняют индустрию азартных игр, предлагая прозрачность и децентрализацию.',
      date: '15 января 2025',
      category: 'Тренды',
      readTime: '8 мин',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg',
      slug: 'web3-casino-revolution'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Тренды':
        return <TrendingUp className="w-4 h-4" />;
      case 'Технологии':
        return <Zap className="w-4 h-4" />;
      case 'Инновации':
        return <Cpu className="w-4 h-4" />;
      case 'Мобильные':
        return <Smartphone className="w-4 h-4" />;
      default:
        return <Calendar className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Тренды':
        return 'text-cyan-400 bg-cyan-400/20 border-cyan-400/30';
      case 'Технологии':
        return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      case 'Инновации':
        return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'Мобильные':
        return 'text-pink-400 bg-pink-400/20 border-pink-400/30';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  return (
    <section id="news" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-full border border-orange-400/30 backdrop-blur-sm mb-6 animate-pulse">
            <Calendar className="w-4 h-4 text-orange-400 mr-2" />
            <span className="text-orange-400 text-sm font-medium">Свежие новости</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Новости индустрии
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Актуальная информация о трендах и изменениях в мире онлайн-гейминга
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Link
              key={item.id}
              to={`/articles/${item.slug}`}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 animate-slide-up block"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full border backdrop-blur-sm flex items-center space-x-1 ${getCategoryColor(item.category)}`}>
                  {getCategoryIcon(item.category)}
                  <span className="text-xs font-medium">{item.category}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{item.date}</span>
                  <span>{item.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-gray-700/50">
                  <span className="text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    Читать далее
                  </span>
                  <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12 space-y-4">
          <Link 
            to="/articles"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-medium text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 glow-button hover:scale-105 transform flex items-center space-x-2 mx-auto w-fit"
          >
            <BookOpen className="w-5 h-5" />
            <span>Все статьи о Web3 казино</span>
          </Link>
          <p className="text-gray-400 text-sm">
            Экспертные материалы, обзоры и аналитика
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;