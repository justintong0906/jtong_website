import { Camera, HeartHandshake } from 'lucide-react'
import { aboutPhotoCards, aboutSummary } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function About() {
  return (
    <section id="about" className="bg-black px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="About">
          A more personal section for the story behind the projects: interests,
          campus involvement, and the things I like building outside class.
        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/20">
            <div className="mb-5 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                <HeartHandshake className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                A bit more about me
              </h3>
            </div>

            <div className="space-y-5 text-lg leading-9 text-slate-300">
              {aboutSummary.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {aboutPhotoCards.map((card, index) => (
              <figure
                key={card.caption}
                className="overflow-hidden rounded-lg border border-white/10 bg-slate-950/80"
              >
                <div
                  className={`relative aspect-[4/3] bg-gradient-to-br ${card.accent}`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
                  <div className="absolute inset-0 grid place-items-center">
                    <div className="grid h-14 w-14 place-items-center rounded-md border border-white/15 bg-black/35 text-white backdrop-blur">
                      <Camera className="h-6 w-6" />
                    </div>
                  </div>
                  <span className="absolute left-4 top-4 rounded-md border border-white/10 bg-black/45 px-3 py-1 text-sm font-medium text-white backdrop-blur">
                    Photo {index + 1}
                  </span>
                </div>
                <figcaption className="p-4 text-sm leading-6 text-slate-300">
                  {card.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
