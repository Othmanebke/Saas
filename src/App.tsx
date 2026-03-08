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

/* Stable particle props — computed once, no random during render */
const PARTICLE_PROPS = Array.from({ length: 22 }, (_, i) => ({
  top: `${(i * 41 + 7) % 100}%`,
  left: `${(i * 57 + 13) % 100}%`,
  opacity: ((i % 4) + 1) * 0.06,
  duration: 14 + (i % 9) * 2,
  delay: i * 0.7,
  size: i % 5 === 0 ? 2 : 1,
  color: i % 3 === 0 ? '#F97316' : i % 3 === 1 ? '#3B82F6' : '#60A5FA',
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
            y: [0, -90, 0],
            opacity: [p.opacity * 0.2, p.opacity, p.opacity * 0.2],
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
      {/* Scroll Progress Bar — blue → orange gradient */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[60] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(to right, #3B82F6, #60A5FA, #F97316)',
        }}
      />

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
