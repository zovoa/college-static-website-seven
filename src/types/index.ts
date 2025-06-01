export interface NavItem {
  title: string;
  path: string;
}

export interface CourseCard {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export interface SustainabilityInitiative {
  id: number;
  title: string;
  description: string;
  icon: string;
}