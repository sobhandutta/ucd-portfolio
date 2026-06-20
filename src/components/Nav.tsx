import { useNavigate, useLocation } from 'react-router-dom'
import { useAiPanel } from '../context/AiPanelContext'

const SparkleIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path d="M8 1.5C8 1.5 9.2 4.5 11.5 4.5C11.5 4.5 8.5 5.7 8.5 8C8.5 8 7.3 5 5 5C5 5 8 3.8 8 1.5Z" fill="currentColor"/>
    <path d="M12.5 8.5C12.5 8.5 13.3 10.3 14.5 10.5C14.5 10.5 12.7 11.3 12.5 12.5C12.5 12.5 11.7 10.7 10.5 10.5C10.5 10.5 12.3 9.7 12.5 8.5Z" fill="currentColor"/>
    <path d="M5 10C5 10 5.8 11.8 7 12C7 12 5.2 12.8 5 14C5 14 4.2 12.2 3 12C3 12 4.8 11.2 5 10Z" fill="currentColor" opacity="0.5"/>
  </svg>
)

export default function Nav() {
  const navigate = useNavigate()
  const location = useLocation()
  const { isOpen, open } = useAiPanel()

  const path = location.pathname

  const isAiActive = path.startsWith('/ai')
  const isWorkActive = path.startsWith('/work') || path === '/'
  const isAboutActive = path === '/about'

  return (
    <header>
      <nav className="nav">
        <button className="nav-logo" onClick={() => navigate('/about')}>
          Sobhan Dutta
        </button>
        <ul className="nav-links">
          <li>
            <button
              onClick={() => navigate('/ai')}
              id="nav-ai"
              className={`ai-link${isAiActive ? ' active' : ''}`}
            >
              AI Experiments
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate('/')}
              id="nav-work"
              className={isWorkActive ? 'active' : ''}
            >
              Case Studies
            </button>
          </li>
          <li>
            <button
              onClick={() => navigate('/about')}
              id="nav-about"
              className={isAboutActive ? 'active' : ''}
            >
              About
            </button>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1z-wkuIneoLpUHazjX41cgMHmk1iciePy/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
          <li>
            <button
              className={`nav-ask-icon${isOpen ? ' active' : ''}`}
              id="nav-ask-icon-btn"
              onClick={open}
              aria-label="Ask anything about me"
            >
              <SparkleIcon />
              <span className="nav-ask-tooltip">Ask anything about me</span>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
