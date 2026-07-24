"use client"

import { forwardRef } from 'react'
import { cn } from '@/lib/utils/cn'
import type { ButtonProps, ButtonVariant, ButtonSize } from './Button.types'

const variantStyles: Record<ButtonVariant, string> = {
  primary: `bg-[var(--color-button-primary-background)] text-[var(--color-button-primary-text)] 
    hover:bg-[var(--color-button-primary-hover)] active:bg-[var(--color-button-primary-active)] 
    disabled:bg-[var(--color-button-primary-disabled)] disabled:cursor-not-allowed`,
  secondary: `bg-[var(--color-button-secondary-background)] text-[var(--color-button-secondary-text)] 
    hover:bg-[var(--color-button-secondary-hover)] active:bg-[var(--color-button-secondary-active)]`,
  outline: `bg-transparent border border-[var(--color-border-default)] text-[var(--color-text-primary)] 
    hover:bg-[var(--color-surface-hover)] active:bg-[var(--color-surface-pressed)]`,
  ghost: `bg-transparent text-[var(--color-button-ghost-text)] 
    hover:bg-[var(--color-button-ghost-hover)] active:bg-[var(--color-button-ghost-active)]`,
  text: `bg-transparent text-[var(--color-text-primary)] hover:text-[var(--color-brand-primary)]`,
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm rounded-[var(--radius-sm)]',
  md: 'px-4 py-2 text-base rounded-[var(--radius-sm)]',
  lg: 'px-6 py-3 text-lg rounded-[var(--radius-md)]',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-2',
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        {children}
        {!loading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </button>
    )
  }
)

Button.displayName = 'Button'
