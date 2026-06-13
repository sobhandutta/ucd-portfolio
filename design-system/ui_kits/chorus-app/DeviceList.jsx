// Ataya Harmony UI Kit — Device List Screen
const { useState } = React;

function DeviceList({ onSelectDevice }) {
  const [search, setSearch] = useState('');
  const devices = [
    { name: 'gnb-tokyo-01',   sn: '8A:2F:0C:11:22:33', status: 'up',      type: '5G NR', ip: '10.0.1.101', uptime: '13 days', tenant: 'Tokyo Corp' },
    { name: 'gnb-osaka-02',   sn: '8A:2F:0C:44:55:66', status: 'down',    type: '5G NR', ip: '10.0.1.102', uptime: '—',       tenant: 'Osaka Mobile' },
    { name: 'gnb-kyoto-03',   sn: '8A:2F:0C:77:88:99', status: 'standby', type: 'LTE',   ip: '10.0.1.103', uptime: '2 days',  tenant: 'Kyoto Net' },
    { name: 'gnb-nara-04',    sn: '8A:2F:0C:AA:BB:CC', status: 'unknown', type: '5G NR', ip: '10.0.1.104', uptime: '—',       tenant: 'Tokyo Corp' },
    { name: 'gnb-sapporo-05', sn: '8A:2F:0C:DD:EE:FF', status: 'up',      type: '5G NR', ip: '10.0.1.105', uptime: '7 days',  tenant: 'North 5G' },
  ];
  const filtered = devices.filter(d =>
    d.name.includes(search) || d.tenant.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <PageHeader
        title="Network Devices"
        breadcrumb={['Networks', 'Devices']}
        actions={
          <>
            <Btn variant="ghost" size="sm">Export CSV</Btn>
            <Btn variant="primary" size="sm">+ Add Device</Btn>
          </>
        }
      />
      <div style={{
        background: '#fff', border: `1px solid ${COLORS.borderLight}`,
        borderRadius: RADIUS.md, boxShadow: SHADOWS.card, overflow: 'hidden',
      }}>
        {/* Toolbar */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '10px 16px', borderBottom: `1px solid ${COLORS.border}`,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, border: `1px solid ${COLORS.border}`, borderRadius: RADIUS.sm, padding: '0 8px', height: 30, background: '#fff', width: 200 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={COLORS.textMuted} strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search devices..."
              style={{ border: 'none', outline: 'none', fontSize: 12, color: COLORS.textPrimary, background: 'transparent', width: '100%', fontFamily: FONTS.ui }} />
          </div>
          <div style={{ fontSize: 12, color: COLORS.textMuted }}>{filtered.length} devices</div>
        </div>
        {/* Table */}
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: COLORS.surfacePage }}>
              {['Device Name', 'Status', 'Type', 'IP Address', 'Uptime', 'Tenant', ''].map(h => (
                <th key={h} style={{ padding: '8px 14px', textAlign: 'left', fontSize: 12, fontWeight: 400, color: COLORS.textSecondary, borderBottom: `1px solid ${COLORS.border}`, whiteSpace: 'nowrap' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((d, i) => (
              <tr key={i} style={{ borderBottom: `1px solid ${COLORS.borderLight}` }}
                onMouseEnter={e => e.currentTarget.style.background = '#F9FBFD'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <td style={{ padding: '9px 14px' }}>
                  <div onClick={() => onSelectDevice && onSelectDevice(d)}
                    style={{ color: COLORS.linkBlue, fontWeight: 500, fontSize: 13, cursor: 'pointer' }}>{d.name}</div>
                  <div style={{ fontSize: 11, color: COLORS.textSecondary, marginTop: 2, fontFamily: FONTS.mono }}>{d.sn}</div>
                </td>
                <td style={{ padding: '9px 14px' }}><Badge status={d.status} label={d.status.charAt(0).toUpperCase() + d.status.slice(1)} /></td>
                <td style={{ padding: '9px 14px', fontSize: 13 }}>{d.type}</td>
                <td style={{ padding: '9px 14px', fontFamily: FONTS.mono, fontSize: 12 }}>{d.ip}</td>
                <td style={{ padding: '9px 14px', fontSize: 13 }}>{d.uptime}</td>
                <td style={{ padding: '9px 14px', fontSize: 13, color: COLORS.textSecondary }}>{d.tenant}</td>
                <td style={{ padding: '9px 14px' }}>
                  <div style={{ display: 'flex', gap: 4 }}>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: COLORS.textMuted, fontSize: 13, padding: '2px 4px', borderRadius: 3 }}>✎</button>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: COLORS.textMuted, fontSize: 13, padding: '2px 4px', borderRadius: 3 }}>⋮</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination hint */}
        <div style={{ padding: '10px 16px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8, fontSize: 12, color: COLORS.textMuted, borderTop: `1px solid ${COLORS.borderLight}` }}>
          <span>1–{filtered.length} of {filtered.length}</span>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: COLORS.textMuted, fontSize: 13 }}>‹</button>
          <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: COLORS.textMuted, fontSize: 13 }}>›</button>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { DeviceList });
