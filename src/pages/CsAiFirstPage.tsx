import { useEffect } from 'react'

const base = import.meta.env.BASE_URL
import { useNavigate } from 'react-router-dom'
import { useLightbox } from '../context/LightboxContext'

function useParallax() {
  useEffect(() => {
    function update() {
      document.querySelectorAll<HTMLElement>('.cs-hero-foot-wrap').forEach(wrap => {
        const img = wrap.querySelector<HTMLElement>('.cs-hero-foot')
        if (!img) return
        const rect = wrap.getBoundingClientRect()
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)))
        img.style.transform = `scale(${1 + progress * 0.14})`
      })
    }
    window.addEventListener('scroll', update, { passive: true })
    requestAnimationFrame(update)
    return () => window.removeEventListener('scroll', update)
  }, [])
}

export default function CsAiFirstPage() {
  const navigate = useNavigate()
  const { open: openLightbox } = useLightbox()
  useParallax()

  function lb(e: React.MouseEvent<HTMLImageElement>) {
    openLightbox((e.target as HTMLImageElement).src, (e.target as HTMLImageElement).alt)
  }

  return (
    <div className="cs-page-full">

      <div className="cs-back">
        <button onClick={() => navigate('/')} className="back-btn">← Case Studies</button>
      </div>

      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '48px 40px 40px' }}>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray)', marginBottom: '16px' }}>Case Study · Ataya · 2025–26</p>
        <h1 style={{ fontFamily: "'EB Garamond',Georgia,serif", fontSize: '56px', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--black)', maxWidth: '760px', marginBottom: '20px' }}>Accelerating to AI-First UX</h1>
        <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '16px', lineHeight: 1.7, color: 'var(--gray)', maxWidth: '600px' }}>Designing the UX and interface architecture for an AI-native 5G network management platform — where AI is not a feature, but the core of how the product thinks and acts.</p>
      </div>

      <div className="cs-container">

        <div className="cs-intro">
          <div>
            <p className="cs-label">Case Study</p>
            <h1 className="cs-title">Accelerating to AI-First UX</h1>
            <div className="cs-meta">
              <div className="cs-meta-row"><span className="cs-meta-key">Company</span><span className="cs-meta-val">Ataya</span></div>
              <div className="cs-meta-row"><span className="cs-meta-key">Role</span><span className="cs-meta-val">Director of UX Design &amp; UI Architecture</span></div>
              <div className="cs-meta-row"><span className="cs-meta-key">Year</span><span className="cs-meta-val">2025 – 2026</span></div>
              <div className="cs-meta-row"><span className="cs-meta-key">Scope</span><span className="cs-meta-val">AI-native UX, intent-driven assistant, 6G network management</span></div>
            </div>
            <div style={{ marginTop: '28px' }}>
              <span className="cs-tag">AI-Native UX</span>
              <span className="cs-tag">6G / 5G</span>
              <span className="cs-tag">Conversational UI</span>
              <span className="cs-tag">Intent Design</span>
              <span className="cs-tag">NWDAF</span>
            </div>
            <div style={{ marginTop: '28px' }}>
              <img src={`${base}images/accelerating_ai_first_ux/logo.png`} alt="Ataya logo" style={{ height: '28px', width: 'auto', opacity: 0.75 }} />
            </div>
          </div>
          <div>
            <p className="cs-lead">AI at the Core: Designing an Intent-Driven Assistant for the 6G Network Era</p>
            <p className="cs-body">In 6G, AI won't just support the network — it will be woven into its very fabric. This "AI-native" approach means intelligence is embedded directly into how the network controls, manages, and processes data. For operators and engineers, this changes everything: the interface is no longer a dashboard full of dials and tables. It's a reasoning system that understands intent.</p>
            <p className="cs-body">This case study documents the design challenge of building an AI assistant for enterprise network management — where the stakes are high, the users are experts, and the goal is to make complexity disappear without hiding what matters.</p>
            <p className="cs-body">The work involved rethinking what "UX" means when the primary interface is a conversation, and how to design for a system that thinks rather than just responds.</p>
          </div>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Context</p>
          <h2 className="cs-section-title">Why AI-native networking demands a new UX model</h2>
          <div className="cs-two-col">
            <div>
              <p className="cs-body">The 6G era introduces a fundamental shift in how networks operate. Technologies like NWDAF (Network Data Analytics Function) and closed-loop automation mean the network is continuously learning, predicting, and self-optimising — without waiting for a human to notice something is wrong and log a ticket.</p>
              <p className="cs-body">Traditional network management UX was built for a reactive world: operators watch dashboards, spot anomalies, and manually intervene. When the network starts making decisions autonomously, that mental model breaks. The interface needs to shift from "here is what happened" to "here is what the system is doing, why, and what you need to decide."</p>
              <div className="cs-quote">"The network is smarter than the dashboard. The UX needs to close that gap."</div>
            </div>
            <div>
              <img src={`${base}images/accelerating_ai_first_ux/5g_6g.png`} alt="5G to 6G evolution" className="cs-img" onClick={lb} />
              <p className="cs-img-caption">From 5G to 6G — AI becomes native infrastructure, not a feature bolt-on</p>
            </div>
          </div>

          <div className="browser-frame" style={{ width: 'calc(100vw - 40px)', marginLeft: 'calc(50% - 50vw + 20px)' }}>
            <div className="browser-chrome">
              <div className="browser-dots">
                <div className="browser-dot close"></div>
                <div className="browser-dot min"></div>
                <div className="browser-dot max"></div>
              </div>
              <div className="browser-address">ataya.io / chorus / network-overview</div>
            </div>
            <iframe src="https://sobhandutta.github.io/design-system/network-overview-preview.html" title="Ataya Chorus — Network Overview" loading="lazy" />
          </div>
          <p className="cs-img-caption">Ataya Chorus — Network Overview dashboard with AI assistant, live charts, and heatmap analytics</p>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">The Challenge</p>
          <h2 className="cs-section-title">Redesigning UX for AI at the core</h2>
          <p className="cs-body">When AI becomes the primary actor in a system — not just a recommendation engine — the UX designer's job changes fundamentally. You're no longer designing screens for humans to click. You're designing the communication layer between a reasoning system and the humans who are ultimately accountable for its decisions.</p>
          <p className="cs-body">The core tensions: operators need to trust AI recommendations without becoming passive. They need to retain expertise without drowning in raw data. And when the AI is wrong or uncertain, the interface must surface that honestly — not hide it behind a confident-sounding response.</p>
          <p className="cs-body">We approached this by designing from the operator's goals outward, rather than from the system's capabilities inward. What does a network engineer actually need to accomplish in their day? How does AI change what's hard versus what's easy?</p>
          <div className="cs-img-grid">
            {['product-surface01', 'product-surface02', 'product-surface03', 'product-surface04'].map((name, i) => (
              <img key={name} src={`/images/accelerating_ai_first_ux/${name}.png`} alt={`Product surface ${i + 1}`} className="cs-img" style={{ marginTop: 0 }} onClick={lb} />
            ))}
          </div>
          <p className="cs-img-caption">The product surface — redesigned around AI-native workflows and intent-driven navigation</p>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Research</p>
          <h2 className="cs-section-title">What does the user really need?</h2>
          <div className="cs-two-col">
            <div>
              <img src={`${base}images/accelerating_ai_first_ux/users_need.png`} alt="User needs research" className="cs-img" onClick={lb} />
              <p className="cs-img-caption">User needs mapping — from task-based research with network engineers and operations managers</p>
            </div>
            <div>
              <p className="cs-body">We ran structured research with two distinct user groups: network engineers who understand the technical infrastructure deeply, and operations managers who are responsible for outcomes but don't want (or need) to know how NWDAF works.</p>
              <p className="cs-body">The pattern that emerged: both groups described their needs in terms of goals, not features. "I need to know if the network is performing well for our key tenants." "I need to understand why that alarm fired and whether I need to do anything." Nobody said "I need a graph of throughput over time."</p>
              <p className="cs-body">This confirmed the design direction: the assistant interface should be intent-driven and goal-focused, not data-centric. The system should understand what the operator is trying to accomplish and surface exactly what they need — nothing more.</p>
              <div className="cs-feature-list" style={{ marginTop: '20px' }}>
                {[
                  { key: 'Intent-driven', val: 'Operators state goals, not queries. The system figures out what data to pull.' },
                  { key: 'Goal-focused', val: 'Every surface asks: what is the operator trying to accomplish right now?' },
                  { key: 'Expert-appropriate', val: 'The system doesn\'t dumb things down — it surfaces the right level of detail for the role.' },
                ].map(row => (
                  <div key={row.key} className="cs-feature-row">
                    <span className="cs-feature-key">{row.key}</span>
                    <span className="cs-feature-val">{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Feature Design</p>
          <h2 className="cs-section-title">The entry point: detecting intent before the question is asked</h2>
          <p className="cs-body">The assistant interface needed to feel like a genuine expert colleague — not a search bar, not a form, not a chatbot. The challenge was designing an entry point that signals capability without creating anxiety about "how do I phrase this?" for operators who are used to clicking buttons.</p>
          <p className="cs-body">We designed a contextual assistant that pre-loads relevant context based on what the operator is currently viewing. If they're looking at a specific site's performance, the assistant already knows the site, the current status, and the last 24 hours of events — so they can ask "why is throughput low this afternoon?" without having to specify which site, which metric, or which time window.</p>
          <div className="browser-frame browser-frame-inset">
            <div className="browser-chrome">
              <div className="browser-dots">
                <div className="browser-dot close"></div>
                <div className="browser-dot min"></div>
                <div className="browser-dot max"></div>
              </div>
              <div className="browser-address">ataya.io / chorus / home</div>
            </div>
            <iframe src="https://sobhandutta.github.io/design-system/home-preview.html" title="Ataya Chorus — Home" loading="lazy" />
          </div>
          <p className="cs-img-caption">The AI assistant — contextual, minimal, and designed to understand goals rather than parse commands</p>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Interaction Design</p>
          <h2 className="cs-section-title">Ask for what you need — conversational, smart, minimal</h2>
          <p className="cs-body" style={{ marginTop: '24px' }}>The conversational interface is deliberately minimal. There are no mode-switching buttons, no "advanced search" toggles, no dropdown for query type. The system handles the complexity; the operator's job is to say what they need.</p>
          <p className="cs-body">Under the surface, the assistant routes queries to the right data source — real-time network telemetry, historical analytics, policy configuration, event logs — and synthesises a response that directly answers the question, with the evidence embedded. When the answer involves data the operator should verify, the assistant surfaces the underlying metrics inline.</p>
          <p className="cs-body">We invested heavily in the response design: how answers are structured, when to show supporting charts, how to handle uncertainty, and how to offer "next step" actions that keep the operator moving forward rather than starting a new query from scratch.</p>
          <img src="https://sobhandutta.github.io/design-system/portfolio/super-agent-architecture.svg" alt="Assistant with analytics" className="cs-img-full" onClick={lb} />
          <p className="cs-img-caption">Assistant response with inline analytics — evidence embedded directly in the conversation</p>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Design Principles</p>
          <h2 className="cs-section-title">Designing behavior, not just screens</h2>
          <p className="cs-body">AI-native UX requires a new design vocabulary. When the system can act — not just display — every design decision has higher stakes. We developed four core principles that governed every design decision throughout the project.</p>
          <div className="cs-img-grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '40px' }}>
            {[
              { src: 'https://sobhandutta.github.io/design-system/portfolio/story-01-build-trust-early.png', alt: 'Build trust early', title: 'Build trust early', desc: 'Start with high-confidence, low-stakes interactions. Let operators verify the system is right before they rely on it for critical decisions.' },
              { src: 'https://sobhandutta.github.io/design-system/portfolio/story-02-shape-behavior.png', alt: 'Shape behavior', title: 'Shape behavior through design', desc: 'The way the assistant communicates shapes how operators think about the network. Design responses that build accurate mental models, not comfortable ones.' },
              { src: 'https://sobhandutta.github.io/design-system/portfolio/story-03-plan-for-failure.png', alt: 'Plan for failure', title: 'Plan for failure', desc: 'The AI will be wrong. Design for graceful failure — clear uncertainty signals, easy correction, and no hiding behind confident language when confidence is low.' },
              { src: 'https://sobhandutta.github.io/design-system/portfolio/story-04-close-the-loop.png', alt: 'Close the loop', title: 'Close the loop', desc: 'Every AI-initiated action should complete a feedback cycle — operators should know what the system did, why, and what the outcome was. No silent background changes.' },
            ].map(item => (
              <div key={item.title}>
                <img src={item.src} alt={item.alt} className="cs-img" onClick={lb} />
                <p className="cs-img-caption" style={{ marginTop: '12px', fontWeight: 600, color: 'var(--black)' }}>{item.title}</p>
                <p className="cs-img-caption">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">System Thinking</p>
          <h2 className="cs-section-title">Beyond visual design — designing the AI's judgment</h2>
          <p className="cs-body" style={{ marginTop: '24px' }}>In AI-native products, the most important design decisions aren't visual — they're about what the system decides to do, say, and prioritise. Designing the assistant required working closely with the AI/ML team to define the system's communication style, its escalation logic, and the criteria for when to act autonomously versus when to ask for confirmation.</p>
          <p className="cs-body">This meant writing detailed behavior specifications alongside the UI designs: how the assistant should express uncertainty, what language signals high versus low confidence, when to surface a recommendation versus when to execute and report, and how to handle edge cases where the system's model conflicts with what the operator is seeing on the ground.</p>
          <p className="cs-body">The design artefact that mattered most for this work wasn't a Figma file — it was a behavior document that the entire team aligned on before a single component was built.</p>
          <img src="https://sobhandutta.github.io/design-system/portfolio/ai-judgment-framework.svg" alt="Beyond visual design" className="cs-img-full" onClick={lb} />
          <p className="cs-img-caption">Behavior specifications — defining the AI's judgment alongside the visual design</p>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Foundation</p>
          <h2 className="cs-section-title">Design system for AI-native interfaces</h2>
          <p className="cs-body" style={{ marginTop: '24px' }}>Building an AI-native product required extending the existing design system with a new vocabulary of components specifically for AI interactions — confidence indicators, action confirmation patterns, inline evidence blocks, uncertainty states, and the feedback loop UI for autonomous actions.</p>
          <p className="cs-body">These components needed to be distinct enough to signal "the AI is involved here" while remaining visually consistent with the rest of the product. We used a restrained AI visual language — subtle colour shifts, specific typography treatment for AI-generated content, and clear iconography for AI actions — that respects operator expertise rather than anthropomorphising the system.</p>
          <img src="https://sobhandutta.github.io/design-system/portfolio/ai-component-sheet.png" alt="Design system for AI" className="cs-img-full" onClick={lb} />
          <p className="cs-img-caption">AI design system — new components for confidence, confirmation, inline evidence, and autonomous action feedback</p>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Reflection</p>
          <h2 className="cs-section-title">Looking forward</h2>
          <div className="cs-closing">
            <div>
              <div className="cs-stats-row">
                <div className="cs-closing-stat"><div className="cs-closing-num">6G</div><div className="cs-closing-desc">AI-native by design</div></div>
                <div className="cs-closing-stat"><div className="cs-closing-num">4</div><div className="cs-closing-desc">core behavior principles</div></div>
                <div className="cs-closing-stat"><div className="cs-closing-num">∞</div><div className="cs-closing-desc">design challenges ahead</div></div>
              </div>
            </div>
            <div>
              <p className="cs-body">This project has fundamentally changed how I think about UX design. When AI becomes the interface — not just a feature within it — the designer's role expands into territory that blends product strategy, behavioral psychology, and systems thinking.</p>
              <p className="cs-body">The questions that kept me up at night weren't about colour or layout. They were about accountability: when an AI system acts autonomously in a high-stakes environment, how do we design for the human remaining in meaningful control? How do we prevent operators from becoming passive monitors of a system they no longer fully understand?</p>
              <p className="cs-body">These are the defining design problems of the next decade, and I'm proud to be working on them at the frontier of where AI meets critical infrastructure.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="cs-hero-foot-wrap" style={{ backgroundImage: "url('/images/accelerating_ai_first_ux/background.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <img src={`${base}images/accelerating_ai_first_ux/product_on_monitor.png`} alt="AI-First product on monitor" className="cs-hero-foot" />
      </div>

      <div className="cs-back" style={{ paddingTop: '48px', paddingBottom: '80px', borderTop: '1px solid var(--light)', marginTop: '72px' }}>
        <button onClick={() => navigate('/')} className="back-btn">← Back to Case Studies</button>
      </div>

    </div>
  )
}
