
export interface Subject {
  id: number
  name: string
  slug: string
  description: string
  chapters: number
  icon: string
  coverImage?: string   // optional — shows placeholder if absent
}

export interface Chapter {
  id: number;
  title: string;
  description: string;
  subjectId: number;
  topics: Topic[];
}

export interface Topic {
  id: number;
  title: string;
  content: string;
  chapterId: number;
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface Subject {
  id: number
  name: string
  slug: string
  description: string
  chapters: number
  icon: string
  coverImage?: string   // optional — shows placeholder if absent
}
