export type SiteLink = {
  label: string;
  href: string;
};

export type NavItem = SiteLink & {
  id: string;
};

export const site = {
  siteName: "Landing Starter",
  tagline: "Open-source landing page starter (Vite + React + TS + Tailwind).",
  description:
    "A free starter template for building animated landing pages with Vite, React, TypeScript, and Tailwind. Motion and 3D are optional.",
  author: {
    name: "Your Name",
    url: "https://github.com/your-handle",
  },
  repo: {
    url: "https://github.com/your-handle/vite-react-landing",
    useTemplateUrl: "https://github.com/your-handle/vite-react-landing/generate",
  },
  theme: {
    colors: {
      primary: "#A78BFA",
      secondary: "#38BDF8",
      accent: "#F472B6",
    },
    gradients: {
      hero: "radial-gradient(circle at 20% -10%, rgba(167, 139, 250, 0.28), transparent 55%), radial-gradient(circle at 90% 10%, rgba(56, 189, 248, 0.20), transparent 45%)",
      cta: "radial-gradient(circle at 15% 25%, rgba(244, 114, 182, 0.28), transparent 55%), radial-gradient(circle at 85% 30%, rgba(167, 139, 250, 0.22), transparent 55%)",
    },
    fonts: {
      // Swap to a hosted font per project (Fontsource, self-hosted, etc.).
      sans: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
      mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    },
  },
  nav: [
    { id: "features", label: "What’s included", href: "#features" },
    { id: "patterns", label: "Patterns", href: "#patterns" },
    { id: "how", label: "Customize", href: "#how" },
    { id: "tech", label: "Tech", href: "#tech" },
    { id: "faq", label: "FAQ", href: "#faq" },
  ] satisfies NavItem[],
  socials: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/" },
  ] satisfies SiteLink[],
  footerLinks: [
    { label: "Repository", href: "https://github.com/your-handle/vite-react-landing" },
    { label: "Contributing", href: "https://github.com/your-handle/vite-react-landing/blob/main/CONTRIBUTING.md" },
    { label: "License", href: "https://github.com/your-handle/vite-react-landing/blob/main/LICENSE" },
  ] satisfies SiteLink[],
  seo: {
    title: "Landing Starter — Animated landing template",
    description:
      "Open-source starter template for animated landing pages (Vite + React + TypeScript + Tailwind), with optional Motion and 3D.",
    ogImagePath: "/og.svg",
    url: "https://example.com",
  },
  features: {
    enable3dHero: true,
  },
} as const;

