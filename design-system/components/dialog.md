# Dialog

A modal surface for focused decisions and forms. Two flavors:

- **Centered dialog** — confirmations, simple forms (≤ 6 fields), destructive actions.
- **Side drawer** — long forms (Add Network, Configure Service), multi-step wizards. Preserves Ataya's signature right-side panel.

## Centered dialog

| Token | Value |
|---|---|
| Width | 480 px (default), 600 px (form), 720 px (large) |
| Background | `--card` |
| Radius | `--radius-xl` (14 px) |
| Shadow | `--shadow-xl` |
| Border | 1 px `--border` |
| Backdrop | `--neutral-900 / 0.4` (40 % black overlay) |
| Header padding | 20 px sides, 20 / 8 px top / bottom |
| Body padding | 12 / 24 px |
| Footer padding | 16 / 24 / 20 px, 1 px top border |
| Animation in | 180 ms `--ease-out`, fade + 4 px upward translate |
| Animation out | 120 ms `--ease-in-out`, fade only |

### Anatomy

```
┌─────────────────────────────────────┐
│  Title                              │ ← --text-lg, --font-weight-semibold
│  One-line description (optional)    │ ← --text-sm, --muted-foreground
├─────────────────────────────────────┤
│                                     │
│  Body content                       │
│                                     │
├─────────────────────────────────────┤
│             [ Cancel ]  [ Confirm ] │ ← right-aligned
└─────────────────────────────────────┘
```

### Buttons in the footer
Right-aligned, 8 px gap. Primary action on the right, cancel on the left. Destructive actions use the destructive button variant (red fill) — don't disguise destruction as a primary.

## Side drawer

| Token | Value |
|---|---|
| Width | 480 px (default), 560 px (long form), 720 px (with preview) |
| Anchor | right edge |
| Background | `--card` |
| Border | 1 px `--border` on the left edge |
| Shadow | `--shadow-xl` |
| Header height | 56 px, 1 px bottom border |
| Title | `--text-lg`, `--font-weight-semibold` |
| Close button | top-right, ghost icon button, 36 px |
| Footer | sticky bottom, 1 px top border, same padding as centered footer |
| Content | scrollable middle region |
| Animation in | 200 ms `--ease-out`, slide from right + backdrop fade |
| Animation out | 150 ms `--ease-in-out`, reverse |

### When to choose drawer vs dialog

| Use drawer when… | Use dialog when… |
|---|---|
| Form has > 6 fields | Confirming a destructive action |
| Workflow is multi-step | Asking a single yes/no |
| User needs to reference the underlying screen | The decision is the entire context |

## States &amp; behavior

- Opening focuses the first interactive element. Trap focus until close.
- `Escape` closes (unless an inline confirm is required — like an unsaved-changes guard).
- Click on the backdrop closes a centered dialog. Drawers require the close button or `Escape` to close — clicking the backdrop just dims it. (This prevents losing in-progress form data.)
- A drawer with unsaved changes opens a centered confirm dialog on close: "Discard changes?" → Cancel / Discard.

## Confirm dialog pattern

For destructive actions, use this exact pattern:

> **Delete this node?**
> NODE 4 will be removed from the West Coast Office network. Connected clients will reattach to other nodes.
> [Cancel]  [Delete node]

The body sentence states what specifically will happen, not just "are you sure?". The destructive button label restates the verb ("Delete node", not "Confirm").

## Accessibility

- `role="dialog"`, `aria-modal="true"`.
- `aria-labelledby` points to the title; `aria-describedby` points to the description if present.
- Focus is trapped inside the dialog. On close, focus returns to the trigger.
- Drawers and dialogs that contain forms must support `Enter` to submit and `Escape` to cancel.
- Backdrops are not interactive elements — don't put them in the tab order.

## Do / don't

| ✅ Do | ❌ Don't |
|---|---|
| State the noun + verb in the title ("Delete node?") | "Are you sure?" |
| Use destructive variant for destructive primaries | Use a red ghost link as the primary destroy |
| Trap focus until close | Allow tab-out to background |
| Right-align footer actions | Left-align or center the action group |

## Migration from v1

| v1 | v2 |
|---|---|
| Drawer-only for all flows | Centered dialog for short flows |
| `--shadow-drawer` (`-12px 0 38px rgba(38,111,226,0.15)`) | `--shadow-xl` (neutral, no blue tint) |
| Border-radius 4 px on drawer | 14 px (`--radius-xl`) on centered, drawers stay flat-edged |
| Backdrop `rgba(0,0,0,0.5)` | 40 % `--neutral-900` (cooler under dark mode) |
