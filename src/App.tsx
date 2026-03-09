import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { TrustedBy } from './components/sections/TrustedBy'
import { Features } from './components/sections/Features'
import { Workflow } from './components/sections/Workflow'
import { Stats } from './components/sections/Stats'
import { Testimonials } from './components/sections/Testimonials'
import { Pricing } from './components/sections/Pricing'
import { FAQ } from './components/sections/FAQ'
import { CTA } from './components/sections/CTA'

/* ── Cursor spotlight that follows the mouse ── */
function CursorSpotlight() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 })

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[2]"
      style={{
        background: `radial-gradient(700px circle at ${pos.x}px ${pos.y}px, rgba(59,130,246,0.045) 0%, transparent 65%)`,
        transition: 'background 0.05s linear',
      }}
    />
  )
}

/* ── Stable particles ── */
const PARTICLE_PROPS = Array.from({ length: 28 }, (_, i) => ({
  top: `${(i * 41 + 7) % 100}%`,
  left: `${(i * 57 + 13) % 100}%`,
  opacity: ((i % 4) + 1) * 0.05,
  duration: 12 + (i % 10) * 2.5,
  delay: i * 0.6,
  size: i % 6 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
  color: i % 4 === 0 ? '#F97316' : i % 4 === 1 ? '#3B82F6' : i % 4 === 2 ? '#60A5FA' : '#8B5CF6',
}))

function Particles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {PARTICLE_PROPS.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
          }}
          animate={{
            y: [0, -110, 0],
            opacity: [p.opacity * 0.1, p.opacity, p.opacity * 0.1],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 30, restDelta: 0.001 })

  return (
    <div className="min-h-screen bg-black text-slate-300 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden relative">
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(to right, #3B82F6, #8B5CF6, #F97316)',
        }}
      />

      <CursorSpotlight />
      <Particles />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <TrustedBy />
        <Features />
        <Workflow />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
