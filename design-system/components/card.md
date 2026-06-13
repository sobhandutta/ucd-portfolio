# Card

A bounded container that groups related content — a network's status block, an edge application summary, a KPI tile.

## Anatomy

```
┌────────────────────────────────────┐
│ Header — title, optional desc      │  16 / 20 px padding
├────────────────────────────────────┤
│ Body — content                     │  16 / 20 px padding
├────────────────────────────────────┤
│ Footer — actions (right-aligned)   │  12 / 20 px padding, top border
└────────────────────────────────────┘
```

| Token | Value |
|---|---|
| Background | `--card` |
| Border | 1 px `--border` |
| Radius | `--radius-lg` (10 px) |
| Shadow | `--shadow-sm` |
| Header padding | 16 px top, 20 px sides, 0 bottom |
| Body padding | 16 px / 20 px |
| Footer padding | 12 px top, 20 px sides, 16 px bottom |
| Header → body gap | 16 px |
| Card → card gap (in grid) | 16 px |

## Variants

### Plain card
The default — header + body + optional footer. Used for grouped settings, summaries, content panels.

### KPI card
A dense numeric tile. Strips header chrome — uses an eyebrow label, a large number (24–30 px), and an optional delta indicator (↑/↓ %).

| Element | Token |
|---|---|
| Label | `--text-xs`, uppercase, `--tracking-wide`, `--muted-foreground` |
| Value | `--text-2xl` or `--text-3xl`, `--font-weight-semibold`, `--tracking-tight` |
| Delta up | `--success` |
| Delta down | `--destructive` |

### Interactive card
Whole card is a link or button — wrap in `<a>` or `<button>`. Add `role="button"` if not natively interactive. Hover lifts elevation: `--shadow-sm` → `--shadow-md`. Cursor pointer.

### Status card
Cards that visualize state (Up / Down / Standby) gain a 3 px left border in the status color. Don't fill the whole card — color overload reads as alarm.

## States

| State | Visual |
|---|---|
| Default | as above |
| Hover (interactive) | `--shadow-md`, no other change |
| Focus-visible (interactive) | `--focus-ring` |
| Selected | 1 px `--primary` border instead of `--border`, `--primary` 5 % background tint |
| Loading | replace body content with skeleton blocks (`--muted` rectangles, animated) |
| Empty | center-aligned label, muted icon, optional CTA; no border accent |

## Accessibility

- A card is a presentational container — it gets no role unless it's interactive.
- Interactive cards must be keyboard-focusable, render as `<a>` or `<button>`, and not contain other primary interactive elements (the whole card *is* the action).
- KPI deltas use a textual prefix ("↑ 4.3 % vs last week") in addition to color.

## Do / don't

| ✅ Do | ❌ Don't |
|---|---|
| One topic per card | Three unrelated KPIs in one card |
| Right-align footer actions | Mix left and right action positions across cards |
| Use the KPI variant for single-number summaries | Stack 5 numbers in one KPI card |
| Use status borders sparingly | Color the whole card red |

## Migration from v1

| v1 | v2 |
|---|---|
| `border-radius: 4px` | `border-radius: 10px` |
| Glow shadow `0 0 22px 0.05px #EFEFEF` | `--shadow-sm` (1 px ambient) |
| Hover glow `0 5px 25px rgba(1,188,243,0.2)` | `--shadow-md`, no color tint |
| Header bold uppercase 11 px | Header `--text-md` `--font-weight-semibold`, sentence case |
| No standardized footer | Right-aligned footer with 1 px top border |
