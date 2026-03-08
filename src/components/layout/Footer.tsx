export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neuro-900 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-slate-400">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-neuro-primary to-neuro-secondary shadow-[0_0_15px_rgba(0,240,255,0.4)] flex items-center justify-center">
              <div className="w-2 h-2 bg-neuro-900 rounded-sm" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white">Neuro<span className="text-slate-400">Flow</span></span>
          </div>
          <p className="leading-relaxed mb-6">
            Automating the future of work with intelligence, speed, and precision.
          </p>
          <p>© 2026 NeuroFlow Inc. All rights reserved.</p>
        </div>
        
        <div>
          <h4 className="font-medium text-white mb-6">Product</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-neuro-primary transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-neuro-primary transition-colors">Integrations</a></li>
            <li><a href="#" className="hover:text-neuro-primary transition-colors">Pricing</a></li>
            <li><a href="#" className="hover:text-neuro-primary transition-colors">Changelog</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-white mb-6">Company</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-neuro-primary transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-neuro-primary transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-neuro-primary transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-neuro-primary transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-medium text-white mb-6">Legal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-neuro-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-neuro-primary transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-neuro-primary transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}