import { motion } from 'framer-motion'

const LOGOS = [
  "Acme Corp", "Quantum", "Nexus", "Nebula", "Stark Ind.", "Cybernet"
]

export function TrustedBy() {
  return (
    <section className="py-20 border-t border-white/5 relative bg-neuro-900/50 backdrop-blur-lg z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-slate-500 tracking-wider uppercase mb-10">
          Trusted by innovative teams worldwide
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          {LOGOS.map((logo, idx) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-2xl font-display font-bold text-slate-400 hover:text-white transition-colors cursor-default"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}