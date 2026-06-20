import { useNavigate } from 'react-router-dom'

export default function AiAgenticPage() {
  const navigate = useNavigate()

  return (
    <div className="ai-page-inner">

      <div className="article-back">
        <button onClick={() => navigate('/ai')} className="back-btn">← AI Experiments</button>
      </div>

      <div className="ai-header">
        <p className="ai-eyebrow">Experiment 01 — Multi-Agent System · 2025</p>
        <h1 className="ai-title">Agentic Personal Assistant</h1>
        <p className="ai-intro">This is an experiment to design and engineer multi-agent systems from first principles — no black-box frameworks, just Python, clear architecture, and LLMs that coordinate to get things done. These are experiments at the intersection of product thinking, engineering, and AI.</p>
      </div>

      <div className="ai-featured">
        <div className="ai-feat-left">
          <p className="ai-feat-tag">Experiment 01 — Multi-Agent System</p>
          <h2 className="ai-feat-title">Agentic Personal Assistant</h2>
          <p className="ai-feat-body">A personal AI that answers questions about me by orchestrating five specialist sub-agents, each reading from a different data source — SQLite, live portfolio scrape, semantic vector store, Google Drive, and Gmail — and synthesising results into a single grounded response.</p>
          <p className="ai-feat-body">The orchestrator never answers from its own training knowledge. It always calls tools first, gets real data, then generates a response. Every answer cites its source.</p>
          <div className="ai-feat-meta">
            <div className="ai-feat-meta-row">
              <span className="ai-feat-meta-label">Stack</span>
              <span className="ai-feat-meta-val">Python, Anthropic Claude, ChromaDB, FastAPI, Gradio</span>
            </div>
            <div className="ai-feat-meta-row">
              <span className="ai-feat-meta-label">Deployed</span>
              <span className="ai-feat-meta-val">Hugging Face Spaces (Docker)</span>
            </div>
            <div className="ai-feat-meta-row">
              <span className="ai-feat-meta-label">Providers</span>
              <span className="ai-feat-meta-val">Claude Sonnet, GPT-4o, Ollama (local)</span>
            </div>
            <div className="ai-feat-meta-row">
              <span className="ai-feat-meta-label">GitHub</span>
              <span className="ai-feat-meta-val">
                <a href="https://github.com/sobhandutta" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', color: '#4a4a8a' }}>sobhandutta ↗</a>
              </span>
            </div>
          </div>
        </div>
        <div className="ai-feat-right">
          <div className="ai-arch-box">
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#888', marginBottom: '24px' }}>System Architecture</p>
            <svg viewBox="0 0 460 320" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="126" width="80" height="44" rx="4" fill="#fff" stroke="#d0d0e8" strokeWidth="1.5"/>
              <text x="44" y="145" textAnchor="middle" fill="#1a1a2e" fontFamily="Inter,sans-serif" fontSize="10" fontWeight="600">User</text>
              <text x="44" y="159" textAnchor="middle" fill="#888" fontFamily="Inter,sans-serif" fontSize="9">question</text>
              <line x1="84" y1="148" x2="128" y2="148" stroke="#d0d0e8" strokeWidth="1.5" markerEnd="url(#a1)"/>
              <rect x="128" y="108" width="110" height="80" rx="4" fill="#fff" stroke="#4a4a8a" strokeWidth="1.5"/>
              <text x="183" y="124" textAnchor="middle" fill="#555577" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="600" letterSpacing="0.08em">ORCHESTRATOR</text>
              <text x="183" y="138" textAnchor="middle" fill="#1a1a2e" fontFamily="Inter,sans-serif" fontSize="9.5" fontWeight="500">Claude, OpenAPI,</text>
              <text x="183" y="151" textAnchor="middle" fill="#1a1a2e" fontFamily="Inter,sans-serif" fontSize="9.5" fontWeight="500">or Ollama</text>
              <text x="183" y="164" textAnchor="middle" fill="#888" fontFamily="Inter,sans-serif" fontSize="9">tool-calling loop</text>
              <text x="183" y="177" textAnchor="middle" fill="#888" fontFamily="Inter,sans-serif" fontSize="9">streaming · retry</text>
              <line x1="238" y1="148" x2="282" y2="148" stroke="#d0d0e8" strokeWidth="1.5" markerEnd="url(#a1)"/>
              <rect x="282" y="128" width="84" height="40" rx="4" fill="#f4f4f9" stroke="#d0d0e8" strokeWidth="1.5"/>
              <text x="324" y="146" textAnchor="middle" fill="#555577" fontFamily="Inter,sans-serif" fontSize="9" fontWeight="600">ThreadPool</text>
              <text x="324" y="158" textAnchor="middle" fill="#888" fontFamily="Inter,sans-serif" fontSize="9">parallel dispatch</text>
              <line x1="366" y1="148" x2="396" y2="52" stroke="#d0d0e8" strokeWidth="1.5" markerEnd="url(#a1)"/>
              <line x1="366" y1="148" x2="396" y2="100" stroke="#d0d0e8" strokeWidth="1.5" markerEnd="url(#a1)"/>
              <line x1="366" y1="148" x2="396" y2="148" stroke="#4a4a8a" strokeWidth="1.5" markerEnd="url(#a2)"/>
              <line x1="366" y1="148" x2="396" y2="196" stroke="#d0d0e8" strokeWidth="1.5" markerEnd="url(#a1)"/>
              <line x1="366" y1="148" x2="396" y2="244" stroke="#d0d0e8" strokeWidth="1.5" markerEnd="url(#a1)"/>
              <rect x="396" y="30" width="56" height="44" rx="3" fill="#fff" stroke="#d0d0e8" strokeWidth="1.5"/>
              <text x="424" y="49" textAnchor="middle" fill="#555577" fontFamily="Inter,sans-serif" fontSize="8.5" fontWeight="600">SQLite</text>
              <text x="424" y="63" textAnchor="middle" fill="#888" fontFamily="Inter,sans-serif" fontSize="8">profile · skills</text>
              <rect x="396" y="78" width="56" height="44" rx="3" fill="#fff" stroke="#d0d0e8" strokeWidth="1.5"/>
              <text x="424" y="97" textAnchor="middle" fill="#555577" fontFamily="Inter,sans-serif" fontSize="8.5" fontWeight="600">Portfolio</text>
              <text x="424" y="111" textAnchor="middle" fill="#888" fontFamily="Inter,sans-serif" fontSize="8">live scrape</text>
              <rect x="396" y="126" width="56" height="44" rx="3" fill="#f4f4f9" stroke="#4a4a8a" strokeWidth="1.5"/>
              <text x="424" y="145" textAnchor="middle" fill="#4a4a8a" fontFamily="Inter,sans-serif" fontSize="8.5" fontWeight="600">RAG KB</text>
              <text x="424" y="159" textAnchor="middle" fill="#888" fontFamily="Inter,sans-serif" fontSize="8">ChromaDB</text>
              <rect x="396" y="174" width="56" height="44" rx="3" fill="#fff" stroke="#d0d0e8" strokeWidth="1.5"/>
              <text x="424" y="193" textAnchor="middle" fill="#555577" fontFamily="Inter,sans-serif" fontSize="8.5" fontWeight="600">Drive</text>
              <text x="424" y="207" textAnchor="middle" fill="#888" fontFamily="Inter,sans-serif" fontSize="8">Google OAuth</text>
              <rect x="396" y="222" width="56" height="44" rx="3" fill="#fff" stroke="#d0d0e8" strokeWidth="1.5"/>
              <text x="424" y="241" textAnchor="middle" fill="#555577" fontFamily="Inter,sans-serif" fontSize="8.5" fontWeight="600">Gmail</text>
              <text x="424" y="255" textAnchor="middle" fill="#888" fontFamily="Inter,sans-serif" fontSize="8">Google OAuth</text>
              <defs>
                <marker id="a1" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 z" fill="#d0d0e8"/>
                </marker>
                <marker id="a2" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L6,3 z" fill="#4a4a8a"/>
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      </div>

      <div className="ai-demo">
        <div className="ai-demo-header">
          <p className="ai-eyebrow">Live Demo</p>
          <h2 className="ai-demo-title">Try it yourself</h2>
          <p className="ai-demo-sub">Ask anything about Sobhan — his work history, skills, projects, or background. The assistant will route your question to the right data source and respond in real time.</p>
        </div>
        <div className="ai-demo-frame">
          <iframe
            src="https://sobhandutta-agentic-personal-assistant.hf.space/"
            title="Agentic Personal Assistant — Live Demo"
            allow="microphone"
            loading="lazy"
          />
        </div>
        <p className="ai-demo-note">Built with Claude / OpenAI &amp; Python · Hosted on Hugging Face Spaces · <a href="https://github.com/sobhandutta" target="_blank" rel="noreferrer">View source ↗</a></p>
      </div>

      <div className="ai-concepts">
        <p className="ai-concepts-heading">What I built &amp; understand</p>
        <div className="ai-concepts-grid">
          {[
            { num: '01', name: 'Multi-agent orchestration', desc: 'A central LLM routes questions to specialist agents based on tool descriptions alone — no rules or hard-coded logic.' },
            { num: '02', name: 'Tool-calling loops', desc: 'The orchestrator loops: call LLM → tool requests → run tools → inject results → repeat until stop_reason is end_turn. Implemented for both Anthropic and OpenAI formats.' },
            { num: '03', name: 'RAG pipelines', desc: 'Documents are chunked, embedded into vectors with OpenAI, stored in ChromaDB. At query time the question is embedded and compared by cosine similarity to retrieve grounding context.' },
            { num: '04', name: 'Parallel execution', desc: 'ThreadPoolExecutor runs multiple agents simultaneously. A 1s SQLite call and a 3s web scrape finish at second 3, not second 4.' },
            { num: '05', name: 'Async streaming', desc: 'Final answers stream token-by-token via AsyncAnthropic. Status events ("Searching knowledge base…") keep the UI responsive during tool-call rounds.' },
            { num: '06', name: 'Provider-agnostic design', desc: 'Swapping from Claude to GPT-4o or a local Ollama model is one line in config.py. Tool schemas auto-convert between Anthropic and OpenAI formats.' },
          ].map(item => (
            <div key={item.num} className="ai-concept-item">
              <p className="ai-concept-num">{item.num}</p>
              <p className="ai-concept-name">{item.name}</p>
              <p className="ai-concept-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ai-stack">
        <p className="ai-stack-label">Tools &amp; Stack</p>
        <div className="ai-stack-groups">
          {[
            { label: 'LLMs', items: ['Claude Sonnet 4', 'Claude Haiku', 'GPT-4o-mini', 'Ollama (local)'] },
            { label: 'Vector Search', items: ['ChromaDB', 'text-embedding-3-small', 'HNSW index'] },
            { label: 'Backend', items: ['Python', 'FastAPI + WebSockets', 'Gradio', 'SQLite'] },
            { label: 'Infra & Auth', items: ['Docker', 'Hugging Face Spaces', 'Google OAuth 2.0', 'Gmail / Drive API'] },
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

      <div className="ai-cowork">
        <p className="ai-cowork-heading">Also exploring</p>
        <p className="ai-cowork-body">Beyond the agentic assistant, I'm actively using and learning Anthropic's Claude Cowork and the Claude Agent SDK — experimenting with scheduled agents, persistent artifacts, MCP connectors, and multi-agent workflows that connect to real tools like Jira, Figma, Slack, and Google Workspace.</p>
        <div className="ai-cowork-list">
          {[
            { label: 'MCP (Model Context Protocol)', val: 'Connecting AI agents to external tools and data sources through standardised server definitions.' },
            { label: 'Scheduled agents', val: 'Agents that run automatically on a cron — daily briefings, status checks, digest generation.' },
            { label: 'Persistent artifacts', val: 'Live HTML dashboards that pull fresh data from connectors every time they\'re opened.' },
            { label: 'AI-native UX', val: 'Thinking about how product design changes when the interface is a reasoning agent rather than a screen full of controls.' },
          ].map(row => (
            <div key={row.label} className="ai-cowork-row">
              <span className="ai-cowork-row-label">{row.label}</span>
              <span className="ai-cowork-row-val">{row.val}</span>
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
