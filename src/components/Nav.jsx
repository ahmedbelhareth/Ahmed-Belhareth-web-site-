import { useEffect, useState } from 'react'
import { Menu, X, Languages } from 'lucide-react'
import { content } from '../data/content'
import { useLang } from '../data/lang.jsx'

export default function Nav() {
  const { lang, toggle } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const links = content.nav[lang]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = links.map((l) => l.id)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [links])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="group flex items-center gap-2 font-display text-lg font-extrabold tracking-tight text-white"
        >
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-teal-400 via-electric-400 to-violet-400 text-sm font-extrabold text-ink-950 shadow-lg transition-transform group-hover:scale-105">
            AB
          </span>
          <span className="hidden sm:inline">
            Ahmed<span className="text-teal-400">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                active === l.id ? 'text-teal-400' : 'text-slate-300 hover:text-white'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-teal-400/40 hover:text-white"
            aria-label="Switch language"
          >
            <Languages size={15} className="text-teal-400" />
            {lang === 'fr' ? 'FR' : 'EN'}
          </button>

          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white md:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/10 bg-ink-950/95 backdrop-blur-xl md:hidden">
          <div className="container-x flex flex-col py-3">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className={`rounded-lg px-3 py-3 text-left text-base font-medium transition-colors ${
                  active === l.id ? 'text-teal-400' : 'text-slate-200 hover:text-white'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
