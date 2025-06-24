import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'Безопасно ли играть в криптоказино?',
      answer: 'Да, если выбирать лицензированные платформы с проверенной репутацией. Мы рекомендуем только те казино, которые прошли нашу проверку на безопасность, имеют действующие лицензии и положительные отзывы пользователей.'
    },
    {
      id: '2',
      question: 'Как получить бонус без депозита?',
      answer: 'Бонусы без депозита обычно начисляются автоматически после регистрации или по промокоду. Некоторые казино требуют верификацию номера телефона или email. Внимательно читайте условия отыгрыша бонуса.'
    },
    {
      id: '3',
      question: 'Какие криптовалюты принимают казино?',
      answer: 'Большинство современных криптоказино принимают Bitcoin (BTC), Ethereum (ETH), Tether (USDT), Litecoin (LTC). Некоторые также поддерживают TON, Dogecoin и другие популярные криптовалюты.'
    },
    {
      id: '4',
      question: 'Нужна ли верификация в криптоказино?',
      answer: 'Многие криптоказино позволяют играть без верификации при использовании криптовалют. Однако для крупных выводов или при подозрительной активности может потребоваться подтверждение личности.'
    },
    {
      id: '5',
      question: 'Как быстро происходят выплаты?',
      answer: 'В криптоказино выплаты обычно обрабатываются в течение нескольких минут до нескольких часов. Скорость зависит от выбранной криптовалюты и загруженности блокчейн-сети.'
    },
    {
      id: '6',
      question: 'Что такое Web3 казино?',
      answer: 'Web3 казино - это децентрализованные игровые платформы, работающие на блокчейне. Они обеспечивают полную прозрачность игрового процесса, анонимность и возможность подключения криптокошельков напрямую.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full border border-purple-400/30 backdrop-blur-sm mb-6">
            <HelpCircle className="w-4 h-4 text-cyan-400 mr-2 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">Часто задаваемые вопросы</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              FAQ
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ответы на популярные вопросы о криптоказино и игровых платформах
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/20 transition-colors duration-300 rounded-2xl"
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {item.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              </button>
              
              {openItems.includes(item.id) && (
                <div className="px-6 pb-4 animate-slide-up">
                  <div className="border-t border-gray-700/50 pt-4">
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl border border-purple-400/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Не нашли ответ на свой вопрос?
            </h3>
            <p className="text-gray-300 mb-6">
              Свяжитесь с нашей службой поддержки в Telegram
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-medium text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 glow-button hover:scale-105 transform">
              Написать в поддержку
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;