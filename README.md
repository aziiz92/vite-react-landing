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
	npm run init
	npm run dev
```

## Vibecoding Quickstart

```bash
# 1) Install
npm install

# 2) Personalize (name/colors/sections)
npm run init

# 3) Develop
npm run dev

# Optional: apply a preset (overwrites config files)
npm run preset -- agency
```

## Customize (single source of truth)

- Site identity + theme: `src/config/site.ts`
  - `siteName`, `tagline`, `description`, optional `authorName`
  - `primaryColor`, `accentColor`, `background`, `gradient` (mapped to CSS variables)
  - `navLinks`, `socials`, `footerLinks`
  - optional SEO defaults + feature flags (like `site.features.enable3dHero`)
- Page content + lists: `src/config/content.ts`
  - sections are typed objects with `id` + `enabled`
  - update copy/lists without touching components

## Customization checklist

- [ ] Run `npm run init` (or apply a preset)
- [ ] Update `src/config/site.ts` links (`socials`, `footerLinks`, `repo`, `seo`)
- [ ] Rewrite `src/config/content.ts` copy for your project
- [ ] Disable sections you don’t need (`enabled: false`)
- [ ] Replace `public/favicon.svg` and `public/og.svg`
- [ ] Reorder sections in `src/app/App.tsx` if needed

## Presets

Available presets live in `src/presets/`:

- `base`
- `creator`
- `startup`
- `agency`
- `product`

Apply one (overwrites `src/config/site.ts` + `src/config/content.ts`):

```bash
npm run preset -- creator
```

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

- [ ] Run `npm run init` (fastest path), or edit configs manually
- [ ] Update `site.siteName` + `site.tagline` in `src/config/site.ts`
- [ ] Update `site.seo.*` (especially `title`, `description`, `url`) and `site.repo.*`
- [ ] Replace links in `site.socials`, `site.navLinks`, and `site.footerLinks`
- [ ] Rewrite copy in `src/config/content.ts`
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
- `npm run init`
- `npm run preset -- <name>`
- `npm run lint`
- `npm run format`

## AI workflow helpers

- Guide: `docs/AI_GUIDE.md`
- Prompt pack: `prompts/`

## Credits

- Icons/illustrations are local to this repo (no external asset packs by default).
