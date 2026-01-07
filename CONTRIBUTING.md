# Contributing

Thanks for taking a look — this repo is meant to stay small, friendly, and easy to remix.

## Local setup

```bash
npm install
npm run dev
```

## Useful scripts

- `npm run build` — typecheck + production build
- `npm run preview` — serve the production build locally
- `npm run lint` — ESLint
- `npm run format` — Prettier

## Project conventions

- **Single source of truth:** site identity lives in `src/config/site.ts`, and page copy/lists live in `src/config/content.ts`.
- **Components vs sections:**
  - `src/sections/` for top-level landing page sections
  - `src/components/` for shared UI building blocks
  - `src/shared/` for utilities/hooks (no app-specific copy)
- **Accessibility:** keep semantic landmarks, visible focus styles, and `prefers-reduced-motion` support.

## Pull requests

- Keep changes focused and easy to review.
- Include a short description and screenshots/GIFs for UI changes.
- If you add motion or 3D, ensure there’s a reduced-motion fallback and it doesn’t block initial render.

