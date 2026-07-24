import { cn } from '@/lib/utils/cn'
import { Button } from '../Button'
import type { ErrorStateProps } from './ErrorState.types'

const ErrorIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-[var(--color-feedback-error)]"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </svg>
)

export function ErrorState({
  title = 'Ocorreu um erro',
  message,
  onRetry,
  className,
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center p-8',
        className
      )}
    >
      <div className="mb-4">
        <ErrorIcon />
      </div>
      <h3 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
        {title}
      </h3>
      <p className="text-sm text-[var(--color-text-secondary)] mb-4 max-w-md">
        {message}
      </p>
      {onRetry && (
        <Button variant="primary" onClick={onRetry}>
          Tentar novamente
        </Button>
      )}
    </div>
  )
}
