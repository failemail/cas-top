import { Casino, Review } from '../types';

export const topCasinos: Casino[] = [
  {
    id: '1',
    name: 'Monro',
    logo: '🎰',
    bonus: '100% до 300 USDT',
    rating: 4.8,
    features: ['Без верификации', 'Быстрые выплаты', 'Web3 кошельки'],
    cryptoSupport: ['BTC', 'USDT', 'TON', 'ETH'],
    link: 'http://megaways2.com/c9d8bff37'
  },
  {
    id: '2',
    name: 'IRWIN',
    logo: '🎲',
    bonus: '150% до 1000 USDT',
    rating: 4.7,
    features: ['Telegram бот', 'Lightning Network', 'Русская поддержка'],
    cryptoSupport: ['BTC', 'USDT', 'TON'],
    link: 'http://megaways2.com/c545e526a'
  },
  {
    id: '3',
    name: 'FLAGMAN',
    logo: '🏆',
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
    text: 'Отличное казино! Быстрые выплаты, много игр. Поддержка отвечает моментально. Рекомендую всем!',
    date: '15 января 2025',
    likes: 24,
    dislikes: 3,
    rating: 5
  },
  {
    id: '2',
    userName: 'Елена',
    avatar: '👩‍🦰',
    casinoName: 'IRWIN',
    text: 'Играю уже полгода, все честно. Бонусы реальные, отыгрываются нормально. Лучшие слоты и удобные платежки.',
    date: '12 января 2025',
    likes: 18,
    dislikes: 1,
    rating: 4
  },
  {
    id: '3',
    userName: 'Иван',
    avatar: '👨‍🔧',
    casinoName: 'Monro',
    text: 'Классные слоты! Особенно нравятся игры с джекпотами. Выиграл уже несколько раз приличные суммы.',
    date: '8 января 2025',
    likes: 31,
    dislikes: 2,
    rating: 5
  },
  {
    id: '4',
    userName: 'Мария',
    avatar: '👩‍💼',
    casinoName: 'STAKE',
    text: 'Лучшее казино для крипто! Провабли честные игры дают уверенность в честности. Интерфейс супер!',
    date: '5 января 2025',
    likes: 27,
    dislikes: 0,
    rating: 5
  },
  {
    id: '5',
    userName: 'Дмитрий',
    avatar: '👨‍🎓',
    casinoName: 'BC.GAME',
    text: 'Крутая фишка с NFT! Можно не только играть, но и коллекционировать. Бонусы огромные!',
    date: '2 января 2025',
    likes: 15,
    dislikes: 4,
    rating: 4
  },
  {
    id: '6',
    userName: 'Анна',
    avatar: '👩‍🎨',
    casinoName: 'RIOBET',
    text: 'Отличные живые дилеры! Чувствуешь себя как в настоящем казино. VIP программа очень выгодная.',
    date: '28 декабря 2024',
    likes: 22,
    dislikes: 1,
    rating: 5
  }
];