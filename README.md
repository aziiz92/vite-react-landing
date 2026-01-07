# vite-react-landing

A free, open-source starter template for building animated landing pages with Vite + React + TypeScript + Tailwind. Motion and 3D are included as optional patterns, not requirements.

## Who this is for

- Developers who want a fast, clean baseline for a landing page
- Folks who like editing config + copy (not wiring up a big UI framework)
- Anyone who wants motion/3D to be **opt-in** and respectful of user preferences

## What’s inside

- Vite + React + TypeScript
- Tailwind CSS
- Framer Motion (used lightly, respects reduced motion)
- React Three Fiber (optional hero ornament, lazy-loaded + has a fallback)

## Quickstart

```bash
npm install
npm run dev
```

## Customize (single source of truth)

- Site identity + theme: `src/config/site.ts`
  - `siteName`, `tagline`, author + socials
  - nav items + footer links
  - theme colors/gradients/fonts (applied as CSS variables)
  - SEO defaults (title/description/OG image/url)
  - optional flags like `site.features.enable3dHero`
- Page content + lists: `src/config/content.ts`
  - hero copy + CTAs
  - features/patterns/steps
  - FAQ + placeholder testimonials

## Accessibility + performance defaults

- `prefers-reduced-motion` is respected (motion reduces, 3D disables)
- 3D hero is **lazy-loaded** and deferred so it doesn’t block first paint
- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Focus-visible styles are enabled

## Deploy (Netlify)

1. Push your repo to GitHub
2. Create a new site in Netlify from your repo
3. Set:
   - Build command: `npm run build`
   - Publish directory: `dist`

## Template usage (GitHub)

Use GitHub’s **Use this template** button, or fork/clone normally.

Suggested rename checklist (after you clone):

- [ ] Update `site.siteName` + `site.tagline` in `src/config/site.ts`
- [ ] Update `site.seo.*` (especially `title`, `description`, `url`)
- [ ] Replace links in `site.repo`, `site.socials`, and `site.footerLinks`
- [ ] Swap hero/feature copy in `src/config/content.ts`
- [ ] Replace `public/favicon.svg` and `public/og.svg`
- [ ] Set `VITE_SITE_URL` in `.env` (optional, used for canonical/meta)

## Non-goals

- Not a full design system
- Not a CMS
- Not an app framework (auth, billing, dashboards, etc.)

## Scripts

- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run lint`
- `npm run format`

## Credits

- Icons/illustrations are local to this repo (no external asset packs by default).
