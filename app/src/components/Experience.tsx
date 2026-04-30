import { BriefcaseBusiness } from 'lucide-react'
import { experienceItems } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function Experience() {
  return (
    <section id="experience" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Experience" color="text-[rgba(244,63,94,0.7)]">
          Internship, research, and student-team experience can be customized as
          Justin's resume grows.
        </SectionHeading>

        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-slate-800" />
          <div className="space-y-8">
            {experienceItems.map((item) => (
              <article key={`${item.role}-${item.company}`} className="relative pl-12">
                <div className="absolute left-0 top-1 rounded-md border border-emerald-300/20 bg-emerald-300/10 p-2 text-emerald-200">
                  <BriefcaseBusiness className="h-4 w-4" />
                </div>
                <div className="rounded-lg border border-white/10 bg-slate-900/70 p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-slate-300">{item.company}</p>
                    </div>
                    <span className="rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-sm text-emerald-200">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-4 leading-8 text-slate-300">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
