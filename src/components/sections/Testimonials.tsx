import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: 'Elena Rodriguez',
    role: 'VP Engineering @ Nexus',
    content:
      'Fusion AI completely changed how we approach automation. We went from days to minutes setting up complex AI workflows. The GPT integrations are seamless.',
    initials: 'ER',
    color: '#3B82F6',
  },
  {
    name: 'Marcus Chen',
    role: 'CTO @ Synthetix',
    content:
      "The no-code builder is incredibly intuitive. We connected Salesforce, Slack, and our CRM in under an hour. 450% ROI in the first quarter — I didn't expect that.",
    initials: 'MC',
    color: '#F97316',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Head of Ops @ Quantum',
    content:
      'We replaced three separate tools with Fusion AI. The trigger system is powerful, and the AI handles edge cases we never even thought to program ourselves.',
    initials: 'SJ',
    color: '#60A5FA',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-black relative overflow-hidden">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.07) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full border border-orange-500/30 text-orange-400 text-xs font-semibold tracking-widest uppercase mb-5"
          >
            Testimonials
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
          >
            Loved by teams<br className="hidden md:block" /> around the world.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55 }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="h-full rounded-2xl p-7 flex flex-col"
                style={{
                  background: '#0D0D0D',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-orange-400 text-orange-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
                    style={{ background: `${t.color}30`, border: `1px solid ${t.color}50` }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
