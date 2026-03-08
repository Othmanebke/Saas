import { motion } from 'framer-motion'
import { Card } from '../Card'
import { ArrowUpRight } from 'lucide-react'

const STATS = [
  { label: 'Time saved weekly', value: '18h', color: 'text-neuro-primary' },
  { label: 'Data processing speed', value: 'Under 50ms', color: 'text-white' },
  { label: 'ROI within 6 months', value: '450%', color: 'text-neuro-secondary' }
]

export function Stats() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-neuro-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Numbers that matter.
          </h2>
          <p className="text-xl text-slate-400">
            Enterprise-class scaling built to withstand massive throughput.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="flex flex-col items-center justify-center p-10 text-center relative overflow-hidden group">
                <div className="absolute top-2 right-2 text-white/5 group-hover:text-white/20 transition-colors">
                  <ArrowUpRight className="w-12 h-12" />
                </div>
                <div className={`text-5xl lg:text-6xl font-display font-bold mb-4 ${stat.color} drop-shadow-lg`}>
                  {stat.value}
                </div>
                <div className="text-lg text-slate-400 font-medium tracking-wide">
                  {stat.label}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}