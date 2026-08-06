"use client"

import { forwardRef } from 'react'
import { cn } from '@/lib/utils/cn'
import type { InputProps, InputSize } from './Input.types'

const sizeStyles: Record<InputSize, string> = {
  sm: 'px-[var(--spacing-3)] py-[var(--spacing-2)] text-sm',
  md: 'px-[var(--spacing-4)] py-[var(--spacing-2)] text-base',
  lg: 'px-[var(--spacing-5)] py-[var(--spacing-3)] text-lg',
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      inputSize = 'md',
      fullWidth = false,
      startAdornment,
      endAdornment,
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
      <div className={cn('flex flex-col gap-[var(--spacing-2)]', fullWidth ? 'w-full' : 'w-auto')}>
        <label
          htmlFor={inputId}
          className={cn(
            'text-[13px] font-semibold leading-5',
            disabled
              ? 'text-[var(--color-text-disabled)]'
              : 'text-[var(--color-text-primary)]'
          )}
        >
          {label}
        </label>
        <div className={cn('relative', fullWidth ? 'w-full' : 'w-auto')}>
          {startAdornment && (
            <span className="pointer-events-none absolute inset-y-0 left-4 z-10 flex items-center text-[var(--color-brand-primary)]">
              {startAdornment}
            </span>
          )}
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
              startAdornment && 'pl-11',
              endAdornment && 'pr-11',
              className
            )}
            aria-invalid={hasError}
            aria-describedby={hasError ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
            {...props}
          />
          {endAdornment && (
            <span className="absolute inset-y-0 right-4 z-10 flex items-center text-[var(--color-text-tertiary)]">
              {endAdornment}
            </span>
          )}
        </div>
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
