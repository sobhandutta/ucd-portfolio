# Design Critique: Ataya Harmony — Chorus UI Previews

**Reviewed:** 9 screen previews + v2 showcase (`index.html`), tokens, component specs · June 12, 2026
**Method:** Every HTML preview rendered headless at 1440×900 and reviewed visually against the v2 system.

---

## Overall Impression

The v2 design system itself (`index.html`, `tokens-v2.css`, `components/`) is excellent — clean, shadcn-aligned, semantic tokens, dark mode, focus rings, well-documented. **The problem is not the system; it's adoption.** The 9 screens look like they were designed by 3 different teams: three different app shells, three navigation structures, two names for the same AI feature, and at least six visual styles of KPI card. Fixing consistency alone gets you 80% of the "neat, clean, professional" goal.

---

## 1. Consistency (the biggest issue)

| Element | Inconsistency found | Recommendation |
|---|---|---|
| **App shell** | 3 layouts: dark topbar + dark sidebar (Alerts, DNN, Organization, Device Stats); white topbar + logo-in-sidebar (Edge Apps, Network Services); topbar-only, no sidebar (Policy, Network Overview, Home) | Pick ONE shell (the dark topbar + contextual sidebar works best for this density). Make `chorus-app/AppShell.jsx` the single source and rebuild all previews on it |
| **Brand/product name** | Logo says **CHORUS** on most screens, **HARMONY** on Network Services | One product name per surface, everywhere |
| **Top navigation IA** | "Networks" exists on Home/Overview/Services but not on the other six; Network Services merges "Clients & Policies"; Policy splits them | Lock a single nav: Insights & Analytics · Networks · Devices · Clients · Policies · Edge Applications · Organization |
| **AI entry point** | "Ask the AI" (cyan pill) on Network Overview vs "AI Assistant" (navy pill) everywhere else | One name, one style. Note: white text on cyan `#01BCF3` is ~2.2:1 contrast — fails WCAG. Use navy |
| **Time-range controls** | Three different patterns: `24h/7d/30d/90d`, `1D/7D/1M/3M/1Y`, `Today/Yesterday/Week/Month/Quarter/Year` | One segmented control with one vocabulary (suggest `24h · 7d · 30d · 90d · Custom`) |
| **Table row actions** | Icon-only (eye/edit/trash) on Alerts/DNN; colored "Edit / Delete" text on every Policy row; "Details" + kebab on Device Stats/Edge Apps | Standardize: primary action as "Details"/row click, everything else in a kebab menu. Destructive actions only inside the menu |
| **KPI/stat cards** | 6+ variants: icon-left, icon-right, colored top-border (Licenses), divider columns (DNN), glassmorphism (Home), selectable filter cards (Policy) | Use the v2 Card "KPI variant" exclusively; if a card is also a filter, give it one defined selected state |
| **Users/personas in demo data** | Avatar is "A", "SD/Sobhan D.", and "JD/John Doe" depending on the screen | One persona across all previews — this matters in stakeholder demos |
| **Units & formats** | "608 Mb" vs "39.74 MB" vs "263.85 bps"; durations "3:51 min" vs "00:03:51" | Add a formatting spec to the system: units, duration format, tabular numerals for data columns |

## 2. Usability

| Finding | Severity | Recommendation |
|---|---|---|
| Network Overview shows the **same 6 KPIs twice** (top cards + "Network Details" strip) | 🟡 | Keep the cards; make the lower strip the table's column summary or remove it |
| Network Overview date filter says **Jan 1–Jul 1, 2025** but the chart axis shows **Sep 6–Oct 5** | 🔴 (for demos) | Align demo data with controls — mismatches destroy credibility in reviews |
| Policy table: red **Delete** repeated 16× is the strongest visual signal on the page | 🔴 | Move Delete into the kebab; the page instantly looks calmer and safer |
| Policy names truncated/cryptic: "Applic", "app_qci3_" (trailing underscore) | 🟡 | Show full names with tooltip; validate naming on creation |
| Device Stats: **0 Active / 6 Inactive** devices but no banner or guidance — the most important fact on the page is whispered | 🟡 | Add an inline alert with a "Troubleshoot" action when 100% of devices are down |
| Edge Apps: "Install on device" appears in header AND on every app card | 🟢 | Keep contextual one on cards; header CTA could be "Add application" |
| Alerts page: large dead zone below a 2-row table | 🟢 | Cards + table can sit higher; design the empty/low-data state deliberately |
| Home: red suggestion chip "Why is the call drop rate elevated?" reads as an error, not a prompt | 🟡 | Use neutral chips with a small warning icon, not error styling |
| Home: glassmorphism cards over a busy gradient reduce text contrast and read more "marketing site" than "operations console" | 🟡 | Calm the background behind content; reserve the wave art for login/empty states |

## 3. Visual Hierarchy

- **What draws the eye first:** on Policy it's 16 red Deletes; on Home it's the background art. Both are wrong — should be page title/KPIs and the AI prompt respectively.
- **Reading flow** on Overview/Device Stats/DNN is good: title → KPIs → chart → table. Keep that template as the canonical page anatomy.
- **Emphasis:** ALL-CAPS 11px labels (`--text-xs`) are used heavily for card labels. At this size, all-caps + letterspacing harms scanability — recommend a 12px floor for any label that carries meaning.

## 4. Accessibility

- **Contrast:** white-on-cyan buttons fail (~2.2:1). Amber text on white ("Expiring Soon", warning notes) is borderline — test `#FFB800` derivatives against 4.5:1. The v2 token set is sound; the violations are in screens that bypass it.
- **Icon-only buttons** (eye/edit/trash, refresh/log/kebab) need tooltips + `aria-label`s.
- **Color-only status:** mostly good — dots are paired with text labels. Keep that rule.
- **Focus:** v2's single `--focus-ring` token is great; ensure the older previews (Policy, Home) actually consume it.
- **Touch/click targets:** table action icons look ≤32px; pad to 40px hit area.

## 5. What Works Well

- The **v2 showcase is the strongest asset** — semantic surface tokens, HSL-with-alpha composition, a single radius/elevation/motion scale, and per-component specs with do/don't and migration notes. This is genuinely mature design-system work.
- Brand anchors (deep blue, cyan, teal) survive the refresh; the product still feels like Ataya.
- Monospace for technical identifiers (IPs, gNB IDs, DNN names) is exactly right for a network ops audience.
- Status pills (dot + text), delta chips (↑ 4.2% vs last period), and the usage-by-time-of-day heatmap are professional touches.
- The AI assistant panel with cause-breakdown bars is a real differentiator — keep investing there.

---

## Priority Recommendations

1. **Unify the app shell and navigation** — one layout, one nav order, one logo position, one product name. This is the single highest-leverage change; the product cannot look professional while every page has different chrome.
2. **Migrate all 9 screens onto v2 tokens/components** — Policy and Home are clearly pre-v2. The showcase says `index.html` replaces the per-feature previews as source of truth; finish that migration.
3. **Standardize the four recurring patterns** — KPI card, time-range selector, table row-actions, status badge. Add a short spec for each to `components/` (table.md and card.md exist — add "row actions" and "KPI" sections with do/don't).
4. **De-escalate destructive actions** — remove inline red Delete from tables; destructive only in kebab menus and confirm dialogs (the v2 dialog pattern is already correct).
5. **Define data-formatting rules** — units (MB vs Mb vs bps), durations, tabular numerals, date formats. One page in the system docs ends the drift.
6. **Run an a11y sweep** — cyan button contrast, 11px all-caps labels, aria-labels on icon buttons, 40px hit areas.
7. **Polish the demo data** — one persona, date ranges that match the charts, realistic IDs. Cheap to fix, large effect on perceived quality.

*Estimated effort: items 1–2 are the bulk; 3–7 are days, not weeks, once the shell is unified.*
