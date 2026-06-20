# UCD Portfolio — Claude Context

## Project overview
Sobhan Dutta's personal portfolio website. React 18 + TypeScript + Vite, deployed to GitHub Pages via GitHub Actions.

- **Live URL**: https://sobhandutta.github.io/ucd-portfolio
- **Local path**: `/Users/sobhandutta/projects/ucd-portfolio`
- **Owner**: Sobhan Dutta (sobhandutta@gmail.com)

---

## Critical rules

- **Never touch** `/Users/sobhandutta/projects/agentic-personal-assistant` — that is a separate project
- **Always get explicit approval before pushing to GitHub**
- Use **"Built with"** not "Powered by" — this is Sobhan's personal work and he is in control
- When editing, always use the `Read` tool first before making any edits

---

## Project structure

```
ucd-portfolio/
├── .github/workflows/deploy.yml   # CI/CD — auto-deploys to GitHub Pages on push to main
├── public/images/                 # Static image assets (served at /images/...)
│   ├── accelerating_ai_first_ux/
│   ├── developer_productivity/
│   ├── future_of_ux_process/
│   ├── universal_connectivity_platform/
│   └── zero_trust_network_security/
├── src/
│   ├── styles/global.css          # All CSS (design system, components, responsive)
│   ├── context/
│   │   ├── LightboxContext.tsx    # Lightbox open/close state + useLightbox() hook
│   │   └── AiPanelContext.tsx     # AI panel open/close state + useAiPanel() hook
│   ├── components/
│   │   ├── Nav.tsx                # Top nav — logo, links, AI panel icon
│   │   ├── Footer.tsx             # Footer with social links
│   │   ├── Lightbox.tsx           # Lightbox overlay + image
│   │   └── AiPanel.tsx            # Sliding AI assistant panel (HuggingFace iframe)
│   ├── pages/
│   │   ├── WorkPage.tsx           # Case Studies index
│   │   ├── AboutPage.tsx          # About page (has "Ask anything about me" button)
│   │   ├── AiIndexPage.tsx        # AI Experiments index
│   │   ├── AiAgenticPage.tsx      # Experiment 01 — Agentic Personal Assistant
│   │   ├── AiCodePage.tsx         # Experiment 02 — Code Quality & 5× Productivity
│   │   ├── AiUxPage.tsx           # Experiment 03 — UX Strategy with AI
│   │   ├── CsAiFirstPage.tsx      # Case Study — Accelerating to AI-First UX
│   │   ├── CsAtayaPage.tsx        # Case Study — Universal Connectivity Platform
│   │   └── CsZeroTrustPage.tsx    # Case Study — Zero Trust Network Security
│   ├── App.tsx                    # HashRouter + all routes + PageWrapper (scroll-to-top)
│   └── main.tsx                   # React root mount + global.css import
├── index.html                     # Vite entry point (Google Fonts links here)
├── portfolio.html                 # Archived original static HTML (do not edit)
├── package.json
├── vite.config.ts                 # base: '/ucd-portfolio/', publicDir: 'public'
├── tsconfig.json
├── tsconfig.app.json
└── tsconfig.node.json
```

---

## Dev workflow

```bash
cd /Users/sobhandutta/projects/ucd-portfolio
npm run dev      # start dev server at http://localhost:5173/ucd-portfolio/
npm run build    # tsc -b && vite build → outputs to dist/
```

Git pushes go directly from this directory — no temp folder needed.

---

## Routing

Uses **HashRouter** (react-router-dom v6) — URLs are `/#/about`, `/#/ai`, etc. HashRouter was chosen for GitHub Pages compatibility (no 404 redirect hacks needed).

| Route | Component |
|---|---|
| `/` | WorkPage |
| `/about` | AboutPage |
| `/ai` | AiIndexPage |
| `/ai/agentic` | AiAgenticPage |
| `/ai/ux` | AiUxPage |
| `/ai/code` | AiCodePage |
| `/work/ai-first` | CsAiFirstPage |
| `/work/ataya` | CsAtayaPage |
| `/work/zerotrust` | CsZeroTrustPage |
| `*` | Redirect to `/about` |

Nav active state: `path.startsWith('/ai')` → AI active; `path.startsWith('/work') || path === '/'` → Work active; `path === '/about'` → About active.

---

## Design system

### Fonts
- **Serif**: EB Garamond (headings, titles, case study titles)
- **Sans-serif**: Inter (body, nav, labels, meta)

### CSS custom properties
```css
--black:    #0a0a0a
--gray:     #6b6b6b
--light:    #e8e8e8
--bg:       #fafaf8   /* cream background */
--white:    #ffffff
--accent:   #0a0a0a
--ai-ink:   #1a1a2e   /* AI section dark text */
--ai-muted: #555577   /* AI section muted text */
--ai-rule:  #d0d0e8   /* AI section dividers */
```

### Indigo accent (AI / assistant elements)
- Primary: `#4a4a8a`
- Hover/dark: `#2a2a6a`
- Light tint: `#f0f0f8`
- Border: `#9090b8`

---

## CSS class conventions

### Case studies (`.cs-*`)
- `.cs-hero` — full-width banner image at top (excluded from lightbox)
- `.cs-container` — max-width 1160px content wrapper
- `.cs-intro` — 2-col intro grid (meta + body)
- `.cs-section` — content section with border-top divider
- `.cs-img` — inline image (has lightbox on click)
- `.cs-img-full` — full-width image (has lightbox on click)
- `.cs-img-grid` — 2×2 image grid
- `.cs-img-caption` — caption below image

### AI experiment articles (`.ai-*`)
- `.ai-header` — page title area with border-bottom
- `.ai-eyebrow` — small uppercase label
- `.ai-title` — large serif article title
- `.ai-intro` — lead paragraph
- `.ai-featured` — 2-col grid (text left, diagram/arch right)
- `.ai-concepts` — numbered concept grid (6 items)
- `.ai-concept-item` — individual concept card
- `.ai-stack` — tools/stack section
- `.ai-cowork` — "also exploring" / supplementary section
- `.ai-img-section` — image section with border-top

---

## Key features

### Lightbox
- State managed by `LightboxContext` — use `useLightbox()` hook
- `open(src, alt?)` to open, `close()` to close
- Triggered by clicking any `.cs-img` or `.cs-img-full` images (pass `onClick={lb}` helper)
- Does NOT apply to `.cs-hero` (banner images)
- Close via overlay click, × button, or Escape key

### AI assistant panel
- State managed by `AiPanelContext` — use `useAiPanel()` hook
- `open()` triggered from About page "Ask anything about me" button and nav sparkle icon
- Slides in from right, loads Hugging Face Space iframe lazily (src only set on first open)
- Escape key closes both the panel and lightbox

### Parallax (case study pages only)
- `useParallax()` hook defined locally in `CsZeroTrustPage`, `CsAtayaPage`, `CsAiFirstPage`
- Scroll listener on `.cs-hero-wrap` (translateY) and `.cs-hero-foot-wrap` (scale)

### Nav
Order: AI Experiments · Case Studies · About · Resume · [sparkle ask icon]
- Logo click → navigate to `/`
- AI Experiments link is indigo colour

---

## Image assets

All images are in `public/images/` and referenced with absolute paths like `/images/...`.
Vite copies `public/` contents verbatim to `dist/` during build.

### Image folders
- `public/images/accelerating_ai_first_ux/`
- `public/images/developer_productivity/`
- `public/images/future_of_ux_process/`
- `public/images/universal_connectivity_platform/`
- `public/images/zero_trust_network_security/`

---

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) automatically builds and deploys on every push to `main`.

**One-time setup required** (if not already done):  
GitHub repo → Settings → Pages → Source: **GitHub Actions**

---

## Content & tone

- Writing is first-person ("I designed…", "I built…")
- No "Powered by" anywhere — use "Built with"
- Titles use EB Garamond italic where appropriate
- Case study meta table: Company, Role, Year, Scope
- AI experiment eyebrows: "Experiment 0N — [Category] · 2025"
