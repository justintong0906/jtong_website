import { Code2, Bot, Layout, Wrench } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const icons = [Code2, Bot, Layout, Wrench] as const
const iconStyles = [
  'border-purple-300/25 bg-purple-300/10 text-purple-200',
  'border-orange-300/25 bg-orange-300/10 text-orange-200',
  'border-green-300/25 bg-green-300/10 text-green-200',
  'border-teal-300/25 bg-teal-300/10 text-teal-200',
] as const

function Skills() {
  return (
    <section id="skills" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Technical Skills" color="text-[rgba(140,237,226,0.9)]">

        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[index]
            const iconStyle = iconStyles[index]

            return (
              <div
                key={group.title}
                className="h-full rounded-lg border border-white/10 bg-slate-900/70 p-5"
              >
                <div className="mb-5 flex items-start gap-3">
                  <div className={`rounded-md border p-3 ${iconStyle}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-white">
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
