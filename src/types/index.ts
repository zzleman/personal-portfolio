import { StaticImageData } from 'next/image';

export type PersonalInfoOption = 'bio' | 'work-experience' | 'education' | 'interests';

export interface ProjectData {
  number: number;
  title: string;
  img: string | StaticImageData;
  description: string;
  url: string;
  techStack?: string[];
}

export interface ApiResponse<T = unknown> {
  data?: T;
  status: number;
  message?: string;
  error?: string;
}

export interface ApiError {
  error: string;
  status: number;
  details?: unknown;
}

export interface TechStackItem {
  src: string;
  alt: string;
  category: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
  achievements: string[];
}

export interface EducationItem {
  text: string;
  date: string | null;
}

export interface CodeSnippet {
  language: string;
  code: string;
}

export * from './strapi';

