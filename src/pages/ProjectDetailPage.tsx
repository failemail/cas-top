import React, { useEffect } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Tag, ExternalLink, Github, Play, Clock, Zap, Shield, TrendingUp } from 'lucide-react';
import { projects } from '../data/projects';
import { articles } from '../data/articles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEOHead from '../components/SEOHead';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  if (!slug) {
    return <Navigate to="/projects" replace />;
  }
  
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  useEffect(() => {
    const handlePopState = () => {
      // This will be handled by React Router automatically
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-400 bg-green-400/20 border-green-400/30';
      case 'completed':
        return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      case 'in-progress':
        return 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Активный';
      case 'completed':
        return 'Завершен';
      case 'in-progress':
        return 'В разработке';
      default:
        return status;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Web3':
        return 'text-purple-400 bg-purple-400/20 border-purple-400/30';
      case 'Mobile':
        return 'text-cyan-400 bg-cyan-400/20 border-cyan-400/30';
      case 'AI/ML':
        return 'text-pink-400 bg-pink-400/20 border-pink-400/30';
      case 'VR/AR':
        return 'text-blue-400 bg-blue-400/20 border-blue-400/30';
      default:
        return 'text-gray-400 bg-gray-400/20 border-gray-400/30';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Web3':
        return <Zap className="w-4 h-4" />;
      case 'Mobile':
        return <TrendingUp className="w-4 h-4" />;
      case 'AI/ML':
        return <Shield className="w-4 h-4" />;
      case 'VR/AR':
        return <Tag className="w-4 h-4" />;
      default:
        return <Tag className="w-4 h-4" />;
    }
  };

  // Related articles
  const relatedArticles = project.relatedProjects 
    ? articles.filter(article => project.relatedProjects?.includes(article.slug))
    : articles.filter(article => article.category === project.category).slice(0, 3);

  const handleBackClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <SEOHead
        title={project.seoTitle}
        description={project.seoDescription}
        keywords={project.seoKeywords.join(', ')}
        image={project.image}
        url="https://cas-top.ru"
        type="article"
        author={project.author}
        publishedTime={new Date(project.createdAt).toISOString()}
        modifiedTime={new Date(project.updatedAt).toISOString()}
        section={project.category}
        tags={project.tags}
      />
      
      <Header />
      
      <div className="min-h-screen bg-slate-900 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={handleBackClick}
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-8 animate-slide-up"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Назад</span>
          </button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Project Header */}
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6 animate-slide-up animation-delay-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full border backdrop-blur-sm flex items-center space-x-1 ${getCategoryColor(project.category)}`}>
                  {getCategoryIcon(project.category)}
                  <span className="text-xs font-medium">{project.category}</span>
                </div>

                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full border backdrop-blur-sm flex items-center space-x-1 ${getStatusColor(project.status)}`}>
                  <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
                  <span className="text-xs font-medium">{getStatusText(project.status)}</span>
                </div>
              </div>

              <header className="mb-8 animate-slide-up animation-delay-500">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {project.title}
                </h1>

                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-6">
                  <div className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>{project.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Обновлено: {new Date(project.updatedAt).toLocaleDateString('ru-RU')}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>Создан: {new Date(project.createdAt).toLocaleDateString('ru-RU')}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  {project.demoUrl && (
                    <button
                      onClick={() => window.open(project.demoUrl, '_blank')}
                      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 glow-button hover:scale-105 transform"
                    >
                      <Play className="w-5 h-5" />
                      <span>Демо</span>
                    </button>
                  )}
                  {project.githubUrl && (
                    <button
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex items-center space-x-2 px-6 py-3 border-2 border-gray-600 text-gray-300 rounded-xl font-medium hover:border-gray-500 hover:text-white transition-all duration-300 hover:scale-105 transform"
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub</span>
                    </button>
                  )}
                </div>
              </header>

              {/* Project Description */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 p-8 mb-8 animate-slide-up animation-delay-600">
                <div 
                  className="prose prose-lg max-w-none text-gray-300 prose-headings:text-white prose-headings:font-bold prose-h3:text-xl prose-h3:text-cyan-400 prose-strong:text-white prose-ul:text-gray-300 prose-li:text-gray-300 prose-p:leading-relaxed prose-p:mb-4"
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />
              </div>

              {/* Gallery */}
              {project.gallery && project.gallery.length > 1 && (
                <div className="mb-8 animate-slide-up animation-delay-700">
                  <h3 className="text-2xl font-bold text-white mb-6">Галерея</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {project.gallery.slice(1).map((image, index) => (
                      <div key={index} className="relative h-48 rounded-xl overflow-hidden group">
                        <img
                          src={image}
                          alt={`${project.title} - изображение ${index + 2}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Project Info */}
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 p-6 animate-slide-up animation-delay-800">
                <h3 className="text-xl font-bold text-white mb-6">Информация о проекте</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Особенности</h4>
                    <div className="space-y-2">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2 text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Технологии</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-slate-700/50 rounded-lg text-sm text-gray-300 border border-gray-600/50 hover:border-cyan-400/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Теги</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-purple-600/20 rounded text-xs text-purple-300 border border-purple-400/30"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 p-6 animate-slide-up animation-delay-900">
                  <h3 className="text-xl font-bold text-white mb-6">Связанные статьи</h3>
                  <div className="space-y-4">
                    {relatedArticles.map((article) => (
                      <Link
                        key={article.id}
                        to={`/articles/${article.slug}`}
                        className="block group"
                      >
                        <div className="flex space-x-3">
                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-16 h-16 rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2 mb-1">
                              {article.title}
                            </h4>
                            <div className="flex items-center justify-between text-xs text-gray-400">
                              <span>{article.author}</span>
                              <span>{article.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 animate-slide-up animation-delay-1000">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 glow-button hover:scale-105 transform"
            >
              <span>Вернуться на главную</span>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default ProjectDetailPage;