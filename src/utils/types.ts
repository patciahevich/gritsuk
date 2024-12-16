export type BlogItem = {
  id: number;
  article?: string;
  url: string;
  title: string;
  content: Array<string | { title: string; clauses: string[] }>;
};

export type BlogData = BlogItem[];
