import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const ALL_TESTIMONIALS = [
  {
    name: 'Elena Rodriguez',
    role: 'VP Engineering',
    company: 'Nexus Corp',
    content: 'Fusion AI changed how we approach automation. We went from days to minutes setting up complex AI workflows. The GPT integrations are seamless.',
    initials: 'ER',
    color: '#3B82F6',
    stars: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'CTO',
    company: 'Synthetix',
    content: "The no-code builder is incredibly intuitive. Connected Salesforce, Slack, and our CRM in under an hour. 450% ROI in Q1 — didn't expect that.",
    initials: 'MC',
    color: '#F97316',
    stars: 5,
  },
  {
    name: 'Sarah Jenkins',
    role: 'Head of Operations',
    company: 'Quantum Labs',
    content: 'We replaced three separate tools with Fusion AI. The trigger system is powerful, and the AI handles edge cases we never even programmed.',
    initials: 'SJ',
    color: '#60A5FA',
    stars: 5,
  },
  {
    name: 'James Patel',
    role: 'Founder & CEO',
    company: 'Orbis Ventures',
    content: 'Exceptional product. Our sales team saves 18 hours a week on follow-ups alone. The AI understands context like nothing else I\'ve used.',
    initials: 'JP',
    color: '#10B981',
    stars: 5,
  },
  {
    name: 'Amara Osei',
    role: 'Director of Product',
    company: 'Helix Digital',
    content: 'The workflow builder is intuitive yet powerful. We built a 12-step lead nurturing automation in an afternoon. Customer support is world-class.',
    initials: 'AO',
    color: '#8B5CF6',
    stars: 5,
  },
  {
    name: 'Luca Ferrari',
    role: 'Head of Growth',
    company: 'Stellarify',
    content: 'What really sets Fusion AI apart is how it learns. After two weeks, it was suggesting optimizations we hadn\'t thought of. Remarkable technology.',
    initials: 'LF',
    color: '#EC4899',
    stars: 5,
  },
  {
    name: 'Yuki Tanaka',
    role: 'Engineering Lead',
    company: 'Kodex',
    content: 'SOC 2 compliance and SSO were deal-breakers for us. Fusion AI had both, plus the best automation engine we tested. Switching was worth it.',
    initials: 'YT',
    color: '#06B6D4',
    stars: 5,
  },
  {
    name: 'Chloe Dubois',
    role: 'Operations Manager',
    company: 'Prism Analytics',
    content: 'The analytics dashboard is stunning. Real-time metrics for every workflow run helped us optimize and cut processing time by 67%.',
    initials: 'CD',
    color: '#F59E0B',
    stars: 5,
  },
]

function TestimonialCard({ t }: { t: typeof ALL_TESTIMONIALS[number] }) {
  return (
    <div
      className="flex-shrink-0 w-[340px] mx-3 rounded-2xl p-6 relative overflow-hidden card-shine"
      style={{
        background: '#0D0D0D',
        border: `1px solid ${t.color}20`,
      }}
    >
      {/* Quote icon */}
      <div
        className="absolute top-4 right-4 opacity-10"
        style={{ color: t.color }}
      >
        <Quote size={32} />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(t.stars)].map((_, j) => (
          <Star key={j} size={13} className="fill-orange-400 text-orange-400" />
        ))}
      </div>

      {/* Content */}
      <p className="text-slate-300 text-sm leading-relaxed mb-5">
        "{t.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0"
          style={{ background: `${t.color}25`, border: `1px solid ${t.color}40` }}
        >
          {t.initials}
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{t.name}</div>
          <div className="text-slate-500 text-xs">{t.role} · {t.company}</div>
        </div>
      </div>
    </div>
  )
}

/* Duplicated arrays for infinite scroll */
const ROW1 = [...ALL_TESTIMONIALS.slice(0, 4), ...ALL_TESTIMONIALS.slice(0, 4)]
const ROW2 = [...ALL_TESTIMONIALS.slice(4), ...ALL_TESTIMONIALS.slice(4)]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-28 bg-black relative overflow-hidden">
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />
      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(249,115,22,0.05) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-tag mb-5 inline-flex"
        >
          Testimonials
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold text-white leading-tight"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Loved by teams<br className="hidden md:block" />
          <span className="text-gradient-static"> around the world.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-base mt-4 max-w-lg mx-auto"
        >
          Over 150,000 teams have transformed their workflows with Fusion AI.
        </motion.p>
      </div>

      {/* Row 1 — left scroll */}
      <div className="relative overflow-hidden mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        <div className="flex animate-scroll w-max">
          {ROW1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 — right scroll */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        <div className="flex animate-scroll-reverse w-max">
          {ROW2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-12"
      >
        <p className="text-slate-500 text-sm">
          Join <span className="text-white font-semibold">150,000+</span> users already automating smarter.
        </p>
      </motion.div>
    </section>
  )
}
