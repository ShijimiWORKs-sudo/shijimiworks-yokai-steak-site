export type Brand = "shijimiworks" | "youkai-steak" | "both";
export type WorkStatus = "Planning" | "In Progress" | "Publishing" | "Improving" | "Complete";

export interface Work {
  slug: string;
  title: string;
  category: string;
  status: WorkStatus;
  description: string;
  brand: Brand;
  details: string;
  content: string[];
  tags: string[];
  date: string;
  links: Array<{ label: string; href: string }>;
}

export interface Article {
  slug: string;
  title: string;
  category: string;
  brand: Brand;
  excerpt: string;
  date: string;
  body: string[];
  tags: string[];
}

export interface Service {
  title: string;
  description: string;
  tags: string[];
}

export interface ContactInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}
