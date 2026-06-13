# Project Context — Ataya Harmony / Chorus Design System

> Session knowledge saved June 12, 2026. Read this first when resuming work in a new location.

## What this project is

Design system + HTML screen previews for **Ataya Chorus**, the tenant-facing UI of Ataya Harmony — a cloud-managed private 5G network platform by Atayalan Inc. (ataya.io). Owner: Sobhan (sobhandutta@gmail.com), designer. The previews double as **portfolio material** (UCD portfolio at `~/projects/ucd-portfolio/` — do not modify that copy).

Live product runs at `http://localhost:3000/dashboard` (reachable via Claude-in-Chrome only, not from the sandbox). Real product nav: Insights & Analytics · Devices · Clients · Policies · Edge Applications · Organization — **no Networks tab** (previews include one as a proposed addition; open question whether to drop it).

## File map

- `tokens-v2.css` — single source of truth. HSL channel triplets (`hsl(var(--primary) / 0.1)` composition). Light default; dark via `[data-theme="dark"]` + `prefers-color-scheme`. Includes `--on-success/--on-warning/--on-destructive/--on-info` for text on tinted surfaces (these flip per theme — always use them instead of hardcoded tint text colors).
- `shell.css` — canonical app shell (topnav, sidebar, page header). Extracted during the redesign; newer pages link it. The four older pages (alerts, dnn, organization, device-statistics) still carry equivalent inline shell CSS — visually identical, not yet deduplicated.
- `*-preview.html` (9 screens) + `ai-assistant-preview.html` (10th, newest) — all rebuilt on the canonical shell, all support dark mode.
- `index.html` — v2 design-system showcase (canonical reference, has its own theme toggle).
- `components/*.md` — per-component specs. `README.md` (brand/IA/tone), `PLAN.md`, `UPGRADE-v2.md`, `DESIGN-REVIEW.md` (my full critique), `REDESIGN-CHANGELOG.md` (what I changed per screen).
- `v1-backup/` — pre-redesign originals of all 9 previews. The v1 home contains the original chat JS (canned responses) that was ported forward.
- `home-preview-v3.html` — proposed home update awaiting Sobhan's acceptance (tenant/role chip, count-based KPIs, license tile, dismissible getting-started strip; Quick Actions row was added then removed on request). If accepted: replace `home-preview.html` with it.
- `portfolio/` — exported assets: `super-agent-architecture.svg/.png` (compact 1440×800), `story-01..04-*.png` (four dark chat crops for the narrative section), `ai-component-sheet.html/.png` (specimen sheet for the "Design system for AI-native interfaces" section).
- `fonts/`, `assets/` — Work Sans local, logos, icons. Inter loads from Google Fonts via tokens-v2.css.
- `ui_kits/chorus-app/` — React kit (AppShell.jsx etc.), not touched.

## Canonical shell (applies to every preview)

Dark topnav `hsl(220 24% 10%)`: ATAYA/CHORUS logo → 7 nav tabs with icons (Insights & Analytics, Networks, Devices, Clients, Policies, Edge Applications, Organization; cyan underline active) → right side: theme toggle (moon icon-btn, `toggleTheme()`, localStorage key `ataya-theme`, pre-paint head snippet in every page), navy **AI Assistant** pill, bell (badge 6), `?`, avatar **SD**. Dark contextual sidebar 220px with uppercase section labels; cyan left-border active state. Persona everywhere: **Sobhan D. / SD / qamspt1_custom / Admin**.

Standards enforced across screens: time ranges `24h/7d/30d/90d + Custom`; row actions = kebab menu only (no inline red Delete); KPI card = v2 style (label/value/delta), no colored top borders; units MB (not Mb); monospace (`--font-mono`) for technical IDs (serials, MACs, IPs, DNN/policy names); aria-labels on icon buttons.

## Chat / AI components (the showpiece)

`home-preview.html` has two views: overview (greeting + 5 KPI cards + suggestion chips + prompt) and chat (`#viewOverview`/`#viewChat`, `quickAsk()`, canned `getResponse()` answers ported from v1). KPI cards and chips call `quickAsk('…')`.

`ai-assistant-preview.html` is a full-page chat **using CSS extracted verbatim from home-preview** (they must not drift — if you change chat styles, change both). It stages a 4-beat portfolio story (captions Sobhan wrote, screens demonstrate them):

1. **Build trust early** — confidence badge `0.91` + `read-only analysis · 7-day KPI window · 4 sources` on first answer.
2. **Shape behavior through design** — "Read this carefully" info callout: cameras lead total drops but AGVs fail 2.3×/device ("the biggest bar is not the biggest problem").
3. **Plan for failure** — add-device form: low-confidence badge (0.55), amber warn-callout for unverifiable zone, amber-flagged Zone field, "Use suggested zone" chip, Continue/Cancel approval gate.
4. **Close the loop** — sys-note ("You corrected the zone and pressed Continue") then a receipt card: What/Why/Outcome rows, audit log `#A-2381`, reversible 24h, View device / Assign license / Undo chips.

Key chat classes: `.msg-user-bubble` (brand-blue, white text, 20/20/5/20 radius), `.msg-ai` (gradient `.ai-avatar` + "ATAYA AI" `.msg-ai-name` + `.msg-ai-bubble`), `.msg-chart` (evidence cards), `.msg-action-chip` (uses `--primary` so it flips cyan in dark), `.conf-badge`/`.warn-callout`/`.receipt`/`.sys-note` (story components), `.form-preview`/`.fp-input` (+ `.warn`).

## Demo data conventions (keep consistent)

Call drop 8.6%, 3.6 pts above 5% threshold, Zone C, 3 days. Causes: signal/RF interference 45% (mfg floor), handover failures 32% (C02↔C03 / Buildings B–C), UPF timeout 23% (edge node 07). Device down: `PTY202521000L_45`, 8 hrs, 12 clients affected. Traffic by device type: AGVs 88 GB, Employee 91, Industrial Sensors 101, Video Cameras 121. Drops by type: Cameras 42 / Sensors 32 / Employee 23 / AGVs 13 (sums to 110 — kept from Sobhan's mock, drawn proportionally). Add-device flow: Moso Device, SN `SC280700013`, MAC `00-B0-D0-63-C2-26`, zone corrected to "NAT Off / DHCP On (Zone B)". Network Overview range: Sep 6 – Oct 5, 2025.

## Jira / architecture context

`C1-1826` (atayalan.atlassian.net, project Chorus) — Super-Agent Orchestrator: intent/NL layer → orchestrator (classify, decompose, route, supervise, aggregate; no domain logic) → domain agents (SLA, RAN, Core, Security) via capability registry → tool chains + RAG (runbooks, incidents, baselines) + live telemetry. Guardrails: read-only default, approval gates, per-agent data boundaries, audit trail. The diagram + `super-agent-section.md` copy in `portfolio/` come from this ticket; the chat story beats intentionally mirror its guardrails.

## Tooling recipe (sandbox)

Playwright is the render/verify loop: `npm i playwright@1.60.0` in the session home, then `npx playwright install chromium-headless-shell` (takes >45s — run backgrounded and poll). Screenshot pages with `file://` URLs at 1440×900 (deviceScaleFactor 1.5 for portfolio exports); set dark via `document.documentElement.setAttribute('data-theme','dark')`. For chat crops: expand layout first (`body/.main/.messages-wrap` → overflow visible, height auto), take `fullPage` screenshot, crop with PIL using bounding boxes (clip outside viewport fails on page.screenshot).

Gotcha: absolutely-positioned slide-in panels (edge-applications) need `.main { position:relative; overflow:hidden }` — shell.css alone doesn't provide it.

## Open items / next steps

- Sobhan to accept or reject `home-preview-v3.html` (then swap it in for `home-preview.html`).
- Decide Networks-tab question vs live product IA.
- `components/` specs not yet updated for the new patterns (row actions, KPI card, time-range, and the 6 AI primitives shown in `portfolio/ai-component-sheet.html`).
- Shell CSS dedup for the 4 older pages (cosmetic, low priority).
- Portfolio copy suggestions given: caption → "six primitives… and a restrained AI identity"; "feedback loop UI" → "action receipts for autonomous operations".

All paths in preview files are **relative** (`./tokens-v2.css`, `./shell.css`, `../tokens-v2.css` from portfolio/) — the folder moves safely as a unit.
