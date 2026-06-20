import { useEffect, useRef } from 'react'
import { useAiPanel } from '../context/AiPanelContext'

const PANEL_URL = 'https://sobhandutta-agentic-personal-assistant.hf.space/'

export default function AiPanel() {
  const { isOpen, close } = useAiPanel()
  const loaded = useRef(false)
  const iframeSrc = isOpen || loaded.current ? PANEL_URL : ''

  if (isOpen) loaded.current = true

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [close])

  return (
    <>
      <div
        id="ai-panel-overlay"
        className={`ai-panel-overlay${isOpen ? ' open' : ''}`}
        onClick={close}
      />
      <div id="ai-panel" className={`ai-panel${isOpen ? ' open' : ''}`}>
        <div className="ai-panel-header">
          <div>
            <div className="ai-panel-title">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M8 1.5C8 1.5 9.2 4.5 11.5 4.5C11.5 4.5 8.5 5.7 8.5 8C8.5 8 7.3 5 5 5C5 5 8 3.8 8 1.5Z" fill="#0a0a0a"/>
                <path d="M12.5 8.5C12.5 8.5 13.3 10.3 14.5 10.5C14.5 10.5 12.7 11.3 12.5 12.5C12.5 12.5 11.7 10.7 10.5 10.5C10.5 10.5 12.3 9.7 12.5 8.5Z" fill="#0a0a0a"/>
                <path d="M5 10C5 10 5.8 11.8 7 12C7 12 5.2 12.8 5 14C5 14 4.2 12.2 3 12C3 12 4.8 11.2 5 10Z" fill="#0a0a0a" opacity="0.5"/>
              </svg>
              Ask Sobhan's AI
            </div>
            <div className="ai-panel-hint">Get answers from real data</div>
          </div>
          <button className="ai-panel-close" onClick={close} aria-label="Close">×</button>
        </div>
        <iframe
          id="ai-panel-iframe"
          src={iframeSrc}
          title="Agentic Personal Assistant"
          allow="microphone"
        />
      </div>
    </>
  )
}
