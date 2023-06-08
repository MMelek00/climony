export interface Topic {
  id: string;
  name: string;
}
export interface Category {
  id: string;
  category: string;
  title: string;
  description: string;
  articles: Articles[];
}
export interface Articles {
  id: string;
  title: string;
  shortDescription: string;
  readingTime: number;
  image: string | null;
}
export interface Article {
  id: string;
  description: string;
  publishedAt: number;
}
