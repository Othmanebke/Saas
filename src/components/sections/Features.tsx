import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Zap, Link2, Brain, Shield, BarChart2, Layers, Activity, ArrowUpRight } from 'lucide-react'
import { useRef, MouseEvent } from 'react'

/* ── Mini bar chart visual ── */
function MiniChart({ color }: { color: string }) {
  const bars = [45, 60, 40, 75, 55, 85, 65, 90, 70, 95]
  return (
    <div className="flex items-end gap-0.5 h-8">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.04, duration: 0.4, ease: 'easeOut' }}
          className="flex-1 rounded-sm origin-bottom"
          style={{ height: `${h}%`, background: i >= 7 ? color : `${color}30` }}
        />
      ))}
    </div>
  )
}

/* ── Integration dots ── */
function IntegrationDots({ colors }: { colors: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-2">
      {colors.map((c, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, type: 'spring', stiffness: 300 }}
          className="w-6 h-6 rounded-lg"
          style={{ background: `${c}25`, border: `1px solid ${c}50` }}
        />
      ))}
    </div>
  )
}

/* ── Flow visual with animated dot ── */
function FlowVisual() {
  return (
    <div className="relative h-10 flex items-center gap-2 mt-2">
      {[
        { icon: '▲', color: '#3B82F6' },
        { icon: '◆', color: '#F97316' },
        { icon: '◈', color: '#8B5CF6' },
        { icon: '◎', color: '#10B981' },
      ].map((n, i) => (
        <div key={i} className="flex items-center flex-1">
          <motion.div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
            style={{ background: `${n.color}18`, border: `1px solid ${n.color}40`, color: n.color }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, type: 'spring', stiffness: 300 }}
          >
            {n.icon}
          </motion.div>
          {i < 3 && (
            <div className="flex-1 relative h-px mx-1 overflow-hidden">
              <div className="absolute inset-0 bg-white/10" />
              <motion.div
                className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                style={{ background: n.color }}
                animate={{ left: ['0%', '100%'] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: i * 0.6 }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

/* ── Shield pulse visual ── */
function ShieldVisual() {
  return (
    <div className="flex items-center gap-3 mt-3">
      <div className="relative flex items-center justify-center w-10 h-10">
        <motion.div
          className="absolute w-10 h-10 rounded-full"
          style={{ border: '1px solid rgba(168,85,247,0.3)' }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <Shield className="w-5 h-5 text-purple-400 relative z-10" />
      </div>
      <div>
        <div className="text-xs text-white font-medium">Certified &amp; Compliant</div>
        <div className="text-[10px] text-slate-500">AES-256 · TLS 1.3 · SSO</div>
      </div>
    </div>
  )
}

const FEATURES = [
  {
    icon: <Brain className="w-5 h-5 text-blue-400" />,
    title: 'AI-Powered Automation',
    desc: 'Intelligent agents understand context, learn your workflows, and execute tasks without manual intervention. Powered by GPT-4o, Claude 3.5, and Gemini.',
    color: 'rgba(59,130,246,0.12)',
    border: 'rgba(59,130,246,0.3)',
    glow: 'rgba(59,130,246,0.2)',
    accent: '#3B82F6',
    visual: <MiniChart color="#3B82F6" />,
    tag: 'Core Engine',
    isWide: true,
  },
  {
    icon: <Zap className="w-5 h-5 text-orange-400" />,
    title: 'Instant Triggers',
    desc: 'Set up smart triggers that fire in real-time. React to events across all connected apps instantly.',
    color: 'rgba(249,115,22,0.1)',
    border: 'rgba(249,115,22,0.25)',
    glow: 'rgba(249,115,22,0.18)',
    accent: '#F97316',
    visual: null,
    tag: 'Real-time',
    isWide: false,
  },
  {
    icon: <Link2 className="w-5 h-5 text-green-400" />,
    title: '500+ Integrations',
    desc: 'Connect Slack, Notion, Salesforce, and 500+ tools with one click.',
    color: 'rgba(34,197,94,0.1)',
    border: 'rgba(34,197,94,0.25)',
    glow: 'rgba(34,197,94,0.15)',
    accent: '#22C55E',
    visual: <IntegrationDots colors={['#22C55E','#3B82F6','#F97316','#8B5CF6','#EC4899','#06B6D4','#F59E0B','#10B981']} />,
    tag: 'Ecosystem',
    isWide: false,
  },
  {
    icon: <Shield className="w-5 h-5 text-purple-400" />,
    title: 'Enterprise Security',
    desc: 'SOC 2 Type II certified. E2E encryption, SSO, and granular RBAC built in from day one.',
    color: 'rgba(168,85,247,0.1)',
    border: 'rgba(168,85,247,0.25)',
    glow: 'rgba(168,85,247,0.15)',
    accent: '#8B5CF6',
    visual: <ShieldVisual />,
    tag: 'SOC 2',
    isWide: false,
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-cyan-400" />,
    title: 'Real-Time Analytics',
    desc: 'Rich logs, performance metrics, and AI-generated insights for every single workflow run.',
    color: 'rgba(6,182,212,0.1)',
    border: 'rgba(6,182,212,0.25)',
    glow: 'rgba(6,182,212,0.15)',
    accent: '#06B6D4',
    visual: null,
    tag: 'Insights',
    isWide: false,
  },
  {
    icon: <Layers className="w-5 h-5 text-rose-400" />,
    title: 'No-Code Builder',
    desc: 'Drag-and-drop workflow canvas. Build complex multi-step automations visually — no engineers needed.',
    color: 'rgba(244,63,94,0.1)',
    border: 'rgba(244,63,94,0.25)',
    glow: 'rgba(244,63,94,0.15)',
    accent: '#F43F5E',
    visual: <FlowVisual />,
    tag: 'Builder',
    isWide: true,
  },
]

function FeatureCard({
  feat,
  delay,
  className = '',
}: {
  feat: typeof FEATURES[number]
  delay: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)
  const shine = useTransform([glowX, glowY], ([x, y]) =>
    `radial-gradient(circle at ${x}% ${y}%, ${feat.glow} 0%, transparent 55%)`
  )

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    rotateX.set((0.5 - y) * 10)
    rotateY.set((x - 0.5) * 10)
    glowX.set(x * 100)
    glowY.set(y * 100)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { rotateX.set(0); rotateY.set(0); glowX.set(50); glowY.set(50) }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          perspective: 800,
          background: `linear-gradient(135deg, ${feat.color} 0%, rgba(10,10,10,1) 60%)`,
          border: `1px solid ${feat.border}`,
        }}
        className="rounded-2xl p-6 h-full cursor-default overflow-hidden relative card-shine"
        whileHover={{ boxShadow: `0 20px 60px ${feat.glow}` }}
        transition={{ type: 'spring', stiffness: 200, damping: 22 }}
      >
        {/* Mouse-follow glow */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          style={{ background: shine }}
        />

        {/* Tag */}
        <div
          className="absolute top-4 right-4 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
          style={{ background: `${feat.accent}18`, color: feat.accent, border: `1px solid ${feat.accent}30` }}
        >
          {feat.tag}
        </div>

        {/* Icon */}
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 relative z-10"
          style={{ background: feat.color, border: `1px solid ${feat.border}` }}
        >
          {feat.icon}
        </div>

        <h3 className="text-white font-bold text-base mb-2 relative z-10">{feat.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed relative z-10">{feat.desc}</p>

        {feat.visual && <div className="relative z-10 mt-4">{feat.visual}</div>}

        {feat.title === 'AI-Powered Automation' && (
          <div className="relative z-10 mt-3 flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
            <span className="text-[11px] text-slate-500">2,847 tasks/day</span>
            <span className="text-[11px] font-semibold text-green-400">↑ 24%</span>
            <div className="ml-auto flex items-center gap-1 text-cyan-400 text-[11px] font-semibold">
              <Activity size={11} /><span>Live</span>
            </div>
          </div>
        )}

        {feat.title === 'Real-Time Analytics' && (
          <div className="relative z-10 mt-3 flex items-center gap-1 text-cyan-400 text-[12px] font-semibold">
            <span>View Dashboard</span><ArrowUpRight size={12} />
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export function Features() {
  return (
    <section id="features" className="py-28 relative bg-black overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag mb-5"
          >
            AI-Driven Features
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Build, scale and manage<br className="hidden md:block" />
            <span className="text-gradient-static"> your entire AI workforce</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-base max-w-xl mx-auto"
          >
            Everything you need to automate with confidence — from simple triggers to complex AI decision trees.
          </motion.p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4">
          <FeatureCard feat={FEATURES[0]} delay={0}    className="col-span-12 lg:col-span-7" />
          <FeatureCard feat={FEATURES[1]} delay={0.08} className="col-span-12 md:col-span-6 lg:col-span-5" />
          <FeatureCard feat={FEATURES[2]} delay={0.16} className="col-span-12 md:col-span-4" />
          <FeatureCard feat={FEATURES[3]} delay={0.24} className="col-span-12 md:col-span-4" />
          <FeatureCard feat={FEATURES[4]} delay={0.32} className="col-span-12 md:col-span-4" />
          <FeatureCard feat={FEATURES[5]} delay={0.40} className="col-span-12" />
        </div>
      </div>
    </section>
  )
}
