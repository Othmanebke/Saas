import { motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, Globe, Send, MessageSquare, Zap, BarChart3 } from 'lucide-react'

/* ── Orb (reused from Navbar) ── */
function FusionOrb({ size = 28 }: { size?: number }) {
  return (
    <motion.div
      className="relative shrink-0"
      style={{ width: size, height: size }}
      animate={{ rotate: [0, 360] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 35% 35%, #60A5FA 0%, #3B82F6 30%, #1E3A8A 60%, #0F172A 100%)',
          boxShadow: '0 0 10px rgba(59,130,246,0.4)',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          bottom: '3px', right: '3px',
          width: size * 0.35, height: size * 0.35,
          background: 'radial-gradient(circle, #F97316 0%, #EA580C 100%)',
          filter: 'blur(1px)',
        }}
      />
    </motion.div>
  )
}

/* ── Diagonal blue laser beams ── */
function BlueBeams() {
  const shouldReduceMotion = useReducedMotion()

  const beams = [
    { delay: 0,   dur: 6, w: '55%', top: '2%',  opacity: 0.9, thick: 2 },
    { delay: 0.5, dur: 7, w: '70%', top: '14%', opacity: 0.7, thick: 1.5 },
    { delay: 1,   dur: 5, w: '45%', top: '25%', opacity: 0.5, thick: 1 },
    { delay: 1.5, dur: 8, w: '60%', top: '36%', opacity: 0.6, thick: 1.5 },
    { delay: 2,   dur: 6, w: '40%', top: '48%', opacity: 0.4, thick: 1 },
    { delay: 2.5, dur: 7, w: '50%', top: '58%', opacity: 0.35, thick: 1 },
  ]

  return (
    <div className="absolute right-0 top-0 h-full w-[65%] pointer-events-none overflow-hidden">
      {/* Blue wash gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, transparent 20%, rgba(29,78,216,0.18) 45%, rgba(59,130,246,0.22) 60%, rgba(96,165,250,0.1) 80%, transparent 100%)',
        }}
      />
      {/* Secondary wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(155deg, transparent 30%, rgba(37,99,235,0.12) 55%, rgba(59,130,246,0.15) 70%, transparent 90%)',
        }}
      />

      {/* Animated beam lines */}
      {beams.map((b, i) => (
        <motion.div
          key={i}
          className="absolute right-0 origin-right"
          style={{
            top: b.top,
            width: b.w,
            height: `${b.thick}px`,
            background: `linear-gradient(to left, transparent, rgba(147,197,253,${b.opacity * 0.6}), rgba(59,130,246,${b.opacity}), rgba(255,255,255,${b.opacity * 0.4}))`,
            transform: 'rotate(-22deg)',
            filter: 'blur(0.3px)',
            boxShadow: `0 0 ${b.thick * 6}px ${b.thick}px rgba(59,130,246,${b.opacity * 0.5})`,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={shouldReduceMotion
            ? { scaleX: 1, opacity: b.opacity }
            : {
                scaleX: [0, 1, 1, 0.95, 1],
                opacity: [0, b.opacity, b.opacity * 0.7, b.opacity, 0],
              }
          }
          transition={{
            duration: b.dur,
            delay: b.delay,
            repeat: Infinity,
            repeatDelay: 2 + b.delay * 0.5,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Thick hero beams */}
      <motion.div
        className="absolute right-0 origin-right"
        style={{
          top: '8%',
          width: '80%',
          height: '3px',
          background: 'linear-gradient(to left, transparent, rgba(59,130,246,0.6), rgba(147,197,253,0.9), rgba(255,255,255,0.9))',
          transform: 'rotate(-22deg)',
          filter: 'blur(0.5px)',
          boxShadow: '0 0 16px 3px rgba(59,130,246,0.6)',
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 origin-right"
        style={{
          top: '28%',
          width: '65%',
          height: '2px',
          background: 'linear-gradient(to left, transparent, rgba(59,130,246,0.5), rgba(147,197,253,0.7))',
          transform: 'rotate(-22deg)',
          boxShadow: '0 0 10px 2px rgba(59,130,246,0.4)',
        }}
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 5, delay: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

/* ── GPT Chat input card (floats on top of app window) ── */
function ChatInputCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="absolute z-30"
      style={{ top: '-60px', left: '50%', transform: 'translateX(-20%)' }}
    >
      <div
        className="rounded-2xl p-5 w-[420px]"
        style={{
          background: '#0A0A0A',
          border: '1.5px solid rgba(249,115,22,0.6)',
          boxShadow:
            '0 0 0 1px rgba(59,130,246,0.2), 0 0 40px rgba(249,115,22,0.18), 0 0 80px rgba(59,130,246,0.1)',
        }}
      >
        {/* Model row */}
        <div className="flex items-center gap-2 mb-4">
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center text-[10px]"
            style={{ background: 'linear-gradient(135deg, #10B981, #06B6D4)' }}
          >
            ⊕
          </div>
          <span className="text-white font-medium text-sm">GPT 4.5</span>
          <ChevronDown size={13} className="text-slate-500" />
          <div className="w-px h-3.5 bg-white/10 mx-1" />
          <Globe size={13} className="text-slate-500" />
        </div>

        {/* Typing text */}
        <div className="flex items-center gap-1 mb-5">
          <span className="text-slate-300 text-sm">Generate weekly sa</span>
          <motion.span
            className="inline-block w-[2px] h-4 bg-slate-300"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.1, repeat: Infinity }}
          />
        </div>

        {/* Actions row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/[0.07] border border-white/[0.09] text-xs text-white hover:bg-white/10 transition-colors">
              <MessageSquare size={11} /> Chat
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/[0.07] border border-white/[0.09] text-xs text-white hover:bg-white/10 transition-colors">
              <Zap size={11} /> Launch Workflow
            </button>
            <button className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/[0.07] border border-white/[0.09] text-xs text-white hover:bg-white/10 transition-colors">
              <BarChart3 size={11} /> Data Analysis
            </button>
          </div>
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-white text-xs font-semibold shrink-0"
            style={{
              background: 'linear-gradient(135deg, #F97316, #DC4A00)',
              boxShadow: '0 0 16px rgba(249,115,22,0.5)',
            }}
          >
            <Send size={11} /> Send
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Full Fusion AI app window ── */
function AppWindow() {
  const conversations = [
    'Ethics of AI',
    'AI Communication Tool',
    'Start a conversation',
    'Initiate a new discussion',
    'Begin a fresh chat',
    'Open a new dialogue',
    'Launch a new chat session',
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 w-full rounded-2xl overflow-hidden"
      style={{
        background: '#080808',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 30px 80px rgba(0,0,0,0.9)',
      }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
      >
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <div className="ml-3 flex items-center gap-2">
          <FusionOrb size={18} />
          <span className="text-xs text-white/60 font-medium">Fusion AI</span>
        </div>
      </div>

      {/* App body */}
      <div className="flex" style={{ minHeight: '220px' }}>
        {/* Sidebar */}
        <div
          className="w-56 shrink-0 p-3 border-r"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          {/* New Chat button */}
          <motion.button
            whileHover={{ backgroundColor: 'rgba(249,115,22,0.12)' }}
            className="flex items-center gap-2 w-full text-xs text-orange-400 font-semibold mb-3 px-2 py-2 rounded-lg transition-colors"
          >
            <Zap size={12} />
            New Chat
          </motion.button>

          {/* Conversation list */}
          {conversations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.07 }}
              className="flex items-center gap-2 py-1.5 px-2 rounded-md text-[11px] text-white/30 hover:text-white/55 hover:bg-white/[0.03] transition-colors cursor-default truncate"
            >
              <MessageSquare size={9} className="shrink-0 text-white/15" />
              {item}
            </motion.div>
          ))}
        </div>

        {/* Main content area - empty/dark */}
        <div className="flex-1 relative overflow-hidden">
          {/* Subtle grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          {/* Center glow */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-20 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse, rgba(59,130,246,0.08) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}

/* ═══════════ MAIN HERO ═══════════ */
export function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-24 pb-0">

      {/* === BLUE BEAMS (right side) === */}
      <BlueBeams />

      {/* === ORANGE GLOW (bottom-left) === */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-80px', left: '-60px',
          width: '520px', height: '520px',
          background: 'radial-gradient(circle, rgba(234,88,12,0.45) 0%, rgba(249,115,22,0.2) 35%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      {/* Secondary orange pulse */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: '20px', left: '80px',
          width: '300px', height: '300px',
          background: 'radial-gradient(circle, rgba(249,115,22,0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* === MAIN CONTENT === */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="pt-12 pb-16 lg:pb-20">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 mb-8"
            style={{
              border: '1px solid rgba(255,255,255,0.22)',
              borderRadius: '6px',
            }}
          >
            <span className="text-[11px] font-bold text-white tracking-[0.18em] uppercase">
              Supercharge your AI workflows
            </span>
          </motion.div>

          {/* Headline — VERY large, left-aligned */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-bold text-white leading-[1.05] tracking-tight max-w-[520px] mb-6"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
          >
            Automate Your<br />
            AI Workflows<br />
            with AI Agent
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-400 text-[15px] leading-relaxed max-w-[440px] mb-10"
          >
            Connect your favorite apps, set triggers and watch AI handle the rest
            — no coding required. Get up and running in minutes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mb-20"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="h-12 px-7 rounded-xl text-white font-semibold text-sm transition-all"
              style={{
                border: '1.5px solid rgba(249,115,22,0.75)',
                background: 'transparent',
                boxShadow: '0 0 18px rgba(249,115,22,0.28)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 28px rgba(249,115,22,0.5)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 18px rgba(249,115,22,0.28)')}
            >
              Get Started - Free
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.06)' }}
              whileTap={{ scale: 0.97 }}
              className="h-12 px-7 rounded-xl text-white font-semibold text-sm transition-all"
              style={{ border: '1.5px solid rgba(255,255,255,0.2)', background: 'transparent' }}
            >
              View Pricing
            </motion.button>
          </motion.div>

          {/* ── Mockup area ── */}
          <div className="relative" style={{ height: '380px' }}>
            {/* Floating badges (right side) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
              className="absolute right-0 top-0 flex flex-col gap-2 z-40"
            >
              <div
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-white text-xs font-medium"
                style={{
                  background: 'rgba(12,12,12,0.9)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                Instant Access — $59
              </div>
              <div
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-white/60 text-xs"
                style={{
                  background: 'rgba(12,12,12,0.9)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <span>🔷</span> Made in Framer
              </div>
            </motion.div>

            {/* App window */}
            <div className="absolute inset-x-0 bottom-0">
              <AppWindow />
            </div>

            {/* Chat input card — floats ON TOP of app window */}
            <ChatInputCard />
          </div>
        </div>
      </div>
    </section>
  )
}
