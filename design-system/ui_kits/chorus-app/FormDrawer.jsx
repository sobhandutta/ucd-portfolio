// Ataya Harmony UI Kit — Form Drawer + Add Device Form
const { useState } = React;

function FormDrawer({ title, open, onClose, children }) {
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 200, display: 'flex', pointerEvents: 'all' }}>
      {/* Overlay */}
      <div onClick={onClose} style={{ flex: 1, background: 'rgba(0,0,0,0.02)' }} />
      {/* Panel */}
      <div style={{
        width: 420, background: '#fff', display: 'flex', flexDirection: 'column',
        boxShadow: SHADOWS.headerGlow,
        borderLeft: `1px solid ${COLORS.border}`,
      }}>
        {/* Header */}
        <div style={{
          padding: '16px 20px', borderBottom: `1px solid ${COLORS.border}`,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: '#fff',
        }}>
          <div style={{ fontSize: 16, fontWeight: 500, color: COLORS.textPrimary, fontFamily: FONTS.sans }}>{title}</div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 18, color: COLORS.textMuted, lineHeight: 1, padding: 4 }}>✕</button>
        </div>
        {/* Body */}
        <div style={{ flex: 1, overflow: 'auto', padding: 20 }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function FormField({ label, hint, error, children }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.textSecondary, textTransform: 'capitalize', marginBottom: 4 }}>{label}</div>
      {children}
      {hint && !error && <div style={{ fontSize: 11, color: COLORS.textMuted, marginTop: 3 }}>{hint}</div>}
      {error && <div style={{ fontSize: 11, color: COLORS.error, marginTop: 3 }}>{error}</div>}
    </div>
  );
}

function TextInput({ placeholder, value, onChange, error, disabled }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      value={value} onChange={onChange} placeholder={placeholder} disabled={disabled}
      onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      style={{
        width: '100%', height: 36, borderRadius: RADIUS.sm,
        border: `1px solid ${error ? COLORS.error : focused ? COLORS.linkBlue : COLORS.cyanLight}`,
        boxShadow: focused ? `0 0 0 2px rgba(26,138,250,0.12)` : 'none',
        background: disabled ? COLORS.surfacePage : '#fff',
        padding: '0 10px', fontSize: 14, color: disabled ? COLORS.textDisabled : COLORS.textPrimary,
        fontFamily: FONTS.ui, outline: 'none', transition: 'border-color 0.15s, box-shadow 0.15s',
        boxSizing: 'border-box',
      }}
    />
  );
}

function SelectInput({ options, value, onChange }) {
  return (
    <select value={value} onChange={onChange} style={{
      width: '100%', height: 36, borderRadius: RADIUS.sm,
      border: `1px solid ${COLORS.cyanLight}`, background: '#fff',
      padding: '0 10px', fontSize: 14, color: COLORS.textPrimary,
      fontFamily: FONTS.ui, outline: 'none', appearance: 'none',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236A6F81' stroke-width='1.5' fill='none'/%3E%3C/svg%3E")`,
      backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center',
      boxSizing: 'border-box',
    }}>
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  );
}

function AddDeviceForm({ onClose }) {
  const [form, setForm] = useState({ name: '', type: '5gnr', ip: '', tenant: 'tokyo', notes: '' });
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  return (
    <div>
      <FormField label="Device Name" hint="Unique identifier for this gNB device">
        <TextInput value={form.name} onChange={set('name')} placeholder="e.g. gnb-tokyo-06" />
      </FormField>
      <FormField label="Device Type">
        <SelectInput value={form.type} onChange={set('type')} options={[
          { value: '5gnr', label: '5G NR' },
          { value: 'lte',  label: 'LTE' },
          { value: 'cbrs', label: 'CBRS' },
        ]} />
      </FormField>
      <FormField label="IP Address" hint="Management IP of the device">
        <TextInput value={form.ip} onChange={set('ip')} placeholder="e.g. 10.0.1.106" />
      </FormField>
      <FormField label="Tenant">
        <SelectInput value={form.tenant} onChange={set('tenant')} options={[
          { value: 'tokyo',  label: 'Tokyo Corp' },
          { value: 'osaka',  label: 'Osaka Mobile' },
          { value: 'kyoto',  label: 'Kyoto Net' },
        ]} />
      </FormField>
      <FormField label="Notes (optional)">
        <textarea value={form.notes} onChange={set('notes')}
          placeholder="Additional configuration notes..."
          style={{
            width: '100%', minHeight: 72, borderRadius: RADIUS.sm,
            border: `1px solid ${COLORS.cyanLight}`, background: '#fff',
            padding: '8px 10px', fontSize: 14, color: COLORS.textPrimary,
            fontFamily: FONTS.ui, outline: 'none', resize: 'vertical', boxSizing: 'border-box',
          }} />
      </FormField>
      <div style={{ display: 'flex', gap: 10, marginTop: 20, justifyContent: 'flex-end', borderTop: `1px solid ${COLORS.borderLight}`, paddingTop: 16 }}>
        <Btn variant="secondary" onClick={onClose}>Cancel</Btn>
        <Btn variant="primary" onClick={onClose}>Add Device</Btn>
      </div>
    </div>
  );
}

Object.assign(window, { FormDrawer, FormField, TextInput, SelectInput, AddDeviceForm });
