"use client"

import { forwardRef } from 'react'
import { cn } from '@/lib/utils/cn'
import type { InputProps, InputSize } from './Input.types'

const sizeStyles: Record<InputSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg',
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      inputSize = 'md',
      fullWidth = false,
      className,
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`
    const hasError = !!error

    return (
      <div className={cn('flex flex-col gap-1.5', fullWidth ? 'w-full' : 'w-auto')}>
        <label
          htmlFor={inputId}
          className={cn(
            'text-sm font-medium',
            disabled
              ? 'text-[var(--color-text-disabled)]'
              : 'text-[var(--color-text-primary)]'
          )}
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          className={cn(
            'rounded-[var(--radius-sm)] border bg-[var(--color-input-background)]',
            'text-[var(--color-input-text)] placeholder:text-[var(--color-input-placeholder)]',
            'transition-all duration-200',
            'focus:outline-none focus:border-[var(--color-input-focus)] focus:ring-2 focus:ring-[var(--color-focus-ring)] focus:ring-opacity-50',
            sizeStyles[inputSize],
            hasError
              ? 'border-[var(--color-border-error)]'
              : 'border-[var(--color-input-border)] hover:border-[var(--color-input-hover)]',
            disabled && 'opacity-50 cursor-not-allowed bg-[var(--color-surface-disabled)]',
            fullWidth && 'w-full',
            className
          )}
          aria-invalid={hasError}
          aria-describedby={hasError ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
          {...props}
        />
        {helperText && !hasError && (
          <span
            id={`${inputId}-helper`}
            className="text-sm text-[var(--color-text-tertiary)]"
          >
            {helperText}
          </span>
        )}
        {hasError && (
          <span
            id={`${inputId}-error`}
            className="text-sm text-[var(--color-feedback-error)]"
            role="alert"
          >
            {error}
          </span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
