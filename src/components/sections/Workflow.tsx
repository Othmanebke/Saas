import { motion } from 'framer-motion'
import { Card } from '../Card'
import { CheckCircle2 } from 'lucide-react'

export function Workflow() {
  return (
    <section id="workflow" className="py-32 relative overflow-hidden bg-neuro-900/40">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0,rgba(6,11,25,0)_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-neuro-primary font-medium tracking-wider text-sm mb-4 uppercase">Automations</div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            Workflows that run <br />
            <span className="text-gradient">on autopilot.</span>
          </h2>
          <p className="text-lg text-slate-400 mb-8 leading-relaxed">
            Stop doing manual data entry. Connect your existing tools and let our AI engine orchestrate responses, alerts, and formatting automatically.
          </p>
          
          <ul className="space-y-4">
            {["Drag-and-drop workflow builder", "Pre-built templates for fast setup", "Execution logic & advanced branching"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-300 font-medium">
                <CheckCircle2 className="w-5 h-5 text-neuro-primary" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-tr from-neuro-primary to-neuro-secondary blur-2xl opacity-20" />
          <Card className="relative bg-[#0F172A]/90 backdrop-blur-3xl border-white/10 p-2 overflow-hidden">
            {/* Fake minimal UI for workflow */}
            <div className="bg-[#0c1322] rounded-xl border border-white/5 h-[400px] p-6 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-full bg-gradient-to-b from-transparent via-neuro-primary/50 to-transparent" />
              
              <div className="space-y-12 relative z-10 flex flex-col items-center">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
                  className="bg-white/10 border border-neuro-primary/30 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 backdrop-blur-md"
                >
                  <div className="w-2 h-2 rounded-full bg-neuro-primary shadow-[0_0_10px_#00F0FF]" />
                  Trigger: New Customer
                </motion.div>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}
                  className="bg-white/5 border border-white/10 text-slate-300 px-6 py-3 rounded-xl shadow-lg flex items-center gap-3 backdrop-blur-md relative"
                >
                  Condition: Enterprise Plan
                  <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-8 h-px bg-white/20" />
                </motion.div>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.7 }}
                  className="bg-neuro-primary/10 border border-neuro-primary text-neuro-primary px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(0,240,255,0.1)] flex items-center gap-3 backdrop-blur-md font-medium"
                >
                  Action: Notify Ops Team
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>

      </div>
    </section>
  )
}