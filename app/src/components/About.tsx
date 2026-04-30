import { aboutPhotoCards, aboutSummary } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const photoVietnam = '/vietnam.jpg'
const photoKnightro = '/knightro.jpg'
const photoBasketball = '/basketball.jpg'
const photoConcert = '/concert.jpg'


const aboutPhotoSources = [
  photoKnightro,
  photoVietnam,
  photoBasketball,
  photoConcert,
] as const

function About() {
  return (
    <section id="about" className="bg-black px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="About">

        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/20">
            <div className="mb-5 flex items-center gap-3">
              {/* <div className="grid h-11 w-11 place-items-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                <HeartHandshake className="h-5 w-5" />
              </div> */}
              <h3 className="text-2xl font-semibold text-white">
              </h3>
            </div>

            <div className="space-y-5 text-md leading-9 text-slate-300">
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
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={aboutPhotoSources[index]}
                    alt={card.caption}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
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
