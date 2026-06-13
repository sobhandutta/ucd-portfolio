# Ataya Harmony Chorus App UI Kit

## Overview
High-fidelity interactive prototype of the Ataya Harmony Chorus management UI. Recreated from the Figma "Ataya Harmony.fig" design file and `chorus-harmony-ui` codebase.

## Screens
1. **Login** — Full-screen dark branded login with logo, email/password form
2. **Network Dashboard** — KPI widget grid + traffic chart (matches Figma `/CHORUS/NETWORK-Overview`)
3. **Device List** — Searchable table with status badges, actions, sortable columns
4. **Analytics** — KPI metrics row + area chart
5. **Tenant List** — Card list of tenant organizations
6. **Add Device** — Slide-out drawer with form fields

## Navigation
- Click top nav items to switch between Networks, Analytics, Organization views
- Click sidebar items to switch sub-views
- Click any device name to open the Add Device drawer
- Top nav "Upgrade" badge is interactive

## Components
| File | Contents |
|------|----------|
| `tokens.js` | COLORS, FONTS, SHADOWS, RADIUS, NAV_ITEMS, SIDE_ITEMS |
| `AppShell.jsx` | StatusDot, Badge, Btn, Header, Sidebar, Breadcrumb, PageHeader, AppShell |
| `NetworkDashboard.jsx` | KpiCard, TrafficWidget, NetworkDashboard |
| `DeviceList.jsx` | DeviceList with search + table |
| `FormDrawer.jsx` | FormDrawer, FormField, TextInput, SelectInput, AddDeviceForm |
| `LoginScreen.jsx` | LoginScreen |

## Design Alignment
- shadcn/ui-style: clean white surfaces, subtle borders, muted grays, functional typography
- Color tokens match `packages/shared/src/css/colorPalette.js`
- Typography: Roboto (body/UI) + Work Sans (headings/nav) + Menlo (mono)
- Ant Design patterns preserved for tables, drawers, form layouts
