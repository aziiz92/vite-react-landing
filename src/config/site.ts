import type { SiteConfig } from "./types";

export const site = {
  siteName: "Landing Starter",
  tagline: "Open-source landing page starter (Vite + React + TS + Tailwind).",
  description:
    "A free starter template for building modern landing pages with Vite, React, TypeScript, and Tailwind. Motion and 3D are optional.",
  authorName: "Your Name",

  primaryColor: "#A78BFA",
  secondaryColor: "#38BDF8",
  accentColor: "#F472B6",
  background: "#FFFFFF",
  gradient:
    "radial-gradient(circle at 20% -10%, rgba(167, 139, 250, 0.28), transparent 55%), radial-gradient(circle at 90% 10%, rgba(56, 189, 248, 0.20), transparent 45%)",

  socials: [
    { name: "GitHub", url: "https://github.com/" },
    { name: "X", url: "https://x.com/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/" },
  ],
  navLinks: [
    { label: "Features", href: "#features", enabled: true },
    { label: "How it works", href: "#how-it-works", enabled: true },
    { label: "Testimonials", href: "#testimonials", enabled: true },
    { label: "FAQ", href: "#faq", enabled: true },
    { label: "Patterns", href: "#patterns", enabled: false },
    { label: "Tech", href: "#tech", enabled: false },
  ],
  footerLinks: [
    { label: "Repository", href: "https://github.com/your-handle/vite-react-landing" },
    { label: "Contributing", href: "https://github.com/your-handle/vite-react-landing/blob/main/CONTRIBUTING.md" },
    { label: "License", href: "https://github.com/your-handle/vite-react-landing/blob/main/LICENSE" },
  ],

  repo: {
    url: "https://github.com/your-handle/vite-react-landing",
    useTemplateUrl: "https://github.com/your-handle/vite-react-landing/generate",
  },
  seo: {
    title: "Landing Starter — Config-driven landing template",
    description:
      "Open-source starter template for landing pages (Vite + React + TypeScript + Tailwind), with optional Motion and 3D.",
    ogImagePath: "/og.svg",
    url: "https://example.com",
  },
  features: {
    enable3dHero: true,
  },
  fonts: {
    // Swap to a hosted font per project (Fontsource, self-hosted, etc.).
    sans: 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
} as const satisfies SiteConfig;
