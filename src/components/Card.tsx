import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '../lib/utils'

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("glass-panel rounded-2xl p-6 relative overflow-hidden group transition-all duration-300 hover:border-neuro-primary/30", className)}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
      {props.children}
    </div>
  )
)
Card.displayName = 'Card'