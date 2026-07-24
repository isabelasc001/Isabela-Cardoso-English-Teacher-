import { cn } from '@/lib/utils/cn'
import type { CardProps } from './Card.types'

export function Card({
  header,
  footer,
  hoverable = false,
  clickable = false,
  onClick,
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
        <div className="px-4 py-3 border-b border-[var(--color-card-border)]">
          {header}
        </div>
      )}
      <div className="p-4">{children}</div>
      {footer && (
        <div className="px-4 py-3 border-t border-[var(--color-card-border)] bg-[var(--color-background-subtle)]">
          {footer}
        </div>
      )}
    </Component>
  )
}
