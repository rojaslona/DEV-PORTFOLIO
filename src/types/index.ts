export interface Track {
  id: string;
  title: string;
  artist: string; // project owner / organization / client
  role: TrackRole[];
  year?: number;
  genre?: string; // project domain or category
  audioFile?: File; // unused for tech projects
  audioUrl?: string; // unused for tech projects
  coverImage?: string;
  description?: string;
  links: MusicPlatformLinks; // repurposed for repo/live/docs
  tags: string[];
  // Optional MP3 preview file path (unused for tech projects)
  previewMp3?: string;
}

// Tech-focused roles (replacing producer/mixer/masterer/recording_engineer)
export type TrackRole = 'frontend' | 'backend' | 'fullstack' | 'devops';

// Repurposed for tech links (neutral names)
export interface MusicPlatformLinks {
  repo?: string;    // repository or code URL (neutral name, not specific to GitHub)
  github?: string;  // explicitly support components that use `links.github`
  liveDemo?: string;
  docs?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  price?: string;
  features: string[];
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  socialMedia: SocialMediaLinks;
}

export interface SocialMediaLinks {
  instagram?: string;
  twitter?: string;
  linkedin?: string;
  youtube?: string;
  soundcloud?: string;
}

export interface Bio {
  name: string;
  title: string;
  description: string;
  profileImage?: string;
  achievements: string[];
  experience: Experience[];
}

export interface Experience {
  id: string;
  title: string;
  company?: string;
  period: string;
  description: string;
}

export type Theme = 'light' | 'dark';