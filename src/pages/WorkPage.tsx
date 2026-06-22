import { useNavigate } from 'react-router-dom'

const base = import.meta.env.BASE_URL

export default function WorkPage() {
  const navigate = useNavigate()

  return (
    <div className="work-page-inner">
      <div className="ai-index-header">
        <p className="ai-eyebrow">Case Studies</p>
        <h1 className="ai-index-title">Design at the intersection<br />of research, systems &amp; craft</h1>
        <p className="ai-index-intro">A selection of end-to-end product design work, from zero-trust security platforms to AI-native 5G network management. Each project spans research, strategy, and shipped product.</p>
      </div>
      <ul className="work-list">

        <li className="work-item" onClick={() => navigate('/work/ai-first')}>
          <div className="work-year">
            <img src={`${base}images/accelerating_ai_first_ux/thumb.png`} className="work-thumb" alt="" />
            <span className="work-year-label">2025</span>
          </div>
          <div className="work-info">
            <h2 className="work-title">Accelerating to AI-First UX</h2>
            <p className="work-desc">In 6G, AI moves from supporting the network to being built into its core design. This "AI-native" approach means AI is embedded directly into how the network controls, manages, and processes data.</p>
            <p className="work-role">Director of UX Design and UI Architecture @ Ataya</p>
          </div>
        </li>

        <li className="work-item" onClick={() => navigate('/work/ataya')}>
          <div className="work-year">
            <img src={`${base}images/universal_connectivity_platform/thumb.jpg`} className="work-thumb" alt="" />
            <span className="work-year-label">2022</span>
          </div>
          <div className="work-info">
            <h2 className="work-title">Universal Connectivity Platform</h2>
            <p className="work-desc">Started as the first person on the US team and built the product from the ground up. As the owner of UX/UI, my goal was to hire the best people and continuously improve the experience.</p>
            <p className="work-role">Director of UX Design and UI Architecture @ Ataya</p>
          </div>
        </li>

        <li className="work-item" onClick={() => navigate('/work/zerotrust')}>
          <div className="work-year">
            <img src={`${base}images/zero_trust_network_security/thumb.jpg`} className="work-thumb" alt="" />
            <span className="work-year-label">2020</span>
          </div>
          <div className="work-info">
            <h2 className="work-title">Zero Trust Network Security</h2>
            <p className="work-desc">Over two years at Elisity, I made major design decisions, worked with key stakeholders, and delivered a high-quality enterprise product from the ground up.</p>
            <p className="work-role">Head of UX Design &amp; UI Architect @ Elisity</p>
          </div>
        </li>

      </ul>
    </div>
  )
}
