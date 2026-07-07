import { Mail, Phone, Linkedin, Github, MapPin, ArrowUpRight, Copy, Check } from 'lucide-react'
import { useState } from 'react'
import { content } from '../data/content'
import { useLang } from '../data/lang.jsx'
import Reveal, { SectionHeader } from './Reveal.jsx'

export default function Contact() {
  const { lang } = useLang()
  const c = content.contact[lang]
  const info = content.info
  const navLabel = content.nav[lang].find((n) => n.id === 'contact').label
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(info.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable */
    }
  }

  const cards = [
    { icon: Phone, label: lang === 'fr' ? 'Téléphone' : 'Phone', value: info.phone, href: `tel:${info.phoneHref}` },
    { icon: Linkedin, label: 'LinkedIn', value: 'ahmed-belhareth', href: info.linkedin, ext: true },
    { icon: Github, label: 'GitHub', value: 'ahmedbelhareth', href: info.github, ext: true },
    { icon: MapPin, label: lang === 'fr' ? 'Localisation' : 'Location', value: info.location[lang] },
  ]

  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden border-t border-white/5 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-500/15 blur-[120px]" />
      </div>

      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="section-label justify-center">
              <span className="h-px w-6 bg-teal-400/60" />
              {navLabel}
            </p>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{c.title}</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-400">{c.lead}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={`mailto:${info.email}`}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-electric-400 px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-teal-500/20 transition-all hover:shadow-teal-500/40 hover:brightness-110"
              >
                <Mail size={17} />
                {c.cta}
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-teal-400/40"
              >
                {copied ? <Check size={17} className="text-teal-400" /> : <Copy size={16} className="text-teal-400" />}
                {copied ? (lang === 'fr' ? 'Copié !' : 'Copied!') : info.email}
              </button>
            </div>
          </Reveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          {cards.map((card, i) => {
            const Wrapper = card.href ? 'a' : 'div'
            const props = card.href
              ? { href: card.href, ...(card.ext ? { target: '_blank', rel: 'noreferrer' } : {}) }
              : {}
            return (
              <Reveal key={card.label} delay={i * 0.05}>
                <Wrapper
                  {...props}
                  className={`glass ${card.href ? 'glass-hover group' : ''} flex items-center gap-4 rounded-xl p-4`}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/5 text-teal-400">
                    <card.icon size={19} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-slate-500">{card.label}</p>
                    <p className="truncate font-medium text-white">{card.value}</p>
                  </div>
                  {card.ext && (
                    <ArrowUpRight
                      size={17}
                      className="text-slate-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-teal-400"
                    />
                  )}
                </Wrapper>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
