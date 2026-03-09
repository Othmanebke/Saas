import { motion } from 'framer-motion'
import { CheckCircle2, Cpu, GitBranch, Bell, Zap } from 'lucide-react'

const STEPS = [
  {
    icon: <Bell className="w-4 h-4" />,
    label: 'Trigger: New Customer Signup',
    sublabel: 'Webhook · Instant',
    color: '#3B82F6',
    glow: 'rgba(59,130,246,0.25)',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.35)',
  },
  {
    icon: <GitBranch className="w-4 h-4" />,
    label: 'Condition: Enterprise Plan?',
    sublabel: 'Branching logic',
    color: '#F59E0B',
    glow: 'rgba(245,158,11,0.2)',
    bg: 'rgba(245,158,11,0.06)',
    border: 'rgba(245,158,11,0.25)',
  },
  {
    icon: <Cpu className="w-4 h-4" />,
    label: 'AI: Qualify & Score Lead',
    sublabel: 'GPT-4o · 142ms',
    color: '#8B5CF6',
    glow: 'rgba(139,92,246,0.2)',
    bg: 'rgba(139,92,246,0.06)',
    border: 'rgba(139,92,246,0.3)',
  },
  {
    icon: <Zap className="w-4 h-4" />,
    label: 'Action: Notify Sales via Slack',
    sublabel: 'Slack · Completed',
    color: '#F97316',
    glow: 'rgba(249,115,22,0.25)',
    bg: 'rgba(249,115,22,0.08)',
    border: 'rgba(249,115,22,0.4)',
  },
]

/* Animated connector between nodes */
function Connector({ color, delay }: { color: string; delay: number }) {
  return (
    <div className="flex flex-col items-center my-1 relative">
      {/* Static line */}
      <div className="w-px h-8 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        {/* Animated pulse traveling down */}
        <motion.div
          className="absolute w-full rounded-full"
          style={{ height: '40%', background: `linear-gradient(to bottom, transparent, ${color}, transparent)` }}
          animate={{ top: ['-40%', '140%'] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'linear', delay }}
        />
      </div>
      {/* Arrow tip */}
      <svg width="12" height="6" viewBox="0 0 12 6" fill="none" className="-mt-1">
        <path d="M0 0L6 6L12 0" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />
      </svg>
    </div>
  )
}

/* Run button with animated glow */
function RunButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.9, duration: 0.5 }}
      className="mt-5 flex justify-center"
    >
      <motion.button
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.97 }}
        className="relative px-7 py-2.5 rounded-xl text-white text-sm font-semibold overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
          boxShadow: '0 0 24px rgba(59,130,246,0.4)',
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)' }}
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
        />
        <span className="relative z-10 flex items-center gap-2">
          <Zap size={14} />
          Run Workflow
        </span>
      </motion.button>
    </motion.div>
  )
}

export function Workflow() {
  return (
    <section id="workflow" className="py-28 bg-black relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* Orange glow left */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Violet glow right */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-tag mb-5 inline-flex">Automations</div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
          >
            Workflows that run<br />
            <span className="text-gradient">on autopilot.</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md">
            Stop doing repetitive work. Connect your apps, define logic once,
            and let Fusion AI handle everything — from routing leads to sending reports.
          </p>
          <ul className="space-y-4">
            {[
              { text: 'Visual drag-and-drop workflow builder', color: '#3B82F6' },
              { text: 'Pre-built templates for any use case', color: '#F97316' },
              { text: 'Advanced branching & conditional logic', color: '#8B5CF6' },
              { text: 'AI agents that adapt and learn over time', color: '#10B981' },
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3 text-slate-300 text-sm"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: item.color }} />
                {item.text}
              </motion.li>
            ))}
          </ul>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-8 flex gap-6"
          >
            {[
              { val: '500+', label: 'App integrations' },
              { val: '2.4M+', label: 'Runs per day' },
              { val: '99.9%', label: 'Uptime SLA' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-2xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{s.val}</div>
                <div className="text-slate-500 text-[12px]">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — workflow diagram */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="rounded-2xl p-6 relative overflow-hidden"
            style={{
              background: '#090909',
              border: '1px solid rgba(255,255,255,0.07)',
              boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
            }}
          >
            {/* Header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/[0.06]">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
              <div className="ml-2 text-[11px] text-white/30 font-medium">Lead Qualification · v2.3</div>
              <div className="ml-auto flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
                <span className="text-[10px] text-green-400">Active</span>
              </div>
            </div>

            {/* Steps */}
            <div className="flex flex-col items-center gap-0">
              {STEPS.map((step, i) => (
                <div key={i} className="flex flex-col items-center w-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 16 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.45, ease: 'easeOut' }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="w-full max-w-sm px-4 py-3 rounded-xl flex items-center gap-3 text-sm font-medium relative overflow-hidden cursor-default"
                    style={{
                      background: step.bg,
                      border: `1px solid ${step.border}`,
                      color: step.color,
                      boxShadow: `0 0 16px ${step.glow}`,
                    }}
                  >
                    {/* Shimmer */}
                    <motion.div
                      className="absolute inset-0 opacity-0 hover:opacity-100"
                      style={{ background: `linear-gradient(90deg, transparent, ${step.color}08, transparent)` }}
                    />
                    {/* Pulse dot */}
                    <motion.div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: step.color }}
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    />
                    <div className="relative z-10">
                      <div>{step.label}</div>
                      <div className="text-[10px] opacity-50 mt-0.5">{step.sublabel}</div>
                    </div>
                    <div className="ml-auto relative z-10 opacity-60">{step.icon}</div>
                  </motion.div>

                  {i < STEPS.length - 1 && (
                    <Connector color={step.color} delay={i * 0.4} />
                  )}
                </div>
              ))}
            </div>

            <RunButton />

            {/* Execution log */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
              className="mt-5 rounded-xl px-4 py-3"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              <div className="text-[10px] text-slate-500 font-medium mb-2 uppercase tracking-wider">Last execution</div>
              <div className="flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Lead scored: 94/100 · Routed to Sales</span>
                <span className="text-[11px] text-green-400 font-semibold">✓ 238ms</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
