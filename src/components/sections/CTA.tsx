import { motion } from 'framer-motion'

/* Exact Fusion AI orb matching the screenshot */
function LargeOrb() {
  return (
    <motion.div
      className="relative mx-auto mb-8"
      style={{ width: 72, height: 72 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 35% 30%, #60A5FA 0%, #3B82F6 25%, #1E40AF 50%, #0F172A 75%, #000 100%)',
          boxShadow: '0 0 30px rgba(59,130,246,0.6), 0 0 60px rgba(59,130,246,0.2)',
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      {/* Orange accent patch */}
      <div
        className="absolute rounded-full"
        style={{
          bottom: '10px', right: '10px',
          width: 26, height: 26,
          background: 'radial-gradient(circle, #F97316 0%, #C2410C 100%)',
          filter: 'blur(2px)',
        }}
      />
      {/* Shine */}
      <div
        className="absolute rounded-full"
        style={{
          top: '18%', left: '22%',
          width: '28%', height: '18%',
          background: 'rgba(255,255,255,0.4)',
          filter: 'blur(3px)',
        }}
      />
    </motion.div>
  )
}

export function CTA() {
  return (
    <section id="cta" className="relative bg-black overflow-hidden py-32 px-6">
      {/* === Large glows matching screenshot === */}
      {/* Orange glow — large, on the left */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '0', left: '-100px',
          width: '650px', height: '650px',
          background: 'radial-gradient(circle, rgba(220,68,5,0.55) 0%, rgba(234,88,12,0.3) 30%, rgba(249,115,22,0.1) 60%, transparent 80%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Blue glow — on the right */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: '0', right: '-100px',
          width: '650px', height: '650px',
          background: 'radial-gradient(circle, rgba(37,99,235,0.45) 0%, rgba(59,130,246,0.25) 30%, rgba(96,165,250,0.1) 60%, transparent 80%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, delay: 1, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Orb */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <LargeOrb />
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-bold text-white leading-tight mb-5"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.6rem)' }}
        >
          Start Your AI Automation<br />Journey Today
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-base mb-10 max-w-lg mx-auto leading-relaxed"
        >
          Sign up for Fusion AI and let AI handle your routine tasks—no credit card needed.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="h-12 px-8 rounded-xl text-white font-semibold text-sm"
            style={{
              border: '1.5px solid rgba(249,115,22,0.75)',
              background: 'rgba(249,115,22,0.08)',
              boxShadow: '0 0 20px rgba(249,115,22,0.3)',
            }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 32px rgba(249,115,22,0.55)')}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 20px rgba(249,115,22,0.3)')}
          >
            Get Started - Free
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.07)' }}
            whileTap={{ scale: 0.97 }}
            className="h-12 px-8 rounded-xl text-white font-semibold text-sm transition-colors"
            style={{
              border: '1.5px solid rgba(255,255,255,0.2)',
              background: 'transparent',
            }}
          >
            View Pricing
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
