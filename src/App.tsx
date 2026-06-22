import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { LightboxProvider } from './context/LightboxContext'
import { AiPanelProvider } from './context/AiPanelContext'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Lightbox from './components/Lightbox'
import AiPanel from './components/AiPanel'
import WorkPage from './pages/WorkPage'
import AboutPage from './pages/AboutPage'
import LeadershipStylePage from './pages/LeadershipStylePage'
import AiIndexPage from './pages/AiIndexPage'
import AiAgenticPage from './pages/AiAgenticPage'
import AiCodePage from './pages/AiCodePage'
import AiUxPage from './pages/AiUxPage'
import CsAiFirstPage from './pages/CsAiFirstPage'
import CsAtayaPage from './pages/CsAtayaPage'
import CsZeroTrustPage from './pages/CsZeroTrustPage'

function ScrollToTop() {
  return null
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])
  return <>{children}</>
}

export default function App() {
  return (
    <HashRouter>
      <LightboxProvider>
        <AiPanelProvider>
          <Nav />
          <main>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<PageWrapper><WorkPage /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
              <Route path="/about/leadership-style" element={<PageWrapper><LeadershipStylePage /></PageWrapper>} />
              <Route path="/ai" element={<PageWrapper><AiIndexPage /></PageWrapper>} />
              <Route path="/ai/agentic" element={<PageWrapper><AiAgenticPage /></PageWrapper>} />
              <Route path="/ai/code" element={<PageWrapper><AiCodePage /></PageWrapper>} />
              <Route path="/ai/ux" element={<PageWrapper><AiUxPage /></PageWrapper>} />
              <Route path="/work/ai-first" element={<PageWrapper><CsAiFirstPage /></PageWrapper>} />
              <Route path="/work/ataya" element={<PageWrapper><CsAtayaPage /></PageWrapper>} />
              <Route path="/work/zerotrust" element={<PageWrapper><CsZeroTrustPage /></PageWrapper>} />
              <Route path="*" element={<Navigate to="/about" replace />} />
            </Routes>
          </main>
          <Footer />
          <Lightbox />
          <AiPanel />
        </AiPanelProvider>
      </LightboxProvider>
    </HashRouter>
  )
}
