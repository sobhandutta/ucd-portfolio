# Avatar &amp; badge

Two small primitives that show identity (Avatar) and metadata (Badge). Used across tables, headers, lists, and cards.

## Avatar

A circle that represents a person, organization, or tenant.

| Token | Value |
|---|---|
| Sizes | sm 24 px · md 32 px · lg 40 px · xl 56 px |
| Radius | full circle |
| Border (when overlapping) | 2 px `--card` (so stacked avatars cut cleanly) |
| Initials font | `--font-weight-semibold`, scaled per size |
| Tinted fallback bg | `hsl(var(--primary) / 0.15)` |
| Tinted fallback fg | `hsl(var(--primary))` |

### When the user has a photo
Use the photo. Fall back to initials only when the photo URL fails (`onError` handler swaps to initials).

### When showing many users
Stack horizontally, overlap by 8 px (sm) or 12 px (md+), each with a 2 px `--card` ring. Overflow indicator at the end: a `+N` chip on the muted fallback background. Limit to 5 visible avatars before overflow.

### Status dot on avatar
A small status circle bottom-right (1/3 of avatar size, 2 px `--card` border, intent color). Use to show online/offline, active/idle.

## Badge

A small label that carries status, count, or category metadata.

### Solid variant
Used for counts and category labels.

| Token | Value |
|---|---|
| Background | `--primary` (or other intent) |
| Foreground | matching intent foreground |
| Height | 20 px |
| Padding | 2 / 8 px |
| Radius | `--radius-full` |
| Font | `--text-xs`, `--font-weight-medium` |

### Subtle variant
Used for status. Background at 18 % alpha of the intent, text in a darkened version of the intent (`hsl(<H> <S>% 30%)` works as a starting recipe).

| Intent | Background | Text |
|---|---|---|
| Success | `--success / 0.18` | `hsl(163 60% 30%)` |
| Warning | `--warning / 0.22` | `hsl(35 90% 30%)` |
| Danger | `--destructive / 0.15` | `hsl(8 75% 40%)` |
| Info | `--info / 0.18` | `hsl(195 80% 30%)` |
| Neutral | `--muted` | `--muted-foreground` |

### Outline variant
For low-emphasis tags. Transparent background, 1 px `--border`, text in `--muted-foreground`. Same dimensions.

### With dot
Subtle badges often pair with a 6 px leading dot in the intent color. Removes the need for an icon and keeps the badge dense.

## States

| State | Avatar | Badge |
|---|---|---|
| Default | as above | as above |
| Hover (interactive) | optional 2 px ring `--ring / 0.4` | not interactive — make a button if it needs hover |
| Focus-visible | `--focus-ring` | `--focus-ring` |
| Loading | skeleton circle in `--muted` | skeleton pill in `--muted` |

## Accessibility

- Avatar with photo: `<img alt="<full name>">`. Avatar with initials: `<div role="img" aria-label="<full name>">`.
- Status dots on avatars must be paired with text elsewhere — color alone never conveys online/offline.
- Subtle badges with intent must include the textual label that describes the state ("Up", "Down"), not just the dot color.
- Solid count badges (e.g., "12 new") should announce as "12 new notifications" — wrap with `aria-label` if the visible text is just a number.

## Do / don't

| ✅ Do | ❌ Don't |
|---|---|
| Tint the fallback bg from the primary or muted ramp | Generate a new color per name (looks chaotic at scale) |
| Use subtle badges for status, solid for counts | Use solid danger badges for status — they read as alerts |
| Pair status dots with text labels | Show only a colored dot for state |
| Cap initials at 2 characters | Show "JOHN" inside an avatar |

## Migration from v1

| v1 | v2 |
|---|---|
| Status pills with bordered teal/red outline | Subtle badges with tinted backgrounds + dot |
| Custom Ant Tag overrides | Single Badge component, 3 variants |
| Avatar fallback was solid teal | Tinted primary with primary-colored initials |
| No avatar group/stack pattern | Stack with 2 px ring + `+N` overflow |
