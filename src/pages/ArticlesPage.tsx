import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Tag, TrendingUp, Shield, Zap, Cpu, Smartphone, DollarSign } from 'lucide-react';
import { articles } from '../data/articles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const ArticlesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', 'Технологии', 'Тренды', 'Безопасность', 'Инновации', 'DeFi', 'Мобильные'];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const featuredArticles = articles.filter(article => article.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Технологии':
        return <Zap className="w-4 h-4" />;
      case 'Тренды':
        return <TrendingUp className="w-4 h-4" />;
      case 'Безопасность':
        return <Shield className="w-4 h-4" />;
      case 'Инновации':
        return <Cpu className="w-4 h-4" />;
      case 'DeFi':
        return <DollarSign className="w-4 h-4" />;
      case 'Мобильные':
        return <Smartphone className="w-4 h-4" />;
      default:
        return <Tag className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Технологии':
        return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      case 'Тренды':
        return 'text-cyan-400 bg-cyan-400/20 border-cyan-400/30';
      case 'Безопасность':
        return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'Инновации':
        return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'DeFi':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      case 'Мобильные':
        return 'text-pink-400 bg-pink-400/20 border-pink-400/30';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  return (
    <>
      <SEOHead
        title="Статьи о Web3 казино 2025 | Экспертные обзоры и аналитика"
        description="Читайте экспертные статьи о Web3 казино, блокчейн-технологиях в гейминге, DeFi, NFT и криптовалютах. Актуальная аналитика и тренды 2025 года."
        keywords="Web3 казино статьи, блокчейн гейминг, DeFi казино, NFT игры, криптовалютные казино, TON казино, мобильные Web3 игры"
        url="https://cas-top.ru"
      />
      
      <Header />
      
      <div className="min-h-screen bg-slate-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 animate-slide-up">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Статьи о Web3 казино
                </span>
              </h1>
              <p className="text-gray-300">Экспертные материалы о будущем онлайн-гейминга</p>
            </div>
            
            <Link
              to="/"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 glow-button hover:scale-105 transform"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>На главную</span>
            </Link>
          </div>

          {/* Featured Articles */}
          {featuredArticles.length > 0 && (
            <div className="mb-12 animate-slide-up animation-delay-300">
              <h2 className="text-2xl font-bold text-white mb-6">Рекомендуемые статьи</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredArticles.slice(0, 4).map((article, index) => (
                  <Link
                    key={article.id}
                    to={`/articles/${article.slug}`}
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 block animate-slide-up"
                    style={{ animationDelay: `${400 + index * 200}ms` }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                      
                      <div className={`absolute top-4 left-4 px-3 py-1 rounded-full border backdrop-blur-sm flex items-center space-x-1 ${getCategoryColor(article.category)}`}>
                        {getCategoryIcon(article.category)}
                        <span className="text-xs font-medium">{article.category}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
                        {article.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <span>{article.author}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="mb-8 animate-slide-up animation-delay-600">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white glow-button'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 border border-gray-600/50 hover:border-cyan-400/50'
                  }`}
                >
                  {category === 'all' ? 'Все статьи' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <Link
                key={article.id}
                to={`/articles/${article.slug}`}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 animate-slide-up block"
                style={{ animationDelay: `${700 + index * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full border backdrop-blur-sm flex items-center space-x-1 ${getCategoryColor(article.category)}`}>
                    {getCategoryIcon(article.category)}
                    <span className="text-xs font-medium">{article.category}</span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-700/50">
                    <span className="text-sm text-gray-400">{article.author}</span>
                    <div className="flex flex-wrap gap-1">
                      {article.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Load More CTA */}
          <div className="text-center mt-12 animate-slide-up animation-delay-1000">
            <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl border border-purple-400/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Следите за обновлениями
              </h3>
              <p className="text-gray-300 mb-6">
                Новые статьи о Web3 технологиях и криптоказино каждую неделю
              </p>
              <Link
                to="/"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 glow-button hover:scale-105 transform"
              >
                <span>Вернуться на главную</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ArticlesPage;