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
    link: 'https://monro.casino/?ref=casino-review'
  },
  {
    id: '2',
    name: 'IRWIN',
    logo: '/irwin.png',
    bonus: '150% до 1000 USDT',
    rating: 4.7,
    features: ['Telegram бот', 'Lightning Network', 'Русская поддержка'],
    cryptoSupport: ['BTC', 'USDT', 'TON'],
    link: 'https://irwin.casino/?ref=casino-review'
  },
  {
    id: '3',
    name: 'FLAGMAN',
    logo: '/flagman.png',
    bonus: '200% до 750 USDT',
    rating: 4.6,
    features: ['Мгновенные выплаты', 'Анонимная игра', 'Mobile App'],
    cryptoSupport: ['USDT', 'BTC', 'DOGE', 'LTC'],
    link: 'https://flagman.casino/?ref=casino-review'
  },
  {
    id: '4',
    name: 'RIOBET',
    logo: '🎯',
    bonus: '125% до 500 USDT',
    rating: 4.5,
    features: ['Живые дилеры', 'Спортивные ставки', 'VIP программа'],
    cryptoSupport: ['BTC', 'USDT', 'ETH', 'LTC'],
    link: 'https://riobet.casino/?ref=casino-review'
  },
  {
    id: '5',
    name: 'STAKE',
    logo: '💎',
    bonus: '200% до 1000 USDT',
    rating: 4.9,
    features: ['Провабли честные игры', 'Стриминг', 'Турниры'],
    cryptoSupport: ['BTC', 'USDT', 'ETH', 'DOGE', 'LTC'],
    link: 'https://stake.com/?ref=casino-review'
  },
  {
    id: '6',
    name: 'BC.GAME',
    logo: '🚀',
    bonus: '300% до 20000 USDT',
    rating: 4.4,
    features: ['NFT интеграция', 'Метавселенная', 'Социальные функции'],
    cryptoSupport: ['BTC', 'USDT', 'TON', 'ETH', 'DOGE'],
    link: 'https://bc.game/?ref=casino-review'
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