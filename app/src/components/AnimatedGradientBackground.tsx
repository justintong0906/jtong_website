import { motion } from 'framer-motion'
import type { MotionValue } from 'framer-motion'

type AnimatedGradientBackgroundProps = {
  opacity?: MotionValue<number> | number
}

function AnimatedGradientBackground({ opacity = 1 }: AnimatedGradientBackgroundProps) {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-0 -z-20"
      style={{
        opacity,
        background:
          'radial-gradient(circle at 18% 28%, rgba(20,184,166,0.46), transparent 32%), radial-gradient(circle at 78% 20%, rgba(168,85,247,0.42), transparent 30%), radial-gradient(circle at 52% 78%, rgba(244,63,94,0.34), transparent 34%), radial-gradient(circle at 24% 82%, rgba(250,204,21,0.24), transparent 28%), #020617',
        backgroundSize: '150% 150%',
      }}
      animate={{
        backgroundPosition: ['0% 20%', '100% 50%', '30% 100%', '0% 20%'],
      }}
      transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
    />
  )
}

export default AnimatedGradientBackground
