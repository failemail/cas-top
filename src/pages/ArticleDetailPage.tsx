import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Tag, TrendingUp, Shield, Zap, Cpu, Smartphone, DollarSign } from 'lucide-react';
import { articles } from '../data/articles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Early return if no slug
  if (!slug) {
    return <Navigate to="/articles" replace />;
  }
  
  const article = articles.find(a => a.slug === slug);

  // Early return if article not found
  if (!article) {
    return <Navigate to="/articles" replace />;
  }

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

  // Related articles (same category, excluding current)
  const relatedArticles = articles
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <>
      <SEOHead
        title={`${article.title} | Web3 Казино Статьи`}
        description={article.excerpt}
        keywords={article.tags.join(', ')}
        image={article.image}
        url="https://cas-top.ru"
        type="article"
        author={article.author}
        publishedTime={new Date(article.date).toISOString()}
        section={article.category}
        tags={article.tags}
      />
      
      <Header />
      
      <div className="min-h-screen bg-slate-900 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/articles"
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-8 animate-slide-up"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Назад к статьям</span>
          </Link>

          {/* Article Header */}
          <article className="mb-8">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6 animate-slide-up animation-delay-300">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full border backdrop-blur-sm flex items-center space-x-1 ${getCategoryColor(article.category)}`}>
                {getCategoryIcon(article.category)}
                <span className="text-xs font-medium">{article.category}</span>
              </div>
            </div>

            <header className="mb-8 animate-slide-up animation-delay-500">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {article.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-6">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-700/50 rounded-lg text-sm text-gray-300 border border-gray-600/50 hover:border-cyan-400/50 transition-colors duration-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                {article.excerpt}
              </p>
            </header>

            {/* Article Content */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 p-8 mb-12 animate-slide-up animation-delay-600">
              <div 
                className="prose prose-lg max-w-none text-gray-300 prose-headings:text-white prose-headings:font-bold prose-h3:text-xl prose-h3:text-cyan-400 prose-strong:text-white prose-ul:text-gray-300 prose-li:text-gray-300 prose-p:leading-relaxed prose-p:mb-4"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </div>
          </article>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <section className="mb-12 animate-slide-up animation-delay-900">
              <h2 className="text-2xl font-bold text-white mb-6">Похожие статьи</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle, index) => (
                  <Link
                    key={relatedArticle.id}
                    to={`/articles/${relatedArticle.slug}`}
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden hover:transform hover:scale-105 animate-slide-up"
                    style={{ animationDelay: `${1000 + index * 200}ms` }}
                  >
                    <div className="relative h-32 overflow-hidden">
                      <img
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2 mb-2">
                        {relatedArticle.title}
                      </h3>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span>{relatedArticle.author}</span>
                        <span>{relatedArticle.readTime}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* CTA */}
          <div className="text-center animate-slide-up animation-delay-1000">
            <Link
              to="/articles"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 glow-button hover:scale-105 transform"
            >
              <span>Читать другие статьи</span>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ArticleDetailPage;