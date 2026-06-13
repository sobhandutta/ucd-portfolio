// Ataya Harmony UI Kit — Network Dashboard Screen
const { useState } = React;

/* ── KPI Card ─────────────────────────────────────────────── */
function KpiCard({ title, metrics }) {
  return (
    <div style={{
      background: '#fff', border: `1px solid ${COLORS.borderLight}`,
      borderRadius: RADIUS.sm, padding: '14px 18px',
      boxShadow: SHADOWS.card, flex: 1, minWidth: 220,
    }}>
      <div style={{
        fontSize: 11, fontWeight: 700, letterSpacing: '0.04em',
        textTransform: 'uppercase', color: COLORS.textSecondary,
        marginBottom: 10,
      }}>{title}</div>
      <div style={{ display: 'flex', gap: 18, alignItems: 'baseline', flexWrap: 'wrap' }}>
        {metrics.map((m, i) => (
          <div key={i}>
            <div style={{ fontSize: 22, fontWeight: 600, color: COLORS.textPrimary, lineHeight: 1 }}>{m.value}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 3 }}>
              <StatusDot status={m.status} size={7} />
              <span style={{ fontSize: 11, color: COLORS.textSecondary }}>{m.label}</span>
            </div>
            {m.sub && <div style={{ fontSize: 10, color: COLORS.textMuted, marginTop: 1 }}>{m.sub}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Mini Sparkline ───────────────────────────────────────── */
function Sparkline({ data, color = COLORS.teal, height = 40 }) {
  const max = Math.max(...data), min = Math.min(...data);
  const norm = data.map(v => height - ((v - min) / (max - min || 1)) * (height - 4));
  const w = 120;
  const pts = data.map((_, i) => `${(i / (data.length - 1)) * w},${norm[i]}`).join(' ');
  return (
    <svg width={w} height={height} viewBox={`0 0 ${w} ${height}`}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      <polyline points={`0,${height} ${pts} ${w},${height}`}
        fill={color} fillOpacity="0.12" stroke="none" />
    </svg>
  );
}

/* ── Traffic Widget ───────────────────────────────────────── */
function TrafficWidget() {
  const datasets = [
    { label: 'San Jose',  color: COLORS.teal,    data: [100,200,450,320,700,560,820] },
    { label: 'Hong Kong', color: '#A5D750',       data: [50,300,200,800,400,650,400] },
    { label: 'New York',  color: COLORS.warning,  data: [20,80,150,90,200,130,250] },
  ];
  return (
    <div style={{
      background: '#fff', border: `1px solid ${COLORS.borderLight}`,
      borderRadius: RADIUS.sm, padding: '16px 20px',
      boxShadow: SHADOWS.card, marginTop: 16,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: COLORS.textSecondary }}>
          Traffic — All Networks
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          {datasets.map(d => (
            <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: COLORS.textMuted }}>
              <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: d.color }} />
              {d.label.toUpperCase()}
            </div>
          ))}
        </div>
      </div>
      {/* Simple bar chart */}
      <div style={{ display: 'flex', gap: 6, alignItems: 'flex-end', height: 100 }}>
        {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((day, i) => (
          <div key={day} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            {datasets.map(d => {
              const pct = (d.data[i] / 850) * 70;
              return (
                <div key={d.label} style={{
                  width: '80%', height: pct, background: d.color,
                  opacity: 0.8, borderRadius: '2px 2px 0 0',
                }} />
              );
            })}
            <div style={{ fontSize: 9, color: COLORS.textMuted, marginTop: 4 }}>{day.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Network Overview Screen ──────────────────────────────── */
function NetworkDashboard() {
  const kpis = [
    {
      title: 'System (Up Time: 13 Days)',
      metrics: [
        { value: '6',     label: 'Pods',   sub: '14 Disk', status: 'up' },
        { value: '4.3%',  label: 'CPU',    sub: '80 Cores', status: 'up' },
        { value: '84.4%', label: 'Memory', sub: '250 GiB', status: 'down' },
      ],
    },
    {
      title: '5GC (Up Time: 13 Days)',
      metrics: [
        { value: '11',    label: 'Pods',   sub: '14 Disk', status: 'up' },
        { value: '4.3%',  label: 'CPU',    sub: '80 Cores', status: 'up' },
        { value: '14.4%', label: 'Memory', sub: '250 GiB', status: 'up' },
      ],
    },
    {
      title: 'RAN Intelligent Controller (Up Time: 13 Days)',
      metrics: [
        { value: '11',    label: 'Pods',   sub: '14 Disk', status: 'up' },
        { value: '4.3%',  label: 'CPU',    sub: '80 Cores', status: 'up' },
        { value: '14.4%', label: 'Memory', sub: '250 GiB', status: 'up' },
      ],
    },
    {
      title: 'Mobile Edge Computing (Up Time: 13 Days)',
      metrics: [
        { value: '16',    label: 'Pods',   sub: '14 Disk', status: 'up' },
        { value: '4.3%',  label: 'CPU',    sub: '80 Cores', status: 'up' },
        { value: '84.4%', label: 'Memory', sub: '250 GiB', status: 'down' },
      ],
    },
  ];

  return (
    <div>
      <PageHeader
        title="Network Overview"
        breadcrumb={['Networks', 'Network Overview']}
        actions={
          <>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              border: `1px solid ${COLORS.border}`, borderRadius: RADIUS.sm,
              padding: '5px 10px', background: '#fff', fontSize: 12, color: COLORS.textPrimary,
            }}>
              📅 03.01.2020 — 03.07.2020
            </div>
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, color: COLORS.textMuted }}>⋮</button>
          </>
        }
      />
      {/* KPI Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {kpis.map((k, i) => <KpiCard key={i} title={k.title} metrics={k.metrics} />)}
      </div>
      <TrafficWidget />
    </div>
  );
}

Object.assign(window, { KpiCard, TrafficWidget, NetworkDashboard });
