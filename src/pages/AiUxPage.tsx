import { useNavigate } from 'react-router-dom'
import { useLightbox } from '../context/LightboxContext'

export default function AiUxPage() {
  const navigate = useNavigate()
  const { open: openLightbox } = useLightbox()

  return (
    <div className="ai-page-inner">

      <div className="article-back">
        <button onClick={() => navigate('/ai')} className="back-btn">← AI Experiments</button>
      </div>

      <div className="ai-header">
        <p className="ai-eyebrow">Experiment 03 — The Future of UX · 2025</p>
        <h1 className="ai-title">A New Way of Doing<br />UX Strategy with AI</h1>
        <p className="ai-intro">The future of UX is not design handed off to engineering. It is a single, AI-accelerated loop where strategy, design, and front-end code evolve together — using Claude, Figma's AI plugin, and direct code generation to make that loop fast enough to actually change how products are built.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginTop: '48px' }}>
        <div>
          <p className="ai-feat-tag">The new way of doing UX — going forward</p>
          <h2 className="ai-feat-title">Design and front-end code are no longer separate disciplines</h2>
          <p className="ai-feat-body">The traditional handoff model — research → strategy → wireframes → high-fi → developer handoff → QA → feedback — loses fidelity at every boundary. By the time users see a design, it has drifted far from the original intent. Worse, the feedback loop is so slow that by the time learning arrives, the team has already moved on.</p>
        </div>
        <div>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#999', marginBottom: '14px' }}>Before — Traditional UX handoff model</p>
          <img src="/images/future_of_ux_process/ux_before_ai.png" alt="Traditional UX process" style={{ width: '100%', display: 'block', borderRadius: '8px' }} onClick={e => openLightbox((e.target as HTMLImageElement).src, (e.target as HTMLImageElement).alt)} />
        </div>
        <div>
          <p className="ai-feat-body">The AI-native approach treats UX design and front-end development as a single continuous discipline. Claude synthesises research, Figma AI accelerates design exploration, and Claude Code generates production-ready components directly from those designs — all within the same working session. A UX leader who thinks in systems and understands code is now dramatically more powerful than one who only operates in one domain.</p>
        </div>
        <div>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4a4a8a', marginBottom: '14px' }}>After — AI-native UX loop</p>
          <img src="/images/future_of_ux_process/ux_after_ai.png" alt="AI-native UX loop" style={{ width: '100%', display: 'block', borderRadius: '8px' }} onClick={e => openLightbox((e.target as HTMLImageElement).src, (e.target as HTMLImageElement).alt)} />
        </div>
      </div>

      <div className="ai-concepts">
        <p className="ai-concepts-heading">How each phase works with AI</p>
        <div className="ai-concepts-grid">
          {[
            { num: '01', name: 'Strategy with Claude', desc: "Research interviews, analytics, and competitive analysis are fed to Claude as context. It synthesises patterns into user mental models, strategic opportunity areas, and prioritised problem statements — in minutes. The strategist's role shifts from synthesiser to editor and decision-maker." },
            { num: '02', name: 'Design with Figma AI', desc: "Figma's AI plugin generates layout variations, suggests component structures, checks design tokens for consistency, and surfaces accessibility issues directly in the design tool. Iteration that once took days of back-and-forth between designers now happens inside a single working session." },
            { num: '03', name: 'Code generation from design', desc: 'Claude Code reads Figma exports and design specifications, then generates production-quality React components with correct styling, spacing tokens, and interaction states. The handoff gap — where design intent is lost in translation — essentially disappears.' },
            { num: '04', name: 'Rapid test and learn', desc: 'Because implementation is fast, it becomes feasible to test real coded prototypes with users rather than Figma mockups. Feedback is richer, more accurate, and directly actionable. The cycle from hypothesis to validated learning compresses from 4–6 weeks to 5–7 days.' },
            { num: '05', name: 'Design system as a by-product', desc: 'As components are generated and validated, they feed back into a living design system. Claude Code ensures consistency — every new component is checked against existing patterns, tokens, and naming conventions. The design system grows organically rather than being a separate, always-lagging workstream.' },
            { num: '06', name: 'Continuous UX rationale', desc: 'Claude documents design decisions in real time — why a pattern was chosen, what alternatives were considered, what trade-offs were made. This living rationale replaces lengthy design spec documents and means any new team member can understand the "why" behind every design choice instantly.' },
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
        <p className="ai-img-section-label">The process, visualised</p>
        <h2 className="ai-img-section-title">From Figma to production code in one session</h2>
        <p className="ai-img-section-body">Visual documentation of the AI-native UX workflow — from a strategy session with Claude through Figma design to generated React components, all within the same working session.</p>
        <div className="ai-img-grid-2">
          <img src="/images/future_of_ux_process/figma_agnet.png" alt="Figma AI plugin in use" className="cs-img" onClick={e => openLightbox((e.target as HTMLImageElement).src, (e.target as HTMLImageElement).alt)} />
          <img src="/images/future_of_ux_process/claude_design_system.png" alt="Design system component library" className="cs-img" onClick={e => openLightbox((e.target as HTMLImageElement).src, (e.target as HTMLImageElement).alt)} />
        </div>
        <img src="/images/future_of_ux_process/end_to_end_workflow.png" alt="End-to-end workflow screenshot" className="cs-img-full" style={{ width: '100%', borderRadius: '8px' }} onClick={e => openLightbox((e.target as HTMLImageElement).src, (e.target as HTMLImageElement).alt)} />

        <div className="ai-img-section" style={{ marginTop: '48px' }}>
          <p className="ai-eyebrow">Design System</p>
          <h3 style={{ fontFamily: "'EB Garamond',Georgia,serif", fontSize: '28px', fontWeight: 400, color: 'var(--ai-ink)', margin: '8px 0 12px', letterSpacing: '-0.01em' }}>Design tokens &amp; component foundations</h3>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '15px', lineHeight: 1.75, color: 'var(--ai-muted)', maxWidth: '640px' }}>The design system built alongside this process — semantic tokens for colour, spacing, and typography, with component variants and dark/light mode support. Every decision traceable back to a token.</p>
        </div>
        <div className="browser-frame browser-frame-inset" style={{ marginTop: '24px' }}>
          <div className="browser-chrome">
            <div className="browser-dots">
              <div className="browser-dot close"></div>
              <div className="browser-dot min"></div>
              <div className="browser-dot max"></div>
            </div>
            <div className="browser-address">ataya.io / chorus / design-system / tokens</div>
          </div>
          <iframe src="https://sobhandutta.github.io/design-system/design-tokens-preview.html" title="Ataya Chorus — Design Tokens" loading="lazy" />
        </div>

        <div className="ai-img-section" style={{ marginTop: '56px' }}>
          <p className="ai-eyebrow">Process Comparison</p>
          <h3 style={{ fontFamily: "'EB Garamond',Georgia,serif", fontSize: '28px', fontWeight: 400, color: 'var(--ai-ink)', margin: '8px 0 12px', letterSpacing: '-0.01em' }}>Traditional UX cycle vs. AI-native workflow</h3>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '15px', lineHeight: 1.75, color: 'var(--ai-muted)', maxWidth: '640px' }}>What used to take six weeks of sequential handoffs — research, synthesis, wireframes, review, design, build — now completes in five days. The compression isn't about cutting corners; it's about removing the waiting.</p>
          <iframe src="https://sobhandutta.github.io/design-system/portfolio/timeline-comparison-light.html" title="Timeline comparison — traditional vs AI-native UX cycle" loading="lazy" style={{ display: 'block', width: '100%', border: 'none', marginTop: '24px', height: '430px' }} />
        </div>
      </div>

      <div className="ai-cowork">
        <p className="ai-cowork-heading">What fundamentally changes for UX leaders</p>
        <p className="ai-cowork-body">This is not about doing the same work faster. The tooling changes what is possible and what the UX leader's role looks like:</p>
        <div className="ai-cowork-list">
          {[
            { label: 'From maker to director', val: "AI handles more of the production work. The UX leader's time shifts toward strategic direction, quality judgment, and cross-functional alignment — the decisions only a senior practitioner can make." },
            { label: 'Smaller teams, bigger surface', val: 'A designer working with AI tools can cover the design surface that previously required a team of 3–4. This is not about cutting headcount — it\'s about enabling smaller teams to take on bigger, more complex products.' },
            { label: 'Research becomes a continuous input', val: 'Because synthesis is fast, research is no longer a phase — it becomes an always-on signal. User interviews happen weekly and feed directly into the next iteration rather than quarterly planning cycles.' },
            { label: 'Design system as shared language', val: 'With AI maintaining consistency across components, the design system becomes a genuine shared language between design and engineering — not a document that gets out of date.' },
          ].map(row => (
            <div key={row.label} className="ai-cowork-row">
              <span className="ai-cowork-row-label">{row.label}</span>
              <span className="ai-cowork-row-val">{row.val}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="ai-stack">
        <p className="ai-stack-label">Tools in the stack</p>
        <div className="ai-stack-groups">
          {[
            { label: 'Strategy & Research', items: ['Claude (synthesis)', 'Notion AI', 'Research interviews'] },
            { label: 'Design', items: ['Figma', 'Figma AI plugin', 'Design tokens', 'Component libraries'] },
            { label: 'Implementation', items: ['Claude Code', 'Cursor', 'React / TypeScript', 'Tailwind CSS'] },
            { label: 'Validation', items: ['Usability testing', 'Analytics', 'A/B testing', 'Accessibility audits'] },
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
