import { useNavigate } from 'react-router-dom'

export default function AiIndexPage() {
  const navigate = useNavigate()

  return (
    <div className="ai-page-inner">
      <div className="ai-index-header">
        <p className="ai-eyebrow">AI Experiments</p>
        <h1 className="ai-index-title">Experiments at the edge<br />of product, design &amp; AI</h1>
        <p className="ai-index-intro">A collection of hands-on explorations into agentic systems, multi-agent orchestration, RAG pipelines, and AI-native product thinking, built from scratch and documented openly.</p>
      </div>
      <ul className="work-list">
        <li className="work-item" style={{ cursor: 'pointer' }} onClick={() => navigate('/ai/agentic')}>
          <div className="work-year">2026</div>
          <div className="work-info">
            <h2 className="work-title">Agentic Personal Assistant</h2>
            <p className="work-desc">A multi-agent AI system that answers questions about me by orchestrating five specialist sub-agents across SQLite, live web scrape, RAG vector store, Google Drive, and Gmail, built from scratch in Python with no frameworks.</p>
            <p className="work-role">Multi-agent orchestration · RAG · Anthropic Claude · Python</p>
          </div>
        </li>
        <li className="work-item" style={{ cursor: 'pointer' }} onClick={() => navigate('/ai/ux')}>
          <div className="work-year">2026</div>
          <div className="work-info">
            <h2 className="work-title">A New Way of Doing UX Strategy with AI</h2>
            <p className="work-desc">UX design and front-end development are no longer separate handoffs. Using Claude, Figma's AI plugin, and direct code generation, strategy, design, and implementation evolve together in a single loop: building the design system, validating UX with real users, and shipping faster than the old process allowed.</p>
            <p className="work-role">Claude · Figma AI · Design systems · UX strategy</p>
          </div>
        </li>
        <li className="work-item" style={{ cursor: 'pointer' }} onClick={() => navigate('/ai/code')}>
          <div className="work-year">2025</div>
          <div className="work-info">
            <h2 className="work-title">AI-Assisted Code Quality &amp; 5× Developer Productivity</h2>
            <p className="work-desc">A framework for using Claude Code, Cursor, and GitHub Copilot to systematically improve code quality, eliminate technical debt, add missing test coverage, tighten security, and multiply team output without adding headcount.</p>
            <p className="work-role">Claude Code · Cursor · GitHub Copilot · Engineering process</p>
          </div>
        </li>
      </ul>
    </div>
  )
}
