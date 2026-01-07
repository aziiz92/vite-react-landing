# AI Guide (Codex/Cursor)

This repo is a config-driven landing page starter (Vite + React + TypeScript + Tailwind). The goal is to make edits safe, predictable, and easy to review.

## Architecture (high level)

- **Single source of truth**
  - Brand + links: `src/config/site.ts`
  - Section content + toggles: `src/config/content.ts`
- **Page composition**
  - `src/app/App.tsx` composes sections in order.
  - Each section component reads from `content` and returns `null` when `enabled === false`.
- **Sections**
  - Live in `src/sections/*.tsx`
  - Semantics: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- **Brand styling**
  - `src/app/providers/BrandProvider.tsx` maps `site.*` into CSS variables.
  - Tailwind uses those CSS vars (no UI framework).
- **Motion + 3D**
  - Framer Motion is used lightly and respects `prefers-reduced-motion`.
  - 3D is optional and gated (and should never be required for understanding the content).

## Where to edit (common)

- Update name, colors, gradient, links: `src/config/site.ts`
- Update hero/features/FAQ/etc: `src/config/content.ts`
- Reorder sections: `src/app/App.tsx`
- Enable/disable sections: `src/config/content.ts` (`enabled: true/false`)

## Rules for AI edits

- Do not add large UI frameworks (keep Tailwind + small components).
- Do not break the config shapes:
  - `site` must satisfy `SiteConfig` (`src/config/types.ts`)
  - `content` must satisfy `ContentConfig` (`src/config/types.ts`)
- Keep tone neutral and open-source friendly (no aggressive sales language).
- Respect accessibility and `prefers-reduced-motion` (motion should not be required to understand content).
- Keep 3D optional:
  - If 3D exists, keep it lazy-loaded and gated.
  - Never make 3D the only way to convey important information.
- Avoid heavy new dependencies; prefer Node built-ins for scripts.

## Common tasks

### Add a new section

1. Add a typed section entry in `src/config/types.ts` (if needed).
2. Add a new config object in `src/config/content.ts` with:
   - `id`, `enabled`, `title` (if relevant), and section fields.
3. Create `src/sections/MySection.tsx`:
   - Read from `content`
   - `if (!section.enabled) return null;`
   - Use `Section` + `Container` for consistent spacing.
4. Add it to `src/app/App.tsx` (order matters).
5. If it needs a nav link, add a `navLinks` entry in `src/config/site.ts`.

### Rename a nav link / anchor

- Update the section `id` in `src/config/content.ts` and the matching `href: "#id"` in `src/config/site.ts`.
- Keep IDs stable if you already published links.

### Create a new preset

1. Add `src/presets/<name>.json` with `{ site, content }`.
2. Add `src/presets/<name>.ts` that exports `site` and `content`.
3. Test:
   - `npm run preset -- <name>`
   - `npm run dev`

### Apply an existing preset

- `npm run preset -- agency`

### Personalize interactively

- `npm run init`

