import { motion } from 'framer-motion'
import { Card } from '../Card'
import { Button } from '../Button'

export function CTA() {
  return (
    <section id="cta" className="py-32 relative z-10 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <Card className="p-16 md:p-24 text-center bg-gradient-to-br from-neuro-900 to-[#121a30] border-neuro-primary/20 shadow-[0_0_50px_rgba(0,240,255,0.15)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-neuro-secondary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neuro-primary/20 rounded-full blur-[100px] pointer-events-none" />
            
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight relative z-10">
              Ready to redefine <br />
              <span className="text-gradient">how your team works?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto relative z-10">
              Join thousands of forward-thinking companies running their operations on NeuroFlow. Create your workspace in seconds.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 relative z-10">
              <Button size="lg" className="w-full sm:w-auto px-12 h-16 text-lg tracking-wide rounded-full">Get Started for Free</Button>
              <Button size="lg" variant="ghost" className="w-full sm:w-auto text-slate-400">Talk to Sales</Button>
            </div>
            
            <p className="mt-8 text-sm text-slate-500 font-medium tracking-wide">
              No credit card required. Cancel anytime.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}