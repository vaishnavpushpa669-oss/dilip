import { ReactNode } from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  longDescription?: string;
  features?: string[];
}

export interface Skill {
  name: string;
  icon: ReactNode;
  level: number;
}
