import { Code2, Cpu, Wrench } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const icons = [Code2, Cpu, Wrench] as const

function Skills() {
  return (
    <section id="skills" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Technical Skills" color="text-[rgba(213,185,74,0.7)]">
          A compact snapshot of languages, frameworks, and tools that support
          Justin's coursework and project work.
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[index]

            return (
              <div
                key={group.title}
                className="rounded-lg border border-white/10 bg-slate-900/70 p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-md border border-amber-300/20 bg-amber-300/10 p-3 text-amber-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-amber-300/40 hover:text-amber-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
