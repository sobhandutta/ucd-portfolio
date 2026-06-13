// Ataya Harmony UI Kit — Login Screen
const { useState } = React;

function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email || !password) { setError('Please enter your email and password.'); return; }
    setError('');
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin && onLogin(); }, 900);
  };

  return (
    <div style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #02091C 0%, #125695 60%, #126E95 100%)',
      fontFamily: FONTS.ui,
    }}>
      {/* BG grid decoration */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
        {/* Logo */}
        <div style={{ marginBottom: 32, textAlign: 'center' }}>
          <img src="../../assets/atayalan_logo_white.svg" alt="Ataya" style={{ height: 28, marginBottom: 8 }}
            onError={e => e.target.style.display = 'none'} />
          <div style={{ fontFamily: FONTS.sans, fontWeight: 700, fontSize: 22, color: '#fff', letterSpacing: '0.1em' }}>ATAYA</div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 4, fontFamily: FONTS.sans, letterSpacing: '0.04em' }}>Harmony Management Platform</div>
        </div>

        {/* Card */}
        <div style={{
          background: '#fff', borderRadius: 8, padding: '32px 36px',
          width: 360, boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        }}>
          <div style={{ fontSize: 18, fontWeight: 600, color: COLORS.textPrimary, marginBottom: 6, fontFamily: FONTS.sans }}>Sign in</div>
          <div style={{ fontSize: 13, color: COLORS.textMuted, marginBottom: 24 }}>Access your private 5G dashboard</div>

          {error && (
            <div style={{ background: '#fff5f5', border: `1px solid ${COLORS.error}`, borderRadius: RADIUS.sm, padding: '8px 12px', fontSize: 12, color: COLORS.error, marginBottom: 14 }}>
              {error}
            </div>
          )}

          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.textSecondary, marginBottom: 4, textTransform: 'capitalize' }}>Email</div>
            <input value={email} onChange={e => setEmail(e.target.value)}
              placeholder="admin@example.com" type="email"
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              style={{
                width: '100%', height: 38, borderRadius: RADIUS.sm,
                border: `1px solid ${COLORS.cyanLight}`, padding: '0 10px',
                fontSize: 14, color: COLORS.textPrimary, fontFamily: FONTS.ui,
                outline: 'none', boxSizing: 'border-box',
              }} />
          </div>

          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: COLORS.textSecondary, marginBottom: 4, textTransform: 'capitalize' }}>Password</div>
            <input value={password} onChange={e => setPassword(e.target.value)}
              placeholder="••••••••" type="password"
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              style={{
                width: '100%', height: 38, borderRadius: RADIUS.sm,
                border: `1px solid ${COLORS.cyanLight}`, padding: '0 10px',
                fontSize: 14, color: COLORS.textPrimary, fontFamily: FONTS.ui,
                outline: 'none', boxSizing: 'border-box',
              }} />
          </div>

          <button onClick={handleSubmit} disabled={loading} style={{
            width: '100%', height: 40, borderRadius: RADIUS.md,
            background: loading ? COLORS.surfacePage : COLORS.brandBlue,
            color: loading ? COLORS.textMuted : '#fff',
            border: 'none', fontSize: 14, fontWeight: 700, cursor: loading ? 'wait' : 'pointer',
            fontFamily: FONTS.ui, transition: 'background 0.15s',
          }}>
            {loading ? 'Signing in...' : 'Sign In'}
          </button>

          <div style={{ textAlign: 'center', marginTop: 16, fontSize: 12, color: COLORS.linkBlue, cursor: 'pointer' }}>
            Forgot password?
          </div>
        </div>

        <div style={{ marginTop: 20, fontSize: 11, color: 'rgba(255,255,255,0.3)' }}>
          © 2024 Atayalan Inc. — Ataya Harmony v1.6.599
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { LoginScreen });
