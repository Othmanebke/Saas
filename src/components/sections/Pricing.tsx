import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Zap, ArrowRight } from 'lucide-react'

const PLANS = [
  {
    name: 'Starter',
    desc: 'Perfect for individuals and small teams.',
    priceM: 0,
    priceA: 0,
    features: ['5 workflows', '1,000 tasks/mo', '3 integrations', 'Community support', 'Basic analytics'],
    cta: 'Get Started Free',
    popular: false,
    borderColor: 'rgba(255,255,255,0.08)',
    accentColor: '#60A5FA',
    bg: '#0D0D0D',
  },
  {
    name: 'Pro',
    desc: 'For teams that need more power and speed.',
    priceM: 49,
    priceA: 39,
    features: [
      'Unlimited workflows',
      '50,000 tasks/mo',
      '50+ integrations',
      'AI agent access',
      'Priority support',
      'Advanced analytics',
    ],
    cta: 'Start Pro Trial',
    popular: true,
    borderColor: 'rgba(59,130,246,0.5)',
    accentColor: '#3B82F6',
    bg: '#0D0D0D',
  },
  {
    name: 'Enterprise',
    desc: 'Unlimited power with dedicated capacity.',
    priceM: 149,
    priceA: 119,
    features: [
      'Everything in Pro',
      'Unlimited tasks',
      'Custom AI models',
      'SSO & SOC2 certified',
      'Dedicated success manager',
      'White-label option',
    ],
    cta: 'Contact Sales',
    popular: false,
    borderColor: 'rgba(249,115,22,0.3)',
    accentColor: '#F97316',
    bg: '#0D0D0D',
  },
]

/* Animated shimmer sweep for Pro card */
function CardShimmer() {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
      initial={false}
    >
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.8) 50%, transparent 100%)',
        }}
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'linear-gradient(90deg, transparent 20%, rgba(59,130,246,0.03) 50%, transparent 80%)',
        }}
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
      />
    </motion.div>
  )
}

export function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="py-28 bg-black relative overflow-hidden">
      {/* Glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-tag mb-5 inline-flex"
        >
          Pricing
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
          style={{ fontFamily: 'Space Grotesk, sans-serif' }}
        >
          Simple, transparent pricing.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto"
        >
          Start for free. Scale as you grow. No hidden fees, no surprises.
        </motion.p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className={`text-sm font-medium transition-colors ${annual ? 'text-slate-500' : 'text-white'}`}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className="w-12 h-7 rounded-full relative p-1 transition-colors"
            style={{ background: annual ? '#3B82F6' : 'rgba(255,255,255,0.1)' }}
          >
            <motion.div
              className="w-5 h-5 bg-white rounded-full shadow-md"
              animate={{ x: annual ? 20 : 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            />
          </button>
          <span className={`text-sm font-medium flex items-center gap-2 transition-colors ${annual ? 'text-white' : 'text-slate-500'}`}>
            Annually
            <AnimatePresence>
              {annual && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-xs px-2.5 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/20"
                >
                  Save 20%
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto text-left">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.55 }}
              className="relative"
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <motion.div
                    animate={{ boxShadow: ['0 0 16px rgba(59,130,246,0.4)', '0 0 28px rgba(59,130,246,0.7)', '0 0 16px rgba(59,130,246,0.4)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="px-5 py-1 rounded-full text-white text-xs font-bold whitespace-nowrap"
                    style={{ background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)' }}
                  >
                    <Zap size={11} className="inline-block mr-1 -mt-0.5" />
                    Most Popular
                  </motion.div>
                </div>
              )}

              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="h-full rounded-2xl p-7 flex flex-col relative overflow-hidden"
                style={{
                  background: plan.bg,
                  border: `1px solid ${plan.borderColor}`,
                  boxShadow: plan.popular ? `0 0 50px rgba(59,130,246,0.12)` : 'none',
                }}
              >
                {/* Top glow for popular */}
                {plan.popular && (
                  <div
                    className="absolute inset-0 pointer-events-none rounded-2xl"
                    style={{ background: 'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 55%)' }}
                  />
                )}

                {/* Shimmer on popular card */}
                {plan.popular && <CardShimmer />}

                {/* Plan name + desc */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-bold text-xl">{plan.name}</h3>
                    {plan.popular && (
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full font-bold"
                        style={{ background: 'rgba(59,130,246,0.15)', color: '#60A5FA', border: '1px solid rgba(59,130,246,0.3)' }}
                      >
                        ✦ Recommended
                      </span>
                    )}
                  </div>
                  <p className="text-slate-500 text-sm mb-6">{plan.desc}</p>
                </div>

                {/* Price */}
                <div className="flex items-end gap-1.5 mb-7 relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={annual ? 'annual' : 'monthly'}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="text-5xl font-bold text-white stat-number"
                    >
                      ${plan.priceM === 0 ? '0' : annual ? plan.priceA : plan.priceM}
                    </motion.span>
                  </AnimatePresence>
                  <span className="text-slate-500 text-sm mb-2">
                    {plan.priceM === 0 ? 'forever free' : '/mo'}
                  </span>
                  {plan.priceM > 0 && annual && (
                    <span className="text-slate-600 text-xs mb-2 line-through ml-1">${plan.priceM}</span>
                  )}
                </div>

                {/* Feature list */}
                <ul className="space-y-3 mb-8 flex-1 relative z-10">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-slate-300 text-sm">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: `${plan.accentColor}20` }}
                      >
                        <Check className="w-2.5 h-2.5" style={{ color: plan.accentColor }} />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full h-11 rounded-xl font-semibold text-sm transition-all relative z-10 flex items-center justify-center gap-2"
                  style={
                    plan.popular
                      ? {
                          background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
                          color: 'white',
                          boxShadow: '0 0 20px rgba(59,130,246,0.35)',
                        }
                      : {
                          background: 'rgba(255,255,255,0.05)',
                          color: 'white',
                          border: `1px solid ${plan.borderColor}`,
                        }
                  }
                >
                  {plan.cta}
                  <ArrowRight size={14} />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-slate-600 text-sm mt-8"
        >
          No credit card required · Cancel anytime · SOC 2 certified
        </motion.p>
      </div>
    </section>
  )
}
