import { motion } from 'framer-motion'
import { ExternalLink, GitBranch, Play, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'

type Project = (typeof projects)[number]

type ProjectModalProps = {
  project: Project
  onClose: () => void
}

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden rounded-md bg-gradient-to-br ${project.imageAccent}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
      <div className="absolute inset-x-5 bottom-5 rounded-md border border-white/10 bg-black/50 p-4 backdrop-blur">
        <p className="text-sm font-medium text-white">{project.imageLabel}</p>
        <div className="mt-3 flex gap-2">
          <span className="h-2 flex-1 rounded-full bg-white/45" />
          <span className="h-2 flex-1 rounded-full bg-white/25" />
          <span className="h-2 flex-1 rounded-full bg-white/15" />
        </div>
      </div>
    </div>
  )
}

function PlayableWindow() {
  return (
    <div className="rounded-lg border border-white/10 bg-black p-4">
      <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-300" />
        </div>
        <span className="text-xs uppercase text-slate-500">Playable</span>
      </div>

      <div className="grid aspect-video place-items-center rounded-md border border-cyan-300/20 bg-[radial-gradient(circle_at_center,rgba(103,232,249,0.18),transparent_45%),#020617]">
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 font-semibold text-black transition hover:bg-slate-200"
        >
          <Play className="h-4 w-4 fill-black" />
          Launch Demo
        </button>
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-black/80 px-5 py-8 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close project preview"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.22 }}
        className="relative max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-lg border border-white/10 bg-slate-950 p-5 shadow-2xl shadow-black"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">
              Project Demo
            </p>
            <h3 id="project-modal-title" className="mt-2 text-3xl font-semibold text-white">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project preview"
            className="rounded-md border border-white/10 p-2 text-slate-300 transition hover:border-white/30 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <ProjectPreview project={project} />
            <p className="mt-4 leading-8 text-slate-300">
              {project.description}
            </p>
          </div>

          <PlayableWindow />
        </div>
      </motion.div>
    </div>
  )
}

function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)

  return (
    <section
      id="projects"
      className="border-y border-white/10 bg-slate-950 px-5 py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Projects" color="text-[rgba(244,63,217,0.7)]">
          Each card has space for a project image, with a playable preview slot
          ready for an interactive project.
        </SectionHeading>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.04 }}
              className="flex min-h-[30rem] flex-col rounded-lg border border-white/10 bg-black/70 p-4 shadow-2xl shadow-black/10"
            >
              <ProjectPreview project={project} />

              <div className="flex flex-1 flex-col px-2 pt-5">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                    <GitBranch className="h-5 w-5" />
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="rounded-md border border-white/10 p-2 text-slate-300 transition hover:border-cyan-300/50 hover:text-cyan-300"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-xs font-medium text-cyan-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.playable ? (
                  <button
                    type="button"
                    onClick={() => setActiveProject(project)}
                    className="cursor-pointer mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-2.5 font-semibold text-black transition hover:bg-slate-200"
                  >
                    <Play className="h-4 w-4 fill-black" />
                    Launch Demo
                  </button>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {activeProject ? (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      ) : null}
    </section>
  )
}

export default Projects
