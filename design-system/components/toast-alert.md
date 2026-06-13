# Alerts &amp; toasts

Two adjacent patterns for status feedback:

- **Alert** — inline, persistent. Lives with the content it explains (e.g., "License expires in 14 days" at the top of a settings page).
- **Toast** — transient, system-level. Stacks bottom-right and dismisses automatically.

Both share the four intents — info, success, warning, danger — tied to the semantic colors.

## Alert

| Token | Value |
|---|---|
| Container | `--card`, 1 px `--border`, `--radius-md`, `--shadow-xs` |
| Padding | 12 / 14 px |
| Layout | leading dot or icon + title + body, gap 12 px |
| Title | `--text-sm`, `--font-weight-medium`, `--foreground` |
| Body | `--text-sm`, `--muted-foreground`, gap 2 px under title |
| Action (optional) | `btn-link` aligned to the right |
| Dot | 8 px circle in the intent color |

| Intent | Dot color | Use for |
|---|---|---|
| Info | `--info` | Neutral updates: "New version available" |
| Success | `--success` | Confirmations: "Network deployed" |
| Warning | `--warning` | Soft warnings: "License expires in 14 days" |
| Danger | `--destructive` | Critical: "NODE 4 unreachable" |

### Filled variant
For the rare case an alert needs to dominate (a deployment-blocking error), swap the white card background for a 10 % tint of the intent color and the title color for the intent's "ink" (e.g., `hsl(8 75% 40%)` for danger). Use sparingly — overusing this collapses the visual hierarchy.

## Toast

| Token | Value |
|---|---|
| Background | `--neutral-900` (dark, even in light mode for visual lift) |
| Foreground | `--neutral-0` |
| Padding | 12 / 14 px |
| Radius | `--radius-md` |
| Shadow | `--shadow-lg` |
| Width | min 240 px, max 420 px |
| Default duration | 4000 ms |
| Stacking | bottom-right, 8 px gap, max 3 stacked, oldest dismisses first |
| Enter | 200 ms `--ease-out`, slide from right + fade |
| Exit | 150 ms `--ease-in-out`, slide right + fade |

### Variants

- **Default** — leading checkmark in success teal, label in white, optional "Undo" link in `--neutral-400`.
- **Loading** — spinner instead of checkmark, no auto-dismiss until promise resolves.
- **Error** — leading red dot, message in white. Stays until dismissed (no timer).

### Anatomy

```
┌──────────────────────────────────────────┐
│ ✓  Configuration saved        Undo  ✕    │
└──────────────────────────────────────────┘
```

The trailing `✕` close button is optional but required for error toasts (which don't auto-dismiss).

## When to use which

| Situation | Use |
|---|---|
| Result of an action just performed | Toast |
| Persistent context for the page | Alert |
| Confirmation of an irreversible action | Toast (with Undo when possible) |
| Form-level validation errors | Alert above the form, plus inline field errors |
| System-wide outage banner | Alert pinned at the top of the app |

## Accessibility

- Toasts use `role="status"` for non-error intents (polite live region), `role="alert"` for errors (assertive). Don't make every toast assertive — it preempts the screen reader.
- Auto-dismissing toasts pause the timer on hover or focus inside the toast.
- Errors and warnings should not rely on color alone — pair the dot with the title text and an icon if available.
- Provide a way to dismiss any persistent alert. Auto-dismissing toasts must offer keyboard dismissal via `Escape` when focused.
- Stack region is wrapped in a `aria-live="polite"` container with `aria-relevant="additions text"`.

## Do / don't

| ✅ Do | ❌ Don't |
|---|---|
| Pair toast Undo with a 4-second window | Show "Undo" but make it do nothing |
| Use error toasts for transient failures only | Use error toasts for form validation |
| Keep toast text under 80 characters | Wrap to 4 lines of body copy |
| Show one alert per region max | Stack 3 alerts on a page |

## Migration from v1

| v1 | v2 |
|---|---|
| Custom alert boxes per page | Single Alert component, four intents |
| Ant `notification` defaults | Replace with shadcn-style toast system |
| Toast on light background | Always dark for lift, even in light mode |
| 6-second auto-dismiss | 4 seconds + pause on hover |
