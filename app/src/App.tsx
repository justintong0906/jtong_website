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

function App() {
  const [introComplete, setIntroComplete] = useState(false)
  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true)
  }, [])

  return (
    <>
      <AnimatePresence>
        {!introComplete ? <IntroSequence onComplete={handleIntroComplete} /> : null}
      </AnimatePresence>

      {introComplete ? (
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
      ) : null}
    </>
  )
}

export default App
