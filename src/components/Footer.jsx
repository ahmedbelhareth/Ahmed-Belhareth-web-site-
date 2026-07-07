import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { content } from '../data/content'
import { useLang } from '../data/lang.jsx'

export default function Footer() {
  const { lang } = useLang()
  const f = content.footer[lang]
  const info = content.info
  const year = 2026

  return (
    <footer className="border-t border-white/10 bg-ink-950 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="font-display text-lg font-extrabold text-white"
          >
            Ahmed Belhareth<span className="text-teal-400">.</span>
          </a>
          <p className="mt-1 text-xs text-slate-500">{f.built}</p>
          <p className="mt-0.5 text-xs text-slate-600">
            © {year} Ahmed Belhareth. {f.rights}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {[
            { href: info.github, icon: Github, label: 'GitHub' },
            { href: info.linkedin, icon: Linkedin, label: 'LinkedIn' },
            { href: `mailto:${info.email}`, icon: Mail, label: 'Email' },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition-all hover:border-teal-400/40 hover:text-teal-400"
            >
              <s.icon size={17} />
            </a>
          ))}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="ml-1 grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-teal-400 to-electric-400 text-ink-950 transition-transform hover:-translate-y-0.5"
          >
            <ArrowUp size={17} />
          </button>
        </div>
      </div>
    </footer>
  )
}
