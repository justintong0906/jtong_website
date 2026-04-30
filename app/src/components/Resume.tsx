import { Download, ExternalLink, FileText } from 'lucide-react'
import { resume } from '../data/portfolio'
import SectionHeading from './SectionHeading'

function Resume() {
  return (
    <section id="resume" className="bg-black px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Resume" color="text-[rgba(255,176,127,0.9)]">

        </SectionHeading>

      <div className="grid gap-5 rounded-lg border border-white/10 bg-slate-950/80 p-6 shadow-2xl shadow-black/20 lg:grid-cols-[1fr_auto] lg:items-center">
        {/* Change items-start to items-center right here: */}
        <div className="flex items-center gap-4">
          <div className="rounded-md border border-[rgba(255,176,127,0.2)] bg-[rgba(255,176,127,0.1)] p-3 text-[rgba(255,176,127,0.8)]">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Justin Tong's Resume
            </h3>
            {/* <p className="mt-2 leading-7 text-slate-300">
              {resume.updated}
            </p> */}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={resume.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-3 font-semibold text-white transition hover:border-cyan-300/50 hover:text-cyan-200"
          >
            View PDF
            <ExternalLink className="h-4 w-4" />
          </a>
          <a
            href={resume.href}
            download={resume.fileName}
            className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 font-semibold text-black transition hover:bg-slate-200"
          >
            Download
            <Download className="h-4 w-4" />
          </a>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Resume
