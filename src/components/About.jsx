import { CheckCircle2 } from 'lucide-react'
import { content } from '../data/content'
import { useLang } from '../data/lang.jsx'
import Reveal, { SectionHeader } from './Reveal.jsx'

export default function About() {
  const { lang } = useLang()
  const a = content.about[lang]
  const stats = content.stats[lang]
  const navLabel = content.nav[lang].find((n) => n.id === 'about').label

  return (
    <section id="about" className="relative scroll-mt-20 py-24">
      <div className="container-x">
        <SectionHeader label={navLabel} title={a.title} />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal className="space-y-5">
            <p className="text-xl font-medium leading-relaxed text-slate-200">{a.lead}</p>
            {a.body.map((p, i) => (
              <p key={i} className="leading-relaxed text-slate-400">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.15}>
            <div className="glass rounded-2xl p-6">
              <ul className="space-y-4">
                {a.highlights.map((hl, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-teal-400" />
                    <span className="text-sm leading-relaxed text-slate-300">{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Mobile stats */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:hidden">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-xl px-4 py-4 text-center">
              <div className="font-display text-2xl font-extrabold gradient-text">{s.value}</div>
              <div className="mt-0.5 text-xs text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
