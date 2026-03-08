import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { useState } from 'react'

const FAQS = [
  {
    q: 'Do I need to know how to code?',
    a: 'Not at all. Fusion AI is built for everyone. Our visual drag-and-drop builder lets you create powerful automations without writing a single line of code. For power users, we also support custom JavaScript and Python snippets.',
  },
  {
    q: 'What apps and tools can I connect?',
    a: 'We support 500+ integrations out of the box — including Slack, Notion, Google Workspace, Salesforce, HubSpot, Stripe, GitHub, Jira, and many more. OAuth-based connections take under a minute to set up.',
  },
  {
    q: 'How does the AI Agent work?',
    a: 'Our AI Agent connects to GPT-4o, Claude 3.5, and other leading models to handle unstructured data, generate content, and make decisions inside your workflows. Your data is never used for model training.',
  },
  {
    q: 'Is Fusion AI secure for enterprise use?',
    a: 'Yes. We are SOC 2 Type II certified, support SSO and SCIM provisioning, offer role-based access control, and provide AES-256 encryption at rest and in transit. Enterprise customers get single-tenant dedicated deployments.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. There are no long-term commitments. You can upgrade, downgrade, or cancel your plan at any time directly from your dashboard. No cancellation fees.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-28 bg-black relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
          >
            Frequently asked questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-base"
          >
            Everything you need to know about Fusion AI.
          </motion.p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl overflow-hidden transition-all duration-200"
              style={{
                background: '#0D0D0D',
                border: open === i
                  ? '1px solid rgba(59,130,246,0.4)'
                  : '1px solid rgba(255,255,255,0.07)',
                boxShadow: open === i ? '0 0 20px rgba(59,130,246,0.08)' : 'none',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
              >
                <h3 className={`font-medium text-sm transition-colors ${open === i ? 'text-blue-400' : 'text-slate-200'}`}>
                  {faq.q}
                </h3>
                {open === i
                  ? <Minus size={16} className="text-blue-400 shrink-0" />
                  : <Plus size={16} className="text-slate-500 shrink-0" />
                }
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
