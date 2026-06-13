# Navigation

Ataya Harmony has a two-tier nav: a fixed top bar for product-level switching and a left sidebar for section navigation within a product.

## Top bar

| Token | Value |
|---|---|
| Height | 64 px (down from v1's 72 px) |
| Background | `--card`, `0.85` alpha + 12 px backdrop blur |
| Bottom border | 1 px `--border` |
| Logo / brand | left, 14 / 16 px gap |
| Tabs | center, hidden under `~960 px` |
| Actions | right (search, notifications, avatar) |
| Active tab indicator | 2 px `--primary` underline, 0 offset |
| Inactive tab | `--muted-foreground` |
| Hover tab | `--foreground` (no background change) |
| Tab padding | 14 px sides, full height |

The active product (Insight & Analytics, Networks, Clients & Policies, Edge Applications) is the only tab with the underline. Avoid more than 6 top-level tabs — overflow into a "More" menu.

## Sidebar

| Token | Value |
|---|---|
| Width (expanded) | 232 px |
| Width (collapsed) | 72 px |
| Background | `--sidebar` (`#126E95` — preserved Ataya brand color) |
| Foreground | `--sidebar-foreground` |
| Item padding | 8 / 10 px |
| Item radius | `--radius-md` |
| Active item background | `--sidebar-accent` |
| Active rail | 3 px `--sidebar-active` (cyan), 16 px tall, 4 px from left edge |
| Hover background | `--sidebar-accent` at 50 % alpha |
| Section divider | 1 px `--sidebar-foreground / 0.1`, 12 px vertical margin |
| Icon size | 14 px (sidebar), 16 px (collapsed mode) |
| Transition (collapse) | 200 ms `--ease-out` |

### Collapse behavior
Toggle button at the bottom-left collapses the sidebar to 72 px showing icons only. Tooltips appear on hover when collapsed (the only place Ataya uses tooltips on icons).

## Breadcrumbs

Used inside content areas, not in the top bar.

| Token | Value |
|---|---|
| Font | `--text-xs`, `--muted-foreground` |
| Separator | `›` glyph, 8 px horizontal margin |
| Last item | `--foreground`, `--font-weight-medium` |
| Margin below | 4 px (sits directly above page title) |

Limit breadcrumbs to 4 levels. Use ellipsis ("Networks › … › NODE 4") when deeper.

## Page header

Lives below the top bar, above content:

```
Eyebrow (breadcrumb / context)            ← --text-xs muted
Page title                                ← --text-2xl, --font-weight-semibold
One-line description (optional)           ← --text-sm muted
———— action row (primary + filters) ————   ← right-aligned button group
```

## States &amp; behavior

- The active sidebar item updates on route change before content loads (don't wait for data).
- On narrow viewports (`< 768 px`) the sidebar collapses to a slide-out drawer triggered by a hamburger in the top bar.
- The sidebar persists collapse state across sessions in `localStorage`.

## Accessibility

- The top bar uses `role="navigation"` with `aria-label="Primary"`.
- The sidebar uses `role="navigation"` with `aria-label="Section"`.
- Each item is a `<a>` with the current page marked `aria-current="page"`.
- Focus indication is the standard `--focus-ring` on top-bar items; on sidebar items the ring is rendered at 70 % alpha so it remains visible on the dark blue background.
- Skip-to-content link sits above the top bar, hidden until focused.

## Do / don't

| ✅ Do | ❌ Don't |
|---|---|
| Keep the top bar identical across products | Show product-specific tabs in the top bar |
| Use the sidebar for section-level nav | Cram global toggles into the sidebar |
| Localize the active rail to the active item | Highlight the entire row in primary color |

## Migration from v1

| v1 | v2 |
|---|---|
| Top bar 72 px black background | 64 px `--card` background, blurred |
| Active tab solid block + white text | 2 px primary underline |
| Sidebar identical | Preserved (kept brand blue) |
| No collapse persistence | `localStorage` persists state |
| Header glow shadow | `--shadow-xs` only |
