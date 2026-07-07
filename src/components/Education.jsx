import { GraduationCap, Languages as LangIcon, Users } from 'lucide-react'
import { content } from '../data/content'
import { useLang } from '../data/lang.jsx'
import Reveal, { SectionHeader } from './Reveal.jsx'

export default function Education() {
  const { lang } = useLang()
  const edu = content.education[lang]
  const langs = content.languages[lang]
  const asso = content.associative[lang]
  const navLabel = content.nav[lang].find((n) => n.id === 'education').label

  return (
    <section id="education" className="relative scroll-mt-20 py-24">
      <div className="container-x">
        <SectionHeader label={navLabel} title={edu.title} />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
          {/* Education timeline */}
          <Reveal>
            <div className="glass h-full rounded-2xl p-6 sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-400/10 text-teal-400">
                  <GraduationCap size={20} />
                </span>
                <h3 className="font-display text-lg font-bold text-white">{edu.title}</h3>
              </div>
              <div className="space-y-4">
                {edu.items.map((it, i) => (
                  <div
                    key={i}
                    className="flex items-start justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                  >
                    <div>
                      <p className="font-semibold text-white">{it.degree}</p>
                      <p className="mt-0.5 text-sm text-slate-400">{it.school}</p>
                    </div>
                    <span className="whitespace-nowrap rounded-lg bg-teal-400/10 px-2.5 py-1 font-mono text-xs font-semibold text-teal-300">
                      {it.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Languages */}
          <Reveal delay={0.1}>
            <div className="glass h-full rounded-2xl p-6 sm:p-7">
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-electric-400/10 text-electric-400">
                  <LangIcon size={20} />
                </span>
                <h3 className="font-display text-lg font-bold text-white">{langs.title}</h3>
              </div>
              <div className="space-y-5">
                {langs.items.map((l) => (
                  <div key={l.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="font-semibold text-white">{l.name}</span>
                      <span className="text-slate-400">{l.level}</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-teal-400 to-electric-400"
                        style={{ width: `${l.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Associative / Leadership */}
        <Reveal delay={0.15}>
          <div className="glass mt-6 rounded-2xl p-6 sm:p-7">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-400/10 text-violet-400">
                <Users size={20} />
              </span>
              <h3 className="font-display text-lg font-bold text-white">{asso.title}</h3>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {asso.items.map((it, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-colors hover:border-violet-400/30"
                >
                  <p className="font-semibold text-white">{it.role}</p>
                  <p className="mt-0.5 text-sm text-slate-400">{it.org}</p>
                  <p className="mt-1 font-mono text-xs text-violet-400">{it.years}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
