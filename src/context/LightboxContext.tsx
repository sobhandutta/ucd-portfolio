import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

interface LightboxState {
  isOpen: boolean
  src: string
  alt: string
}

interface LightboxContextValue {
  state: LightboxState
  open: (src: string, alt?: string) => void
  close: () => void
}

const LightboxContext = createContext<LightboxContextValue | null>(null)

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LightboxState>({ isOpen: false, src: '', alt: '' })

  const open = useCallback((src: string, alt = '') => {
    setState({ isOpen: true, src, alt })
    document.body.style.overflow = 'hidden'
  }, [])

  const close = useCallback(() => {
    setState(s => ({ ...s, isOpen: false }))
    document.body.style.overflow = ''
  }, [])

  return (
    <LightboxContext.Provider value={{ state, open, close }}>
      {children}
    </LightboxContext.Provider>
  )
}

export function useLightbox() {
  const ctx = useContext(LightboxContext)
  if (!ctx) throw new Error('useLightbox must be used within LightboxProvider')
  return ctx
}
