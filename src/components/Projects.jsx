import { ArrowUpRight, Star, FolderGit2 } from 'lucide-react'
import { content } from '../data/content'
import { useLang } from '../data/lang.jsx'
import Reveal, { SectionHeader } from './Reveal.jsx'

export default function Projects() {
  const { lang } = useLang()
  const p = content.projects[lang]
  const navLabel = content.nav[lang].find((n) => n.id === 'projects').label

  const featured = p.items.find((x) => x.featured)
  const rest = p.items.filter((x) => !x.featured)

  return (
    <section id="projects" className="relative scroll-mt-20 border-t border-white/5 bg-ink-900/40 py-24">
      <div className="container-x">
        <SectionHeader label={navLabel} title={p.title} />

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Featured */}
          {featured && (
            <Reveal className="lg:col-span-3">
              <a
                href={featured.url}
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-2xl border border-teal-400/25 bg-gradient-to-br from-teal-400/[0.08] via-electric-400/[0.05] to-violet-400/[0.08] p-7 transition-all hover:border-teal-400/50 sm:p-9"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-teal-500/20 blur-3xl transition-opacity group-hover:opacity-80" />
                <div className="relative flex flex-wrap items-start justify-between gap-4">
                  <div className="max-w-2xl">
                    <div className="mb-3 flex items-center gap-2">
                      <Star size={16} className="fill-teal-400 text-teal-400" />
                      <span className="font-mono text-xs uppercase tracking-widest text-teal-400">
                        {lang === 'fr' ? 'Projet phare' : 'Featured project'}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                      {featured.name}{' '}
                      <span className="text-base font-medium text-slate-400">— {featured.kind}</span>
                    </h3>
                    <p className="mt-3 leading-relaxed text-slate-300">{featured.desc}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {featured.tags.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition-all group-hover:border-teal-400/40 group-hover:bg-teal-400/10 group-hover:text-teal-400">
                    <ArrowUpRight size={22} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          )}

          {/* Rest */}
          {rest.map((proj, i) => {
            const Wrapper = proj.url ? 'a' : 'div'
            const linkProps = proj.url
              ? { href: proj.url, target: '_blank', rel: 'noreferrer' }
              : {}
            return (
              <Reveal key={proj.name} delay={i * 0.06}>
                <Wrapper
                  {...linkProps}
                  className="glass glass-hover group flex h-full flex-col rounded-2xl p-6"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/5 text-teal-400 transition-colors group-hover:bg-teal-400/10">
                      <FolderGit2 size={20} />
                    </span>
                    {proj.url && (
                      <ArrowUpRight
                        size={18}
                        className="text-slate-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-400"
                      />
                    )}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">{proj.name}</h3>
                  <p className="mt-0.5 font-mono text-xs text-teal-400">{proj.kind}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{proj.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Wrapper>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
