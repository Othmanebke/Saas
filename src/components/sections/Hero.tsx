import { motion } from 'framer-motion'
import { Button } from '../Button'
import { ChevronRight, ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden text-center z-10">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-hero-glow rounded-full blur-[120px] opacity-20 pointer-events-none mix-blend-screen" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neuro-primary rounded-full blur-[150px] opacity-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-neuro-primary mb-8 backdrop-blur-md cursor-pointer hover:bg-white/10 transition-colors"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neuro-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neuro-primary"></span>
          </span>
          Introducing NeuroFlow 2.0
          <ChevronRight size={14} className="text-slate-400" />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-4 max-w-4xl"
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold text-white leading-[1.1] tracking-tight">
            The intelligent OS for<br />
            <span className="text-gradient drop-shadow-[0_0_25px_rgba(0,240,255,0.4)]">elite teams.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mt-6 leading-relaxed">
            Centralize operations, orchestrate intelligent workflows, and scale your business securely with NeuroFlow’s next-gen AI platform.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-12"
        >
          <Button size="lg" className="group">
            Start Free Trial
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="secondary">
            View Live Demo
          </Button>
        </motion.div>

        {/* Dashboard Preview Presentation */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 w-full relative"
        >
          <div className="absolute inset-x-10 -bottom-10 top-1/2 bg-gradient-to-t from-neuro-900 to-transparent z-10 pointer-events-none" />
          <div className="rounded-2xl border border-white/10 p-3 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-white/10 ring-offset-2 ring-offset-neuro-900 relative z-0">
            {/* Fake Dashboard Image or UI */}
            <div className="w-full aspect-[16/9] bg-[#0c1322] rounded-xl overflow-hidden flex flex-col border border-white/5 relative">
              <div className="h-12 border-b border-white/5 flex items-center px-4 gap-2 bg-[#0c1322]/80 backdrop-blur">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-4 h-6 w-96 bg-white/5 rounded-md flex items-center px-3 text-xs text-slate-500">
                  search or command (⌘ + K)
                </div>
              </div>
              <div className="flex-1 flex gap-4 p-4">
                <div className="w-48 hidden md:flex flex-col gap-2">
                  {[1,2,3,4,5].map(i => <div key={i} className="h-8 bg-white/5 rounded-md animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />)}
                </div>
                <div className="flex-1 grid grid-cols-3 grid-rows-3 gap-4">
                  <div className="col-span-2 row-span-2 bg-gradient-to-br from-neuro-primary/10 to-transparent border border-white/5 rounded-lg position-relative p-4" />
                  <div className="col-span-1 row-span-1 bg-white/5 border border-white/5 rounded-lg" />
                  <div className="col-span-1 row-span-1 bg-white/5 border border-white/5 rounded-lg" />
                  <div className="col-span-1 row-span-1 bg-white/5 border border-white/5 rounded-lg" />
                  <div className="col-span-2 row-span-1 bg-white/5 border border-white/5 rounded-lg" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#060B19]" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}