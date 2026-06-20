import { useNavigate } from 'react-router-dom'
import { useLightbox } from '../context/LightboxContext'

export default function AiCodePage() {
  const navigate = useNavigate()
  const { open: openLightbox } = useLightbox()

  return (
    <div className="ai-page-inner">

      <div className="article-back">
        <button onClick={() => navigate('/ai')} className="back-btn">← AI Experiments</button>
      </div>

      <div className="ai-header">
        <p className="ai-eyebrow">Experiment 02 — Engineering Process · 2025</p>
        <h1 className="ai-title">AI-Assisted Code Quality<br />&amp; 5× Developer Productivity</h1>
        <p className="ai-intro">A framework for systematically applying AI coding tools — Claude Code, Cursor, and GitHub Copilot — to lift code quality, eliminate technical debt, and multiply team output without adding headcount.</p>
      </div>

      <div className="ai-featured">
        <div className="ai-feat-left">
          <p className="ai-feat-tag">The Problem</p>
          <h2 className="ai-feat-title">Engineering teams are leaving productivity on the table</h2>
          <p className="ai-feat-body">Most teams use AI tools reactively — pasting snippets into a chat window and hoping for a useful answer. The result is marginal gains: maybe 10–20% faster on greenfield code, but no improvement in the hardest parts of the job: understanding legacy systems, fixing subtle bugs, writing tests for untested code, and closing accessibility or security gaps.</p>
          <p className="ai-feat-body">This framework changes that. It treats AI tools as systematic co-pilots embedded in every phase of the engineering workflow — not just code generation, but code review, refactoring, test coverage, accessibility auditing, and security hardening.</p>
          <div className="ai-feat-meta">
            <div className="ai-feat-meta-row">
              <span className="ai-feat-meta-label">Tools</span>
              <span className="ai-feat-meta-val">Claude Code, Cursor, GitHub Copilot</span>
            </div>
            <div className="ai-feat-meta-row">
              <span className="ai-feat-meta-label">Focus areas</span>
              <span className="ai-feat-meta-val">Refactoring · Unit tests · Accessibility · Security</span>
            </div>
            <div className="ai-feat-meta-row">
              <span className="ai-feat-meta-label">Outcome</span>
              <span className="ai-feat-meta-val">5× measured productivity improvement</span>
            </div>
          </div>
        </div>
        <div className="ai-feat-right">
          <div className="ai-arch-box">
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', marginBottom: '24px' }}>Productivity Multiplier Framework</p>
            <svg viewBox="0 0 460 340" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="170" y="140" width="120" height="60" rx="4" fill="#f4f4f9" stroke="#4a4a8a" strokeWidth="1.5"/>
              <text x="230" y="164" textAnchor="middle" fill="#555577" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="600" letterSpacing="0.08em">AI LAYER</text>
              <text x="230" y="180" textAnchor="middle" fill="#1a1a2e" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="500">Claude · Cursor · Copilot</text>
              <rect x="170" y="20" width="120" height="44" rx="4" fill="#fff" stroke="#d0d0e8" strokeWidth="1.5"/>
              <text x="230" y="40" textAnchor="middle" fill="#555577" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="600">REFACTORING</text>
              <text x="230" y="56" textAnchor="middle" fill="#888" fontFamily="Inter,sans-serif" fontSize="9">Simplify · Modernise · DRY</text>
              <line x1="230" y1="64" x2="230" y2="140" stroke="#d0d0e8" strokeWidth="1.5" markerEnd="url(#ca1)"/>
              <rect x="20" y="140" width="110" height="44" rx="4" fill="#fff" stroke="#d0d0e8" strokeWidth="1.5"/>
              <text x="75" y="160" textAnchor="middle" fill="#555577" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="600">UNIT TESTS</text>
              <text x="75" y="174" textAnchor="middle" fill="#888" fontFamily="Inter,sans-serif" fontSize="9">Coverage · Edge cases</text>
              <line x1="130" y1="162" x2="170" y2="162" stroke="#d0d0e8" strokeWidth="1.5" markerEnd="url(#ca1)"/>
              <rect x="330" y="140" width="110" height="44" rx="4" fill="#fff" stroke="#d0d0e8" strokeWidth="1.5"/>
              <text x="385" y="160" textAnchor="middle" fill="#555577" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="600">SECURITY</text>
              <text x="385" y="174" textAnchor="middle" fill="#888" fontFamily="Inter,sans-serif" fontSize="9">OWASP · Hardening</text>
              <line x1="330" y1="162" x2="290" y2="162" stroke="#d0d0e8" strokeWidth="1.5" markerEnd="url(#ca1)"/>
              <rect x="170" y="276" width="120" height="44" rx="4" fill="#fff" stroke="#d0d0e8" strokeWidth="1.5"/>
              <text x="230" y="296" textAnchor="middle" fill="#555577" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="600">ACCESSIBILITY</text>
              <text x="230" y="310" textAnchor="middle" fill="#888" fontFamily="Inter,sans-serif" fontSize="9">WCAG 2.1 AA · ARIA</text>
              <line x1="230" y1="200" x2="230" y2="276" stroke="#d0d0e8" strokeWidth="1.5" markerEnd="url(#ca1)"/>
              <circle cx="400" cy="44" r="30" fill="#4a4a8a"/>
              <text x="400" y="38" textAnchor="middle" fill="#fff" fontFamily="Inter,sans-serif" fontSize="18" fontWeight="700">5×</text>
              <text x="400" y="54" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontFamily="Inter,sans-serif" fontSize="9">faster</text>
              <defs>
                <marker id="ca1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 z" fill="#d0d0e8"/>
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <div className="ai-concepts">
        <p className="ai-concepts-heading">The framework: five high-leverage AI interventions</p>
        <div className="ai-concepts-grid">
          {[
            { num: '01', name: 'Intelligent refactoring', desc: 'Ask Claude Code to analyse a module, identify violations of SOLID principles, over-complex methods, and dead code — then refactor with explanations. The key is to review each change rather than applying blindly, building real understanding of the codebase along the way.' },
            { num: '02', name: 'Retroactive unit test generation', desc: 'Provide a function or class to Claude Code with the instruction to generate tests covering happy paths, edge cases, and known failure modes. For legacy code with no tests, this turns a scary change into a safe one — the AI writes the safety net before you refactor.' },
            { num: '03', name: 'Accessibility auditing at the code level', desc: 'Rather than catching issues late with automated scanners, I use Claude Code during development to review components for WCAG 2.1 AA compliance — missing ARIA labels, keyboard traps, colour contrast failures, and focus management. Catching these in the editor is 10× cheaper than catching them in QA.' },
            { num: '04', name: 'Security hardening passes', desc: 'Using Claude Code and Cursor to run systematic OWASP Top 10 reviews across API handlers, auth flows, and data validation. The model flags injection risks, insecure defaults, missing rate limits, and improper error exposure — providing both the issue and the recommended remediation.' },
            { num: '05', name: 'Context-aware code review', desc: "Cursor's codebase-wide context means asking \"does this new function duplicate anything that already exists?\" or \"is this consistent with how we handle errors elsewhere in the project?\" are answerable in seconds — elevating the quality of every PR before it reaches a human reviewer." },
            { num: '06', name: 'Prompt engineering for engineers', desc: 'The biggest gains come from learning to write precise, scoped prompts. Giving Claude Code a clear role ("you are a TypeScript expert reviewing this for memory leaks"), explicit constraints ("do not change the public API"), and a structured output format dramatically improves result quality and reliability.' },
          ].map(item => (
            <div key={item.num} className="ai-concept-item">
              <p className="ai-concept-num">{item.num}</p>
              <p className="ai-concept-name">{item.name}</p>
              <p className="ai-concept-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ai-img-section">
        <p className="ai-img-section-label">In practice</p>
        <h2 className="ai-img-section-title">AI tools embedded in the real engineering workflow</h2>
        <p className="ai-img-section-body">Screenshots and screen recordings showing Claude Code running a security review, Cursor performing a cross-file refactor, and Copilot completing a test suite in real time.</p>
        <div className="ai-img-grid-2">
          <div>
            <img src="/images/developer_productivity/security_test.png" alt="Claude Code in terminal" className="cs-img" style={{ width: '100%', borderRadius: '8px' }} onClick={e => openLightbox((e.target as HTMLImageElement).src, (e.target as HTMLImageElement).alt)} />
            <p className="cs-img-caption" style={{ marginTop: '10px' }}>Claude running a systematic OWASP security review — identifying injection risks, missing rate limits, and insecure defaults across API handlers, with remediation suggestions inline.</p>
          </div>
          <div>
            <img src="/images/developer_productivity/key_achievement.png" alt="Cursor Composer view" className="cs-img" style={{ width: '100%', borderRadius: '8px' }} onClick={e => openLightbox((e.target as HTMLImageElement).src, (e.target as HTMLImageElement).alt)} />
            <p className="cs-img-caption" style={{ marginTop: '10px' }}>Claude restructuring legacy code for clarity and maintainability — breaking apart monolithic functions, enforcing consistent patterns, and surfacing quality issues that had accumulated over months of rapid development.</p>
          </div>
          <div>
            <img src="/images/developer_productivity/test_coverage_before.png" alt="Test suite before AI assistance" className="cs-img" style={{ width: '100%', borderRadius: '8px' }} onClick={e => openLightbox((e.target as HTMLImageElement).src, (e.target as HTMLImageElement).alt)} />
            <p className="cs-img-caption" style={{ marginTop: '10px' }}>Before: Only a few test suites passing (&lt;30%) with 8 root-cause failures — a missing environment variable cascading across the entire chorus-ui test run, leaving coverage effectively at zero.</p>
          </div>
          <div>
            <img src="/images/developer_productivity/test_coverage_after.png" alt="Test suite after AI assistance" className="cs-img" style={{ width: '100%', borderRadius: '8px' }} onClick={e => openLightbox((e.target as HTMLImageElement).src, (e.target as HTMLImageElement).alt)} />
            <p className="cs-img-caption" style={{ marginTop: '10px' }}>After: 555 of 555 tests passing across both apps — chorus-ui at 327/327 and mgmt-ui at 228/228 — all green in 21 seconds. Claude diagnosed the root cause, fixed the environment config, and resolved the suite in minutes.</p>
          </div>
        </div>
      </div>

      <div className="ai-img-section">
        <p className="ai-img-section-label">Real-world delivery</p>
        <h2 className="ai-img-section-title">Chorus &amp; Harmony UI — a 6-phase codebase transformation</h2>
        <p className="ai-img-section-body">From April to May 2026, I led a monorepo-wide quality and modernization initiative across the Chorus &amp; Harmony React UIs — from zero tooling to enforced standards, a full TypeScript migration, and large-scale component refactoring. 9 PRs merged, ~250+ files improved.</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '1px', background: 'var(--ai-rule)', border: '1px solid var(--ai-rule)', borderRadius: '10px', overflow: 'hidden', margin: '28px 0' }}>
          {[
            { label: 'PRs Merged', val: '9', sub: 'shipped to 1.3x2' },
            { label: 'Files Improved', val: '250+', sub: 'across 6 phases' },
            { label: 'JS → TS', val: '109', sub: 'shared package' },
            { label: 'Largest Component', val: '−77%', valColor: '#2a6a3a', sub: '4,157 → 936 lines' },
            { label: 'TS Compile Errors', val: '0', valColor: '#2a6a3a', sub: 'clean tsc' },
            { label: 'Phases', val: '6', sub: 'foundation → CI' },
          ].map(stat => (
            <div key={stat.label} style={{ background: '#fff', padding: '18px 16px', textAlign: 'center' }}>
              <div style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ai-muted)', fontWeight: 600, fontFamily: "'Inter',sans-serif" }}>{stat.label}</div>
              <div style={{ fontFamily: "'EB Garamond',serif", fontSize: '32px', fontWeight: 600, color: stat.valColor || 'var(--ai-ink)', marginTop: '6px', lineHeight: 1 }}>{stat.val}</div>
              <div style={{ fontSize: '11px', color: 'var(--ai-muted)', marginTop: '4px' }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: '32px', marginTop: '8px' }}>
          <div>
            <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ai-muted)', fontWeight: 700, fontFamily: "'Inter',sans-serif", marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid var(--ai-rule)' }}>Work Delivered by Phase</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { code: 'P1', sub: 'FND', title: 'Foundation', desc: 'ESLint, Prettier, EditorConfig & .nvmrc; cleared 20+ lint suppressions; memoized AiAssistantContext; extracted inline styles.', files: '~28' },
                { code: 'P2', sub: 'PERF', title: 'Performance', desc: 'Route-level code splitting with React.lazy(); 10 memoized selectors; 34 components on targeted useSelector; fixed reducer mutations & saga races.', files: '~69' },
                { code: 'P3', sub: 'ARCH', title: 'Architecture', desc: 'Split 3 monolith components into 16 files; consolidated shared utilities; migrated deprecated lifecycles; wired antd theme tokens in both apps.', files: '~33' },
                { code: 'P4', sub: 'TS', title: 'Modernization', desc: 'Migrated 109 shared-package files .js → .ts/.tsx with zero tsc errors; replaced deprecated i18next-xhr-backend; added ErrorBoundary.', files: '~122' },
                { code: 'P5', sub: 'CI', title: 'CI / CD', desc: 'Enabled ESLint gate in the atayalan.ci pipeline — PRs now fail on lint errors.', files: '1' },
                { code: 'P6', sub: 'FIX', title: 'Bug Fixes — mgmt-ui', desc: 'Fixed missing takeLatest import, undefined users var, redux-saga webpack 5 resolution, and source-map-loader ENOENT errors.', files: '4' },
              ].map((phase, i) => (
                <div key={phase.code} style={{ display: 'grid', gridTemplateColumns: '44px 1fr auto', gap: '12px', alignItems: 'start', padding: '12px 0', borderBottom: i < 5 ? '1px solid var(--ai-rule)' : 'none' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: '#f0f0f8', border: '1px solid var(--ai-rule)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '11px', color: '#4a4a8a', lineHeight: 1, fontFamily: "'Inter',sans-serif" }}>
                    {phase.code}<span style={{ fontSize: '8px', fontWeight: 500, color: 'var(--ai-muted)', marginTop: '2px' }}>{phase.sub}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--ai-ink)' }}>{phase.title}</div>
                    <div style={{ fontSize: '11.5px', color: 'var(--ai-muted)', marginTop: '2px', lineHeight: 1.4 }}>{phase.desc}</div>
                  </div>
                  <div style={{ fontFamily: "'EB Garamond',serif", fontSize: '18px', fontWeight: 600, textAlign: 'right', color: 'var(--ai-ink)', whiteSpace: 'nowrap' }}>
                    {phase.files}<span style={{ display: 'block', fontFamily: "'Inter',sans-serif", fontSize: '9px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.04em', color: 'var(--ai-muted)' }}>files</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ai-muted)', fontWeight: 700, fontFamily: "'Inter',sans-serif", marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid var(--ai-rule)' }}>Component Refactoring — Lines of Code</p>
            {[
              { name: 'pQuickSearch', before: '4,157', after: '936', pct: '−77%', beforeW: '100%', afterW: '22.5%', label: 'monolith → modular split' },
              { name: 'AddRan', before: '2,805', after: '1,456', pct: '−48%', beforeW: '67.5%', afterW: '35%', label: 'extracted sub-components & hooks' },
              { name: 'AddDevice', before: '2,159', after: '1,784', pct: '−17%', beforeW: '52%', afterW: '43%', label: '3 monoliths → 16 focused files' },
            ].map(comp => (
              <div key={comp.name} style={{ marginBottom: '18px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontWeight: 600, marginBottom: '6px', fontFamily: "'Inter',sans-serif" }}>
                  <span style={{ fontFamily: 'monospace' }}>{comp.name}</span>
                  <span style={{ color: 'var(--ai-muted)', fontWeight: 500 }}><s style={{ color: '#c0392b', textDecorationThickness: '1px' }}>{comp.before}</s> → {comp.after}</span>
                </div>
                <div style={{ height: '10px', background: '#f0f0f8', borderRadius: '6px', position: 'relative', overflow: 'hidden', border: '1px solid var(--ai-rule)' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: comp.beforeW, background: '#d0d0e8' }}></div>
                  <div style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: comp.afterW, background: '#4a9a6a' }}></div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: 'var(--ai-muted)', marginTop: '4px', fontFamily: "'Inter',sans-serif" }}>
                  <span>{comp.label}</span>
                  <span style={{ color: '#2a6a3a', fontWeight: 600 }}>{comp.pct}</span>
                </div>
              </div>
            ))}

            <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ai-muted)', fontWeight: 700, fontFamily: "'Inter',sans-serif", marginBottom: '14px', paddingBottom: '8px', borderBottom: '1px solid var(--ai-rule)' }}>Delivery Timeline — 9 Merged PRs</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { date: 'Apr 21', title: 'Code Quality & Performance', sub: 'Phases 1–3', pr: 'PR #1524' },
                { date: 'Apr 29', title: 'Service Config UX', sub: '+ GlobalConfigurationPanel · Device status & KPI', pr: 'PR #1543 · #1549' },
                { date: 'May 4', title: 'i18next upgrade', sub: ', error boundaries, CI lint gate', pr: 'PR #1550 · #1558' },
                { date: 'May 12', title: 'Design system components', sub: ', CSS tokens, style refinements', pr: 'PR #1562' },
                { date: 'May 15', title: 'Custom date range filter fix', sub: '', pr: 'PR #1577' },
                { date: 'May 28–29', title: 'Dark mode', sub: ' readability + theming & component redesigns', pr: 'PR #1587 · #1588' },
              ].map(entry => (
                <div key={entry.date} style={{ display: 'grid', gridTemplateColumns: '56px 1fr', gap: '10px', padding: '5px 0' }}>
                  <div style={{ fontFamily: 'monospace', fontSize: '10px', fontWeight: 500, color: '#4a4a8a', textAlign: 'right', paddingTop: '3px' }}>{entry.date}</div>
                  <div style={{ fontSize: '11.5px', lineHeight: 1.35, borderLeft: '1px solid var(--ai-rule)', paddingLeft: '13px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: '-4px', top: '4px', width: '7px', height: '7px', borderRadius: '50%', background: '#4a4a8a', display: 'block' }}></span>
                    <strong>{entry.title}</strong>{entry.sub}
                    <div style={{ fontFamily: 'monospace', fontSize: '9.5px', color: 'var(--ai-muted)', marginTop: '1px' }}>{entry.pr}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="ai-cowork">
        <p className="ai-cowork-heading">Where the 5× comes from</p>
        <p className="ai-cowork-body">The claim of 5× productivity improvement is measured across the full engineering cycle, not just code-writing speed. These are the categories where time savings compound:</p>
        <div className="ai-cowork-list">
          {[
            { label: 'Understanding legacy code', val: 'What used to take days of code archaeology — tracing data flows, understanding coupling, mapping dependencies — now takes an hour with Claude Code walking through the system.' },
            { label: 'Writing tests for untested code', val: "Test coverage that would have taken a developer 2–3 days is generated in under an hour. The developer's time shifts from writing boilerplate to reviewing and refining edge cases." },
            { label: 'Refactoring with confidence', val: 'AI-generated tests + AI-assisted refactoring + AI code review closes the feedback loop. Complex refactors that would have required weeks of careful, manual change now take days.' },
            { label: 'Eliminating context-switching', val: 'Copilot inline completions eliminate the cycle of searching Stack Overflow, reading docs, and returning to the editor. Answers appear in context, without breaking flow.' },
            { label: 'Faster onboarding', val: 'New engineers ramping on an unfamiliar codebase can use Claude Code as an always-available expert. Onboarding that previously took 3–4 weeks now takes under a week.' },
          ].map(row => (
            <div key={row.label} className="ai-cowork-row">
              <span className="ai-cowork-row-label">{row.label}</span>
              <span className="ai-cowork-row-val">{row.val}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="ai-stack">
        <p className="ai-stack-label">Tools &amp; when to use each</p>
        <div className="ai-stack-groups">
          {[
            { label: 'Claude Code', items: ['Deep codebase analysis', 'Multi-file refactoring', 'Security reviews', 'Architecture decisions'] },
            { label: 'Cursor', items: ['Codebase-aware Q&A', 'Cross-file consistency checks', 'Inline edits with context', 'Composer for larger changes'] },
            { label: 'GitHub Copilot', items: ['Inline completions', 'Boilerplate elimination', 'Pattern-based suggestions', 'IDE-native flow'] },
            { label: 'Quality targets', items: ['80%+ test coverage', 'WCAG 2.1 AA', 'OWASP Top 10 clean', 'Zero critical code smells'] },
          ].map(group => (
            <div key={group.label} className="ai-stack-group">
              <p className="ai-stack-group-label">{group.label}</p>
              <div className="ai-stack-items">
                {group.items.map(item => <span key={item} className="ai-stack-item">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="article-back article-back--bottom">
        <button onClick={() => navigate('/ai')} className="back-btn">← Back to AI Experiments</button>
      </div>

    </div>
  )
}
