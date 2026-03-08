import { motion } from 'framer-motion'
import { Card } from '../Card'
import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    name: "Elena Rodriguez",
    role: "VP Engineering @ Nexus",
    content: "NeuroFlow didn't just automate our workflows, it completely reframed how we think about scale. The AI intelligence is unmatched in the market.",
    img: "ER"
  },
  {
    name: "Marcus Chen",
    role: "CTO @ Synthetix",
    content: "The beautiful dark mode interface belies a ridiculously powerful engine underneath. 450% ROI in our first quarter using the platform.",
    img: "MC"
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Ops @ Quantum",
    content: "We ripped out three different legacy tools and replaced them entirely with NeuroFlow. Our team operates twice as fast.",
    img: "SJ"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-neuro-secondary mb-6 backdrop-blur">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Loved by top-tier <br /> engineering & ops teams.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Card className="h-full flex flex-col p-8 bg-neuro-800/50">
                <Quote className="w-8 h-8 text-neuro-primary/20 mb-6" />
                <p className="text-lg text-slate-300 flex-1 leading-relaxed mb-8">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-neuro-900 to-neuro-700 border-2 border-white/10 flex items-center justify-center font-display font-bold text-slate-400 text-sm">
                    {t.img}
                  </div>
                  <div>
                    <div className="text-white font-medium">{t.name}</div>
                    <div className="text-neuro-primary text-sm">{t.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}