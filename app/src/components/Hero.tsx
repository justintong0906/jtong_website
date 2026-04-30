import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useEffect, useRef } from 'react'
import heroImg from '../assets/hero.jpg'
import AnimatedGradientBackground from './AnimatedGradientBackground'

function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const scrollYProgress = useMotionValue(0)
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0.12])
  const contentY = useTransform(scrollYProgress, [0, 0.65], [0, 72])

  useEffect(() => {
    let animationFrame = 0

    const updateProgress = () => {
      const section = sectionRef.current

      if (!section) {
        return
      }

      const rect = section.getBoundingClientRect()
      const progress = Math.min(Math.max(-rect.top / rect.height, 0), 1)
      scrollYProgress.set(progress)
    }

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(animationFrame)
      animationFrame = window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      window.cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
    }
  }, [scrollYProgress])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-black px-5 py-28"
    >
      <AnimatedGradientBackground opacity={gradientOpacity} />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-gradient-to-t from-black to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        style={{ opacity: contentOpacity, y: contentY }}
        className="mx-auto flex w-full max-w-4xl justify-center"
      >
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 rounded-full border border-white/20 bg-white/10 p-1 shadow-2xl shadow-black/40">
            <img
              src={heroImg}
              alt="Justin Tong"
              className="h-40 w-40 rounded-full object-cover sm:h-48 sm:w-48"
            />
          </div>

          <h1 className="text-6xl font-semibold text-white sm:text-7xl">
            Justin Tong
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-300">
            {/* AI/ML Solutions Engineer Intern @ Command Post Technologies
            Computer Science B.S. @ University of Central Florida */}
          </p>

          <div className="mt-10">
            <a
              href="#at-a-glance"
              className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-black transition hover:bg-slate-200"
            >
              Learn more
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
