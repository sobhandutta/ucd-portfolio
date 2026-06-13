# Input &amp; form fields

Single-line text input, select, textarea, checkbox, radio, and switch — the core surfaces for collecting data in network creation, RAN configuration, and settings.

## Field anatomy

A field stacks `label` → `control` → `help|error`, each with 6 px gap. Required fields use a `*` asterisk in the label rather than a separate "required" indicator.

| Token | Value |
|---|---|
| Control height | 36 px (matches button) |
| Control padding (text) | 0 12 px |
| Border | 1 px `--input` |
| Radius | `--radius-md` (6 px) |
| Label | `--text-sm`, `--font-weight-medium`, `--foreground` |
| Help | `--text-xs`, `--muted-foreground` |
| Error | `--text-xs`, `--destructive` |
| Vertical rhythm between fields | 16 px (was 12 px in v1) |

## Variants

### Text input

```html
<input class="input" type="text" placeholder="West Coast Office">
```

### Select

Uses `appearance: none` with a custom chevron SVG so it matches the input's height and border exactly.

### Textarea

`min-height: 84px`, `resize: vertical`, `padding: 10px 12px`, `line-height: --leading-normal`.

### Checkbox / radio

Use the platform input with `accent-color: hsl(var(--primary))` and a 16 px box. No custom-painted check unless theming dark mode requires it.

### Switch

For binary settings that take effect immediately (Auto-upgrade, Send daily digest). 36 × 20 px track, 16 px thumb, primary fill when on. Don't use a switch when the change requires a Save action — use a checkbox instead.

## States

| State | Visual |
|---|---|
| Default | `--input` border |
| Hover | `--neutral-300` border (subtle) |
| Focus-visible | border shifts to `--ring`, plus a 3 px halo at 18 % alpha |
| Filled | `--foreground` text, no other change |
| Invalid | `--destructive` border, error message below |
| Disabled | `--muted` background, `--muted-foreground` text, no border emphasis |
| Read-only | `--muted` background, normal text, no caret |

## Validation

- Validate on **blur** for sync rules; on **submit** for cross-field rules.
- Error copy is specific and actionable: "VLAN ID must be a number between 1 and 4094." not "Invalid input."
- When a field becomes invalid, set `aria-invalid="true"` and link the error with `aria-describedby="<help-id>"`.
- Don't use color alone for error state — pair with the message and the asterisk.

## Accessibility

- Every control has a visible `<label>` linked by `for`/`id`. No placeholder-as-label.
- Required fields use `aria-required="true"` plus the visible asterisk.
- Switches need `role="switch"` and `aria-checked`.
- Custom selects must support arrow keys, Home/End, type-to-search, and Escape to dismiss — prefer Radix or shadcn's `Select` over rolling your own.
- Form-level errors get `role="alert"` and focus the first invalid control.

## Do / don't

| ✅ Do | ❌ Don't |
|---|---|
| Group N4 IP fields in a fieldset with a legend | Show a flat list of 8 unrelated fields |
| Inline-validate after blur | Validate on every keystroke |
| Use sentence case in labels | "VLAN Id :" or "VLAN ID :" — drop the trailing colon |
| Use a switch for instant changes | Use a switch and require a Save button below |

## Migration from v1

| v1 | v2 |
|---|---|
| Border `#C0E5F4` (blue-tinted) | Border `--input` (neutral) |
| `border-radius: 4px` | `border-radius: 6px` |
| Label `font-size: 12px; font-weight: bold` | Label `font-size: 14px; font-weight: 500` |
| Label color `#394463` | Label color `--foreground` |
| Field-to-field margin 12 px | 16 px |
| No focus ring | 3 px halo at 18 % alpha + ring color |
