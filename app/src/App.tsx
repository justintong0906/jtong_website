import { AnimatePresence, motion } from 'framer-motion'
import { useCallback, useState } from 'react'
import About from './components/About'
import AtGlance from './components/AtGlance'
import Contact from './components/Contact'
import Education from './components/Education'
import Experience from './components/Experience'
import Header from './components/Header'
import Hero from './components/Hero'
import IntroSequence from './components/IntroSequence'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Skills from './components/Skills'

function shouldPlayIntro() {
  return (
    window.location.pathname === '/' &&
    window.location.search === '' &&
    window.location.hash === ''
  )
}

function App() {
  const [showIntro, setShowIntro] = useState(() => shouldPlayIntro())
  const handleIntroComplete = useCallback(() => {
    setShowIntro(false)
    window.history.replaceState(null, '', '/#home')
  }, [])

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
        className="min-h-screen bg-slate-950 text-slate-100"
      >
        <Header />
        <main>
          <Hero />
          <AtGlance />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Resume />
          <Contact />
        </main>
      </motion.div>

      <AnimatePresence>
        {showIntro ? <IntroSequence onComplete={handleIntroComplete} /> : null}
      </AnimatePresence>
    </>
  )
}

export default App
