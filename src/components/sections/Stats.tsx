import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const STATS = [
  {
    label: 'Active users worldwide',
    value: 150000,
    suffix: '+',
    display: '150K+',
    color: '#3B82F6',
    progress: 0.75,
    trend: '+28% this month',
  },
  {
    label: 'Workflows automated daily',
    value: 2400000,
    suffix: '+',
    display: '2.4M+',
    color: '#F97316',
    progress: 0.92,
    trend: '+41% vs last month',
  },
  {
    label: 'Time saved per user/week',
    value: 18,
    suffix: 'h',
    display: '18h',
    color: '#60A5FA',
    progress: 0.60,
    trend: 'Avg across all plans',
  },
  {
    label: 'Average ROI in 6 months',
    value: 450,
    suffix: '%',
    display: '450%',
    color: '#34D399',
    progress: 0.85,
    trend: 'Verified by customers',
  },
]

/* Animated SVG circle progress */
function CircleProgress({ progress, color, size = 88 }: { progress: number; color: string; size?: number }) {
  const r = size / 2 - 6
  const circ = 2 * Math.PI * r
  const offset = circ * (1 - progress)

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="absolute inset-0"
      style={{ transform: 'rotate(-90deg)' }}
    >
      {/* Background track */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="5"
      />
      {/* Progress arc */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
      />
    </svg>
  )
}

/* Count-up number */
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

  const display = target >= 1_000_000
    ? (count / 1_000_000).toFixed(1) + 'M'
    : target >= 1_000
    ? Math.floor(count / 1_000) + 'K'
    : count

  return <span ref={ref}>{display}{suffix}</span>
}

export function Stats() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background glows */}
      <div
        className="absolute top-0 right-1/4 w-[600px] h-[350px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(249,115,22,0.06) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[500px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-tag mb-5 inline-flex">Impact</div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Numbers that matter.
          </h2>
          <p className="text-slate-400 text-lg">
            Real impact, measured every day by <span className="text-white font-semibold">150,000+</span> users.
          </p>
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
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="rounded-2xl p-7 text-center relative overflow-hidden card-shine"
                style={{
                  background: '#0D0D0D',
                  border: `1px solid ${stat.color}25`,
                  boxShadow: `0 0 30px ${stat.color}08`,
                }}
              >
                {/* Top glow */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${stat.color}12 0%, transparent 60%)` }}
                />

                {/* Circle progress */}
                <div className="relative w-[88px] h-[88px] mx-auto mb-5">
                  <CircleProgress progress={stat.progress} color={stat.color} size={88} />
                  {/* Center dot */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
                    style={{ background: stat.color, boxShadow: `0 0 8px ${stat.color}` }}
                  />
                </div>

                {/* Number */}
                <div
                  className="text-4xl font-bold mb-1.5 stat-number relative z-10"
                  style={{ color: stat.color }}
                >
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </div>

                <div className="text-slate-400 text-sm font-medium mb-2 relative z-10">{stat.label}</div>

                {/* Trend */}
                <div
                  className="text-[10px] px-2.5 py-1 rounded-full inline-flex items-center gap-1 relative z-10"
                  style={{ background: `${stat.color}12`, color: `${stat.color}`, border: `1px solid ${stat.color}20` }}
                >
                  {stat.trend}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
