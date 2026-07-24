import { cn } from '@/lib/utils/cn'
import type { SkeletonProps, SkeletonVariant } from './Skeleton.types'

const variantStyles: Record<SkeletonVariant, string> = {
  text: 'rounded-[var(--radius-xs)] h-4',
  circular: 'rounded-full',
  rectangular: 'rounded-[var(--radius-md)]',
  card: 'rounded-[var(--radius-md)] p-4',
}

export function Skeleton({ 
  variant = 'text', 
  width, 
  height, 
  className 
}: SkeletonProps) {
  const style: React.CSSProperties = {
    width: width ? (typeof width === 'number' ? `${width}px` : width) : undefined,
    height: height ? (typeof height === 'number' ? `${height}px` : height) : 
      variant === 'circular' ? '40px' : variant === 'card' ? '120px' : undefined,
  }

  if (variant === 'card') {
    return (
      <div 
        className={cn(
          'bg-[var(--color-surface-hover)] animate-pulse',
          variantStyles[variant],
          className
        )}
        style={style}
      >
        <div className="space-y-3">
          <div className="h-4 bg-[var(--color-surface-pressed)] rounded-[var(--radius-xs)] w-3/4" />
          <div className="h-3 bg-[var(--color-surface-pressed)] rounded-[var(--radius-xs)] w-full" />
          <div className="h-3 bg-[var(--color-surface-pressed)] rounded-[var(--radius-xs)] w-5/6" />
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'bg-[var(--color-surface-hover)] animate-pulse',
        variantStyles[variant],
        className
      )}
      style={style}
    />
  )
}
