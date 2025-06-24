import { Casino, Review } from '../types';

export const topCasinos: Casino[] = [
  {
    id: '1',
    name: 'CryptoCasino',
    logo: '🎰',
    bonus: '100% до 500 USDT',
    rating: 4.8,
    features: ['Без верификации', 'Быстрые выплаты', 'Web3 кошельки'],
    cryptoSupport: ['BTC', 'USDT', 'TON', 'ETH']
  },
  {
    id: '2',
    name: 'LuckySpin',
    logo: '🍀',
    bonus: '150% до 1000 USDT',
    rating: 4.7,
    features: ['Telegram бот', 'Lightning Network', 'Русская поддержка'],
    cryptoSupport: ['BTC', 'USDT', 'TON']
  },
  {
    id: '3',
    name: 'SpinWin',
    logo: '⭐',
    bonus: '200% до 750 USDT',
    rating: 4.6,
    features: ['Мгновенные выплаты', 'Анонимная игра', 'Mobile App'],
    cryptoSupport: ['USDT', 'BTC', 'DOGE', 'LTC']
  }
];

export const userReviews: Review[] = [
  {
    id: '1',
    userName: 'Андрей',
    avatar: '👨‍💻',
    casinoName: 'SpinWin',
    text: 'Способо ооожалетельно. Все бонусы, Выстлывые.',
    date: '15 апреля 2024',
    likes: 24,
    dislikes: 3,
    rating: 5
  },
  {
    id: '2',
    userName: 'Елена',
    avatar: '👩‍🦰',
    casinoName: 'CryptoCasino',
    text: 'Огень строимо воидньь даже, руля время.',
    date: '2 марта 2024',
    likes: 18,
    dislikes: 1,
    rating: 4
  },
  {
    id: '3',
    userName: 'Иван',
    avatar: '👨‍🔧',
    casinoName: 'LuckySpin',
    text: 'Казино в ужа денлико касяно рмотоапосьо!',
    date: '8 января 2024',
    likes: 31,
    dislikes: 2,
    rating: 5
  }
];