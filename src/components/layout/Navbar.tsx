import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'About us', href: '#about' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Integration', href: '#integration' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
  { label: 'Waitlist', href: '#cta' },
]

/* The gradient orb matching the Fusion AI logo exactly */
function FusionOrb({ size = 32 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      {/* Outer glow */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 35% 35%, #60A5FA 0%, #3B82F6 30%, #1E3A8A 60%, #0F172A 100%)',
          boxShadow: '0 0 12px rgba(59,130,246,0.5), inset 0 1px 1px rgba(255,255,255,0.15)',
        }}
      />
      {/* Orange accent highlight */}
      <div
        className="absolute rounded-full"
        style={{
          bottom: '4px', right: '4px',
          width: size * 0.35, height: size * 0.35,
          background: 'radial-gradient(circle, #F97316 0%, #EA580C 100%)',
          filter: 'blur(1px)',
        }}
      />
      {/* Shine */}
      <div
        className="absolute rounded-full"
        style={{
          top: '18%', left: '20%',
          width: '30%', height: '20%',
          background: 'rgba(255,255,255,0.35)',
          filter: 'blur(2px)',
          borderRadius: '50%',
        }}
      />
    </div>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 md:px-8"
    >
      {/* Floating bordered nav container */}
      <div
        className="w-full max-w-6xl rounded-2xl transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.85)',
          border: '1px solid rgba(255,255,255,0.12)',
          backdropFilter: 'blur(20px)',
          boxShadow: scrolled ? '0 8px 32px rgba(0,0,0,0.5)' : '0 4px 24px rgba(0,0,0,0.3)',
        }}
      >
        <div className="h-14 flex items-center justify-between px-5">

          {/* Logo */}
          <motion.a
            href="#"
            className="flex items-center gap-2.5 shrink-0"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 400 }}
          >
            <FusionOrb size={30} />
            <span className="font-bold text-[17px] text-white tracking-tight">Fusion AI</span>
          </motion.a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-[13.5px] text-slate-400">
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                className="hover:text-white transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Get Started CTA */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45, duration: 0.4 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="hidden md:inline-flex items-center justify-center h-9 px-5 rounded-xl text-white text-[13px] font-semibold transition-all duration-200 shrink-0"
            style={{
              border: '1px solid rgba(249,115,22,0.7)',
              background: 'transparent',
              boxShadow: '0 0 14px rgba(249,115,22,0.25), inset 0 0 14px rgba(249,115,22,0.05)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                '0 0 22px rgba(249,115,22,0.5), inset 0 0 20px rgba(249,115,22,0.1)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                '0 0 14px rgba(249,115,22,0.25), inset 0 0 14px rgba(249,115,22,0.05)'
            }}
          >
            Get Started
          </motion.button>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-slate-400 hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-white/[0.07]"
            >
              <div className="px-5 py-5 flex flex-col gap-4">
                {NAV_LINKS.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  className="mt-1 h-10 px-5 rounded-xl border text-white text-sm font-semibold self-start"
                  style={{ borderColor: 'rgba(249,115,22,0.7)' }}
                >
                  Get Started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
