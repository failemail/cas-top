import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowLeft, Tag, TrendingUp, Shield, Zap } from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

const ArticlesPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const articles: Article[] = [
    {
      id: '1',
      title: 'Web3 казино: революция в онлайн-гейминге',
      excerpt: 'Как блокчейн-технологии меняют индустрию азартных игр и что это означает для игроков.',
      content: `
        <h3>Что такое Web3 казино?</h3>
        <p>Web3 казино представляют собой новое поколение игровых платформ, построенных на блокчейн-технологиях. В отличие от традиционных онлайн-казино, они предлагают полную прозрачность, децентрализацию и истинное владение цифровыми активами.</p>
        
        <h3>Ключевые преимущества</h3>
        <ul>
          <li><strong>Провабли честные игры</strong> - каждый результат можно проверить на блокчейне</li>
          <li><strong>Анонимность</strong> - не требуется KYC для большинства операций</li>
          <li><strong>Мгновенные выплаты</strong> - средства поступают на кошелек за секунды</li>
          <li><strong>Низкие комиссии</strong> - отсутствие посредников снижает затраты</li>
          <li><strong>Глобальная доступность</strong> - играйте из любой точки мира</li>
        </ul>
        
        <h3>Популярные блокчейны для казино</h3>
        <p>Ethereum остается лидером, но растет популярность Polygon, BSC и Solana благодаря низким комиссиям и высокой скорости транзакций.</p>
        
        <h3>Будущее Web3 казино</h3>
        <p>Эксперты прогнозируют, что к 2025 году Web3 казино займут значительную долю рынка онлайн-гейминга, особенно среди криптоэнтузиастов и молодой аудитории.</p>
      `,
      author: 'Алексей Криптов',
      date: '15 января 2025',
      readTime: '8 мин',
      category: 'Технологии',
      tags: ['Web3', 'Блокчейн', 'DeFi', 'Криптовалюты'],
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg',
      featured: true
    },
    {
      id: '2',
      title: 'TON казино: новая эра Telegram-игр',
      excerpt: 'Как The Open Network меняет ландшафт криптоказино и почему это важно.',
      content: `
        <h3>TON: блокчейн от создателей Telegram</h3>
        <p>The Open Network (TON) - это высокопроизводительный блокчейн, изначально разработанный командой Telegram. Сегодня он становится популярной платформой для Web3 казино.</p>
        
        <h3>Преимущества TON для казино</h3>
        <ul>
          <li><strong>Интеграция с Telegram</strong> - играйте прямо в мессенджере</li>
          <li><strong>Высокая скорость</strong> - до 1 миллиона транзакций в секунду</li>
          <li><strong>Низкие комиссии</strong> - транзакции стоят доли цента</li>
          <li><strong>Простота использования</strong> - знакомый интерфейс Telegram</li>
        </ul>
        
        <h3>Популярные TON казино</h3>
        <p>На платформе уже работают десятки казино, предлагающих слоты, покер, рулетку и другие игры. Многие интегрированы с Telegram-ботами для максимального удобства.</p>
        
        <h3>Безопасность и регулирование</h3>
        <p>TON казино используют смарт-контракты для обеспечения честности игр. Однако важно выбирать проверенные платформы с хорошей репутацией.</p>
      `,
      author: 'Мария Блокчейн',
      date: '12 января 2025',
      readTime: '6 мин',
      category: 'Тренды',
      tags: ['TON', 'Telegram', 'Мобильные игры'],
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg',
      featured: true
    },
    {
      id: '3',
      title: 'Как выбрать безопасное криптоказино в 2025',
      excerpt: 'Подробный гайд по выбору надежной платформы для игры с криптовалютами.',
      content: `
        <h3>Критерии выбора надежного казино</h3>
        <p>При выборе криптоказино важно учитывать множество факторов, чтобы обезопасить свои средства и получить качественный игровой опыт.</p>
        
        <h3>Лицензирование и регулирование</h3>
        <ul>
          <li>Проверьте наличие лицензии от признанных регуляторов</li>
          <li>Изучите информацию о компании-операторе</li>
          <li>Убедитесь в прозрачности условий использования</li>
        </ul>
        
        <h3>Техническая безопасность</h3>
        <ul>
          <li><strong>SSL-шифрование</strong> - защита данных при передаче</li>
          <li><strong>Двухфакторная аутентификация</strong> - дополнительная защита аккаунта</li>
          <li><strong>Холодное хранение</strong> - большая часть средств хранится офлайн</li>
          <li><strong>Аудит смарт-контрактов</strong> - проверка кода независимыми экспертами</li>
        </ul>
        
        <h3>Репутация и отзывы</h3>
        <p>Изучите отзывы других игроков, проверьте рейтинги на независимых сайтах, обратите внимание на скорость решения спорных вопросов.</p>
        
        <h3>Поддерживаемые криптовалюты</h3>
        <p>Выбирайте казино, которые поддерживают ваши предпочитаемые криптовалюты и предлагают разумные лимиты на депозиты и выводы.</p>
      `,
      author: 'Дмитрий Безопасность',
      date: '10 января 2025',
      readTime: '10 мин',
      category: 'Безопасность',
      tags: ['Безопасность', 'Выбор казино', 'Лицензии'],
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg',
      featured: false
    },
    {
      id: '4',
      title: 'NFT в казино: коллекционирование и игры',
      excerpt: 'Как невзаимозаменяемые токены меняют игровой опыт в Web3 казино.',
      content: `
        <h3>NFT революция в гейминге</h3>
        <p>Невзаимозаменяемые токены (NFT) открывают новые возможности в мире онлайн-казино, позволяя игрокам владеть уникальными цифровыми активами.</p>
        
        <h3>Применение NFT в казино</h3>
        <ul>
          <li><strong>Уникальные игровые предметы</strong> - карты, фишки, аватары</li>
          <li><strong>Коллекционные карточки</strong> - редкие предметы с особыми свойствами</li>
          <li><strong>VIP-статусы</strong> - эксклюзивные привилегии для держателей NFT</li>
          <li><strong>Игровые бонусы</strong> - дополнительные награды и мультипликаторы</li>
        </ul>
        
        <h3>Популярные NFT-казино</h3>
        <p>Такие платформы как Decentral Games, Sandbox Casino и другие предлагают уникальный опыт сочетания азартных игр и коллекционирования NFT.</p>
        
        <h3>Инвестиционный потенциал</h3>
        <p>Редкие игровые NFT могут значительно вырасти в цене, особенно если связанное с ними казино становится популярным.</p>
        
        <h3>Риски и предостережения</h3>
        <p>Помните, что рынок NFT волатилен, и стоимость токенов может как расти, так и падать. Инвестируйте только те средства, которые готовы потерять.</p>
      `,
      author: 'Анна NFT',
      date: '8 января 2025',
      readTime: '7 мин',
      category: 'Инновации',
      tags: ['NFT', 'Коллекционирование', 'Инвестиции'],
      image: 'https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg',
      featured: false
    },
    {
      id: '5',
      title: 'DeFi и казино: новые возможности заработка',
      excerpt: 'Как децентрализованные финансы интегрируются с игровыми платформами.',
      content: `
        <h3>Что такое DeFi-казино?</h3>
        <p>DeFi-казино объединяют азартные игры с децентрализованными финансовыми протоколами, предлагая игрокам новые способы заработка.</p>
        
        <h3>Основные возможности</h3>
        <ul>
          <li><strong>Стейкинг токенов</strong> - получайте пассивный доход</li>
          <li><strong>Ликвидность пулы</strong> - предоставляйте ликвидность и получайте комиссии</li>
          <li><strong>Yield farming</strong> - максимизируйте доходность через различные стратегии</li>
          <li><strong>Governance токены</strong> - участвуйте в управлении платформой</li>
        </ul>
        
        <h3>Популярные DeFi-казино</h3>
        <p>Такие платформы как Augur, FunFair и Edgeless предлагают уникальное сочетание игр и DeFi-возможностей.</p>
        
        <h3>Риски DeFi-казино</h3>
        <ul>
          <li>Смарт-контракт риски</li>
          <li>Непостоянные потери в ликвидности пулах</li>
          <li>Волатильность токенов</li>
          <li>Регуляторные риски</li>
        </ul>
        
        <h3>Советы для начинающих</h3>
        <p>Начните с небольших сумм, изучите механики протокола, диверсифицируйте риски и всегда делайте собственные исследования (DYOR).</p>
      `,
      author: 'Игорь DeFi',
      date: '5 января 2025',
      readTime: '9 мин',
      category: 'DeFi',
      tags: ['DeFi', 'Стейкинг', 'Yield Farming'],
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
      featured: false
    },
    {
      id: '6',
      title: 'Мобильные Web3 казино: игры в кармане',
      excerpt: 'Обзор лучших мобильных приложений для игры в криптоказино.',
      content: `
        <h3>Мобильная революция в Web3</h3>
        <p>Мобильные Web3 казино становятся все более популярными благодаря удобству и доступности. Теперь можно играть в любое время и в любом месте.</p>
        
        <h3>Преимущества мобильных казино</h3>
        <ul>
          <li><strong>Доступность 24/7</strong> - играйте когда удобно</li>
          <li><strong>Интуитивный интерфейс</strong> - оптимизация под сенсорные экраны</li>
          <li><strong>Push-уведомления</strong> - не пропустите бонусы и акции</li>
          <li><strong>Биометрическая защита</strong> - вход по отпечатку пальца</li>
        </ul>
        
        <h3>Лучшие мобильные Web3 казино</h3>
        <p>Рассмотрим топовые приложения, которые предлагают качественный игровой опыт на мобильных устройствах.</p>
        
        <h3>Технические требования</h3>
        <ul>
          <li>Современная версия iOS или Android</li>
          <li>Стабильное интернет-соединение</li>
          <li>Достаточно свободного места для приложения</li>
          <li>Поддержка Web3 кошельков</li>
        </ul>
        
        <h3>Безопасность на мобильных устройствах</h3>
        <p>Используйте только официальные приложения, регулярно обновляйте ПО, не играйте через публичный Wi-Fi и всегда блокируйте экран после игры.</p>
        
        <h3>Будущее мобильных Web3 казино</h3>
        <p>Ожидается интеграция с AR/VR технологиями, улучшенная графика и новые игровые механики, специально разработанные для мобильных устройств.</p>
      `,
      author: 'Елена Мобайл',
      date: '2 января 2025',
      readTime: '6 мин',
      category: 'Мобильные',
      tags: ['Мобильные игры', 'Приложения', 'UX/UI'],
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-147413.jpeg',
      featured: false
    }
  ];

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

  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-slate-900 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => setSelectedArticle(null)}
            className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Назад к статьям</span>
          </button>

          {/* Article Header */}
          <div className="mb-8">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              
              <div className={`absolute top-4 left-4 px-3 py-1 rounded-full border backdrop-blur-sm flex items-center space-x-1 ${getCategoryColor(selectedArticle.category)}`}>
                {getCategoryIcon(selectedArticle.category)}
                <span className="text-xs font-medium">{selectedArticle.category}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {selectedArticle.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm mb-6">
              <div className="flex items-center space-x-1">
                <User className="w-4 h-4" />
                <span>{selectedArticle.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{selectedArticle.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{selectedArticle.readTime}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {selectedArticle.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-700/50 rounded-lg text-sm text-gray-300 border border-gray-600/50"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Article Content */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 p-8">
            <div 
              className="prose prose-lg max-w-none text-gray-300 prose-headings:text-white prose-headings:font-bold prose-h3:text-xl prose-h3:text-cyan-400 prose-strong:text-white prose-ul:text-gray-300 prose-li:text-gray-300"
              dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Статьи о Web3 казино
              </span>
            </h1>
            <p className="text-gray-300">Экспертные материалы о будущем онлайн-гейминга</p>
          </div>
          
          <button
            onClick={onBack}
            className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 glow-button"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>На главную</span>
          </button>
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Рекомендуемые статьи</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <article
                  key={article.id}
                  className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden cursor-pointer hover:transform hover:scale-105"
                  onClick={() => setSelectedArticle(article)}
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
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white'
                    : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50'
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
            <article
              key={article.id}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-2xl border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-500 overflow-hidden cursor-pointer hover:transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedArticle(article)}
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
                        className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;