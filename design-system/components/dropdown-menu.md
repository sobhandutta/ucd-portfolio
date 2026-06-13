# Dropdown menu

A floating list of actions or options anchored to a trigger. Used for row overflow menus (`⋯`), the user avatar menu in the top bar, and select-style filters where a Select primitive is overkill.

## Anatomy

| Token | Value |
|---|---|
| Surface | `--popover`, 1 px `--border`, `--radius-md`, `--shadow-lg` |
| Internal padding | 4 px |
| Min width | 220 px |
| Max width | 320 px |
| Item height | 32 px |
| Item padding | 7 / 10 px |
| Item radius | `calc(--radius-md - 2px)` |
| Item font | `--text-sm`, `--foreground` |
| Hover background | `--accent` |
| Disabled item | opacity 0.5, no pointer |
| Shortcut hint (`kbd`) | `--text-xs`, `--muted-foreground`, `--font-mono`, `--muted` background, 1 px `--border`, 4 px radius |
| Section separator | 1 px `--border`, 4 px vertical margin |
| Section label | `--text-xs`, `--muted-foreground`, uppercase, `--tracking-wide`, 6 / 10 px padding |
| Destructive item | text `--destructive`, hover bg `--destructive / 0.1` |
| Submenu indicator | `›` glyph, right-aligned |

## Anatomy — typical menu

```
┌──────────────────────────────────────┐
│  View details              Enter     │
│  Edit configuration        ⌘E        │
│  Duplicate                 ⌘D        │
│  Export YAML                         │
├──────────────────────────────────────┤
│  Delete node               ⌘⌫        │ ← destructive
└──────────────────────────────────────┘
```

## Variants

### Action menu
The default — a list of one-shot actions. Each item closes the menu on activate.

### Selectable menu
Items can be marked with a leading checkmark when selected. Use Radix `DropdownMenuCheckboxItem` for multi-select or `DropdownMenuRadioItem` for single-select. Don't roll your own — keyboard semantics are the trap.

### Combobox / search menu
When the menu has > 8 items, add a search input at the top. Items filter on type. This is the pattern behind a future "command palette" for the AI Assistant.

### Submenu
A right-pointing item opens a nested submenu. Open on hover (200 ms delay) and on `→` arrow key. Close on `←` or click outside.

## Trigger

Almost always a button. The trigger button:
- Renders an icon button (`⋯`, 36 px square) for row overflow menus.
- Renders an outline button with trailing chevron (`▾`) for filters and selectors.
- Toggles `aria-expanded` and `aria-haspopup="menu"`.

## Positioning

- Default: anchored below the trigger, aligned to the trigger's start edge.
- Flip vertically when the bottom would clip the viewport.
- Flip horizontally when the right edge would clip.
- Offset 4 px below the trigger.
- Stays within an 8 px collision padding from the viewport edge.

Use Radix's `Popper` (or any modern positioning lib) — manual `position: absolute` math gets brittle.

## States &amp; behavior

| State | Visual |
|---|---|
| Closed | trigger only |
| Open | menu visible, trigger gets `aria-expanded="true"` and a 1 px focus ring |
| Item focused | `--accent` background (keyboard `↑/↓`) |
| Item hovered | `--accent` background |
| Item active (mouse down) | `--accent` darkened by 5 % |
| Disabled item | opacity 0.5, no hover, skipped by keyboard |

### Keyboard
- `Space` / `Enter` / `↓` opens the menu and focuses the first item.
- `↑` / `↓` move between items.
- `Home` / `End` jump to first / last.
- Type-ahead jumps to the first item starting with that letter.
- `Enter` activates; `Escape` closes; focus returns to the trigger.
- `→` opens a submenu; `←` closes it.

### Animation
- Open: 120 ms `--ease-out`, 4 px upward translate + fade.
- Close: 100 ms `--ease-in-out`, fade only.

## Accessibility

- Use Radix `DropdownMenu` or shadcn's `DropdownMenu` — the WAI-ARIA Authoring Practices' menu pattern is intricate and easy to get wrong.
- Trigger: `<button>` with `aria-haspopup="menu"`, `aria-expanded={open}`.
- Surface: `role="menu"`, `aria-orientation="vertical"`.
- Items: `role="menuitem"` (or `menuitemcheckbox`/`menuitemradio` when selectable).
- Separators: `role="separator"`.
- Section labels: visually rendered, but use `aria-label` on the menu group rather than nesting role elsewhere.
- Maintain focus inside the menu while open; restore focus to trigger on close.

## Do / don't

| ✅ Do | ❌ Don't |
|---|---|
| Group destructive items below a separator | Mix destructive items with regular ones |
| Show shortcuts only for actions that have one | Invent fake shortcuts to fill space |
| Use a search field above 8 items | Show a 24-item flat menu |
| Use sentence case ("Edit configuration") | Title case or "EDIT" |

## Migration from v1

| v1 | v2 |
|---|---|
| Ant `Dropdown` with custom theming | shadcn / Radix `DropdownMenu` |
| Item height 36 px | 32 px (denser, matches input size language) |
| No keyboard support beyond default | Full WAI-ARIA menu pattern |
| Solid box shadow | `--shadow-lg`, neutral, no blue tint |
| No destructive item treatment | Clear destructive styling + section separator |
