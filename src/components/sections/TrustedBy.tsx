import { motion } from 'framer-motion'

const LOGOS = [
  { name: 'business', icon: '🏢' },
  { name: 'application', icon: '☁️' },
  { name: 'startup', icon: '🚀' },
  { name: 'Logoipsum', icon: '◎' },
  { name: 'Logoipsum', icon: '⊙' },
  { name: 'nexus', icon: '▣' },
  { name: 'quantum', icon: '◈' },
  { name: 'synth', icon: '◇' },
]

// Duplicate for seamless infinite scroll
const ITEMS = [...LOGOS, ...LOGOS]

export function TrustedBy() {
  return (
    <section className="py-16 border-t border-white/[0.06] bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-slate-400 text-sm font-medium"
        >
          Trusted by <span className="text-white font-semibold">150,000+</span> users worldwide
        </motion.p>
      </div>

      {/* Infinite scroll track */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll w-max">
          {ITEMS.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 mx-10 shrink-0 opacity-40 hover:opacity-70 transition-opacity duration-300 cursor-default"
            >
              <span className="text-2xl">{logo.icon}</span>
              <span className="text-white font-semibold text-lg tracking-wide">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
