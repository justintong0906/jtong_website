import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { contactLinks, navigationItems } from '../data/portfolio'

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          className="group flex items-center gap-3 text-base font-semibold text-white"
        >
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/10 text-sm transition group-hover:border-cyan-300/60 group-hover:bg-cyan-300/15">
            JT
          </span>
          <span className="tracking-wide">justintong.dev</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-cyan-950/30"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${contactLinks.email}`}
            aria-label="Email Justin"
            className="rounded-md border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-300"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href={contactLinks.linkedin}
            aria-label="Justin Tong on LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-300"
          >
            <FaLinkedinIn className="h-4 w-4" />
          </a>
          <a
            href={contactLinks.github}
            aria-label="Justin Tong on GitHub"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-300"
          >
            <FaGithub className="h-4 w-4" />
          </a>
        </div>
      </nav>

      <div className="border-t border-white/10 px-5 py-3 md:hidden">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto text-sm">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-md px-3 py-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
