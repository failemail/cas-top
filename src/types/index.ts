export interface Casino {
  id: string;
  name: string;
  logo: string;
  bonus: string;
  rating: number;
  features: string[];
  cryptoSupport: string[];
  link: string;
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

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  category: string;
  tags: string[];
  image: string;
  gallery: string[];
  features: string[];
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  status: 'active' | 'completed' | 'in-progress';
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  author: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

export interface Article {
  id: string;
  slug: string;
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
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  relatedProjects?: string[];
}

export interface PushNotification {
  id: string;
  title: string;
  message: string;
  icon: string;
  url: string;
  delay: number;
  enabled: boolean;
}