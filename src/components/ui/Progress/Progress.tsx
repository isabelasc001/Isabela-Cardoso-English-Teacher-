import { cn } from '@/lib/utils/cn'
import type { ProgressProps, ProgressSize } from './Progress.types'

const sizeStyles: Record<ProgressSize, string> = {
  sm: 'h-1.5',
  md: 'h-2',
  lg: 'h-3',
}

export function Progress({
  value,
  max = 100,
  size = 'md',
  showValue = false,
  label,
  className,
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  return (
    <div className={cn('w-full', className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between mb-1.5">
          {label && (
            <span className="text-sm font-medium text-[var(--color-text-primary)]">
              {label}
            </span>
          )}
          {showValue && (
            <span className="text-sm text-[var(--color-text-secondary)]">
              {Math.round(percentage)}%
            </span>
          )}
        </div>
      )}
      <div
        className={cn(
          'w-full bg-[var(--color-progress-background)] rounded-full overflow-hidden',
          sizeStyles[size]
        )}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div
          className="h-full bg-[var(--color-progress-fill)] rounded-full transition-all duration-300 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
