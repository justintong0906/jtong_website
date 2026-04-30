import { BookOpen, CalendarDays, GraduationCap } from 'lucide-react'
import { education } from '../data/portfolio'
import SectionHeading from './SectionHeading'
const ucfImg = './ucf.png'

function Education() {
  return (
    <section id="education" className="border-y border-white/10 bg-slate-900/50 px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Education" color="text-[rgba(246,222,115,0.7)]">
          
        </SectionHeading>

        <div className="rounded-lg border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/20">
          <div className="grid gap-6 lg:grid-cols-[1fr_24rem] lg:items-stretch">
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="rounded-md border border-[rgba(246,222,115,0.2)] bg-[rgba(246,222,115,0.1)] p-3 text-[rgba(246,222,115,0.8)]">
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
                <CalendarDays className="h-5 w-5 text-[rgba(246,222,115,0.8)]" />
                <span>Expected Graduation: {education.expectedGraduation}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <BookOpen className="h-5 w-5 text-[rgba(246,222,115,0.8)]" />
                <span>GPA: {education.gpa} / 4.00</span>
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
                src={ucfImg}
                alt="University of Central Florida"
                className="h-64 w-full rounded-md object-cover lg:min-h-64"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
