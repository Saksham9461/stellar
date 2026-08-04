export interface Service {
  id: string;
  title: string;
  subtitle: string;
  icon: string; // Lucide icon name
  overview: string;
  benefits: string[];
  features: string[];
  process: { step: string; description: string }[];
  techUsed: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: string[];
  imageUrl: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  publishedAt: string;
  readTime: string;
  excerpt: string;
  content: string; // Markdown or detailed text
  imageUrl: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  content: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TimelineStep {
  phase: string;
  title: string;
  description: string;
  details: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  avatarUrl: string;
  bio: string;
  linkedin: string;
}
