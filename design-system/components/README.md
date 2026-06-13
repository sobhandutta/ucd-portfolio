# Component specs — v2

Each file documents a component in the upgraded Ataya Harmony system. Specs cover anatomy, tokens, variants, states, accessibility, do/don't, and migration notes from v1.

| Component | File | Status |
|---|---|---|
| Button | [button.md](./button.md) | ✅ |
| Input &amp; forms | [input.md](./input.md) | ✅ |
| Card | [card.md](./card.md) | ✅ |
| Navigation | [navigation.md](./navigation.md) | ✅ |
| Table | [table.md](./table.md) | ✅ |
| Dialog | [dialog.md](./dialog.md) | ✅ |
| Tabs | [tabs.md](./tabs.md) | ✅ |
| Alerts &amp; toasts | [toast-alert.md](./toast-alert.md) | ✅ |
| Avatar &amp; badge | [avatar-badge.md](./avatar-badge.md) | ✅ |
| Dropdown menu | [dropdown-menu.md](./dropdown-menu.md) | ✅ |

## How to use a spec

Each spec is the source of truth — it references `tokens-v2.css` for any visual decision and the live preview at [`../index.html`](../index.html) for the rendered behavior. When implementing a component:

1. Read the spec end-to-end before writing code. Migration notes call out exactly where v1 diverges.
2. Use Radix or shadcn primitives for anything with non-trivial keyboard / ARIA behavior — Tabs, Dialog, Dropdown Menu, Tooltip. Don't roll your own.
3. Cross-reference [`../index.html`](../index.html) for the visual reference. The CSS classes there mirror the tokens in the spec.
4. When a screen needs a pattern not covered here (Wizard, Skeleton, Empty state), draft a new file in this folder using the same headings: When to use · Anatomy · Variants · States · Accessibility · Do / don't · Migration.

## Conventions across specs

- Tokens are referenced as CSS variables: `--primary`, `--card`, `--radius-md`. Avoid raw hex.
- Button-like elements share the 36 px default height.
- Focus uses the global `--focus-ring`.
- All copy examples are sentence case.
- Status uses **Up / Down / Standby / Unknown** (see README.md tone).
- No emoji in production UI. Status uses subtle badges with leading dots, never emoji glyphs.
