# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm start        # serve production build
```

No linter or test runner is configured.

## Architecture

**Next.js Pages Router** — no App Router. All routes live in `pages/`:
- `pages/index.js` — homepage, composes Navbar + Hero + WebAbout + Posts
- `pages/design.jsx` — internal design system reference (legacy colors/fonts, not the active theme)
- `pages/posts/first-post.js` — placeholder post page

**Components** (`components/`) are presentational only — no data fetching yet. Posts are hardcoded; no CMS or markdown integration exists.

**Styling** uses Tailwind CSS v3 + a small set of global utilities in `styles/globals.css`. Tailwind is imported through `pages/_app.js` → `globals.css` (not via `tailwindcss/tailwind.css` directly — deliberate workaround for a compatibility issue).

## Design Tokens

Dark editorial theme. Custom Tailwind colors (`tailwind.config.js`):

| Token | Value | Role |
|-------|-------|------|
| `ink` | `#0f0e0c` | body background |
| `ink-light` | `#161412` | alternate section bg |
| `ink-mid` | `#1e1b18` | card/button bg |
| `parchment` | `#e0d5c8` | main text |
| `parchment-muted` | `#8a7d71` | secondary text |
| `parchment-faint` | `#3f3830` | borders, very subtle text |
| `gold` | `#c9a96e` | accent |
| `divider` | `#252220` | border color |

Tailwind font families (`font-display`, `font-lora`) and CSS utility classes:

| Usage | Font |
|-------|------|
| `font-display` / `font-display` class | DM Serif Display (Google Fonts) |
| `font-lora` / body default | Lora (Google Fonts) |
| `.carlo` | Montecarlo (local TTF at `public/fonts/`) |
| `.roboto` | Roboto Mono |

## Known Constraints

- **Do not use `next/image`** — it has caused browser and terminal crashes in this project. Use plain `<img>` tags.
- **Do not use `@iconscout/react-unicons`** — incompatible with React 19. Use plain inline SVGs instead.
- No footer or social links yet — noted as pending work.
