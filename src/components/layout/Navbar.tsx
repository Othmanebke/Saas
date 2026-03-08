export function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass-panel border-b border-white/5 bg-neuro-900/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-neuro-primary to-neuro-secondary shadow-[0_0_15px_rgba(0,240,255,0.4)] flex items-center justify-center">
            <div className="w-3 h-3 bg-neuro-900 rounded-sm" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">Neuro<span className="text-slate-400">Flow</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors hover:shadow-[0_0_10px_rgba(255,255,255,0.1)]">Features</a>
          <a href="#workflow" className="hover:text-white transition-colors">Workflows</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-sm font-medium text-slate-300 hover:text-white hidden md:block transition-colors">Log in</button>
          <a href="#cta" className="h-10 px-5 inline-flex items-center justify-center rounded-full bg-white text-neuro-900 font-medium text-sm hover:bg-slate-200 transition-colors">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  )
}