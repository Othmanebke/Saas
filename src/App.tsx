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

function Particles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-neuro-primary rounded-full"
          initial={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.5 + 0.1,
            scale: Math.random() * 1.5 + 0.5
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.1, 0.5, 0.1]
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  )
}

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <div className="min-h-screen bg-neuro-900 text-slate-300 font-sans selection:bg-neuro-primary/30 selection:text-white overflow-x-hidden relative">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neuro-primary to-neuro-secondary z-[60] origin-left"
        style={{ scaleX }}
      />
      
      <Particles />
      <Navbar />
      
      <main className="relative z-10 pt-20">
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