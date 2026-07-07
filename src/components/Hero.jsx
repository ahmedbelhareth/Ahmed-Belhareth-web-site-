import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail, Github, Linkedin, MapPin, Sparkles } from 'lucide-react'
import { content } from '../data/content'
import { useLang } from '../data/lang.jsx'
import ParticleField from './ParticleField.jsx'

export default function Hero() {
  const { lang } = useLang()
  const meta = content.meta[lang]
  const h = content.hero[lang]
  const info = content.info
  const stats = content.stats[lang]

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-70" />
        <ParticleField />
        <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-teal-500/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-20 right-1/4 h-96 w-96 rounded-full bg-violet-500/20 blur-[120px] animate-pulse-glow" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      </div>

      <div className="container-x relative z-10 grid grid-cols-1 items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/10 px-3.5 py-1.5 text-sm font-medium text-teal-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
            </span>
            {lang === 'fr' ? 'Disponible pour de nouvelles opportunités' : 'Open to new opportunities'}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-2 font-mono text-sm text-slate-400"
          >
            {h.greeting}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl xl:text-7xl"
          >
            {meta.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-xl font-semibold sm:text-2xl"
          >
            <span className="gradient-text">{meta.role}</span>
            <span className="hidden text-slate-600 sm:inline">/</span>
            <span className="text-slate-300">{meta.specialty}</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-400"
          >
            {h.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-electric-400 px-5 py-3 text-sm font-semibold text-ink-950 shadow-lg shadow-teal-500/20 transition-all hover:shadow-teal-500/40 hover:brightness-110"
            >
              <Mail size={17} />
              {h.cta1}
            </a>
            <a
              href={meta.cv}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-teal-400/40 hover:bg-white/[0.08]"
            >
              <Download size={17} className="text-teal-400" />
              {h.cta2}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-7 flex items-center gap-4"
          >
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
                  className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-300 transition-all hover:border-teal-400/40 hover:text-teal-400"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
            <span className="hidden items-center gap-1.5 text-sm text-slate-500 sm:flex">
              <MapPin size={14} /> {info.location[lang]}
            </span>
          </motion.div>
        </div>

        {/* Right: portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-teal-400/30 via-electric-400/20 to-violet-400/30 blur-2xl" />
          <div className="relative animate-float overflow-hidden rounded-[1.75rem] border border-white/10 bg-ink-800/60 glow-teal">
            <div className="aspect-[4/4.4] overflow-hidden">
              <img
                src="/ahmed.png"
                alt="Ahmed Belhareth"
                className="h-full w-full scale-105 object-cover object-top"
                loading="eager"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-900 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-ink-950/70 px-4 py-2.5 backdrop-blur-md">
              <div>
                <p className="font-display text-sm font-bold text-white">{meta.name}</p>
                <p className="font-mono text-[11px] text-teal-400">{meta.specialty}</p>
              </div>
              <Sparkles size={18} className="text-violet-400" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stat strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="container-x absolute inset-x-0 bottom-6 z-10 hidden lg:block"
      >
        <div className="glass grid grid-cols-4 divide-x divide-white/10 rounded-2xl">
          {stats.map((s) => (
            <div key={s.label} className="px-5 py-4 text-center">
              <div className="font-display text-2xl font-extrabold gradient-text">{s.value}</div>
              <div className="mt-0.5 text-xs text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
