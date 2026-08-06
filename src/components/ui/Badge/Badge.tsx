import { cn } from '@/lib/utils/cn'
import type { BadgeProps, BadgeVariant, BadgeSize } from './Badge.types'

const variantStyles: Record<BadgeVariant, string> = {
  neutral: 'bg-[var(--color-badge-neutral)] text-[var(--color-text-primary)]',
  primary: 'bg-[var(--color-badge-primary)] text-[var(--color-brand-primary)]',
  success: 'bg-[var(--color-badge-success)] text-[var(--color-feedback-success)]',
  warning: 'bg-[var(--color-badge-warning)] text-[var(--color-feedback-warning)]',
  error: 'bg-[var(--color-badge-error)] text-[var(--color-feedback-error)]',
}

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-[var(--spacing-2)] py-[var(--spacing-1)] text-xs',
  md: 'px-[var(--spacing-3)] py-[var(--spacing-2)] text-sm',
}

export function Badge({ 
  variant = 'neutral', 
  size = 'sm', 
  children, 
  className 
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-[var(--radius-sm)]',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  )
}
