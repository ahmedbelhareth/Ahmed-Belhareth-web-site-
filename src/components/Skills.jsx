import {
  Code2,
  Layers,
  Bot,
  Cloud,
  Database,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import { content } from '../data/content'
import { useLang } from '../data/lang.jsx'
import Reveal, { SectionHeader } from './Reveal.jsx'

const ICONS = { Code2, Layers, Bot, Cloud, Database, ShieldCheck, Workflow }

export default function Skills() {
  const { lang } = useLang()
  const s = content.skills[lang]
  const navLabel = content.nav[lang].find((n) => n.id === 'skills').label

  return (
    <section id="skills" className="relative scroll-mt-20 border-t border-white/5 bg-ink-900/40 py-24">
      <div className="container-x">
        <SectionHeader label={navLabel} title={s.title} />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {s.groups.map((g, i) => {
            const Icon = ICONS[g.icon] || Code2
            const highlight = g.icon === 'Bot'
            return (
              <Reveal key={g.name} delay={i * 0.06}>
                <div
                  className={`glass glass-hover group h-full rounded-2xl p-6 ${
                    highlight ? 'border-teal-400/30 bg-teal-400/[0.05]' : ''
                  }`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={`grid h-11 w-11 place-items-center rounded-xl transition-colors ${
                        highlight
                          ? 'bg-gradient-to-br from-teal-400 to-electric-400 text-ink-950'
                          : 'bg-white/5 text-teal-400 group-hover:bg-teal-400/10'
                      }`}
                    >
                      <Icon size={20} />
                    </span>
                    <h3 className="font-display text-base font-bold text-white">{g.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <span key={item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
