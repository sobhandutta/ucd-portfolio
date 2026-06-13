# Ataya Harmony Design System — v2 Upgrade

The v2 release is the execution of [PLAN.md](./PLAN.md). It refreshes the look-and-feel while keeping every brand anchor that makes Ataya recognizable.

## What's new

| Area | v1 → v2 |
|---|---|
| Tokens | New [`tokens-v2.css`](./tokens-v2.css). Tokens are HSL channel triplets so colors compose with alpha (`hsl(var(--primary) / 0.1)`). Adds semantic surfaces: `--background`, `--card`, `--popover`, `--muted`, `--accent`, `--destructive`. |
| Theming | Native dark mode via `[data-theme="dark"]` and `prefers-color-scheme`. The light theme is still default. |
| Typography | Inter replaces Roboto as the primary face. Tighter scale (8 sizes, 11 px → 38 px). Inter's `cv11` and `ss01` font features enabled for cleaner numerals. |
| Color | Brand blue, cyan, teal, amber, red preserved as anchors. Neutral ramp rebuilt for perceptually even steps. Dark mode shifts the primary toward cyan for AAA contrast on the dark surface. |
| Radius | Single scale (`sm 4 · md 6 · lg 10 · xl 14 · full 999`). v1 had ad-hoc 4 / 6 / 10 / 16. |
| Elevation | Five-step subtle ramp (`xs/sm/md/lg/xl`). The blue-tinted glow shadows are gone — too 2018. |
| Focus | Single `--focus-ring` token applied via `:focus-visible`. Consistent across buttons, inputs, tabs, menus, cards. |
| Motion | Three durations (120 / 180 / 240 ms) and two easings. v1 inherited Ant defaults; v2 standardizes. |
| Components | Ten components specced under [`components/`](./components/). Each has anatomy, tokens, variants, states, accessibility, do/don't, and migration notes. |
| Showcase | New [`index.html`](./index.html) — single-page navigable showcase with theme toggle. Replaces the per-feature preview pages as the canonical source of truth (the `preview/` files remain for v1 reference). |

## Components covered

Buttons · Inputs &amp; forms · Cards · Navigation · Tables · Dialogs · Tabs · Alerts &amp; toasts · Avatars &amp; badges · Dropdown menus.

Out of scope (deferred): Wizard / Stepper, Skeleton, Empty state, Tooltip, Command palette, Breadcrumb. Track these as v2.1.

## What didn't change

These were good in v1 and weren't worth reworking:

- **Brand colors as anchors.** The deep blue `#125695`, the cyan `#01BCF3`, the teal `#46D5B3` are all still here — just retuned in HSL.
- **The right-side drawer pattern.** Long forms (Add Network, Configure Service) still use the drawer; v2 just adds the centered confirm dialog for short flows.
- **Sidebar's blue background.** It's signature Ataya — preserved as `--sidebar` (`#126E95`).
- **Status vocabulary.** Up / Down / Standby / Unknown.
- **Title case for nav and page titles.** Tone in [`README.md`](./README.md) is unchanged.

## Adoption path

1. **Foundation (week 1).** Import `tokens-v2.css` alongside `colors_and_type.css`. Switch new components to v2 tokens; leave existing surfaces on v1 until touched.
2. **Buttons + inputs (week 2).** These have the highest visual impact and are hard-coded everywhere — migrate together. Update `sharedStyle.js` and `antOverrideStyle.js`.
3. **Tables (week 3).** Update header / row padding via the AG Grid theme. Add skeleton loader to first-load.
4. **Dialogs (week 4).** Introduce the centered confirm dialog. Existing drawers can be left in place; just retune their tokens to v2.
5. **Sidebar &amp; top bar (week 5–6).** The most visible chrome. Roll behind a feature flag and dogfood internally before shipping.
6. **Dark mode (week 7+).** Optional. The tokens are ready; component coverage needs visual QA before you flip the switch.

## Verification

- `index.html` renders in modern Chrome, Safari, Firefox without any external requests beyond the Inter / JetBrains Mono fonts.
- Theme toggle in the top-right swaps light ↔ dark instantly via `data-theme`.
- All component HTML in `index.html` only references `tokens-v2.css`. No raw hex values.

## File index

```
tokens-v2.css                 — v2 design tokens (colors, type, spacing, radii, shadows, motion)
index.html                    — master showcase, all components, theme toggle
UPGRADE-v2.md                 — this file
PLAN.md                       — the original upgrade plan (now executed by v2)
README.md                     — system overview, tone, brand context (unchanged)
colors_and_type.css           — v1 tokens (kept for backwards compat)
preview/                      — v1 per-feature previews (kept for reference)
components/
  README.md
  button.md · input.md · card.md · navigation.md · table.md
  dialog.md · tabs.md · toast-alert.md · avatar-badge.md · dropdown-menu.md
assets/                       — logos, icons (unchanged)
fonts/                        — Work Sans (now secondary)
ui_kits/chorus-app/           — interactive prototype (v1 — refresh in a follow-up)
```
