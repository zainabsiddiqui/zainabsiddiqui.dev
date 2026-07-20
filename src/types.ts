export interface KeyConfig {
  label: string;
  letter?: string;
  section?: Section;
  variant: 'base' | 'accent' | 'sakura' | 'art';
  stretch?: boolean;
}

export interface Tab {
    key: Section;
    fileLabel: string;
}

export type Section = "hero" | "experience" | "projects" | "contact" | "about" | "blog" | "résumé";