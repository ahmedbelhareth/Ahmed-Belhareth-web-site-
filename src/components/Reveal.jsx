import { motion } from 'framer-motion'

// Scroll-reveal wrapper used across sections.
export default function Reveal({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeader({ label, title }) {
  return (
    <Reveal>
      <p className="section-label">
        <span className="h-px w-6 bg-teal-400/60" />
        {label}
      </p>
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
    </Reveal>
  )
}
