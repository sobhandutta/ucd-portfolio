# Ataya Harmony Design System

**Company:** Atayalan Inc. — [https://ataya.io/](https://ataya.io/)
**Product:** Ataya Harmony — A cloud-managed 5G private network management platform

---

## Overview

Atayalan Inc. builds private 5G network infrastructure and management software under the **Ataya Harmony** brand. Their product stack enables enterprises, MNOs (Mobile Network Operators), MSPs (Managed Service Providers), and tenants to deploy, monitor, and manage private 5G/LTE networks from a unified cloud dashboard.

The platform is primarily a **B2B SaaS web application** used by:
- **Atayalan Admins** — Global platform operators managing tenants & MSPs
- **MSPs (Managed Service Providers)** — Resellers managing multiple tenant networks
- **Tenant Admins/Users** — End-customer organizations managing their own private 5G network

---

## Products / Surfaces

### 1. `chorus-ui` (Chorus — Tenant-facing management UI)
- React SPA at `apps/chorus-ui/`
- Primary surface for tenant users managing their private 5G network
- Features: Network Overview, RAN Management, Clients & Policies, Edge Applications, Analytics, SIM Inventory, Organization Settings
- Navigation: horizontal top-bar + collapsible left sidebar (role-based)
- Primary color scheme: Dark blue sidebar (`#126E95`) + white content + teal/green accents

### 2. `mgmt-ui` (Management UI — Admin / MSP-facing)
- React SPA at `apps/mgmt-ui/`
- Used by Atayalan Admins and MSPs for tenant/device/license management
- Features: Tenant List, Device Management, License Management, Analytics, Audit Logs, Organization
- Shares `packages/shared` components and design tokens

### 3. Shared Package
- At `packages/shared/`
- Contains: design tokens (colorPalette.js, typographyStyle.js, fonts.js), styled-components global styles (baseStyle, layoutStyle, sharedStyle, antOverrideStyle), shared React components, chart widgets

---

## Sources

- **Figma file:** "Ataya Harmony.fig" — mounted as virtual FS at `/`
  - Pages: CHORUS, CHORUS---Managed-Services-Provider-MSP, Release-1.5, Networks, Analytics, AI-Assistant, RAN-Management, Policy, Clients, License, Organization, Audit, Assets, Customer-Onboarding, etc.
  - Key component pages: `/Assets/Color-Palette`, `/Assets/Typography`, `/Assets/Icons`, `/Assets/Components`
- **Codebase:** `chorus-harmony-ui/` (monorepo, Turborepo, React + Ant Design + styled-components + AG Grid)
- **Website:** https://ataya.io/

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Professional and technical** — written for network engineers, IT admins, and enterprise buyers
- **Direct and functional** — copy is task-oriented; minimal marketing fluff in the UI
- **Second person ("you")** — "Your networks", "Manage your tenants"
- **Title Case** for section headers, page titles, and navigation items: "Network Overview", "RAN Management", "Edge Application"
- **ALL CAPS** used for section subheadings in data-dense views: "SYSTEM (UP TIME: 13 DAYS)", "TRAFFIC – ALL NETWORKS"
- **Sentence case** for descriptions and help text
- **No emoji** used anywhere in the product UI
- **Technical abbreviations** are spelled out on first use: "RAN (Radio Access Network)", "UPF (User Plane Function)", "gNB (Next Generation Node B)"
- Numbers and metrics are displayed with units inline: "14 Disk", "80 Cores", "250 GiB"
- Status states: **Up / Down / Standby / Unknown** (not enabled/disabled for network states)
- Actions: "Add", "Edit", "Delete", "Uninstall", "Upgrade", "Start Services", "Configure"

### Copy Examples
- Page titles: "Network Overview", "RAN Management", "Tenant Management for Ataya Admin"
- Breadcrumbs: "Networks > Network Overview"
- KPI labels: "14 Disk", "4.3% CPU", "84.4% Memory"
- Button labels: "Add Network", "Start Services", "Cancel", "Submit"
- Empty state: "No data found"
- Notifications: "New software available — Upgrade to v1.6.599"

---

## VISUAL FOUNDATIONS

### Color System
- **Primary brand green/teal:** `#46D5B3` (rgb 70,213,179) — accent, success, active states
- **Primary blue (action/CTA):** `#125695` — primary buttons, selected nav, links
- **Secondary blue (interactive):** `#126E95` / `#01BCF3` — sidebar bg, hover highlights
- **Alert / Error red:** `#FF4930` (rgb 255,73,48) — errors, critical alerts
- **Warning amber:** `#FFB800` — warnings, caution states
- **Info blue:** `#48A6F6` (rgb 72,166,246) — info states, chart color 1
- **Body text dark:** `#141414` (darkGrayColor) — primary text, headings
- **Secondary text:** `#394463` (labelColor) — field labels, metadata
- **Surface white:** `#FFFFFF` — card backgrounds, content areas
- **Page background:** `#F4F7F9` (backgroundLight) — app background
- **Border:** `#D9E3F0` / `#E2EAF4` — card borders, dividers
- **Sidebar bg:** `#126E95` — left nav background (dark blue)
- **Header bg:** Black `rgb(0,0,0)` — top navigation bar

### Typography
- **Primary font:** Work Sans (variable, loaded locally) — used for headings, navigation, marketing
- **UI font:** Roboto (CDN) — default body/table text at 14px (most used in app)
- **Accent/Display:** Inter — used in the Figma design system spec (headings, typography page)
- **Monospace:** Menlo — code/terminal contexts
- **Font sizes:** 10px (tiny labels) · 12px (small/table) · 13px (meta/label) · 14px (default body) · 16px (clickable/medium) · 18px (page title) · 20px (section header) · 24–32px (display/KPI)
- **Font weights:** 400 (normal) · 500 (medium/label) · 600 (semibold/value) · 700 (bold/heading)

### Spacing
- **Base unit:** 4px
- **Component padding:** 8px, 12px, 20px, 24px
- **Section gaps:** 16px, 24px, 32px
- **Card inner padding:** 20px or 24px
- **Grid gaps:** 10px (tight), 16px (default), 24px (loose)

### Layout
- **Top header height:** 72px — fixed, black background, logo left, nav center, actions right
- **Left sidebar width:** 228px (expanded) / 80px (collapsed) — dark blue `#126E95`
- **Content area:** white background, padded 20–24px
- **Page header block:** 20px top/bottom padding, title 18px/500 + breadcrumb 13px/label color
- **KPI row:** horizontal bar below header with shadow glow, separated from content

### Cards
- **Background:** white (`#FFFFFF`)
- **Border:** 1px solid `#E2EAF4`
- **Border radius:** 4px (standard), 6px (tables/drawers)
- **Shadow:** `0px 0px 22px 0.05px #EFEFEF` (light) · `0px 5px 25px rgba(1,188,243,0.2)` (blue hover)
- **Header divider:** 1px solid `#E5E5E5` inside card

### Backgrounds & Imagery
- **App shell:** `#F4F7F9` light gray
- **No full-bleed background images** in the main UI
- **Login page uses** `atayalan_bg.jpeg` — photograph as background
- **Illustrations:** custom SVG people/avatar illustrations (boy.svg, girl.svg, man.svg) for onboarding
- **No gradients** in UI components (except traffic charts use area fill gradients)
- **No patterns or textures**

### Borders & Radius
- Cards: `border-radius: 4px`
- Buttons: `border-radius: 6px`
- Pills/tags: `border-radius: 10px`
- Inputs: `border-radius: 4px`
- Icon buttons: `border-radius: 16px` (fully round)

### Shadows
- Card: `box-shadow: 0px 0px 22px 0.05px #EFEFEF`
- Header glow: `box-shadow: 0px 0px 28px 0.4px #1A8AFA`
- Drawer: `-12px 0 38px rgb(38 111 226 / 15%)`
- Button (blue): `drop-shadow(0px 4px 4px rgba(26, 138, 250, 0.1))`

### Animations & Interactions
- **Minimal animation** — mostly Ant Design defaults (250ms ease transitions)
- **Hover states:** slight background change; blue shadow on buttons
- **Primary button hover:** `#FFB82C` (warm yellow) — unique brand touch
- **Secondary button hover:** darker gray `#4F4F5E` + yellow text
- **Nav item active:** colored background block + white text
- **Side menu collapse:** 0.2s CSS transition
- **Status blinking:** unknown device status blinks between two gray tones at 1s interval
- No bounces; no spring animations; no page transitions

### Status Indicators
- 8px filled circle dots: green (up), red (down), amber (standby/warning), gray (unknown)
- Badge pills: green `#46D5B3` border + text, red border + text

---

## ICONOGRAPHY

The icon system uses **custom SVG icons** stored in `chorus-harmony-ui/apps/chorus-ui/src/assets/images/icons/`. These are **2-tone** — each icon has:
- A default version (e.g., `network.svg`) — white/light for dark backgrounds
- A `_h` hover/highlight version (e.g., `network_h.svg`) — colored (teal or blue)
- A `_b` selected/active version (e.g., `network_b.svg`) — dark/brand blue

Icons are **16px × 16px** in navigation, **20px** in cards.

**Available icons copied to `assets/icons/`:**
`network`, `analytic`, `radio`, `policy`, `tenant`, `users`, `sim`, `setting`, `alert`, `dashboard`, `license`, `devices`, `audit`, `overview`, `client`

**Also used:** Ant Design icons (antd `@ant-design/icons`) for generic UI actions (edit, delete, plus, filter, close, chevron)

**Figma** also contains a `Lucide`-style icon set (`/Assets/Icons/`) with named icons: IconAlertCircle, IconBarChart3, IconServerCog, IconFileText, etc. — stroke-style, consistent weight.

**No emoji** are used in the product.

**CDN substitution note:** The Lucide icon set closely matches the Figma `/Assets/Icons/` components. Use `https://unpkg.com/lucide@latest/dist/umd/lucide.js` as a fallback.

---

## File Index

```
README.md                    — This file
SKILL.md                     — Agent skill definition
colors_and_type.css          — CSS design tokens (colors + typography)

assets/
  atayalan_logo.svg          — Primary logo (dark background)
  atayalan_logo_white.svg    — White version of logo
  chorus.svg                 — "CHORUS" wordmark
  harmony.svg                — "HARMONY" wordmark
  icons/                     — Product SVG icon set (16px, 2-tone)

fonts/
  WorkSans-VariableFont_wght.ttf       — Work Sans variable font
  WorkSans-Italic-VariableFont_wght.ttf — Italic variant

preview/
  colors-brand.html          — Brand + primary colors
  colors-semantic.html       — Semantic / state colors
  colors-neutral.html        — Neutral / surface colors
  typography-scale.html      — Type scale specimens
  typography-ui.html         — UI text styles
  spacing-tokens.html        — Spacing, radius, shadow tokens
  components-buttons.html    — Button variants
  components-inputs.html     — Form inputs + selects
  components-cards.html      — Card + KPI widget patterns
  components-nav.html        — Header + sidebar navigation
  components-badges.html     — Status badges, tags, dots
  components-tables.html     — Table + data grid patterns

ui_kits/
  chorus-app/
    README.md                — Chorus App kit notes
    index.html               — Interactive prototype (login → dashboard → networks)
    AppShell.jsx             — Layout shell (header + sidebar + content)
    Header.jsx               — Top navigation bar
    Sidebar.jsx              — Left navigation sidebar
    NetworkDashboard.jsx     — Network overview screen
    DataTable.jsx            — Reusable data table component
    KpiBar.jsx               — KPI metrics bar
    FormDrawer.jsx           — Slide-out form drawer
```
