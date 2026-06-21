import { useEffect } from 'react'

const base = import.meta.env.BASE_URL
import { useNavigate } from 'react-router-dom'
import { useLightbox } from '../context/LightboxContext'

function useParallax() {
  useEffect(() => {
    function update() {
      document.querySelectorAll<HTMLElement>('.cs-hero-wrap').forEach(wrap => {
        const img = wrap.querySelector<HTMLElement>('.cs-hero')
        if (!img) return
        const rect = wrap.getBoundingClientRect()
        const center = rect.top + rect.height / 2
        const offset = (center - window.innerHeight / 2) * 0.18
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

export default function CsZeroTrustPage() {
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
        <img src={`${base}images/zero_trust_network_security/banner.jpg`} alt="Zero Trust Network Security" className="cs-hero" />
      </div>

      <div className="cs-container">

        <div className="cs-intro">
          <div>
            <p className="cs-label">Case Study</p>
            <h1 className="cs-title">Zero Trust Network Security</h1>
            <div className="cs-meta">
              <div className="cs-meta-row"><span className="cs-meta-key">Company</span><span className="cs-meta-val"><a href="https://www.elisity.com/" target="_blank" rel="noreferrer">Elisity ↗</a></span></div>
              <div className="cs-meta-row"><span className="cs-meta-key">Role</span><span className="cs-meta-val">Head of UX Design &amp; UI Architecture</span></div>
              <div className="cs-meta-row"><span className="cs-meta-key">Year</span><span className="cs-meta-val">2020 – 2022</span></div>
              <div className="cs-meta-row"><span className="cs-meta-key">Scope</span><span className="cs-meta-val">End-to-end product design, design system, UX research</span></div>
            </div>
            <div style={{ marginTop: '28px' }}>
              <span className="cs-tag">Enterprise UX</span>
              <span className="cs-tag">Zero Trust</span>
              <span className="cs-tag">Design System</span>
              <span className="cs-tag">Network Security</span>
            </div>
          </div>
          <div>
            <p className="cs-lead">Starting from scratch — I joined Elisity in early 2020 with a mandate to ship the first product within three months.</p>
            <p className="cs-body">The company had a prototype and infrastructure but no complete product to show customers. I assembled and led a team, working closely with the CEO, VP of Product, and CTO to define the product vision, information architecture, and design language — all simultaneously.</p>
            <p className="cs-body">By coordinating on-site and offshore teams through a focused sprint cycle, we shipped the first release in record time. Along the way, I also designed the company's logo.</p>
            <p className="cs-body">Over the next two years, we grew from that scrappy first release into a mature enterprise product trusted by organisations including GSK and Bupa Health — securing multiple funding rounds along the way.</p>
          </div>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Timeline</p>
          <h2 className="cs-section-title">Two years, zero to enterprise</h2>
          <div className="cs-timeline">
            <div className="cs-timeline-item">
              <div className="cs-timeline-date">Spring 2020</div>
              <div>
                <p className="cs-timeline-head">First 90 days — ship or bust</p>
                <p className="cs-body">I joined Elisity as the company was gearing up for its initial product launch. Partnering directly with engineering and stakeholders, we designed and delivered the first release in under three months. There was no time for perfection — only clarity, speed, and trust between the team.</p>
              </div>
            </div>
            <div className="cs-timeline-item">
              <div className="cs-timeline-date">Summer 2020</div>
              <div>
                <p className="cs-timeline-head">Making security accessible to everyone</p>
                <p className="cs-body">The initial launch was successful, but a bigger challenge emerged: how do you design a security product that doesn't require a network engineer to use it? The stereotype of security tools being complex, dark, and cryptic needed to be broken.</p>
                <p className="cs-body">We started by talking to real users — mapping pain points, running task-based usability sessions on medium-fidelity prototypes, and conducting qualitative interviews with internal stakeholders and customers. The goal: design with the CEO in mind as the primary user, not just the CISO.</p>
                <img src={`${base}images/zero_trust_network_security/personas.png`} alt="User personas" className="cs-img-bare" onClick={lb} />
                <p className="cs-img-caption">User personas developed from research sessions to guide design decisions</p>
              </div>
            </div>
            <div className="cs-timeline-item">
              <div className="cs-timeline-date">2021 – 2022</div>
              <div>
                <p className="cs-timeline-head">Scaling the product and the team</p>
                <p className="cs-body">With user research informing every decision, we evolved the product across multiple releases — adding cloud-first infrastructure, a policy engine, and identity-based micro-segmentation. I grew the design team and introduced a design system to bring consistency and speed to the rapidly expanding product surface.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Core Feature</p>
          <h2 className="cs-section-title">Visibility in Zero Trust Security</h2>
          <div className="cs-two-col">
            <div>
              <p className="cs-body">Elisity's IdentityGraph technology gives security teams unparalleled visibility into every device and user on the network. The design challenge was translating deeply technical data — IP addresses, MAC addresses, device classifications — into something instantly readable by a non-specialist.</p>
              <p className="cs-body">We designed the network map and asset explorer to surface meaningful context at a glance: identity, risk level, policy status, and lateral movement paths — without drowning users in raw data.</p>
              <div className="cs-quote">"Security teams shouldn't need a PhD to understand their own network."</div>
            </div>
            <div>
              <img src={`${base}images/zero_trust_network_security/analytics_view.jpeg`} alt="Analytics dashboard" className="cs-img" onClick={lb} />
              <p className="cs-img-caption">IdentityGraph analytics view — visibility across hybrid environments</p>
            </div>
          </div>
          <img src={`${base}images/zero_trust_network_security/cas_view.jpg`} alt="CAS view" className="cs-img-full" onClick={lb} />
          <p className="cs-img-caption">Cloud Access Security view — policy status across devices and users</p>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Policy Framework</p>
          <h2 className="cs-section-title">Zero Trust principles, made usable</h2>
          <p className="cs-body">Elisity's policy framework integrates zero trust with network access control. Designing the policy builder was one of the most complex UX challenges — it needed to support both simple rules for less-technical users and granular control for security architects.</p>
          <img src={`${base}images/zero_trust_network_security/policy_enforcement_assets_view.jpg`} alt="Policy enforcement" className="cs-img-full" onClick={lb} />
          <p className="cs-img-caption">Policy enforcement interface — identity-based rules across IT, OT, and IoT</p>
          <div className="cs-feature-list" style={{ marginTop: '40px' }}>
            {[
              { key: 'Comprehensive Visibility', val: 'Discover, classify, and monitor every asset across hybrid environments — cloud, on-premise, OT, and IoT.' },
              { key: 'Granular Control', val: 'Enforce identity-based policies for users and devices with a policy builder designed for clarity, not complexity.' },
              { key: 'Lateral Movement Defence', val: 'Contain threats and limit blast radius through micro-segmentation — visualised in real time on the network map.' },
              { key: 'Dynamic Policies', val: 'Policies adapt in real-time to context changes — user behaviour, device health, location — without manual intervention.' },
              { key: 'Zero Trust Enablement', val: 'Least-privilege access enforced based on verified identity and context at every network entry point.' },
            ].map(row => (
              <div key={row.key} className="cs-feature-row">
                <span className="cs-feature-key">{row.key}</span>
                <span className="cs-feature-val">{row.val}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Infrastructure</p>
          <h2 className="cs-section-title">Cloud-first, no agents, no hardware</h2>
          <div className="cs-two-col">
            <div>
              <p className="cs-body">Elisity's cloud-delivered micro-segmentation removes the traditional barriers of hardware deployment. CISOs and their teams get a single management console — the Elisity Cloud Control Center — for visibility, policy configuration, and analytics across the entire environment.</p>
              <p className="cs-body">Designing this console meant balancing power and simplicity. The interface needed to serve both the CISO reviewing reports and the security engineer drilling into device-level policy enforcement — often on the same screen.</p>
              <p className="cs-body">AI and machine learning adapt to network changes continuously, so the UI needed to surface model-driven recommendations without making them feel like black-box decisions.</p>
            </div>
            <div>
              <img src={`${base}images/zero_trust_network_security/cognitive_connect_view.png`} alt="Cognitive Connect" className="cs-img" onClick={lb} />
              <p className="cs-img-caption">Cognitive Connect — AI-powered asset discovery and policy enforcement at the network edge</p>
            </div>
          </div>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Foundation</p>
          <h2 className="cs-section-title">Building the design system</h2>
          <div className="cs-two-col" style={{ marginTop: '24px' }}>
            <div>
              <p className="cs-body">Until mid-2020, development was conducted ad hoc — every team made independent design decisions, resulting in visual inconsistencies and unpredictable component behaviour. To fix this and significantly increase team velocity, I created a unified design system and shared component library.</p>
              <p className="cs-body">We consolidated three typefaces down to a single font family — Roboto — with defined weights and widths for each context. I built a comprehensive web style guide covering buttons, forms, data tables, navigation modules, and states, ensuring every element behaved predictably across the entire product.</p>
            </div>
            <div>
              <img src={`${base}images/zero_trust_network_security/logos.png`} alt="Brand and logo work" className="cs-img" style={{ marginTop: 0 }} onClick={lb} />
              <p className="cs-img-caption">Brand identity — including the Elisity logo I designed from scratch</p>
            </div>
          </div>
          <img src={`${base}images/zero_trust_network_security/design_system_view.png`} alt="Design system" className="cs-img-full" onClick={lb} />
          <p className="cs-img-caption">Component library — standardised across product and marketing surfaces</p>
        </div>

        <div className="cs-section">
          <p className="cs-section-label">Reflection</p>
          <h2 className="cs-section-title">Looking back</h2>
          <div className="cs-closing">
            <div>
              <div className="cs-stats-row">
                <div className="cs-closing-stat"><div className="cs-closing-num">3</div><div className="cs-closing-desc">months to first release</div></div>
                <div className="cs-closing-stat"><div className="cs-closing-num">2+</div><div className="cs-closing-desc">funding rounds secured</div></div>
                <div className="cs-closing-stat"><div className="cs-closing-num">∞</div><div className="cs-closing-desc">lessons learned</div></div>
              </div>
            </div>
            <div>
              <p className="cs-body">Witnessing a company grow from a raw prototype to a funded enterprise product — trusted by organisations like GSK and Bupa Health — is one of the most formative experiences of my career.</p>
              <p className="cs-body">Building a mature product at startup speed requires more than design skill. It demands clarity of vision, relentless prioritisation, and a team that trusts each other enough to move fast without breaking what matters.</p>
              <p className="cs-body">The biggest lesson: the best security product is the one people actually use. Making zero trust accessible — visually, conceptually, and operationally — was the real design problem worth solving.</p>
            </div>
          </div>
          <img src={`${base}images/zero_trust_network_security/product_on_laptop.png`} alt="Elisity product" className="cs-img-bare" onClick={lb} />
        </div>

      </div>

      <div className="cs-back" style={{ paddingTop: '48px', paddingBottom: '80px', borderTop: '1px solid var(--light)', marginTop: '72px' }}>
        <button onClick={() => navigate('/')} className="back-btn">← Back to Case Studies</button>
      </div>

    </div>
  )
}
