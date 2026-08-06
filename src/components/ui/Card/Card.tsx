import { cn } from '@/lib/utils/cn'
import type { CardProps, CardPadding } from './Card.types'

const paddingStyles: Record<CardPadding, string> = {
  compact: 'p-[var(--spacing-3)]',
  normal: 'p-[var(--spacing-4)]',
  relaxed: 'p-[var(--spacing-6)]',
  none: 'p-0',
}

export function Card({
  header,
  footer,
  hoverable = false,
  clickable = false,
  onClick,
  padding = 'normal',
  children,
  className,
}: CardProps) {
  const Component = clickable ? 'button' : 'div'

  return (
    <Component
      onClick={onClick}
      className={cn(
        'bg-[var(--color-card-background)] border border-[var(--color-card-border)]',
        'rounded-[var(--radius-md)] overflow-hidden',
        'transition-all duration-200',
        hoverable && 'hover:bg-[var(--color-card-hover)] hover:shadow-[var(--shadows-level1)]',
        clickable && 'cursor-pointer text-left w-full',
        className
      )}
    >
      {header && (
        <div className="px-[var(--spacing-4)] py-[var(--spacing-3)] border-b border-[var(--color-card-border)]">
          {header}
        </div>
      )}
      <div className={paddingStyles[padding]}>{children}</div>
      {footer && (
        <div className="px-[var(--spacing-4)] py-[var(--spacing-3)] border-t border-[var(--color-card-border)] bg-[var(--color-background-subtle)]">
          {footer}
        </div>
      )}
    </Component>
  )
}
