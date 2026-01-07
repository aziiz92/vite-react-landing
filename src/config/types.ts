export type SocialLink = {
  name: string;
  url: string;
};

export type NavLink = {
  label: string;
  href: string;
  enabled: boolean;
};

export type FooterLink = {
  label: string;
  href: string;
};

export type SeoConfig = {
  title: string;
  description: string;
  ogImagePath: string;
  url?: string;
};

export type SiteConfig = {
  siteName: string;
  tagline: string;
  description: string;
  authorName?: string;

  primaryColor: string;
  secondaryColor?: string;
  accentColor: string;
  background: string;
  gradient: string;

  socials: SocialLink[];
  navLinks: NavLink[];
  footerLinks: FooterLink[];

  seo?: SeoConfig;
  repo?: {
    url: string;
    useTemplateUrl?: string;
  };
  features?: {
    enable3dHero?: boolean;
  };
  fonts?: {
    sans?: string;
    mono?: string;
  };
};

export type CtaLink = {
  label: string;
  href: string;
};

export type HeroSectionContent = {
  id: string;
  enabled: boolean;
  headline: string;
  subheadline: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
  stats?: { label: string; value: string }[];
};

export type SocialProofSectionContent = {
  id: string;
  enabled: boolean;
  title: string;
  note?: string;
  logos: string[];
};

export type FeaturesSectionContent = {
  id: string;
  enabled: boolean;
  title: string;
  description?: string;
  items: { title: string; description: string }[];
};

export type HowItWorksSectionContent = {
  id: string;
  enabled: boolean;
  title: string;
  description?: string;
  steps: { title: string; description: string }[];
};

export type TestimonialsSectionContent = {
  id: string;
  enabled: boolean;
  title: string;
  description?: string;
  items: { quote: string; name: string; role: string; company: string }[];
};

export type FaqSectionContent = {
  id: string;
  enabled: boolean;
  title: string;
  description?: string;
  items: { question: string; answer: string }[];
};

export type CtaSectionContent = {
  id: string;
  enabled: boolean;
  title: string;
  description?: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
};

export type FooterSectionContent = {
  id: string;
  enabled: boolean;
};

export type PatternsSectionContent = {
  id: string;
  enabled: boolean;
  title: string;
  description?: string;
  items: {
    title: string;
    description: string;
    bullets: string[];
    highlighted?: boolean;
  }[];
};

export type TechSectionContent = {
  id: string;
  enabled: boolean;
  title: string;
  description?: string;
  bullets: { title: string; description: string }[];
};

export type ContentConfig = {
  hero: HeroSectionContent;
  socialProof: SocialProofSectionContent;
  features: FeaturesSectionContent;
  howItWorks: HowItWorksSectionContent;
  testimonials: TestimonialsSectionContent;
  faq: FaqSectionContent;
  cta: CtaSectionContent;
  footer: FooterSectionContent;

  // Optional/extra sections
  patterns?: PatternsSectionContent;
  tech?: TechSectionContent;
};

