// Ataya Harmony UI Kit — Shared Components
// Header, Sidebar, Breadcrumb, PageHeader, StatusDot, Badge, Button

const { useState } = React;

/* ── StatusDot ─────────────────────────────────────────────── */
function StatusDot({ status, size = 8 }) {
  const colors = {
    up: COLORS.teal, down: COLORS.error,
    standby: COLORS.warning, unknown: COLORS.gray300,
    active: COLORS.teal, failed: COLORS.error,
    connecting: COLORS.info,
  };
  return (
    <span style={{
      display: 'inline-block',
      width: size, height: size,
      borderRadius: '50%',
      background: colors[status?.toLowerCase()] || COLORS.gray300,
      flexShrink: 0,
    }} />
  );
}

/* ── Badge ──────────────────────────────────────────────────── */
function Badge({ status, label, solid }) {
  const palettes = {
    up:         { bg: solid ? COLORS.teal    : '#fff', border: COLORS.teal,    text: COLORS.tealDark },
    down:       { bg: solid ? COLORS.error   : '#fff', border: COLORS.error,   text: COLORS.error },
    standby:    { bg: solid ? COLORS.warning : '#fff', border: COLORS.warning, text: '#c98a00' },
    unknown:    { bg: '#fff', border: COLORS.gray300, text: COLORS.textMuted },
    active:     { bg: solid ? COLORS.teal    : '#f0fdf8', border: COLORS.teal,  text: COLORS.tealDark },
    failed:     { bg: solid ? COLORS.error   : '#fff5f5', border: COLORS.error, text: COLORS.error },
    connecting: { bg: '#eff6ff', border: COLORS.info, text: COLORS.brandBlue },
  };
  const p = palettes[status?.toLowerCase()] || palettes.unknown;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '3px 10px', borderRadius: RADIUS.lg,
      background: p.bg, border: `1px solid ${p.border}`,
      fontSize: 12, fontWeight: 500, color: solid ? '#fff' : p.text,
      fontFamily: FONTS.ui,
    }}>
      <StatusDot status={status} size={7} />
      {label || status}
    </span>
  );
}

/* ── Button ─────────────────────────────────────────────────── */
function Btn({ variant = 'primary', size = 'md', children, onClick, disabled, style }) {
  const [hovered, setHovered] = useState(false);
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    borderRadius: RADIUS.md, fontFamily: FONTS.ui,
    fontWeight: 700, cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none', transition: 'background 0.15s, color 0.15s',
    letterSpacing: '-0.01em', lineHeight: 1,
  };
  const sizes = {
    sm: { height: 32, padding: '0 14px', fontSize: 12 },
    md: { height: 40, padding: '0 20px', fontSize: 14 },
  };
  const variants = {
    primary:   { background: hovered && !disabled ? COLORS.buttonHover : COLORS.brandBlue, color: '#fff' },
    secondary: { background: hovered ? '#4F4F5E' : COLORS.surfaceSelected, color: hovered ? COLORS.buttonHover : COLORS.brandBlue },
    danger:    { background: hovered ? '#F45858' : 'transparent', color: hovered ? '#fff' : COLORS.error, border: `1px solid ${COLORS.error}` },
    ghost:     { background: hovered ? COLORS.gray100 : 'rgba(0,0,0,0.02)', color: COLORS.textPrimary, border: 'none' },
    cyan:      { background: hovered ? '#00A5D8' : COLORS.cyan, color: '#fff' },
    disabled:  { background: COLORS.surfacePage, color: COLORS.textDisabled, border: `1px solid ${COLORS.borderLight}` },
  };
  const v = disabled ? variants.disabled : (variants[variant] || variants.primary);
  return (
    <button
      style={{ ...base, ...sizes[size], ...v, ...style }}
      onClick={!disabled ? onClick : undefined}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </button>
  );
}

/* ── Header ─────────────────────────────────────────────────── */
function Header({ activeNav, onNav }) {
  return (
    <div style={{
      background: COLORS.headerBg, height: 56,
      display: 'flex', alignItems: 'center',
      padding: '0 20px', justifyContent: 'space-between',
      flexShrink: 0, zIndex: 100,
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 160 }}>
        <img src="../../assets/atayalan_logo_white.svg" alt="Ataya" style={{ height: 16 }}
          onError={e => { e.target.style.display = 'none'; }} />
        <span style={{ fontFamily: FONTS.sans, fontWeight: 700, fontSize: 16, color: '#fff', letterSpacing: '0.06em' }}>
          ATAYA
        </span>
      </div>

      {/* Nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        {NAV_ITEMS.map(item => {
          const isActive = activeNav === item.key;
          return (
            <div key={item.key}
              onClick={() => onNav && onNav(item.key)}
              style={{
                display: 'flex', alignItems: 'center', gap: 5, padding: '0 12px',
                height: 56, fontSize: 13, cursor: 'pointer',
                color: isActive ? '#fff' : 'rgba(255,255,255,0.55)',
                position: 'relative', transition: 'color 0.12s',
                whiteSpace: 'nowrap',
              }}
            >
              {item.label}
              {isActive && (
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: 3, background: COLORS.cyan,
                  borderRadius: '2px 2px 0 0',
                }} />
              )}
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, minWidth: 160, justifyContent: 'flex-end' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 5,
          padding: '4px 10px', border: `1px solid ${COLORS.cyan}`,
          borderRadius: 16, fontSize: 11, color: COLORS.cyan, cursor: 'pointer',
        }}>
          ↑ Upgrade to v1.6.599
        </div>
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          background: COLORS.sidebarBlue,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 700, color: '#fff',
        }}>JD</div>
      </div>
    </div>
  );
}

/* ── Sidebar ─────────────────────────────────────────────────── */
function Sidebar({ activeItem, onItem }) {
  return (
    <div style={{
      width: 220, background: COLORS.sidebarBg,
      display: 'flex', flexDirection: 'column',
      padding: '8px 0', flexShrink: 0,
      borderRight: `1px solid rgba(255,255,255,0.08)`,
    }}>
      {SIDE_ITEMS.map((item, i) => {
        if (item.divider) return (
          <div key={i} style={{ height: 1, background: 'rgba(255,255,255,0.12)', margin: '8px 12px' }} />
        );
        const isActive = activeItem === item.key;
        return (
          <div key={item.key}
            onClick={() => onItem && onItem(item.key)}
            style={{
              display: 'flex', alignItems: 'center', gap: 9,
              padding: '9px 16px', cursor: 'pointer',
              color: isActive ? '#fff' : 'rgba(255,255,255,0.68)',
              background: isActive ? 'rgba(1,188,243,0.2)' : 'transparent',
              fontSize: 13, transition: 'background 0.12s, color 0.12s',
              position: 'relative',
            }}
            onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; }}
            onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
          >
            {isActive && (
              <div style={{
                position: 'absolute', left: 0, top: 5, bottom: 5,
                width: 3, background: COLORS.teal,
                borderRadius: '0 2px 2px 0',
              }} />
            )}
            <img src={`../../assets/icons/${item.icon}.svg`} alt=""
              style={{ width: 15, height: 15, opacity: 0.85, flexShrink: 0 }}
              onError={e => e.target.style.display = 'none'} />
            {item.label}
          </div>
        );
      })}
    </div>
  );
}

/* ── Breadcrumb ──────────────────────────────────────────────── */
function Breadcrumb({ items }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: COLORS.textSecondary }}>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span style={{ color: COLORS.textMuted, fontSize: 11 }}>›</span>}
          <span style={{ color: i === items.length - 1 ? COLORS.textMuted : COLORS.linkBlue, cursor: i < items.length - 1 ? 'pointer' : 'default' }}>
            {item}
          </span>
        </React.Fragment>
      ))}
    </div>
  );
}

/* ── PageHeader ──────────────────────────────────────────────── */
function PageHeader({ title, breadcrumb, actions }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
      padding: '18px 0 14px',
    }}>
      <div>
        <div style={{ fontFamily: FONTS.sans, fontSize: 18, fontWeight: 500, color: COLORS.textPrimary, letterSpacing: '-0.02em', marginBottom: 4 }}>
          {title}
        </div>
        {breadcrumb && <Breadcrumb items={breadcrumb} />}
      </div>
      {actions && <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>{actions}</div>}
    </div>
  );
}

/* ── AppShell ────────────────────────────────────────────────── */
function AppShell({ activeNav, activeSide, onNav, onSide, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: COLORS.surfacePage, fontFamily: FONTS.ui }}>
      <Header activeNav={activeNav} onNav={onNav} />
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar activeItem={activeSide} onItem={onSide} />
        <div style={{ flex: 1, overflow: 'auto', padding: '0 24px 24px' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { StatusDot, Badge, Btn, Header, Sidebar, Breadcrumb, PageHeader, AppShell });
