import { motion } from 'framer-motion'

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

/* Social icon SVGs */
const SOCIALS = [
  {
    name: 'Instagram',
    svg: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    svg: (
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'X',
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
]

const COLS = [
  {
    heading: 'Main Page',
    links: ['Home', 'About', 'Pricing', 'Blogs', 'Contact'],
  },
  {
    heading: 'Quick Links',
    links: ['Integration', 'Teams', 'Career', 'FAQ', '404'],
  },
  {
    heading: 'Others',
    links: ['Privacy Policy', 'Terms & Condition', 'Waitlist', 'Changelog'],
  },
]

export function Footer() {
  return (
    <footer className="bg-black pt-0 pb-0">
      {/* Dark card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-4 md:mx-8 lg:mx-12 rounded-3xl overflow-hidden"
        style={{
          background: '#111111',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-8 md:px-12 py-12">
          {/* Brand col */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <FusionOrb size={28} />
              <span className="font-bold text-[17px] text-white">Fusion AI</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Fusion AI and let AI handle your routine tasks.
            </p>
          </div>

          {/* Link cols */}
          {COLS.map(col => (
            <div key={col.heading}>
              <h4 className="text-slate-400 text-xs font-semibold mb-5 tracking-wide">
                {col.heading}
              </h4>
              <ul className="space-y-3.5">
                {col.links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-500 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mx-8 md:mx-12 h-px bg-white/[0.07]" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-8 md:px-12 py-5">
          <p className="text-slate-600 text-[13px]">
            © 2025&nbsp;&nbsp;Design &amp; Developed by Amani Design
          </p>

          <div className="flex items-center gap-3">
            {SOCIALS.map(s => (
              <motion.a
                key={s.name}
                href="#"
                whileHover={{ scale: 1.15, color: '#fff' }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-500 hover:text-white transition-colors"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
                aria-label={s.name}
              >
                {s.svg}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Extra spacing so footer card doesn't hug bottom */}
      <div className="h-6 bg-black" />
    </footer>
  )
}
