import { useEffect } from 'react'
import { useLightbox } from '../context/LightboxContext'

export default function Lightbox() {
  const { state, close } = useLightbox()

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [close])

  return (
    <div
      id="lightbox"
      className={`lightbox${state.isOpen ? ' open' : ''}`}
      onClick={close}
    >
      <button className="lightbox-close" onClick={close} aria-label="Close">×</button>
      <img
        id="lightbox-img"
        className="lightbox-img"
        src={state.src}
        alt={state.alt}
        onClick={e => e.stopPropagation()}
      />
    </div>
  )
}
