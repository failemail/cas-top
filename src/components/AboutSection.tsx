import React from 'react';
import { Users, Target, Award, Zap } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Команда экспертов', value: '10+' },
    { icon: Target, label: 'Завершенных проектов', value: '15+' },
    { icon: Award, label: 'Лет опыта', value: '5+' },
    { icon: Zap, label: 'Технологий', value: '20+' }
  ];

  const values = [
    {
      title: 'Инновации',
      description: 'Мы всегда на переднем крае технологий, внедряя самые современные решения в области Web3, ИИ и игровых технологий.',
      icon: '🚀'
    },
    {
      title: 'Качество',
      description: 'Каждый проект проходит тщательное тестирование и оптимизацию для обеспечения максимальной производительности.',
      icon: '⭐'
    },
    {
      title: 'Безопасность',
      description: 'Безопасность пользователей и их данных - наш главный приоритет во всех разрабатываемых решениях.',
      icon: '🔒'
    },
    {
      title: 'Сообщество',
      description: 'Мы строим не просто продукты, а целые экосистемы, объединяющие пользователей и разработчиков.',
      icon: '🤝'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6">
            <Users className="w-4 h-4 text-cyan-400 mr-2 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">О нашей команде</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Кто мы такие
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Команда экспертов, создающих будущее игровых технологий и Web3 решений
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-110 transition-transform duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl border border-purple-400/30 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 p-8 mb-16 animate-slide-up animation-delay-600">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Наша миссия</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Мы создаем инновационные решения, которые меняют представление о том, 
                как должны работать современные игровые платформы и Web3 приложения.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Наша цель - сделать блокчейн-технологии доступными и понятными для 
                каждого пользователя, создавая продукты, которые действительно улучшают жизнь людей.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-purple-600/20 via-cyan-600/20 to-blue-600/20 rounded-2xl border border-cyan-400/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-6xl animate-bounce-slow">🎯</div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400/30 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-500 p-6 group hover:transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${800 + index * 200}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team CTA */}
        <div className="text-center mt-16 animate-slide-up animation-delay-1000">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl border border-purple-400/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Присоединяйтесь к нашему сообществу
            </h3>
            <p className="text-gray-300 mb-6">
              Следите за нашими проектами и будьте в курсе последних новостей
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-medium text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 glow-button hover:scale-105 transform">
              Подписаться на обновления
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;