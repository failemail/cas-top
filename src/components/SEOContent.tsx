import React from 'react';
import { CheckCircle } from 'lucide-react';

const SEOContent: React.FC = () => {
  const benefits = [
    'Без верификации аккаунта',
    'Бонусные предложения до 500 USDT',
    'Мгновенные выводы средств',
    'Поддержка на русском языке',
    'Интеграция с Web3-кошельками'
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Лучшие игровые платформы 2025 года — подборка для пользователей из СНГ
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Мы отобрали проверенные игровые площадки, которые обеспечивают прозрачные условия, высокую скорость выплат и современную поддержку цифровых активов. Наш рейтинг 2025 года регулярно обновляется и помогает выбрать оптимальное решение как новичкам, так и опытным пользователям.
          </p>

          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-cyan-400">
            Преимущества платформ в списке:
          </h3>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            Мы не продвигаем азартные игры — наш проект носит исключительно информационный характер. Цель — помочь пользователям сделать осознанный выбор среди платформ с прозрачной политикой и отзывчивой поддержкой.
          </p>
          
          <div className="mt-8 p-6 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20">
            <h4 className="text-xl font-semibold text-white mb-4">Полезные ресурсы:</h4>
            <p className="text-gray-300 mb-3">
              Для получения дополнительной информации о казино и игровых платформах рекомендуем посетить:
            </p>
            <a 
              href="https://topikcas.ru/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              <span>TopikCas.ru - Независимые обзоры казино</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Keywords Section */}
          <div className="mt-12 p-6 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-2xl border border-purple-500/20">
            <h4 className="text-xl font-semibold text-white mb-4">Часто ищут:</h4>
            <div className="flex flex-wrap gap-3">
              {[
                'платформы без верификации',
                'бонус без депозита 2025',
                'цифровые игровые платформы',
                'мгновенные выплаты USDT',
                'Web3 совместимость',
                'USDT-игры онлайн',
                'Telegram-боты для игр',
                'анонимный доступ'
              ].map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-700/50 rounded-lg text-sm text-gray-300 border border-gray-600/50"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOContent;
