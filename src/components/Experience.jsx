import { Briefcase, ChevronRight } from 'lucide-react'
import { content } from '../data/content'
import { useLang } from '../data/lang.jsx'
import Reveal, { SectionHeader } from './Reveal.jsx'

export default function Experience() {
  const { lang } = useLang()
  const e = content.experience[lang]
  const navLabel = content.nav[lang].find((n) => n.id === 'experience').label

  return (
    <section id="experience" className="relative scroll-mt-20 py-24">
      <div className="container-x">
        <SectionHeader label={navLabel} title={e.title} />

        <div className="relative mt-12">
          {/* Timeline spine */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-teal-400/60 via-white/10 to-transparent md:left-[9px]" />

          <div className="space-y-10">
            {e.jobs.map((job, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="relative pl-8 md:pl-12">
                  {/* Node */}
                  <span
                    className={`absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full md:h-5 md:w-5 ${
                      job.current
                        ? 'bg-teal-400 shadow-[0_0_0_4px_rgba(45,212,191,0.2)]'
                        : 'bg-ink-700 ring-2 ring-white/10'
                    }`}
                  >
                    {job.current && <span className="h-1.5 w-1.5 rounded-full bg-ink-950" />}
                  </span>

                  <div className="glass glass-hover rounded-2xl p-6 sm:p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="mb-1 flex flex-wrap items-center gap-2">
                          <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                            {job.role}
                          </h3>
                          {job.current && (
                            <span className="rounded-full border border-teal-400/30 bg-teal-400/10 px-2.5 py-0.5 text-xs font-semibold text-teal-300">
                              {lang === 'fr' ? 'Actuel' : 'Current'}
                            </span>
                          )}
                        </div>
                        <p className="flex items-center gap-2 text-sm font-medium text-electric-400">
                          <Briefcase size={14} />
                          {job.company}
                        </p>
                      </div>
                      <span className="whitespace-nowrap rounded-lg bg-white/5 px-3 py-1.5 font-mono text-xs text-slate-400">
                        {job.period}
                      </span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-slate-400">{job.summary}</p>

                    <ul className="mt-4 space-y-2.5">
                      {job.points.map((pt, j) => (
                        <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-slate-300">
                          <ChevronRight size={16} className="mt-0.5 shrink-0 text-teal-400" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-xs text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
