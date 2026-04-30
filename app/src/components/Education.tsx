import { BookOpen, CalendarDays, GraduationCap } from 'lucide-react'
import { education } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import knightroImg from '../assets/hero.jpg'

function Education() {
  return (
    <section id="education" className="border-y border-white/10 bg-slate-900/50 px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Education" color="text-[rgba(20,184,166,0.7)]">
          Coursework rooted in computer science fundamentals, software design,
          and the systems behind dependable applications.
        </SectionHeading>

        <div className="rounded-lg border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/20">
          <div className="grid gap-6 lg:grid-cols-[1fr_24rem] lg:items-stretch">
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="rounded-md border border-cyan-300/20 bg-cyan-300/10 p-3 text-cyan-200">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">
                    {education.school}
                  </h3>
                  <p className="mt-2 text-slate-300">{education.degree}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <CalendarDays className="h-5 w-5 text-cyan-300" />
                <span>Expected Graduation: {education.expectedGraduation}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <BookOpen className="h-5 w-5 text-cyan-300" />
                <span>Relevant coursework and academic focus</span>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:justify-self-end">
              <img
                src={knightroImg}
                alt="Justin Tong"
                className="h-64 w-full rounded-md border border-white/10 object-cover lg:h-full lg:min-h-72"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
