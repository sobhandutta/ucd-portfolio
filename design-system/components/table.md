# Table

Tables are the primary surface in Ataya Harmony — Networks, RAN, Clients, Edge Applications all live in tables. The pattern below is for AG Grid and Ant Design Table overrides; the visual spec applies to both.

## Anatomy

| Token | Value |
|---|---|
| Container | `--card`, 1 px `--border`, `--radius-lg`, hidden overflow |
| Header background | `--muted` |
| Header text | `--text-xs`, `--muted-foreground`, uppercase, `--tracking-wide`, `--font-weight-medium` |
| Header height | 40 px |
| Cell padding | 12 px vertical (was 10 px in v1), 16 px horizontal |
| Row text | `--text-sm`, `--foreground` |
| Row separator | 1 px `--border` |
| Row hover | `--accent` background |
| Row selected | `--primary` 5 % background, 2 px left rail in `--primary` |
| Density (compact) | 8 px vertical padding, 12 px horizontal |
| Last row | no separator (handled with `:last-child`) |

## Sub-elements

### Status pill in cell
Use the subtle badge variants — `subtle-success`, `subtle-warning`, `subtle-danger`, `subtle-info` — with a leading 6 px dot. Don't use solid badges; they fight with the row.

### Inline action menu
Right-aligned overflow `⋯` icon button at the row end. Opens a menu with View / Edit / Duplicate / Delete. Don't expose more than 5 actions inline — push the rest behind the menu.

### Sort indicator
12 px chevron next to the header label, ascending up / descending down. Inactive headers show no glyph.

### Filter chip row
Above the table when filters are applied. Each filter renders as an outline pill with a × to remove. "Clear all" link on the right when ≥ 2 filters are active.

## States

| State | Visual |
|---|---|
| Default | as above |
| Loading | header + 8 skeleton rows (`--muted` rectangles) |
| Empty | full-bleed message: muted icon, h-stack title + description, optional CTA |
| Error | banner above table with retry button |
| Sorted | active column header has the chevron + slightly darker text |
| Filtered | filter chip row appears, count summary on the right |

## Responsive

Tables don't reflow well below 1024 px. On narrow viewports:
- **Preferred:** convert to card list — each row becomes a stacked card with key fields. The Network List on mobile is the canonical case.
- **Fallback:** horizontal scroll inside the container with a sticky first column.

Don't stack cells inside the same row at narrow widths — it produces unscannable rows.

## Pagination &amp; loading

- Server-side pagination for any table that can exceed 50 rows.
- Page size: 25 default, 50, 100. Show "Showing 1–25 of 412" on the left, page controls on the right.
- Skeleton on first load only; subsequent pages get a 200 ms shimmer over existing rows.

## Accessibility

- Use semantic `<table>` with `<thead>` and `<tbody>`. AG Grid's `treeData` mode ships ARIA roles by default — keep them.
- Sortable headers are `<button>` elements inside `<th>` with `aria-sort="ascending|descending|none"`.
- Row selection checkboxes have `aria-label="Select <row name>"`.
- Don't use color alone to convey row status; pair status pill text with the dot color.

## Do / don't

| ✅ Do | ❌ Don't |
|---|---|
| 5–8 columns visible by default | 14 dense columns visible at once |
| Right-align numeric columns | Center-align numbers |
| Use status pills for status fields | Color the entire row by status |
| Provide an empty state with a CTA | Show "No data" centered on a tall blank table |

## Migration from v1

| v1 | v2 |
|---|---|
| Header background `#F4F7F9` | `--muted` (same tone, tokenized) |
| Cell padding `10 14 px` | `12 16 px` |
| Row hover white-on-blue tint | `--accent` neutral tint |
| Zebra striping default on | Off — opt-in per table |
| 1 px solid `#D9E3F0` separators | `--border` |
| No skeleton loaders | Skeleton on first load |
