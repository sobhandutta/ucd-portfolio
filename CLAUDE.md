# UCD Portfolio — Claude Context

## Project overview
Sobhan Dutta's personal portfolio website. Single-file HTML — `portfolio.html` is the source of truth and is also copied to `index.html` for GitHub Pages.

- **Live URL**: https://sobhandutta.github.io/ucd-portfolio
- **Local file**: `/Users/sobhandutta/projects/ucd-portfolio/portfolio.html`
- **Owner**: Sobhan Dutta (sobhandutta@gmail.com)

---

## Critical rules

- **Never touch** `/Users/sobhandutta/projects/agentic-personal-assistant` — that is a separate project
- **Always get explicit approval before pushing to GitHub**
- Use **"Built with"** not "Powered by" — this is Sobhan's personal work and he is in control
- When editing, always use the `Read` tool first before making any edits
- After editing `portfolio.html`, always copy it to `index.html` as well

---

## Git workflow

Git pushes must be done from `/tmp/ucd-portfolio`, not from the mounted folder (the mounted folder lacks git identity config).

```bash
# Standard push sequence
cp /sessions/.../mnt/ucd-portfolio/portfolio.html /tmp/ucd-portfolio/portfolio.html
cp /sessions/.../mnt/ucd-portfolio/portfolio.html /tmp/ucd-portfolio/index.html
cd /tmp/ucd-portfolio
git add portfolio.html index.html
git commit -m "..."
git push origin main
```

The PAT is embedded in the remote URL already — no extra auth needed.

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
- `.ai-img-placeholder` — dashed placeholder for images not yet captured
- `.ai-img-section` — image section with border-top

---

## Page inventory

### Routing
All routing is handled by `showPage(id)` — shows `#page-{id}`.

Nav active state logic:
- `id.startsWith('ai')` → highlights "AI Experiments"
- `id.startsWith('cs-')` → highlights "Case Studies"
- otherwise → highlights the matching nav item

### Pages
| ID | Description |
|---|---|
| `work` | Case Studies index |
| `about` | About page (has "Ask anything about me" button) |
| `ai` | AI Experiments index |
| `ai-agentic` | Experiment 01 — Agentic Personal Assistant |
| `ai-code` | Experiment 02 — AI-Assisted Code Quality & 5× Productivity |
| `ai-ux` | Experiment 03 — A New Way of Doing UX Strategy with AI |
| `cs-ai-first` | Case Study — Accelerating to AI-First UX (Ataya, 2024–25) |
| `cs-ataya` | Case Study — Universal Connectivity Platform (Ataya) |
| `cs-zerotrust` | Case Study — Zero Trust Network Security |

### Full-width pages (no max-width constraint)
```css
#page-cs-zerotrust, #page-cs-ataya, #page-cs-ai-first { max-width: 100%; }
```

### AI article pages (must all be listed together)
```css
#page-ai, #page-ai-agentic, #page-ai-code, #page-ai-ux {
  max-width: 1160px;
  margin: 0 auto;
  padding: 80px 40px 120px;
}
```
**Important**: whenever a new AI article page is added, it must be added to this CSS rule and to the mobile responsive rule.

---

## Key features

### Lightbox
- Triggered by clicking any `.cs-img` or `.cs-img-full` (and `.cs-img-grid img`)
- Does NOT apply to `.cs-hero` (banner images)
- Close via overlay click, × button, or Escape key
- JS wires up listeners on page load via `querySelectorAll`

### AI assistant panel
- Triggered by `openAiPanel()` — available from the "Ask anything about me" button on the About page and the header icon button
- Slides in from the right, loads iframe to Hugging Face Space
- Header icon: `#nav-ask-icon-btn` (circular indigo-tinted button, last item in nav)
- Panel ID: `#ai-panel`, overlay: `#ai-panel-overlay`
- Escape key closes both the panel and lightbox

### Nav
Order: AI Experiments · Case Studies · About · Resume · [ask icon]
- Logo click → `showPage('work')`
- AI Experiments nav link has class `ai-link` (indigo colour)

---

## Image assets

### Case study image folders
- `images/accelerating_ai_first_ux/` — 17 assets (banner, logo, screenshots, demo.mp4)
- `images/zero_trust_network_security/`
- `images/ataya_universal_connectivity/`

### Image placeholder style
New articles use `.ai-img-placeholder` (dashed indigo border, centred icon + label + hint text) until real screenshots are captured and added.

---

## Content & tone

- Writing is first-person ("I designed…", "I built…")
- No "Powered by" anywhere — use "Built with"
- Titles use EB Garamond italic where appropriate
- Case study meta table: Company, Role, Year, Scope
- AI experiment eyebrows: "Experiment 0N — [Category] · 2025"
