# Chorus UI Unification — June 12, 2026

All 9 preview screens rebuilt on one canonical shell. Originals preserved in `v1-backup/`.

## Shell (new single source: `shell.css`)

One layout everywhere: dark topbar (CHORUS logo, 7-item nav with icons, navy AI Assistant, notifications, help, SD avatar) + dark contextual sidebar. Canonical nav order: Insights & Analytics · Networks · Devices · Clients · Policies · Edge Applications · Organization.

## Per-screen changes

- **Policy** — full rebuild: canonical shell + sidebar, calm table (red Edit/Delete removed → kebab menus), fixed truncated names (`Applic` → `app_control_default`, `app_qci3_` → `app_qci3_base`), monospace policy names, standard KPI filter cards with selected state, proper toolbar and pagination.
- **Home** — full rebuild: busy gradient replaced with a subtle brand wash, standard KPI cards (call-drop card gets a quiet destructive accent), neutral suggestion chips, focused AI prompt, Sobhan persona.
- **Network Overview** — canonical topnav + new sidebar; "Ask the AI" → AI Assistant; date range fixed to match chart (Sep 6 – Oct 5, 2025); duplicate KPI strip removed; time presets standardized to 24h/7d/30d/90d; Mb → MB.
- **Network Services** — shell transplant (was white topbar + HARMONY logo); brand corrected to CHORUS; network selector kept in sidebar.
- **Edge Applications** — shell transplant; duplicated sidebar nav removed; header CTA renamed "Add application"; slide-in panels re-anchored.
- **Device Statistics** — Networks tab added; warning banner when all devices are inactive (with Troubleshoot action).
- **Alerts, DNN, Organization** — Networks tab added; row actions → single kebab with aria-labels; avatar unified to SD; license cards' colored top borders removed (standard KPI card).

## Cross-cutting

One persona everywhere (Sobhan D.), one AI entry point (navy AI Assistant), one time-range vocabulary, kebab-only destructive actions, aria-labels on icon buttons, demo data aligned with controls.
