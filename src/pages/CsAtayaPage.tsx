import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLightbox } from '../context/LightboxContext'

function useParallax() {
  useEffect(() => {
    function update() {
      document.querySelectorAll<HTMLElement>('.cs-hero-wrap').forEach(wrap => {
        const img = wrap.querySelector<HTMLElement>('.cs-hero')
        if (!img) return
        const rect = wrap.getBoundingClientRect()
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * 0.18
        img.style.transform = `translateY(${offset}px)`
      })
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

export default function CsAtayaPage() {
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

      <div className="cs-hero-wrap">
        <img src="/images/universal_connectivity_platform/banner.png" alt="Universal Connectivity Platform" className="cs-hero" />
      </div>

      <div className="cs-container">

        <div className="cs-intro">
          <div>
            <p className="cs-label">Case Study</p>
            <h1 className="cs-title">Universal Connectivity Platform</h1>
            <div className="cs-meta">
              <div className="cs-meta-row"><span className="cs-meta-key">Company</span><span className="cs-meta-val">Ataya</span></div>
              <div className="cs-meta-row"><span className="cs-meta-key">Role</span><span className="cs-meta-val">Director of UX Design &amp; UI Architecture</span></div>
              <div className="cs-meta-row"><span className="cs-meta-key">Year</span><span className="cs-meta-val">2022 – Present</span></div>
              <div className="cs-meta-row"><span className="cs-meta-key">Scope</span><span className="cs-meta-val">0→1 product design, design system, user research, cloud &amp; on-premise</span></div>
            </div>
            <div style={{ marginTop: '28px' }}>
              <span className="cs-tag">Private 5G</span>
              <span className="cs-tag">Enterprise UX</span>
              <span className="cs-tag">Zero Trust</span>
              <span className="cs-tag">Design System</span>
              <span className="cs-tag">Cloud-First</span>
            </div>
            <div style={{ marginTop: '28px' }}>
              <img src="/images/universal_connectivity_platform/ataya_logo.png" alt="Ataya logo" style={{ height: '28px', width: 'auto', opacity: 0.75 }} />
            </div>
          </div>
          <div>
            <p className="cs-lead">I joined Ataya in early 2022 as the first US employee — with a mandate to deliver a complete product within three months from infrastructure that had no UX layer at all.</p>
            <p className="cs-body">The company had acquired a proven 5G infrastructure from ITRI, but there was no product experience to show customers. I assembled and led a cross-functional team, worked directly with the CEO and VP of Product to define vision and architecture, and coordinated on-site and offshore teams through a rapid sprint cycle to hit the deadline.</p>
            <p className="cs-body">Along the way I also designed the company's logo — which is still in use today.</p>
            <p className="cs-body">Two years later, Ataya's Universal Connectivity Platform supports 5G, Wi-Fi, wired, LoRa, and OT device types in a single unified dashboard — trusted by customers including Qucell, ADLINK, Marubun, Quanta Computer, Accuver Group, and Opticoms.</p>
          </div>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Timeline</p>
          <h2 className="cs-section-title">From zero to enterprise, in phases</h2>
          <div className="cs-timeline">
            <div className="cs-timeline-item">
              <div className="cs-timeline-date">Early 2022</div>
              <div>
                <p className="cs-timeline-head">The first 90 days</p>
                <p className="cs-body">Joining as the first US employee, I immediately hired developers, created product requirements, and designed the full UX flow for the on-premise release. Working in close collaboration with engineering and stakeholders, we shipped the first version of the platform in under three months — a fully functional on-premise product that could be demonstrated to enterprise customers.</p>
                <img src="/images/universal_connectivity_platform/onboarding_flow.png" alt="Onboarding flow" className="cs-img-full" onClick={lb} />
                <p className="cs-img-caption">Onboarding flow — designed to get network operators from zero to active in minutes</p>
              </div>
            </div>
            <div className="cs-timeline-item">
              <div className="cs-timeline-date">Mid 2022</div>
              <div>
                <p className="cs-timeline-head">Go cloud</p>
                <p className="cs-body">Following the successful on-premise launch, we moved to the next phase: migrating the management and control planes to the cloud while keeping the data planes and radios on-premise. This introduced a genuinely hard UX challenge — how do you visualise and configure a hybrid system where the control happens in the cloud but the action happens on the ground?</p>
                <p className="cs-body">We solved it with token-based (OTP) authentication to enable secure data transfer between environments, and designed a cloud portal that gave operators full visibility into on-premise operations — making the complexity invisible to the user.</p>
              </div>
            </div>
            <div className="cs-timeline-item">
              <div className="cs-timeline-date">Late 2022</div>
              <div>
                <p className="cs-timeline-head">Understand the user</p>
                <p className="cs-body">With the first releases shipped, we turned our focus to the deeper design problem: making a networking product that doesn't require a networking engineer. The assumption that telecom tools are inherently complex needed to be challenged head-on.</p>
                <p className="cs-body">I led a structured research programme — task-based usability sessions, qualitative interviews with internal stakeholders and real customers, and design critique workshops. We mapped pain points, tested the product's value proposition with new users, and used the findings to drive a significant redesign of the core flows.</p>
                <img src="/images/universal_connectivity_platform/persona_view.png" alt="User personas" className="cs-img-full" onClick={lb} />
                <p className="cs-img-caption">Research-derived personas — from network engineers to operations managers and C-suite</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Core Feature</p>
          <h2 className="cs-section-title">One dashboard to rule them all</h2>
          <div className="cs-two-col">
            <div>
              <p className="cs-body">The central design principle of the Universal Core is radical consolidation. Before Ataya, enterprise networks required a separate dashboard for every access technology — one for Wi-Fi, another for 5G, another for wired infrastructure. Operations teams were constantly context-switching between tools.</p>
              <p className="cs-body">We designed a unified monitoring interface that surfaces 5G, Wi-Fi, wired, LoRa, and OT devices (including industrial Modbus and Profinet through gateways) in a single view — with consistent interaction patterns across all device types.</p>
              <div className="cs-quote">"Eliminate the dashboard sprawl. If operators have to switch tools, we haven't finished the job."</div>
            </div>
            <div>
              <img src="/images/universal_connectivity_platform/analytics_view.png" alt="Analytics dashboard" className="cs-img" onClick={lb} />
              <p className="cs-img-caption">Unified analytics — all access technologies, one view</p>
            </div>
          </div>
          <img src="/images/universal_connectivity_platform/network_view.png" alt="Network topology view" className="cs-img-full" onClick={lb} />
          <p className="cs-img-caption">Network topology view — real-time status across the entire multi-access estate</p>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Security</p>
          <h2 className="cs-section-title">Zero Trust across every access type</h2>
          <div className="cs-two-col">
            <div>
              <img src="/images/universal_connectivity_platform/policy_view.png" alt="Policy dashboard" className="cs-img" onClick={lb} />
              <p className="cs-img-caption">Unified policy dashboard — Zero Trust enforcement across 5G, Wi-Fi, and beyond</p>
            </div>
            <div>
              <p className="cs-body">Most security products bolt Zero Trust onto Wi-Fi and call it done. Ataya extends it consistently across every access type — 5G, Wi-Fi, wired, LoRa — through a single unified policy dashboard that operators can actually understand and maintain.</p>
              <p className="cs-body">Designing the policy interface was one of the highest-stakes UX challenges on the project. A misconfigured policy can take down network access for an entire site. The interface needed to be powerful enough for security architects and safe enough for operations staff — with clear affordances that make dangerous actions feel appropriately weighty.</p>
              <div className="cs-feature-list" style={{ marginTop: 0 }}>
                {[
                  { key: 'Unified Policy Dashboard', val: 'Consistent Zero Trust enforcement across all access types in a single interface.' },
                  { key: 'Coordinated Threat Detection', val: 'Dual-mode device coverage eliminates the security gaps that exist between separate tools.' },
                  { key: 'Identity-Based Access', val: 'Policies follow the user and device identity, not the IP address or physical port.' },
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
          <p className="cs-section-label">Infrastructure</p>
          <h2 className="cs-section-title">Cloud-native, identity-driven microsegmentation</h2>
          <p className="cs-body">Ataya's cloud-first architecture gives CISOs and security teams a modern microsegmentation solution without the traditional overhead of hardware deployment. Context-aware, identity-driven policies govern users, devices, and applications across the entire network — including the hybrid on-premise/cloud boundary that most enterprise networks struggle with.</p>
          <img src="/images/universal_connectivity_platform/product_pages_view.png" alt="Product pages" className="cs-img-full" onClick={lb} />
          <p className="cs-img-caption">Product portal views — cloud management plane across on-premise radios and edge devices</p>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Foundation</p>
          <h2 className="cs-section-title">A design system built for scale</h2>
          <p className="cs-body">The first version of the product was built ad hoc — each part of the team made independent design decisions, resulting in visual inconsistencies and unpredictable component behaviour across screens. To fix this and accelerate development, I built a comprehensive design system and shared UI library from the ground up.</p>
          <p className="cs-body">We unified typography around a single versatile typeface — Roboto — and created a detailed web style guide covering every component state: buttons, forms, data tables, navigation modules, alerts, and layout sections. The system spans the product, marketing site, and business materials, ensuring a coherent brand experience at every touchpoint.</p>
          <div className="cs-img-grid">
            <div>
              <img src="/images/universal_connectivity_platform/design_system_view.png" alt="Design system" className="cs-img" onClick={lb} />
              <p className="cs-img-caption">Design system — components, tokens, and interaction states</p>
            </div>
            <div>
              <img src="/images/universal_connectivity_platform/design_system_assets.png" alt="Design assets" className="cs-img" onClick={lb} />
              <p className="cs-img-caption">Shared asset library — icons, illustrations, and brand elements</p>
            </div>
          </div>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Reflection</p>
          <h2 className="cs-section-title">Looking forward</h2>
          <div className="cs-closing">
            <div>
              <div className="cs-stats-row">
                <div className="cs-closing-stat"><div className="cs-closing-num">3</div><div className="cs-closing-desc">months to first release</div></div>
                <div className="cs-closing-stat"><div className="cs-closing-num">5+</div><div className="cs-closing-desc">access types unified</div></div>
                <div className="cs-closing-stat"><div className="cs-closing-num">7+</div><div className="cs-closing-desc">enterprise clients</div></div>
              </div>
              <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', color: 'var(--gray)', lineHeight: 1.7, marginTop: '8px' }}>
                Clients include Qucell · Opticoms · ADLINK · Marubun · Accuver Group · Quanta Computer
              </p>
            </div>
            <div>
              <p className="cs-body">Witnessing Ataya grow from a small team with a 5G infrastructure asset to a company trusted by enterprise clients across Asia and beyond has been one of the most rewarding experiences of my career.</p>
              <p className="cs-body">We've turned a technical capability into a product people want to use — which is the hardest thing in enterprise software. The next chapter involves pushing deeper into AI-native network management, where the interface isn't a dashboard but a reasoning system that tells operators what matters before they ask.</p>
              <p className="cs-body">I'm proud of what this team has built, and even more excited about where we're going.</p>
            </div>
          </div>
        </div>

      </div>

      <div className="cs-hero-foot-wrap">
        <img src="/images/universal_connectivity_platform/ataya_on_monitor.png" alt="Universal Connectivity Platform" className="cs-hero-foot" />
      </div>

      <div className="cs-back" style={{ paddingTop: '48px', paddingBottom: '80px', borderTop: '1px solid var(--light)', marginTop: '72px' }}>
        <button onClick={() => navigate('/')} className="back-btn">← Back to Case Studies</button>
      </div>

    </div>
  )
}
