import { motion } from 'framer-motion'
import { CheckCircle2, ArrowDown } from 'lucide-react'

const STEPS = [
  {
    label: 'Trigger: New Customer Signup',
    color: '#3B82F6',
    glow: 'rgba(59,130,246,0.25)',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.35)',
  },
  {
    label: 'Condition: Enterprise Plan?',
    color: '#F59E0B',
    glow: 'rgba(245,158,11,0.2)',
    bg: 'rgba(245,158,11,0.06)',
    border: 'rgba(245,158,11,0.25)',
  },
  {
    label: 'Action: Notify Sales Team via Slack',
    color: '#F97316',
    glow: 'rgba(249,115,22,0.25)',
    bg: 'rgba(249,115,22,0.08)',
    border: 'rgba(249,115,22,0.4)',
  },
]

export function Workflow() {
  return (
    <section id="workflow" className="py-28 bg-black relative overflow-hidden">
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
          filter: 'blur(50px)',
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
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-orange-500/30 text-orange-400 text-xs font-semibold tracking-widest uppercase mb-5">
            Automations
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Workflows that run<br />
            <span className="text-gradient">on autopilot.</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-md">
            Stop doing repetitive work. Connect your apps, define logic once,
            and let Fusion AI handle everything — from routing leads to sending reports.
          </p>
          <ul className="space-y-4">
            {[
              'Visual drag-and-drop workflow builder',
              'Pre-built templates for any use case',
              'Advanced branching & conditional logic',
            ].map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3 text-slate-300 text-sm"
              >
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right — workflow diagram */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="rounded-2xl p-6"
            style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="flex flex-col items-center gap-0 py-4">
              {STEPS.map((step, i) => (
                <div key={i} className="flex flex-col items-center w-full">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.85, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.18, duration: 0.5, ease: 'easeOut' }}
                    whileHover={{ scale: 1.02 }}
                    className="w-full max-w-xs px-5 py-3.5 rounded-xl flex items-center gap-3 font-medium text-sm"
                    style={{
                      background: step.bg,
                      border: `1px solid ${step.border}`,
                      color: step.color,
                      boxShadow: `0 0 20px ${step.glow}`,
                    }}
                  >
                    <motion.div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: step.color }}
                      animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                    />
                    {step.label}
                  </motion.div>

                  {i < STEPS.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0, opacity: 0 }}
                      whileInView={{ scaleY: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.55 + i * 0.18, duration: 0.4 }}
                      className="flex flex-col items-center my-2 origin-top"
                    >
                      <div className="w-px h-6 bg-gradient-to-b from-white/20 to-white/5" />
                      <ArrowDown size={12} className="text-white/20 -mt-1" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              className="mt-4 flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-2 rounded-lg text-white text-sm font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
                  boxShadow: '0 0 20px rgba(59,130,246,0.3)',
                }}
              >
                Run Workflow
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
