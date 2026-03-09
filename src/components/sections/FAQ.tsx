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
    a: 'Our AI Agent connects to GPT-4o, Claude 3.5, Gemini, and other leading models to handle unstructured data, generate content, and make decisions inside your workflows. Your data is never used for model training.',
  },
  {
    q: 'Is Fusion AI secure for enterprise use?',
    a: 'Yes. We are SOC 2 Type II certified, support SSO and SCIM provisioning, offer role-based access control, and provide AES-256 encryption at rest and in transit. Enterprise customers get single-tenant dedicated deployments.',
  },
  {
    q: 'What happens if a workflow fails?',
    a: 'Every workflow run is logged in detail. You get instant Slack/email alerts on failures, automatic retry logic with configurable backoff, and a full execution timeline to debug exactly what went wrong — down to the millisecond.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. There are no long-term commitments. You can upgrade, downgrade, or cancel your plan at any time from your dashboard. No cancellation fees, ever.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-28 bg-black relative">
      {/* Background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(59,130,246,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-tag mb-5 inline-flex"
          >
            FAQ
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-4"
            style={{ fontFamily: 'Space Grotesk, sans-serif' }}
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

        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="rounded-xl overflow-hidden"
              style={{
                background: open === i ? 'rgba(59,130,246,0.04)' : '#0D0D0D',
                border: open === i
                  ? '1px solid rgba(59,130,246,0.35)'
                  : '1px solid rgba(255,255,255,0.06)',
                transition: 'all 0.2s ease',
                boxShadow: open === i ? '0 0 24px rgba(59,130,246,0.07)' : 'none',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none group"
              >
                {/* Number */}
                <span
                  className="text-[11px] font-bold tabular-nums shrink-0 w-6 text-center"
                  style={{ color: open === i ? '#3B82F6' : 'rgba(255,255,255,0.2)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <h3
                  className="font-medium text-sm flex-1 transition-colors"
                  style={{ color: open === i ? 'white' : 'rgba(226,232,240,0.9)' }}
                >
                  {faq.q}
                </h3>

                <motion.div
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {open === i
                    ? <Minus size={16} style={{ color: '#3B82F6' }} className="shrink-0" />
                    : <Plus size={16} className="text-slate-500 shrink-0 group-hover:text-slate-300 transition-colors" />
                  }
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="flex gap-4 px-6 pb-5">
                      <div className="w-6 shrink-0" /> {/* spacer for number alignment */}
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Support nudge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-500 text-sm">
            Still have questions?{' '}
            <a href="#" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
              Talk to our team →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
