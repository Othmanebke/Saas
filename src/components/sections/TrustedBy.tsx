import { motion } from 'framer-motion'

const ROW1 = [
  { name: 'Vercel', icon: '▲' },
  { name: 'Notion', icon: '◼' },
  { name: 'Linear', icon: '◈' },
  { name: 'Stripe', icon: '◇' },
  { name: 'Slack', icon: '◎' },
  { name: 'GitHub', icon: '⊙' },
  { name: 'Figma', icon: '⊛' },
  { name: 'Shopify', icon: '◉' },
]

const ROW2 = [
  { name: 'HubSpot', icon: '▣' },
  { name: 'Salesforce', icon: '◆' },
  { name: 'Jira', icon: '◐' },
  { name: 'Airtable', icon: '◑' },
  { name: 'Zapier', icon: '▽' },
  { name: 'Intercom', icon: '△' },
  { name: 'Notion', icon: '⬡' },
  { name: 'Webflow', icon: '⬢' },
]

const ITEMS1 = [...ROW1, ...ROW1]
const ITEMS2 = [...ROW2, ...ROW2]

function MarqueeItem({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-2.5 mx-8 shrink-0 group cursor-default">
      <span
        className="text-lg transition-all duration-300 group-hover:scale-110"
        style={{ color: 'rgba(255,255,255,0.2)' }}
      >
        {icon}
      </span>
      <span
        className="text-white font-semibold text-base tracking-wide transition-colors duration-300"
        style={{ color: 'rgba(255,255,255,0.25)' }}
      >
        {name}
      </span>
    </div>
  )
}

export function TrustedBy() {
  return (
    <section className="py-16 border-t border-white/[0.06] bg-black relative overflow-hidden">
      {/* Subtle center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-slate-500 text-sm font-medium"
        >
          Trusted by teams at&nbsp;
          <span className="text-white font-semibold">world-class companies</span>
        </motion.p>
      </div>

      {/* Row 1 — left scroll */}
      <div className="relative overflow-hidden mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        <div className="flex animate-scroll w-max">
          {ITEMS1.map((logo, i) => (
            <MarqueeItem key={`r1-${i}`} name={logo.name} icon={logo.icon} />
          ))}
        </div>
      </div>

      {/* Row 2 — right scroll (reverse) */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        <div className="flex animate-scroll-reverse w-max">
          {ITEMS2.map((logo, i) => (
            <MarqueeItem key={`r2-${i}`} name={logo.name} icon={logo.icon} />
          ))}
        </div>
      </div>

      {/* Bottom trust badges */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-6 mt-10"
      >
        {[
          { label: 'SOC 2 Type II', icon: '🔒' },
          { label: 'GDPR Compliant', icon: '🛡️' },
          { label: '99.9% Uptime SLA', icon: '⚡' },
          { label: '24/7 Support', icon: '💬' },
        ].map((b, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-[12px] text-slate-500"
          >
            <span>{b.icon}</span>
            <span>{b.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
