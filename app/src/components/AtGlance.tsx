import { motion } from 'framer-motion'
import {
  Briefcase,
  Code2,
  GraduationCap,
  MapPin,
  Sparkles,
} from 'lucide-react'
import { aboutHighlights } from '../data/portfolio'
import SectionHeading from './SectionHeading'

type Highlight = (typeof aboutHighlights)[number]

const highlightIcons = {
  Location: MapPin,
  School: GraduationCap,
  Job: Briefcase,
  Focus: Code2,
} satisfies Record<Highlight['label'], typeof MapPin>

function AtGlance() {
  const groupedHighlights = aboutHighlights.reduce<Record<string, string[]>>(
    (groups, highlight) => {
      groups[highlight.label] = groups[highlight.label] ?? []
      groups[highlight.label].push(highlight.value)
      return groups
    },
    {},
  )

  return (
    <section id="at-a-glance" className="bg-black px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="">
        </SectionHeading>

        <div className="rounded-lg border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/20">
          <div className="mb-6 flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-md bg-white/[0.04]">
              <motion.div
                animate={{
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
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="h-8 w-8" />
              </motion.div>
            </div>
            <h3 className="text-2xl font-semibold text-white">
              At a glance
            </h3>
          </div>

          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(groupedHighlights).map(([label, values]) => {
              const Icon = highlightIcons[label as Highlight['label']]
              const isFocus = label === 'Focus'

              return (
                <div
                  key={label}
                  title={label}
                  aria-label={`${label}: ${values.join(', ')}`}
                  className={`flex min-h-24 items-center gap-4 rounded-md border border-white/10 bg-white/[0.03] p-4 transition hover:border-white/[0.5] hover:bg-white/[0.06] ${
                    isFocus ? 'md:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>

                  {isFocus ? (
                    <div className="flex flex-wrap gap-2">
                      {values.map((value) => (
                        <span
                          key={value}
                          className="rounded-md border border-cyan-300/20 bg-cyan-300/10 px-3 py-2 text-sm font-semibold text-slate-100"
                        >
                          {value}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="font-semibold leading-7 text-slate-100">
                      {values[0]}
                    </p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AtGlance
