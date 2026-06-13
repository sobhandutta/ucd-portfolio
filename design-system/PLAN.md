# Ataya Harmony Design System — Improvement Plan

**Date:** May 2026  
**Goal:** Modernize Ataya Harmony's UI to align with shadcn/ui design principles while preserving brand identity

---

## Phase 1: Design Token Alignment (Foundation)

### 1.1 Color System Refresh
- **Current state:** Color values scattered across `colorPalette.js`, inline styles, Ant Design overrides
- **Target:** Single source of truth as CSS custom properties (`colors_and_type.css`)
- **Changes:**
  - Replace `#125695` (primary blue) as the main action color — keep as brand anchor
  - Adopt shadcn's neutral gray scale using `oklch()` for perceptually even steps
  - Replace `darkGrayColor: #141414` with true near-black `hsl(0 0% 9%)` for text
  - Add a proper `muted` / `muted-foreground` pair for de-emphasized content
  - Surface colors: introduce `--background`, `--card`, `--popover`, `--muted` semantic vars
  - Status colors: keep teal `#46D5B3` (success), amber `#FFB800` (warning), red `#FF4930` (error)

### 1.2 Typography Modernization
- **Current state:** Roboto 14px as default — functional but dated
- **Target:** Inter or Work Sans as primary UI font (already partially in use)
- **Changes:**
  - Adopt **Inter** as the primary UI typeface (matches shadcn/ui, already in Figma design system page)
  - Keep **Work Sans** for navigation and headings
  - Standardize scale: 12/13/14/16/18/20/24px vs. the current ad-hoc sizing
  - Add `font-feature-settings: "cv11"` for Inter for better numeral rendering
  - Tighten line-heights on small sizes (12px → 1.33 not 1.6)

### 1.3 Spacing & Layout Tokens
- **Current state:** Mix of hardcoded px values and some token usage
- **Target:** 4px base grid, consistent padding tokens
- **No structural changes** to layout (header/sidebar dimensions are correct)

---

## Phase 2: Component Library Update (shadcn/ui Alignment)

### 2.1 Buttons
| Current | New (shadcn-aligned) |
|---------|---------------------|
| `border-radius: 4–6px` | `border-radius: 6px` (consistent) |
| `height: 40px` | `height: 36px` (default), `40px` (lg), `32px` (sm) |
| `box-shadow: drop-shadow(...)` | Remove box-shadow; use focus ring instead |
| Hover: `#FFB82C` | Hover: darken primary by `10%` (keep yellow hover as brand quirk if stakeholders prefer) |
| No focus ring | Add `2px solid ring + 2px offset` on focus |

**New variants to add:**
- `outline` — border only, transparent bg
- `ghost` — no border, hover bg
- `destructive` — red filled (not just border)
- `icon` — square icon-only button, `h-9 w-9`

### 2.2 Form Inputs
| Current | New |
|---------|-----|
| `border: 1px solid #C0E5F4` | `border: 1px solid hsl(214 32% 91%)` (neutral border) |
| No focus ring | `ring-2 ring-offset-2 ring-blue` on focus |
| `border-radius: 4px` | `border-radius: 6px` |
| Custom select with background-image arrow | Styled with `appearance: none` + consistent chevron SVG |
| Label: bold 12px | Label: medium 14px (shadcn uses `text-sm font-medium`) |

### 2.3 Cards
| Current | New |
|---------|-----|
| `box-shadow: 0 0 22px 0.05px #EFEFEF` | `box-shadow: 0 1px 3px rgba(0,0,0,0.08)` (subtle) |
| `border-radius: 4px` | `border-radius: 8px` (more modern) |
| Card header: bold uppercase 11px | Card header: medium 14px, sentence case |
| No card footer area | Add consistent footer slot for actions |

### 2.4 Data Tables (AG Grid / Ant Table)
- Table header: `background: hsl(210 40% 98%)` (not `#F4F7F9` — same tone, just tokenized)
- Row hover: `hsl(210 40% 96%)` — subtle, not jarring
- Cell padding: `12px 16px` (up from `10px 14px`) for more breathing room
- Add column resizer gutter styles
- Zebra striping: **optional**, off by default — add as feature flag

### 2.5 Navigation
- **Top nav:** Increase height from 56px to 64px for more presence
- **Active nav indicator:** Keep the `#01BCF3` bottom bar — this is on-brand
- **Sidebar:** Consider option to use light sidebar (`bg-background`) as a modernization toggle
- Add collapsible sidebar with smooth 200ms transition (already partially in code)
- Add tooltip on collapsed sidebar icon-only mode

### 2.6 New Components to Add (from shadcn/ui)
- [ ] **Toast / Notification** — replace custom alert boxes
- [ ] **Dialog / Modal** — consistent with shadcn Dialog primitives
- [ ] **Tooltip** — replace Ant Design tooltip with lightweight CSS tooltip
- [ ] **Dropdown Menu** — replace Ant Design dropdown with accessible custom
- [ ] **Tabs** — clean underline tabs matching shadcn pattern
- [ ] **Skeleton loaders** — for data-loading states (currently shows nothing)
- [ ] **Command palette** — AI Assistant could use this pattern
- [ ] **Breadcrumb** — standardize with shadcn Breadcrumb

---

## Phase 3: Codebase Integration

### 3.1 Update `colorPalette.js`
```js
// packages/shared/src/css/colorPalette.js
const variables = {
  name: "light",
  colors: {
    // Map old names → new token values
    primaryBlueColor:   "hsl(211 74% 33%)",   // was #125695
    secondaryBlueColor: "hsl(195 98% 47%)",   // was #01BCF3  
    greenColor:         "hsl(163 60% 56%)",   // was #46D5B3
    backgroundLight:    "hsl(210 40% 97%)",   // was #F4F7F9
    borderColor:        "hsl(214 32% 91%)",   // was #D9E3F0
    // ... keep existing names for backward compat
  }
}
```

### 3.2 Update `antOverrideStyle.js`
- Increase `border-radius` on `ant-btn-primary` and `ant-btn-default` to `6px`
- Add focus-visible ring styles: `box-shadow: 0 0 0 2px #fff, 0 0 0 4px #125695`
- Update `ant-input` border color to neutral (not blue-tinted by default)
- Increase `ant-form-item` margin-bottom from 12px to 16px

### 3.3 Add CSS custom properties to `baseStyle.js`
- Inject the `colors_and_type.css` tokens into `:root` via styled-components ThemeProvider
- Bridge: `var(--color-brand-blue)` → `${props => props.theme.colors.primaryBlueColor}`

### 3.4 Component File Updates
**Priority order:**
1. `sharedStyle.js` — `.primary_button`, `.secondary_button`, `.danger_button`
2. `antOverrideStyle.js` — All Ant component overrides
3. `layoutStyle.js` — `.componentBlock`, `.pageHeaderBlock`
4. Individual component CSS files: `filterPanel/filter.css`, `kpiMultiCard/kpiMultiCard.css`

---

## Phase 4: Figma File Updates (Design-side)

### 4.1 Create Updated Component Library
- Update `FORM / Submit Button` — new radius, no shadow, focus state
- Update `FORM / Text Input` — neutral border, new focus ring
- Update `FORM / Select Menu` — consistent chevron, new border
- Update `MENU / Header` — optional height increase to 64px
- Update `Kpi Box` — larger radius (8px), cleaner header

### 4.2 Add shadcn/ui-style Components to `/Assets/Components`
- Toast, Dialog, Tabs, Dropdown, Skeleton, Badge (updated)
- Create a `Design System` frame using Inter type scale from `/Assets/Typography`

### 4.3 Color Style Updates
- Update Figma color styles to match new tokens
- Add semantic color styles: `Background`, `Card`, `Muted`, `Border`
- Remove duplicate/unused colors

---

## Quick Wins (Do First)

These can be shipped in a single PR with low risk:

1. ✅ `border-radius: 6px` on all buttons (was 4px) 
2. ✅ Neutral border color on inputs (`#D9E3F0` → `hsl(214 32% 91%)`) — same visual, tokenized
3. ✅ Add `font-family: 'Inter', 'Roboto', sans-serif` to `baseStyle.js`
4. ✅ Add `:focus-visible` ring styles globally
5. ✅ Increase table row padding from 10px to 12px
6. ✅ Add skeleton loader for table loading states
7. ✅ Standardize card `border-radius` to 8px

---

## Out of Scope (This Plan)

- Changing the overall product information architecture
- Dark mode (would require significant token work — track as separate initiative)
- Mobile/responsive layouts (product is desktop-first; defer)
- Replacing Ant Design with shadcn primitives (too high risk for incremental change)
- Replacing AG Grid (too core to data views)

---

## Success Metrics

- Lighthouse Accessibility score ≥ 90 (currently estimated ~72)
- Consistent `border-radius` across all interactive elements (0 outliers)
- All color values reference CSS custom property tokens (0 hardcoded hex values in new code)
- Design/dev token parity: every Figma color style maps to a CSS var
