import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Filter, BookOpen } from 'lucide-react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const categories = ['all', 'Web3', 'Mobile', 'AI/ML', 'VR/AR'];
  const statuses = ['all', 'active', 'completed', 'in-progress'];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const statusMatch = selectedStatus === 'all' || project.status === selectedStatus;
    return categoryMatch && statusMatch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'all': return 'Все казино';
      case 'Web3': return 'Криптоказино';
      case 'Mobile': return 'Telegram';
      case 'AI/ML': return 'VIP';
      case 'VR/AR': return 'Live';
      default: return category;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'all': return 'Все статусы';
      case 'active': return 'Активные';
      case 'completed': return 'Завершенные';
      case 'in-progress': return 'В разработке';
      default: return status;
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6">
            <Briefcase className="w-4 h-4 text-cyan-400 mr-2 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">Наши казино</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Лучшие казино 2025
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Проверенные криптоказино с лучшими бонусами и мгновенными выплатами
          </p>
        </div>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mb-16 animate-slide-up animation-delay-300">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="mr-3">⭐</span>
              Топ казино
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="mb-12 animate-slide-up animation-delay-600">
          <div className="flex items-center space-x-4 mb-6">
            <Filter className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-semibold">Фильтры:</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Категория</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform text-sm ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white glow-button'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 border border-gray-600/50 hover:border-cyan-400/50'
                    }`}
                  >
                    {getCategoryLabel(category)}
                  </button>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Статус</label>
              <div className="flex flex-wrap gap-2">
                {statuses.map((status) => (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 transform text-sm ${
                      selectedStatus === status
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white glow-button'
                        : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 border border-gray-600/50 hover:border-cyan-400/50'
                    }`}
                  >
                    {getStatusLabel(status)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 animate-slide-up">
            <div className="text-gray-400 text-lg mb-4">
              Казино не найдены
            </div>
            <p className="text-gray-500">
              Попробуйте изменить фильтры поиска
            </p>
          </div>
        )}

        {/* CTA */}
        <div className="text-center animate-slide-up animation-delay-1000">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl border border-purple-400/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Начните играть прямо сейчас!
            </h3>
            <p className="text-gray-300 mb-6">
              Выберите казино и получите приветственный бонус до 1000 USDT
            </p>
            <Link
              to="/projects/irwin-casino"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 glow-button hover:scale-105 transform mr-4"
            >
              <span>🎲 IRWIN - 150% бонус</span>
            </Link>
            <Link
              to="/projects/flagman-casino"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-medium hover:from-orange-700 hover:to-red-700 transition-all duration-300 glow-button hover:scale-105 transform"
            >
              <span>🏆 FLAGMAN - 200% бонус</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;