import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Zap } from 'lucide-react'

function LargeOrb() {
  return (
    <motion.div
      className="relative mx-auto mb-8"
      style={{ width: 80, height: 80 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 35% 30%, #60A5FA 0%, #3B82F6 25%, #1E40AF 50%, #0F172A 75%, #000 100%)',
          boxShadow: '0 0 40px rgba(59,130,246,0.7), 0 0 80px rgba(59,130,246,0.25)',
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      <div
        className="absolute rounded-full"
        style={{
          bottom: '11px', right: '11px',
          width: 28, height: 28,
          background: 'radial-gradient(circle, #F97316 0%, #C2410C 100%)',
          filter: 'blur(2px)',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          top: '18%', left: '22%',
          width: '28%', height: '18%',
          background: 'rgba(255,255,255,0.45)',
          filter: 'blur(3px)',
        }}
      />
    </motion.div>
  )
}

export function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section id="cta" className="relative bg-black overflow-hidden py-32 px-6 noise">
      {/* Large orange glow left */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '0', left: '-100px',
          width: '700px', height: '700px',
          background: 'radial-gradient(circle, rgba(220,68,5,0.5) 0%, rgba(234,88,12,0.25) 30%, rgba(249,115,22,0.08) 60%, transparent 80%)',
          filter: 'blur(70px)',
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Blue glow right */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '0', right: '-100px',
          width: '700px', height: '700px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.4) 0%, rgba(59,130,246,0.2) 30%, rgba(96,165,250,0.08) 60%, transparent 80%)',
          filter: 'blur(70px)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <LargeOrb />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-tag mb-6 inline-flex"
        >
          <Zap size={10} className="mr-1 text-orange-400" />
          Get started today
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold text-white leading-tight mb-5"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
          }}
        >
          Start Your AI Automation<br />
          <span className="text-gradient">Journey Today</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-base mb-10 max-w-lg mx-auto leading-relaxed"
        >
          Join 150,000+ teams already automating smarter. No credit card required.
          Get your first 5 workflows free, forever.
        </motion.p>

        {/* Email form */}
        <motion.form
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6"
        >
          {!submitted ? (
            <>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                className="flex-1 h-12 px-4 rounded-xl bg-white/[0.06] border border-white/[0.12] text-white placeholder:text-slate-500 text-sm outline-none focus:border-blue-500/60 focus:bg-white/[0.08] transition-all"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(249,115,22,0.55)' }}
                whileTap={{ scale: 0.97 }}
                className="h-12 px-6 rounded-xl text-white font-semibold text-sm flex items-center gap-2 shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #F97316, #DC4A00)',
                  boxShadow: '0 0 20px rgba(249,115,22,0.35)',
                }}
              >
                Get Started
                <ArrowRight size={15} />
              </motion.button>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 h-12 flex items-center justify-center gap-2 rounded-xl"
              style={{
                background: 'rgba(16,185,129,0.12)',
                border: '1px solid rgba(16,185,129,0.4)',
              }}
            >
              <Check size={16} className="text-green-400" />
              <span className="text-green-400 font-semibold text-sm">You're on the list! Check your inbox.</span>
            </motion.div>
          )}
        </motion.form>

        {/* Trust signals */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-2"
        >
          {[
            { icon: '✓', text: 'Free forever plan' },
            { icon: '✓', text: 'No credit card needed' },
            { icon: '✓', text: 'Setup in 2 minutes' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 text-slate-500 text-sm">
              <span className="text-green-400 font-bold">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
