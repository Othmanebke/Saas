import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Zap, Link2, Brain, Shield, BarChart2, Layers } from 'lucide-react'
import { useRef, MouseEvent } from 'react'

const FEATURES = [
  {
    icon: <Brain className="w-5 h-5 text-blue-400" />,
    title: 'AI-Powered Automation',
    desc: 'Let intelligent agents understand context, learn your workflows, and execute tasks without manual intervention.',
    color: 'rgba(59,130,246,0.12)',
    border: 'rgba(59,130,246,0.3)',
    glow: 'rgba(59,130,246,0.2)',
  },
  {
    icon: <Zap className="w-5 h-5 text-orange-400" />,
    title: 'Instant Triggers',
    desc: 'Set up smart triggers that fire in real-time. React to events across all your connected apps instantly.',
    color: 'rgba(249,115,22,0.1)',
    border: 'rgba(249,115,22,0.25)',
    glow: 'rgba(249,115,22,0.18)',
  },
  {
    icon: <Link2 className="w-5 h-5 text-green-400" />,
    title: '500+ Integrations',
    desc: 'Connect Slack, Notion, Google Workspace, Salesforce, and 500+ other tools with a single click.',
    color: 'rgba(34,197,94,0.1)',
    border: 'rgba(34,197,94,0.25)',
    glow: 'rgba(34,197,94,0.15)',
  },
  {
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    title: 'Enterprise Security',
    desc: 'SOC 2 Type II certified. End-to-end encryption, SSO, and granular role-based access control.',
    color: 'rgba(168,85,247,0.1)',
    border: 'rgba(168,85,247,0.25)',
    glow: 'rgba(168,85,247,0.15)',
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-cyan-400" />,
    title: 'Real-Time Analytics',
    desc: 'Track every workflow run with rich logs, performance metrics, and AI-generated insights.',
    color: 'rgba(6,182,212,0.1)',
    border: 'rgba(6,182,212,0.25)',
    glow: 'rgba(6,182,212,0.15)',
  },
  {
    icon: <Layers className="w-5 h-5 text-rose-400" />,
    title: 'No-Code Builder',
    desc: 'Drag-and-drop workflow canvas. Build complex multi-step automations visually — no engineers needed.',
    color: 'rgba(244,63,94,0.1)',
    border: 'rgba(244,63,94,0.25)',
    glow: 'rgba(244,63,94,0.15)',
  },
]

/* 3D tilt card on mouse move */
function TiltCard({ feat, delay }: { feat: typeof FEATURES[number]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)
  const shine = useTransform([glowX, glowY], ([x, y]) =>
    `radial-gradient(circle at ${x}% ${y}%, ${feat.glow} 0%, transparent 60%)`
  )

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    rotateX.set((0.5 - y) * 14)
    rotateY.set((x - 0.5) * 14)
    glowX.set(x * 100)
    glowY.set(y * 100)
  }
  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
    glowX.set(50)
    glowY.set(50)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          perspective: 800,
          background: `linear-gradient(135deg, ${feat.color} 0%, rgba(13,13,13,1) 65%)`,
          border: `1px solid ${feat.border}`,
          position: 'relative',
        }}
        className="rounded-2xl p-6 h-full cursor-default overflow-hidden"
        whileHover={{ boxShadow: `0 16px 40px ${feat.glow}` }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      >
        {/* Mouse-follow glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{ background: shine }}
        />

        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 relative z-10"
          style={{ background: feat.color, border: `1px solid ${feat.border}` }}
        >
          {feat.icon}
        </div>
        <h3 className="text-white font-semibold text-base mb-2.5 relative z-10">{feat.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed relative z-10">{feat.desc}</p>
      </motion.div>
    </motion.div>
  )
}

export function Features() {
  return (
    <section id="features" className="py-28 relative bg-black">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-1.5 mb-5"
            style={{ border: '1px solid rgba(255,255,255,0.18)', borderRadius: '999px' }}
          >
            <span className="text-white text-[11px] font-bold tracking-[0.15em] uppercase">AI-Driven Features</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
          >
            Build, scale and manage<br className="hidden md:block" /> entire AI workforce
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base max-w-xl mx-auto"
          >
            Fusion AI helps you tackle data bottlenecks, streamline analysis, and make smarter decisions with ease.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feat, i) => (
            <TiltCard key={feat.title} feat={feat} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
