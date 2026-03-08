import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const STATS = [
  { label: 'Active users worldwide', value: 150000, suffix: '+', display: '150K+', color: '#3B82F6' },
  { label: 'Workflows automated daily', value: 2400000, suffix: '+', display: '2.4M+', color: '#F97316' },
  { label: 'Time saved per user/week', value: 18, suffix: 'h', display: '18h', color: '#60A5FA' },
  { label: 'Average ROI in 6 months', value: 450, suffix: '%', display: '450%', color: '#34D399' },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const duration = 1800
    const start = Date.now()
    const frame = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(frame)
    }
    requestAnimationFrame(frame)
  }, [inView, target])

  const display = target >= 1000000
    ? (count / 1000000).toFixed(1) + 'M'
    : target >= 1000
    ? Math.floor(count / 1000) + 'K'
    : count

  return <span ref={ref}>{display}{suffix}</span>
}

export function Stats() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(249,115,22,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Numbers that matter.</h2>
          <p className="text-slate-400 text-lg">Real impact, measured every day by 150,000+ users.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.55 }}
            >
              <motion.div
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="rounded-2xl p-8 text-center relative overflow-hidden"
                style={{
                  background: '#0D0D0D',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${stat.color}15 0%, transparent 60%)`,
                  }}
                />
                <div
                  className="text-5xl font-bold mb-3 relative z-10"
                  style={{ color: stat.color }}
                >
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
