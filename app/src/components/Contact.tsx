import { Mail, Send } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { contactLinks } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function Contact() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-900/70 px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading title="Contact">
            Reach out for internships, project collaborations, research
            opportunities, or a quick conversation about software.
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
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Send Message
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>

      <p className="mx-auto mt-12 max-w-7xl text-sm text-slate-500">
        Built with React, Tailwind CSS, Framer Motion, and Lucide React.
      </p>
    </footer>
  )
}

export default Contact
