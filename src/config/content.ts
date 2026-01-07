import type { SiteLink } from "./site";
import { site } from "./site";

export const hero = {
  headline: "Build a modern landing fast.",
  subheadline:
    "A clean baseline for animated landing pages: small components, config-driven content, subtle motion, and an optional 3D ornament that never blocks first paint.",
  primaryCta: { label: "Use this template", href: "#cta" } satisfies SiteLink,
  secondaryCta: { label: "See what’s included", href: "#features" } satisfies SiteLink,
  stats: [
    { label: "Stack", value: "Vite + React + TS" },
    { label: "Styling", value: "Tailwind" },
    { label: "Extras", value: "Motion + optional 3D" },
  ],
};

export const socialProof = {
  title: "Logo wall (placeholder)",
  note: "Replace these with your project/client logos — or remove this section entirely.",
  logos: ["Project One", "Studio Two", "Open Source", "Example Co.", "Side Project", "Team"],
};

export type Feature = { title: string; description: string };
export const features: Feature[] = [
  {
    title: "Two config files to start",
    description:
      "Edit `src/config/site.ts` (brand, links, theme) and `src/config/content.ts` (copy + lists).",
  },
  {
    title: "Sections you can reorder",
    description:
      "The page is composed of small sections. Remove or rearrange without rebuilding a design system.",
  },
  {
    title: "Motion that respects users",
    description:
      "Animations are subtle and honor `prefers-reduced-motion` (Framer Motion is optional to remove).",
  },
  {
    title: "Optional 3D (lazy + isolated)",
    description:
      "The WebGL scene is deferred, lazy-loaded, and has a static fallback. Keep it, tweak it, or delete it.",
  },
  {
    title: "Accessible defaults",
    description: "Semantic landmarks, skip link, and focus-visible styles out of the box.",
  },
  {
    title: "Boring build output",
    description: "Static build via `npm run build` — deploy to any static host.",
  },
];

export type PatternCard = {
  title: string;
  description: string;
  bullets: string[];
  href?: string;
  highlighted?: boolean;
};

export const patterns: PatternCard[] = [
  {
    title: "Hero + optional 3D ornament",
    description: "Headline, subheadline, CTAs, and a visual that won’t block first paint.",
    bullets: ["Edit hero copy in `src/config/content.ts`", "Disable 3D with `site.features.enable3dHero`"],
    href: "#",
    highlighted: true,
  },
  {
    title: "Feature grid",
    description: "A simple “What’s included” section you can expand or replace.",
    bullets: ["Update `features[]` in `src/config/content.ts`", "Swap icons/illustrations as needed"],
    href: "#features",
  },
  {
    title: "FAQ + CTA",
    description: "Friendly defaults for open-source projects (links, usage, and next steps).",
    bullets: ["Keep answers short", "Link to docs/issues when helpful"],
    href: "#faq",
  },
];

export type Step = { title: string; description: string };
export const steps: Step[] = [
  {
    title: "Set the site",
    description: "Update name, links, theme colors, and meta in `src/config/site.ts`.",
  },
  {
    title: "Swap the copy",
    description:
      "Edit arrays in `src/config/content.ts` (features, patterns, FAQ, placeholder testimonials, etc.).",
  },
  {
    title: "Deploy anywhere",
    description:
      "Run `npm run build` and upload the `dist/` folder to Netlify (or any static host).",
  },
];

export const tech = {
  eyebrow: "Tech",
  title: "Modern stack, small surface area",
  description:
    "Vite + React + TypeScript, styled with Tailwind. Add motion where it helps. Keep everything else boring (in a good way).",
  bullets: [
    { title: "Fast by default", description: "Static output, CDN-friendly, minimal overhead." },
    { title: "Respectful UX", description: "Reduced motion support and accessible defaults." },
    { title: "Easy to maintain", description: "Small components and predictable data structures." },
  ],
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};
export const testimonials: Testimonial[] = [
  {
    quote:
      "Placeholder quote. Replace with a real testimonial (or remove the section) when you publish.",
    name: "Name",
    role: "Role",
    company: "Company",
  },
  {
    quote: "This section is here to show layout and rhythm. Swap with your own content.",
    name: "Name",
    role: "Role",
    company: "Company",
  },
  {
    quote: "Keep it honest: no fake metrics, no hard sell — just a clean starting point.",
    name: "Name",
    role: "Role",
    company: "Company",
  },
];

export type FAQItem = { question: string; answer: string };
export const faqs: FAQItem[] = [
  {
    question: "Where do I customize the brand?",
    answer:
      "Edit `src/config/site.ts`. It controls the name, links, CSS variables (colors/gradients/fonts), and SEO defaults.",
  },
  {
    question: "Does it support reduced motion?",
    answer:
      "Yes. Motion respects user settings, and the 3D ornament disables when `prefers-reduced-motion` is enabled.",
  },
  {
    question: "Is the 3D required?",
    answer:
      "No. It’s lazy-loaded, deferred, and has a static fallback. You can also disable it via `site.features.enable3dHero`.",
  },
  {
    question: "How do I deploy to Netlify?",
    answer:
      "Build with `npm run build`, set the publish directory to `dist`, and you’re done. No server required.",
  },
];

export const finalCta = {
  title: "Fork it and make it yours.",
  description:
    "This is a starter template — replace the copy, reorder sections, and drop in your own visuals. Keep what you need, delete the rest.",
  primaryCta: { label: "Use this template", href: site.repo.useTemplateUrl } satisfies SiteLink,
  secondaryCta: { label: "View the repo", href: site.repo.url } satisfies SiteLink,
};

