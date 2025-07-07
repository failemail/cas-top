import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Play, Calendar, User, Tag } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
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

  return (
    <div
      className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 animate-slide-up"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        
        {/* Status Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full border backdrop-blur-sm flex items-center space-x-1 ${getStatusColor(project.status)}`}>
          <div className="w-2 h-2 rounded-full bg-current animate-pulse"></div>
          <span className="text-xs font-medium">{getStatusText(project.status)}</span>
        </div>

        {/* Category Badge */}
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full border backdrop-blur-sm flex items-center space-x-1 ${getCategoryColor(project.category)}`}>
          <Tag className="w-3 h-3" />
          <span className="text-xs font-medium">{project.category}</span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute bottom-4 left-4 px-3 py-1 bg-gradient-to-r from-yellow-600/80 to-orange-600/80 rounded-full border border-yellow-400/30 backdrop-blur-sm">
            <span className="text-yellow-200 text-xs font-medium">⭐ Рекомендуемый</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-gray-400">
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{project.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(project.updatedAt).toLocaleDateString('ru-RU')}</span>
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-slate-700/50 rounded-lg text-xs text-gray-300 border border-gray-600/50 hover:border-cyan-400/50 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-slate-700/50 rounded-lg text-xs text-gray-400">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
          <Link
            to={`/projects/${project.slug}`}
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium text-sm"
          >
            Подробнее →
          </Link>
          
          <div className="flex items-center space-x-2">
            {project.demoUrl && (
              <button
                onClick={() => window.open(project.demoUrl, '_blank')}
                className="p-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg border border-purple-400/30 text-cyan-400 hover:text-cyan-300 hover:border-cyan-400/50 transition-all duration-300 hover:scale-110 transform"
                title="Демо"
              >
                <Play className="w-4 h-4" />
              </button>
            )}
            {project.githubUrl && (
              <button
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="p-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-lg border border-purple-400/30 text-gray-400 hover:text-white hover:border-gray-400/50 transition-all duration-300 hover:scale-110 transform"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;