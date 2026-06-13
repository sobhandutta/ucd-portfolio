# Button

A button triggers an action — submitting a form, opening a dialog, navigating, or running a command.

## When to use

- **Primary** — the single most important action on a screen (Add Network, Save, Submit). Limit to one per region.
- **Secondary** — supporting actions next to a primary (Cancel, Back).
- **Outline** — neutral actions that don't dominate (Configure, Filter).
- **Ghost** — actions inside dense surfaces like toolbars and table cells.
- **Destructive** — actions that can't be undone (Delete, Remove).
- **Link** — inline navigational actions inside body copy.

## Anatomy

| Token | Default |
|---|---|
| Height (sm / default / lg) | 30 / 36 / 42 px |
| Horizontal padding | 14 px (10 px sm, 18 px lg) |
| Border radius | `--radius-md` (6 px) |
| Font | `--text-sm` / `--font-weight-medium` |
| Icon size | 14 px stroke |
| Gap (icon → label) | 8 px |
| Focus ring | `--focus-ring` |

## Variants

| Variant | Background | Foreground | Border |
|---|---|---|---|
| Primary | `--primary` | `--primary-foreground` | — |
| Secondary | `--secondary` | `--secondary-foreground` | `--border` |
| Outline | transparent | `--foreground` | `--border` |
| Ghost | transparent | `--foreground` | — |
| Destructive | `--destructive` | `--destructive-foreground` | — |
| Link | transparent | `--primary` | — |

Hover darkens the background by 10 % via `hsl(var(--primary) / 0.9)`. Outline and ghost hover use `--accent` as the background.

## States

| State | Visual | Behavior |
|---|---|---|
| Default | as variant | — |
| Hover | background shifts to 90 % alpha or `--accent` | pointer cursor |
| Focus-visible | `--focus-ring` (2 px outer ring at 55 % alpha, 2 px offset) | keyboard only |
| Active | further darkens by 5 %, no offset shift | — |
| Disabled | opacity 0.5, `pointer-events: none` | non-interactive |
| Loading | spinner replaces leading icon, label dims to 60 % | non-interactive |

## Props (React-style)

| Prop | Type | Default |
|---|---|---|
| `variant` | `primary \| secondary \| outline \| ghost \| destructive \| link` | `primary` |
| `size` | `sm \| md \| lg \| icon` | `md` |
| `leftIcon`, `rightIcon` | `ReactNode` | — |
| `loading` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `asChild` | `boolean` (Radix Slot) | `false` |

## Accessibility

- Always rendered as `<button>` unless using `asChild` to wrap a link, in which case the trigger renders as `<a>` with `role="button"`.
- Icon-only buttons must have `aria-label`.
- Loading state should announce with `aria-busy="true"`.
- Disabled state uses `disabled` attr, not just opacity. Avoid disabling primary submit buttons; prefer inline validation.

## Do / don't

| ✅ Do | ❌ Don't |
|---|---|
| Use one primary per page region | Stack two primaries side by side |
| Use destructive for non-undoable actions | Use destructive for plain cancels |
| Pair destructive with a confirm dialog | Trigger destruction on first click |
| Use sentence case ("Add network") | Title case or ALL CAPS labels |

## Migration from v1

| v1 | v2 |
|---|---|
| `height: 40px` | `height: 36px` (default) |
| `border-radius: 6px` (already aligned) | unchanged |
| `filter: drop-shadow(...)` | removed — use focus ring instead |
| Hover `#FFB82C` (yellow) | Hover darkens primary by 10 % |
| `font-weight: 700` | `font-weight: 500` |
| Letter-spacing `-0.01em` | `0` (use `--tracking-tight` only on display sizes) |
