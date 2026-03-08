import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const PLANS = [
  {
    name: 'Starter',
    desc: 'Perfect for individuals and small teams.',
    priceM: 0,
    priceA: 0,
    features: ['5 workflows', '1,000 tasks/mo', '3 integrations', 'Community support'],
    cta: 'Get Started Free',
    popular: false,
    borderColor: 'rgba(255,255,255,0.08)',
    accentColor: '#60A5FA',
  },
  {
    name: 'Pro',
    desc: 'For teams that need more power and speed.',
    priceM: 49,
    priceA: 39,
    features: ['Unlimited workflows', '50,000 tasks/mo', '50+ integrations', 'AI agent access', 'Priority support'],
    cta: 'Start Pro Trial',
    popular: true,
    borderColor: 'rgba(59,130,246,0.5)',
    accentColor: '#3B82F6',
  },
  {
    name: 'Enterprise',
    desc: 'Unlimited power with dedicated capacity.',
    priceM: 149,
    priceA: 119,
    features: ['Everything in Pro', 'Unlimited tasks', 'Custom AI models', 'SSO & SOC2', 'Dedicated manager'],
    cta: 'Contact Sales',
    popular: false,
    borderColor: 'rgba(249,115,22,0.3)',
    accentColor: '#F97316',
  },
]

export function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="py-28 bg-black relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-widest uppercase mb-5"
        >
          Pricing
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-5"
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
          Start for free. Scale as you grow. No hidden fees.
        </motion.p>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className={`text-sm font-medium ${annual ? 'text-slate-500' : 'text-white'}`}>Monthly</span>
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
          <span className={`text-sm font-medium flex items-center gap-2 ${annual ? 'text-white' : 'text-slate-500'}`}>
            Annually
            <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/15 text-green-400 border border-green-500/20">
              Save 20%
            </span>
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
              {plan.popular && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-bold z-20 whitespace-nowrap"
                  style={{
                    background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
                    boxShadow: '0 0 20px rgba(59,130,246,0.5)',
                  }}
                >
                  Most Popular
                </div>
              )}

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="h-full rounded-2xl p-7 flex flex-col relative overflow-hidden"
                style={{
                  background: plan.popular ? '#0F0F0F' : '#0D0D0D',
                  border: `1px solid ${plan.borderColor}`,
                  boxShadow: plan.popular ? `0 0 40px rgba(59,130,246,0.1)` : 'none',
                }}
              >
                {plan.popular && (
                  <div
                    className="absolute inset-0 pointer-events-none rounded-2xl"
                    style={{ background: 'radial-gradient(circle at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 60%)' }}
                  />
                )}

                <h3 className="text-white font-bold text-xl mb-1 relative z-10">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-6 relative z-10">{plan.desc}</p>

                <div className="flex items-end gap-1.5 mb-7 relative z-10">
                  <span className="text-5xl font-bold text-white">
                    ${plan.priceM === 0 ? '0' : (annual ? plan.priceA : plan.priceM)}
                  </span>
                  {plan.priceM > 0 && (
                    <span className="text-slate-500 text-sm mb-1.5">/mo</span>
                  )}
                  {plan.priceM === 0 && (
                    <span className="text-slate-500 text-sm mb-1.5">forever</span>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1 relative z-10">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-slate-300 text-sm">
                      <Check className="w-4 h-4 shrink-0" style={{ color: plan.accentColor }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full h-11 rounded-xl font-semibold text-sm transition-all relative z-10"
                  style={
                    plan.popular
                      ? {
                          background: 'linear-gradient(135deg, #3B82F6, #1D4ED8)',
                          color: 'white',
                          boxShadow: '0 0 20px rgba(59,130,246,0.3)',
                        }
                      : {
                          background: 'rgba(255,255,255,0.05)',
                          color: 'white',
                          border: `1px solid ${plan.borderColor}`,
                        }
                  }
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
