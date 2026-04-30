import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import AnimatedGradientBackground from './AnimatedGradientBackground'

const introMessages = ['Hi.', 'I\'m Justin!', 'Welcome to my website!'] as const

type IntroSequenceProps = {
  onComplete: () => void
}

const wait = (ms: number) =>
  new Promise((resolve) => {
    window.setTimeout(resolve, ms)
  })

function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [text, setText] = useState('')

  useEffect(() => {
    let cancelled = false

    async function runSequence() {
      await wait(500)

      //for each word
      for (const message of introMessages) {
        
        //typing
        for (let index = 1; index <= message.length; index += 1) {
          if (cancelled) return
          setText(message.slice(0, index))
          await wait(100)
        }

        await wait(1000)
        
        //backspace
        for (let index = message.length - 1; index >= 0; index -= 1) {
          if (cancelled) return
          setText(message.slice(0, index))
          await wait(50)
        }

        await wait(200)
      }

      if (!cancelled) {
        onComplete()
      }
    }

    runSequence()

    return () => {
      cancelled = true
    }
  }, [onComplete])

  return (
    <motion.section
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] isolate grid place-items-center overflow-hidden bg-black px-5"
      aria-label="Intro animation"
    >
      <AnimatedGradientBackground />
      <div className="absolute inset-0 -z-10 bg-black/20" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="min-h-24 text-center"
      >        
        <p className="text-4xl font-semibold text-white sm:text-6xl">
          {text}
          <motion.span
            aria-hidden="true"
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 0.9, repeat: Infinity }}
            className="ml-1 inline-block text-cyan-200"
          >
            |
          </motion.span>
        </p>
      </motion.div>
      
    </motion.section>
  )
}

export default IntroSequence
