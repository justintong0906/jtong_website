import { motion, type HTMLMotionProps } from 'framer-motion'
import { Mail, Send, Heart } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { contactLinks } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const shinyRainbowMotion: Pick<HTMLMotionProps<'p'>, 'animate' | 'transition'> = {
  animate: {
    color: [
      '#67e8f9',
      '#c4b5fd',
      '#fda4af',
      '#fde68a',
      '#86efac',
      '#67e8f9',
    ],
    filter: [
      'drop-shadow(0 0 6px rgba(103, 232, 249, 0.25))',
      'drop-shadow(0 0 8px rgba(196, 181, 253, 0.3))',
      'drop-shadow(0 0 8px rgba(253, 164, 175, 0.28))',
      'drop-shadow(0 0 7px rgba(253, 230, 138, 0.26))',
      'drop-shadow(0 0 7px rgba(134, 239, 172, 0.26))',
      'drop-shadow(0 0 6px rgba(103, 232, 249, 0.25))',
    ],
  },
  transition: { duration: 5, repeat: Infinity, ease: 'linear' },
}

function Contact() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-900/70 px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex h-full flex-col">
          <div>
            <SectionHeading title="Contact">
              Please feel free to reach out regarding internships, work, project collaborations,
              research opportunities, or any other conversation.
            </SectionHeading>

            <div className="space-y-3">
              <a
                href={`mailto:${contactLinks.email}`}
                className="flex items-center gap-3 text-slate-300 transition hover:text-cyan-300"
              >
                <Mail className="h-5 w-5" />
                {contactLinks.email}
              </a>
              <a
                href={contactLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-300 transition hover:text-cyan-300"
              >
                <FaLinkedinIn className="h-5 w-5" />
                LinkedIn
              </a>
              <a
                href={contactLinks.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-300 transition hover:text-cyan-300"
              >
                <FaGithub className="h-5 w-5" />
                GitHub
              </a>
            </div>
          </div>

          <motion.p
            {...shinyRainbowMotion}
            className="mt-10 flex items-center gap-1 text-sm font-medium whitespace-nowrap lg:mt-auto"
          >
            Made with <Heart className="h-4 w-4 shrink-0" /> by Justin Tong
          </motion.p>
        </div>

        <form
          className="rounded-lg border border-white/10 bg-slate-950/80 p-6"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Name</span>
              <input
                type="text"
                name="name"
                className="w-full rounded-md border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Email</span>
              <input
                type="email"
                name="email"
                className="w-full rounded-md border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="mt-5 block space-y-2">
            <span className="text-sm font-medium text-slate-200">Message</span>
            <textarea
              name="message"
              rows={6}
              className="w-full resize-none rounded-md border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
              placeholder="Tell me about the opportunity or project."
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200 cursor-pointer"
          >
            Send Message
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </footer>
  )
}

export default Contact
