import { motion } from 'framer-motion'
import { Card } from '../Card'
import { Activity, Zap, Shield, Database, Layout, Sparkles } from 'lucide-react'

const FEATURES = [
  {
    icon: <Sparkles className="w-6 h-6 text-neuro-primary" />,
    title: "AI-Powered Operations",
    desc: "Leverage proprietary models to analyze metrics and automate your daily operations intelligently."
  },
  {
    icon: <Zap className="w-6 h-6 text-neuro-secondary" />,
    title: "Instant Workflows",
    desc: "Create complex conditional automations visually with our no-code node builder in seconds."
  },
  {
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    title: "Bank-Grade Security",
    desc: "SOC2 Compliance, end-to-end encryption, and role-based permissions standard."
  },
  {
    icon: <Activity className="w-6 h-6 text-rose-400" />,
    title: "Real-time Analytics",
    desc: "Live dashboards that synthesize billions of data points into actionable insights."
  },
  {
    icon: <Database className="w-6 h-6 text-amber-400" />,
    title: "Universal Integration",
    desc: "Connects securely with over 500+ standard business toolchains out of the box."
  },
  {
    icon: <Layout className="w-6 h-6 text-blue-400" />,
    title: "Beautiful Interface",
    desc: "Dark mode native, meticulously designed for speed, clarity, and reduced eye strain."
  }
]

export function Features() {
  return (
    <section id="features" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-neuro-primary/20 blur-[100px] pointer-events-none rounded-full"
          />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Everything you need. <br />
            <span className="text-slate-400">Nothing you don't.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            NeuroFlow combines data aggregation, task automation, and artificial intelligence into a single, cohesive engine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-inner">
                  {feat.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">{feat.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {feat.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}