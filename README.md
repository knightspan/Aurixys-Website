# Aurixys — Marketing Site (v1)

Production scaffold for the Aurixys public marketing site. Next.js 15 (App Router) · TypeScript (strict) · Tailwind CSS v4 · React Three Fiber · framer-motion · Radix Primitives.

The visual register is calibrated against **anduril.com** and **seasats.com** — monolithic black backgrounds, display-caps typography, hairline borders, hardware-as-art photography, dense spec tables.

---

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run typecheck
npm run lint
```

Node 20+ recommended.

## Environment

Copy `.env.example` to `.env.local`:

```
NEXT_PUBLIC_SITE_URL=https://aurixys.com
NEXT_PUBLIC_CONTACT_WEBHOOK=
```

If `NEXT_PUBLIC_CONTACT_WEBHOOK` is empty, `/api/contact` falls back to `console.log` — useful in development. Point it at a serverless endpoint (or a workflow webhook) before launch.

## Where things live

- `app/` — App Router routes. `page.tsx` is the long-scroll home; subpages live in `app/products/*`, `app/about`, `app/careers`, `app/press`, `app/legal/*`.
- `components/sections/` — every home-page section is its own file. Edit one, reload, done.
- `components/layout/` — `Header`, `Footer`, `MobileNav`, `ScrollProgress`, `ChatLauncher` (the floating "Talk to Aurixys" launcher rendering the ai-prompt-box on `/` only).
- `components/ui/` — design-system primitives. Currently hosts `ai-prompt-box.tsx`.
- `components/three/` — R3F vessel viewer with graceful PNG fallback.
- `components/icons/` — custom single-stroke capability icons + feature glyphs.
- `lib/data/` — all copy / content lives here. **Edit these to change site text without touching components.**
- `public/assets/` — drop-in slots for renders, footage, photos, logos. Each subfolder has a README explaining what's expected.

## Editing content

All site copy is content-decoupled. To change a capability description, edit `lib/data/capabilities.ts`. To add a press item, edit `lib/data/press.ts`. To change the nav, edit `lib/data/nav.ts`.

The Sanskrit shloka lives in `components/sections/Shloka.tsx` (and a second instance on `/about`) — preserved in Devanagari, rendered in Noto Serif Devanagari.

## Design tokens

Defined in `app/globals.css` under `@theme`. Colors, fonts, and the display typographic scale are exposed as Tailwind utilities:

- `bg-bg`, `bg-bg-elevated`, `bg-bg-panel`
- `text-ink`, `text-ink-dim`, `text-ink-mute`
- `text-accent` (electric cyan, used sparingly)
- `text-accent-warm`, `text-signal`, `text-warn`
- `font-display`, `font-sans`, `font-mono`, `font-deva`
- `text-d-xs … text-d-3xl` for the display scale (18 → 128px)

Borders are always `border-rule` (1px hairline). No glassmorphism, no gradients other than the page-bottom vignette utility (`.page-vignette`).

## 3D viewer

`components/three/VesselViewer.tsx` checks for `/assets/jal-prahari/jal-prahari.glb` at runtime (HEAD request). If it exists, it renders an interactive R3F + Drei scene (damped OrbitControls, `Stage` lighting, mild auto-rotate). If absent, it falls back to a styled placeholder. Drop a GLB to enable.

## Hero video

`components/sections/Hero.tsx` checks for `/assets/hero/jal-prahari-water.mp4` at mount. If present, plays muted + looped with `playsinline`. If absent, renders a styled background. A `prefers-reduced-motion: reduce` user gets the poster (or the fallback) — no autoplay.

## SEO

- `app/layout.tsx` sets default OpenGraph + Twitter card + JSON-LD Organization schema.
- `app/sitemap.ts` lists routes for `sitemap.xml`.
- `public/robots.txt` allows all.

## Accessibility

- Skip-to-content link in the header.
- Focus rings: 1px cyan with 2px offset on `*:focus-visible`.
- Hero video respects `prefers-reduced-motion`.
- All asset placeholders document what's expected so screen-reader and keyboard navigation aren't broken in development.

---

## Pending from Vishal

1. **Hero video** — `public/assets/hero/jal-prahari-water.mp4` (10–30s muted loop) + `jal-prahari-water-poster.jpg` (1920×1080 still).
2. **Vessel renders** — `public/assets/jal-prahari/hero-render-001.png` and `xray-render-001.png` (2400px wide, 3/4 angle, transparent backgrounds). Optional `jal-prahari.glb` to enable the R3F viewer.
3. **X-ray pin coordinates** — verify the percentage positions in `lib/data/jal-prahari.ts` (`JP_XRAY_PINS`) against the final exploded render and adjust.
4. **Photography** — team portraits (`public/assets/team/*.jpg`), mission images (`public/assets/missions/*.jpg`), award ceremony photo (`public/assets/recognition/award-ceremony.jpg`).
5. **Logos** — Aurixys wordmark asset (an SVG/PNG version of the header text-mark), and partner logos for Hindalco, Veolia, Cleantec Infra, Ministry of Jal Shakti, NIH Roorkee, DoWR-RD&GR. Drop into `public/assets/partners/`.
6. **Datasheet** — `public/assets/jal-prahari/jal-prahari-datasheet.pdf` for the public download.
7. **Privacy + Terms** — Indian DPDP-compliant text for `app/legal/privacy/page.tsx` and `app/legal/terms/page.tsx`.
8. **Press URLs** — once coverage lands, populate `lib/data/press.ts` with outlet, headline, date, href.
9. **LinkedIn company URL** — update the link in `components/layout/Footer.tsx` (currently `https://www.linkedin.com/company/aurixys`).
10. **OG image** — `public/assets/og/og-image.jpg` (1200×630).

## Open questions flagged in the brief

- **AI chat widget intent (RESOLVED — v1):** the `ai-prompt-box` component the user supplied is now wired as a floating "Talk to Aurixys" launcher on the home page only (`/`). It is currently visual-only — the `onSend` handler logs to console. Wire it to a real backend when ready (Anthropic API, internal webhook, or human triage inbox).
- **Quantitative claims marked `[FIGURE: TK]`** — none in v1. All quantitative copy in the brief was final and is rendered verbatim.

## Deploy

Designed for Vercel. Push to a connected repo and it ships. Set `NEXT_PUBLIC_SITE_URL` and (optionally) `NEXT_PUBLIC_CONTACT_WEBHOOK` in the project's environment variables.
