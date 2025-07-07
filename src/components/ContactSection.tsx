import React, { useState } from 'react';
import { Send, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@portfolio.dev',
      description: 'Напишите нам для обсуждения проекта'
    },
    {
      icon: MessageCircle,
      title: 'Telegram',
      value: '@portfolio_support',
      description: 'Быстрая связь в мессенджере'
    },
    {
      icon: MapPin,
      title: 'Локация',
      value: 'Удаленная работа',
      description: 'Работаем с клиентами по всему миру'
    },
    {
      icon: Clock,
      title: 'Время ответа',
      value: '24 часа',
      description: 'Отвечаем на все запросы в течение суток'
    }
  ];

  const subjects = [
    'Разработка Web3 проекта',
    'Консультация по ИИ',
    'Мобильное приложение',
    'VR/AR решение',
    'Аудит кода',
    'Другое'
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6">
            <Send className="w-4 h-4 text-cyan-400 mr-2 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">Свяжитесь с нами</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Начнем сотрудничество
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Готовы воплотить вашу идею в жизнь? Расскажите нам о вашем проекте
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 p-8 animate-slide-up">
            <h3 className="text-2xl font-bold text-white mb-6">Отправить сообщение</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600/50 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600/50 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Тема обращения *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600/50 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors"
                >
                  <option value="">Выберите тему</option>
                  {subjects.map((subject, index) => (
                    <option key={index} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Сообщение *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-gray-600/50 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Расскажите подробнее о вашем проекте..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-medium text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 glow-button hover:scale-105 transform flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Отправить сообщение</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up animation-delay-300">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-xl border border-purple-400/30 flex items-center justify-center group-hover:border-cyan-400/50 transition-colors duration-300">
                      <info.icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                      <p className="text-cyan-400 font-medium mb-1">{info.value}</p>
                      <p className="text-gray-400 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 p-8">
              <h3 className="text-xl font-bold text-white mb-4">Часто задаваемые вопросы</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-medium mb-2">Сколько времени занимает разработка?</h4>
                  <p className="text-gray-400 text-sm">Время разработки зависит от сложности проекта. Обычно от 2 до 12 недель.</p>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Предоставляете ли вы поддержку?</h4>
                  <p className="text-gray-400 text-sm">Да, мы предоставляем техническую поддержку и обновления для всех наших проектов.</p>
                </div>
                
                <div>
                  <h4 className="text-white font-medium mb-2">Работаете ли вы с международными клиентами?</h4>
                  <p className="text-gray-400 text-sm">Конечно! Мы работаем с клиентами по всему миру в удаленном формате.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;