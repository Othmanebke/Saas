import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function FusionOrb({ size = 28 }: { size?: number }) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
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
          width: size * 0.34, height: size * 0.34,
          background: 'radial-gradient(circle, #F97316 0%, #EA580C 100%)',
          filter: 'blur(1px)',
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          top: '18%', left: '22%',
          width: '28%', height: '18%',
          background: 'rgba(255,255,255,0.35)',
          filter: 'blur(2px)',
        }}
      />
    </div>
  )
}

const SOCIALS = [
  {
    name: 'X / Twitter',
    svg: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    svg: (
      <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    svg: (
      <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    svg: (
      <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
]

const COLS = [
  {
    heading: 'Product',
    links: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'],
  },
  {
    heading: 'Company',
    links: ['About us', 'Blog', 'Careers', 'Press', 'Contact'],
  },
  {
    heading: 'Legal',
    links: ['Privacy Policy', 'Terms of Service', 'Security', 'Cookies', 'GDPR'],
  },
]

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [nlSubmitted, setNlSubmitted] = useState(false)

  return (
    <footer className="bg-black pt-0 pb-0">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-4 md:mx-8 lg:mx-12 rounded-3xl overflow-hidden"
        style={{
          background: '#0A0A0A',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 px-8 md:px-12 pt-12 pb-10">
          {/* Brand col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <FusionOrb size={28} />
              <span className="font-bold text-[17px] text-white">Fusion AI</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              The AI automation platform trusted by 150,000+ teams worldwide. Build, scale, and manage your AI workforce — no code required.
            </p>

            {/* Newsletter */}
            <div>
              <p className="text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wider">Stay in the loop</p>
              {!nlSubmitted ? (
                <form
                  onSubmit={e => { e.preventDefault(); if (newsletterEmail) setNlSubmitted(true) }}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={e => setNewsletterEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 h-9 px-3 rounded-lg bg-white/[0.05] border border-white/[0.1] text-white placeholder:text-slate-600 text-xs outline-none focus:border-blue-500/50 transition-colors"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="h-9 px-3 rounded-lg text-white flex items-center gap-1 text-xs font-semibold shrink-0"
                    style={{ background: 'rgba(59,130,246,0.2)', border: '1px solid rgba(59,130,246,0.3)' }}
                  >
                    <ArrowRight size={13} />
                  </motion.button>
                </form>
              ) : (
                <p className="text-green-400 text-xs font-medium">✓ Subscribed! Thanks for joining.</p>
              )}
            </div>
          </div>

          {/* Link cols */}
          {COLS.map(col => (
            <div key={col.heading}>
              <h4 className="text-slate-300 text-xs font-bold mb-5 tracking-widest uppercase">
                {col.heading}
              </h4>
              <ul className="space-y-3">
                {col.links.map(link => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className="text-slate-500 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="mx-8 md:mx-12 h-px"
          style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)' }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 md:px-12 py-5">
          <p className="text-slate-600 text-[13px]">
            © 2025 Fusion AI · Built with ♥ by Amani Design
          </p>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {SOCIALS.map(s => (
              <motion.a
                key={s.name}
                href="#"
                whileHover={{ scale: 1.12, color: '#fff' }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}
                aria-label={s.name}
                title={s.name}
              >
                {s.svg}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="h-6 bg-black" />
    </footer>
  )
}
