export type ScrollDirection = "up" | "down" | "top";
export type Theme = "light" | "dark";

export interface NavLink {
  href: string;
  label: string;
}

export interface SocialLink {
  name: string;
  link: string;
  icon: string;
  label?: string;
  customIcon?: React.ReactNode;
}

export interface JourneyProject {
  name: string;
  description: string[];
}

export interface JourneyItem {
  title: string;
  institution: string;
  startDate?: string;
  endDate?: string;
  projects?: JourneyProject[];
  description?: string[];
}

export interface Project {
  title: string;
  description: string;
  repoLink: string;
  liveLink?: string;
  languages: string[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export function arrayCheck<T>(array: T[] | null | undefined): array is T[] {
  return (array?.length ?? 0) > 0;
}
