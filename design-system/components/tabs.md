# Tabs

Two flavors:

- **Underline tabs** — top-bar style, full-width row, used for page-level switching (Networks › Insight & Analytics).
- **Segmented (pill) tabs** — inline filter switch on a single content surface (Overview / Nodes / Services / Logs).

## Underline tabs

| Token | Value |
|---|---|
| Container | flex row, 1 px bottom border `--border` |
| Tab height | 40 px (in-page), 52 px (top bar) |
| Tab padding | 14 px sides |
| Inactive | `--muted-foreground`, no underline |
| Hover | `--foreground`, no background, 2 px transparent indicator (smooths active swap) |
| Active | `--foreground`, `--font-weight-medium`, 2 px `--primary` underline |
| Gap | 4 px between tabs |
| Disabled | opacity 0.5, no pointer |
| Underline animation | 180 ms `--ease-out`, slides between active states |

### When to use
- Page-level navigation inside a product section.
- Persistent — the choice survives page navigation if the URL encodes it (and it should).

## Segmented (pill) tabs

| Token | Value |
|---|---|
| Container | inline-flex, 4 px padding, `--muted` background, `--radius-md` |
| Tab height | 28 px |
| Tab padding | 6 / 12 px |
| Inactive | `--muted-foreground`, transparent background |
| Active | `--card` background, `--foreground` text, `--shadow-xs`, `--font-weight-medium` |
| Hover (inactive) | `--accent` background |
| Animation | 120 ms `--ease-out` background fade |

### When to use
- Switching the *view* of the same data (chart vs table, day vs week vs month).
- Always visible inside a single panel — never spans the whole page.

## States

| State | Underline | Pill |
|---|---|---|
| Default inactive | muted text, no underline | muted text, transparent |
| Hover | foreground text | accent background |
| Active | primary underline | card background + xs shadow |
| Focus-visible | `--focus-ring` around the tab box | same |
| Disabled | opacity 0.5 | opacity 0.5 |

## Content panel

The panel below the tabs animates with a 120 ms cross-fade (no slide). Use a single source of truth for the active tab — usually the URL via `?tab=overview`.

## Accessibility

- Use Radix Tabs or shadcn's `Tabs` primitive — the semantics are non-trivial.
- Container has `role="tablist"`. Each tab has `role="tab"`, `aria-selected`, and `aria-controls` pointing to its panel.
- Each panel has `role="tabpanel"` and `aria-labelledby` pointing back to its tab.
- Arrow keys move between tabs; Home/End jump to first/last; activation is automatic on focus (set `activationMode="automatic"` in shadcn) for navigation tabs, or manual (`Enter`/`Space` to activate) for pills that trigger expensive content.
- Focused tab outline must be visible against both the container and the page background.

## Do / don't

| ✅ Do | ❌ Don't |
|---|---|
| Use underline for page-level nav | Use underline tabs inside a card |
| Use pills for view switching inside a panel | Use pills as primary navigation |
| Encode the active tab in the URL | Reset to the first tab on every page load |
| 3–6 tabs max in a row | 9 tabs that wrap to two rows |

## Migration from v1

| v1 | v2 |
|---|---|
| Active tab is solid color block | 2 px primary underline |
| Inactive tab has gray background | No background, muted text |
| Custom Ant Tabs theming | Replace with Radix/shadcn `Tabs` primitive |
| Pill tabs not present | New segmented control |
