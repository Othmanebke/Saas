import { motion } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const FAQS = [
  { q: "Is NeuroFlow secure for heavily regulated industries?", a: "Absolutely. NeuroFlow is SOC2 Type II compliance, HIPAA ready, and features AES-256 bit encryption at rest and in transit. We support single-tenant dedicated deployments for enterprise." },
  { q: "Do I need a technical team to set up automations?", a: "No. Our intuitive workflow builder is entirely visual. However, for advanced logic, we support writing custom JavaScript or Python scripts inside 'Code Nodes'." },
  { q: "What integrations do you support?", a: "We integrate directly with Salesforce, Jira, Slack, MS Teams, AWS, GitHub, Zendesk, Stripe, and 500+ other popular SaaS tools via OAuth." },
  { q: "How does the AI feature work?", a: "NeuroFlow uses a secure, non-training instance of GPT-4o and Claude 3.5 Sonnet to parse unstructured data within your workflows without sending data for training." }
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-32 relative z-10 max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-bold text-white mb-6">Got questions?</h2>
        <p className="text-xl text-slate-400">Everything you need to know about the product and billing.</p>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`border rounded-2xl transition-all duration-300 overflow-hidden bg-white/5 ${open === i ? 'border-neuro-primary/50 shadow-[0_0_20px_rgba(0,240,255,0.05)]' : 'border-white/10 hover:border-white/30'}`}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full text-left px-8 py-6 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-neuro-primary/20"
            >
              <h3 className={`text-lg font-medium pr-8 transition-colors ${open === i ? 'text-neuro-primary' : 'text-slate-200'}`}>{faq.q}</h3>
              {open === i ? <Minus className="text-neuro-primary shrink-0" /> : <Plus className="text-slate-400 shrink-0" />}
            </button>
            <motion.div
              initial={false}
              animate={{ height: open === i ? 'auto' : 0, opacity: open === i ? 1 : 0 }}
              className="px-8 overflow-hidden text-slate-400 leading-relaxed"
            >
              <div className="pb-6 pt-2">
                {faq.a}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}