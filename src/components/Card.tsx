import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../lib/utils'

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-2xl p-6 relative overflow-hidden group transition-all duration-300", className)}
      style={{ background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.07)' }}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      {props.children}
    </div>
  )
)
Card.displayName = 'Card'