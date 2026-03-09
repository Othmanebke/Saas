import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown, Globe, Send, MessageSquare, Zap, BarChart3, Sparkles, TrendingUp, Users, Clock } from 'lucide-react'

/* ── Cycling words in the headline ── */
const CYCLE_WORDS = ['AI Workflows', 'Business Ops', 'Team Processes', 'Data Pipelines']

function CyclingWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % CYCLE_WORDS.length), 2600)
    return () => clearInterval(t)
  }, [])

  return (
    <span className="relative inline-block" style={{ minWidth: '260px' }}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 40, opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -40, opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-gradient inline-block"
        >
          {CYCLE_WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

/* ── Floating metric badge ── */
function MetricBadge({
  icon, label, value, color, className, style, delay = 0,
}: {
  icon: React.ReactNode
  label: string
  value: string
  color: string
  className?: string
  style?: React.CSSProperties
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl z-30 ${className}`}
      style={{
        background: 'rgba(8,8,8,0.92)',
        border: `1px solid ${color}40`,
        backdropFilter: 'blur(16px)',
        boxShadow: `0 4px 24px rgba(0,0,0,0.5), 0 0 16px ${color}20`,
        ...style,
      }}
    >
      <div
        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
        style={{ background: `${color}18`, border: `1px solid ${color}30` }}
      >
        <span style={{ color }}>{icon}</span>
      </div>
      <div>
        <div className="text-white font-bold text-sm leading-none mb-0.5">{value}</div>
        <div className="text-slate-500 text-[10px] leading-none">{label}</div>
      </div>
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
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, transparent 20%, rgba(29,78,216,0.15) 45%, rgba(59,130,246,0.2) 60%, rgba(96,165,250,0.08) 80%, transparent 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(155deg, transparent 30%, rgba(37,99,235,0.1) 55%, rgba(59,130,246,0.12) 70%, transparent 90%)',
        }}
      />

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
            : { scaleX: [0, 1, 1, 0.95, 1], opacity: [0, b.opacity, b.opacity * 0.7, b.opacity, 0] }
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
          top: '8%', width: '80%', height: '3px',
          background: 'linear-gradient(to left, transparent, rgba(59,130,246,0.6), rgba(147,197,253,0.9), rgba(255,255,255,0.9))',
          transform: 'rotate(-22deg)', filter: 'blur(0.5px)',
          boxShadow: '0 0 16px 3px rgba(59,130,246,0.6)',
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}

/* ── Animated app mockup ── */
function AppMockup() {
  const conversations = [
    'Ethics of AI',
    'AI Communication Tool',
    'Start a conversation',
    'New customer onboarding',
    'Weekly report generation',
    'Lead scoring pipeline',
  ]

  const [activeIdx] = useState(1)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative z-20 w-full rounded-2xl overflow-hidden"
      style={{
        background: '#060606',
        border: '1px solid rgba(255,255,255,0.1)',
        boxShadow: '0 40px 100px rgba(0,0,0,0.95), 0 0 0 1px rgba(255,255,255,0.05)',
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
          <div className="text-xs text-white/50 font-medium">Fusion AI · Dashboard</div>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="text-[10px] text-green-400">Running 3 workflows</span>
        </div>
      </div>

      {/* App body */}
      <div className="flex" style={{ minHeight: '240px' }}>
        {/* Sidebar */}
        <div
          className="w-52 shrink-0 p-3 border-r"
          style={{ borderColor: 'rgba(255,255,255,0.05)' }}
        >
          <motion.button
            whileHover={{ backgroundColor: 'rgba(249,115,22,0.12)' }}
            className="flex items-center gap-2 w-full text-xs text-orange-400 font-semibold mb-3 px-2 py-2 rounded-lg transition-colors"
          >
            <Zap size={12} /> New Chat
          </motion.button>

          {conversations.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.07 }}
              className={`flex items-center gap-2 py-1.5 px-2 rounded-md text-[11px] transition-colors cursor-default truncate mb-0.5 ${
                i === activeIdx ? 'bg-white/[0.06] text-white/70' : 'text-white/25 hover:text-white/45 hover:bg-white/[0.03]'
              }`}
            >
              <MessageSquare size={9} className="shrink-0 opacity-50" />
              {item}
            </motion.div>
          ))}
        </div>

        {/* Main area */}
        <div className="flex-1 relative overflow-hidden p-4">
          {/* Grid */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Mini chart */}
          <div className="relative z-10 flex items-end gap-1 h-16 mt-4">
            {[40, 65, 45, 80, 55, 90, 70, 95, 75, 88].map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.8 + i * 0.08, duration: 0.4, ease: 'easeOut' }}
                className="flex-1 rounded-sm origin-bottom"
                style={{
                  height: `${h}%`,
                  background: i >= 7
                    ? 'linear-gradient(to top, #3B82F6, #60A5FA)'
                    : 'rgba(255,255,255,0.07)',
                }}
              />
            ))}
          </div>

          {/* Stats row */}
          <div className="relative z-10 flex gap-3 mt-3">
            {[
              { label: 'Tasks/day', val: '2,847', up: true },
              { label: 'Success rate', val: '99.2%', up: true },
              { label: 'Avg latency', val: '142ms', up: false },
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex-1 rounded-lg px-2 py-1.5"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="text-[10px] text-slate-500 mb-0.5">{s.label}</div>
                <div className="text-white font-semibold text-xs">{s.val}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Chat input card floating on top ── */
function ChatInputCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="absolute z-30"
      style={{ top: '-58px', left: '50%', transform: 'translateX(-18%)' }}
    >
      <div
        className="rounded-2xl p-5 w-[400px]"
        style={{
          background: '#080808',
          border: '1.5px solid rgba(249,115,22,0.55)',
          boxShadow: '0 0 0 1px rgba(59,130,246,0.15), 0 0 40px rgba(249,115,22,0.15), 0 0 80px rgba(59,130,246,0.08)',
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
          <div className="ml-auto flex items-center gap-1">
            <Sparkles size={12} className="text-orange-400" />
            <span className="text-[11px] text-orange-400 font-medium">AI Ready</span>
          </div>
        </div>

        {/* Typing */}
        <div className="flex items-center gap-1 mb-5">
          <span className="text-slate-300 text-sm">Generate weekly sales report</span>
          <motion.span
            className="inline-block w-[2px] h-4 bg-slate-300"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.1, repeat: Infinity }}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {[
              { icon: <MessageSquare size={11} />, label: 'Chat' },
              { icon: <Zap size={11} />, label: 'Workflow' },
              { icon: <BarChart3 size={11} />, label: 'Analytics' },
            ].map((b, i) => (
              <button
                key={i}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/[0.08] text-xs text-white hover:bg-white/10 transition-colors"
              >
                {b.icon} {b.label}
              </button>
            ))}
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

/* ═══════════ MAIN HERO ═══════════ */
export function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden pt-24 pb-0">

      {/* Subtle grid background */}
      <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />

      {/* Blue beams right side */}
      <BlueBeams />

      {/* Orange glow bottom-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-80px', left: '-60px',
          width: '560px', height: '560px',
          background: 'radial-gradient(circle, rgba(234,88,12,0.4) 0%, rgba(249,115,22,0.15) 40%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      {/* Violet glow top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '0', right: '0',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      {/* Secondary orange pulse */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: '20px', left: '80px',
          width: '300px', height: '300px',
          background: 'radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="pt-12 pb-16 lg:pb-20">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full"
            style={{
              border: '1px solid rgba(255,255,255,0.18)',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(8px)',
            }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-green-400"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-[11px] font-bold text-white tracking-[0.18em] uppercase">
              Now with GPT-4o · Claude 3.5 · Gemini
            </span>
          </motion.div>

          {/* Headline */}
          <div className="mb-6 overflow-hidden">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-bold text-white leading-[1.05] tracking-tight max-w-[540px]"
              style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(2.6rem, 5.5vw, 4.8rem)' }}
            >
              Automate Your<br />
              <CyclingWord /><br />
              with AI Agent
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-slate-400 text-[15px] leading-relaxed max-w-[440px] mb-10"
          >
            Connect your favorite apps, set triggers and watch AI handle the rest
            — no coding required. Get up and running in minutes.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap items-center gap-4 mb-6"
          >
            {/* Primary CTA */}
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 0 32px rgba(249,115,22,0.55)' }}
              whileTap={{ scale: 0.97 }}
              className="h-12 px-7 rounded-xl text-white font-semibold text-sm transition-all flex items-center gap-2"
              style={{
                border: '1.5px solid rgba(249,115,22,0.75)',
                background: 'rgba(249,115,22,0.08)',
                boxShadow: '0 0 18px rgba(249,115,22,0.3)',
              }}
            >
              Get Started — Free
              <ArrowRight size={15} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.06)' }}
              whileTap={{ scale: 0.97 }}
              className="h-12 px-7 rounded-xl text-white font-semibold text-sm transition-all"
              style={{ border: '1.5px solid rgba(255,255,255,0.18)', background: 'transparent' }}
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="flex items-center gap-4 mb-20"
          >
            <div className="flex -space-x-2">
              {['#3B82F6','#F97316','#8B5CF6','#10B981','#EC4899'].map((c, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-black flex items-center justify-center text-[9px] font-bold text-white"
                  style={{ background: c }}
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-orange-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-slate-500 text-[11px]">Trusted by <span className="text-white">150,000+</span> users</span>
            </div>
          </motion.div>

          {/* ── Mockup area ── */}
          <div className="relative" style={{ height: '400px' }}>

            {/* Floating metric badges */}
            <MetricBadge
              icon={<TrendingUp size={13} />}
              label="Tasks automated today"
              value="2,847"
              color="#3B82F6"
              className="float-badge-1"
              style={{ top: '10px', right: '12px' } as React.CSSProperties}
              delay={1.2}
            />
            <MetricBadge
              icon={<Users size={13} />}
              label="Active agents"
              value="12"
              color="#10B981"
              className="float-badge-2"
              style={{ bottom: '120px', right: '0px' } as React.CSSProperties}
              delay={1.5}
            />
            <MetricBadge
              icon={<Clock size={13} />}
              label="Time saved this week"
              value="18h 24m"
              color="#F97316"
              className="float-badge-3"
              style={{ top: '20px', left: '0px' } as React.CSSProperties}
              delay={1.8}
            />

            {/* App mockup */}
            <div className="absolute inset-x-0 bottom-0">
              <AppMockup />
            </div>

            {/* Chat input floating */}
            <ChatInputCard />
          </div>
        </div>
      </div>
    </section>
  )
}
