export interface Casino {
  id: string;
  name: string;
  logo: string;
  bonus: string;
  rating: number;
  features: string[];
  cryptoSupport: string[];
}

export interface Review {
  id: string;
  userName: string;
  avatar: string;
  casinoName: string;
  text: string;
  date: string;
  likes: number;
  dislikes: number;
  rating: number;
}

export interface Navigation {
  label: string;
  href: string;
}