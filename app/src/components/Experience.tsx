import { BriefcaseBusiness } from 'lucide-react'
import { experienceItems } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const logoUcf = './ucf.png'
const logoCpt = './cpt.png'
const logoOutlier = './outlier.jpg'

const logos = [
  logoCpt,
  logoUcf,
  logoOutlier,
]
const bgs= [
  'white',
  'black',
  'black',
]


function Experience() {
  return (
    <section id="experience" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Experience" color="text-[rgba(244,63,94,0.7)]">

        </SectionHeading>

        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 w-px bg-slate-800" />
          <div className="space-y-8">
            {experienceItems.map((item, index) => (
              <article key={`${item.role}-${item.company}`} className="relative pl-12">
                <div className="absolute left-0 top-1 rounded-md border border-[rgba(201,92,110,0.2)] bg-[rgba(201,92,110,0.1)] p-2 text-[rgba(201,92,110,1)]">
                  <BriefcaseBusiness className="h-4 w-4" />
                </div>
                <div className="rounded-lg border border-white/10 bg-slate-900/70 p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex min-w-0 items-start gap-4">
                      <div className={`grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-md border border-white/10 bg-${bgs[index]} p-1.5`}>
                        <img
                          src={logos[index]}
                          alt={`${item.company} logo`}
                          className="h-full w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xl font-semibold text-white">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-slate-300">{item.company}</p>
                      </div>
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
