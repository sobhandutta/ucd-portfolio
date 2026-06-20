import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

interface AiPanelContextValue {
  isOpen: boolean
  open: () => void
  close: () => void
}

const AiPanelContext = createContext<AiPanelContextValue | null>(null)

export function AiPanelProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const open = useCallback(() => {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const close = useCallback(() => {
    setIsOpen(false)
    document.body.style.overflow = ''
  }, [])

  return (
    <AiPanelContext.Provider value={{ isOpen, open, close }}>
      {children}
    </AiPanelContext.Provider>
  )
}

export function useAiPanel() {
  const ctx = useContext(AiPanelContext)
  if (!ctx) throw new Error('useAiPanel must be used within AiPanelProvider')
  return ctx
}
