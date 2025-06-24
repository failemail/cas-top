import { Casino, Review } from '../types';

export const topCasinos: Casino[] = [
  {
    id: '1',
    name: 'Monro',
    logo: '/monro.png',
    bonus: '100% до 300 USDT',
    rating: 4.8,
    features: ['Без верификации', 'Быстрые выплаты', 'Web3 кошельки'],
    cryptoSupport: ['BTC', 'USDT', 'TON', 'ETH'],
    link: 'http://megaways2.com/c9d8bff37'
  },
  {
    id: '2',
    name: 'IRWIN',
    logo: '/irwin.png',
    bonus: '150% до 1000 USDT',
    rating: 4.7,
    features: ['Telegram бот', 'Lightning Network', 'Русская поддержка'],
    cryptoSupport: ['BTC', 'USDT', 'TON'],
    link: 'http://megaways2.com/c545e526a'
  },
  {
    id: '3',
    name: 'FLAGMAN',
    logo: '/flagman.png',
    bonus: '200% до 750 USDT',
    rating: 4.6,
    features: ['Мгновенные выплаты', 'Анонимная игра', 'Mobile App'],
    cryptoSupport: ['USDT', 'BTC', 'DOGE', 'LTC'],
    link: 'http://megaways2.com/c9d8bff37'
  }
];

export const userReviews: Review[] = [
  {
    id: '1',
    userName: 'Андрей',
    avatar: '👨‍💻',
    casinoName: 'FLAGMAN',
    text: 'Все бонусы выплачены.',
    date: '15 апреля 2025',
    likes: 24,
    dislikes: 3,
    rating: 5
  },
  {
    id: '2',
    userName: 'Елена',
    avatar: '👩‍🦰',
    casinoName: 'IRWIN',
    text: 'Все круто, лушие слоты и платежки',
    date: '2 марта 2025',
    likes: 18,
    dislikes: 1,
    rating: 4
  },
  {
    id: '3',
    userName: 'Иван',
    avatar: '👨‍🔧',
    casinoName: 'Monro',
    text: 'Классные слоты!',
    date: '8 января 2025',
    likes: 31,
    dislikes: 2,
    rating: 5
  }
];