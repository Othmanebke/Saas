import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '../Card'
import { Button } from '../Button'
import { Check } from 'lucide-react'

const PLANS = [
  {
    name: "Growth", desc: "For modern teams beginning to scale.", priceM: 149, priceA: 119,
    features: ["10k Tasks/mo", "Basic Automation", "3 Team Members", "Community Support"],
    popular: false
  },
  {
    name: "Enterprise", desc: "Unlimited power, dedicated capacity.", priceM: 499, priceA: 399,
    features: ["Unlimited Tasks", "Custom Models", "SSO & SOC2 Controls", "Dedicated Account Manager"],
    popular: true
  }
]

export function Pricing() {
  const [annual, setAnnual] = useState(true)

  return (
    <section id="pricing" className="py-32 relative text-center bg-gradient-to-b from-[#060B19] via-neuro-900 to-[#060B19] z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neuro-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Transparent & Predictable.</h2>
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">Scaling shouldn't feel like a punishment. One simple pricing structure.</p>

        <div className="flex items-center justify-center gap-4 mb-20">
          <span className={`text-sm tracking-wider font-semibold ${annual ? 'text-slate-400' : 'text-neuro-primary shadow-sm'}`}>Monthly</span>
          <button 
            onClick={() => setAnnual(!annual)}
            className="w-14 h-8 bg-white/10 rounded-full relative p-1 transition-colors hover:bg-white/20"
          >
            <div className={`w-6 h-6 bg-neuro-primary rounded-full shadow-[0_0_10px_#00F0FF] transition-all ${annual ? 'translate-x-6' : 'translate-x-0'}`} />
          </button>
          <span className={`text-sm tracking-wider font-semibold ${annual ? 'text-neuro-primary shadow-sm' : 'text-slate-400'}`}>
            Annually <span className="text-emerald-400 ml-1 text-xs px-2 py-0.5 rounded-full bg-emerald-400/10">Save 20%</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 -right-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-neuro-secondary to-neuro-primary text-white text-xs font-bold shadow-[0_0_20px_#7000FF55] z-10 uppercase tracking-widest">
                  Most Chosen
                </div>
              )}
              <Card className={`h-full flex flex-col p-10 relative overflow-hidden group ${plan.popular ? 'border-neuro-primary/50 bg-[#0F172A]' : 'opacity-90 bg-white/5 border-white/5'}`}>
                {plan.popular && <div className="absolute -inset-1 bg-gradient-to-b from-neuro-primary/10 to-transparent pointer-events-none" />}
                
                <h3 className="text-2xl font-display font-medium text-white mb-2 relative z-10">{plan.name}</h3>
                <p className="text-sm text-slate-400 mb-6 relative z-10">{plan.desc}</p>
                
                <div className="text-5xl font-display font-bold text-white mb-8 relative z-10 flex items-end gap-2">
                  ${annual ? plan.priceA : plan.priceM}
                  <span className="text-lg font-normal text-slate-500 mb-1">/mo</span>
                </div>
                
                <ul className="space-y-4 mb-10 flex-1 relative z-10">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-slate-300">
                      <Check className="w-5 h-5 text-neuro-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button size="lg" variant={plan.popular ? 'primary' : 'secondary'} className="w-full relative z-10">
                  {plan.popular ? 'Start Enterprise Trial' : 'Get Started for Free'}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}