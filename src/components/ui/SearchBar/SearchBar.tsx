"use client"

import { useState, useCallback } from 'react'
import { cn } from '@/lib/utils/cn'
import { SearchIcon, ClearIcon } from './SearchIcon'
import type { SearchBarProps } from './SearchBar.types'

export function SearchBar({
  placeholder = 'Buscar...',
  value: controlledValue,
  defaultValue = '',
  onSearch,
  onChange,
  fullWidth = false,
  className,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const isControlled = controlledValue !== undefined
  const currentValue = isControlled ? controlledValue : internalValue

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value
      if (!isControlled) {
        setInternalValue(newValue)
      }
      onChange?.(newValue)
    },
    [isControlled, onChange]
  )

  const handleClear = useCallback(() => {
    if (!isControlled) {
      setInternalValue('')
    }
    onChange?.('')
  }, [isControlled, onChange])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onSearch?.(currentValue)
      }
    },
    [onSearch, currentValue]
  )

  return (
    <div
      className={cn(
        'relative flex items-center',
        fullWidth ? 'w-full' : 'w-auto'
      )}
    >
      <div className="absolute left-3 pointer-events-none text-[var(--color-text-tertiary)]">
        <SearchIcon />
      </div>
      <input
        type="text"
        value={currentValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className={cn(
          'w-full pl-10 pr-10 py-2 rounded-[var(--radius-sm)]',
          'bg-[var(--color-input-background)] border border-[var(--color-input-border)]',
          'text-[var(--color-input-text)] placeholder:text-[var(--color-input-placeholder)]',
          'hover:border-[var(--color-input-hover)]',
          'focus:outline-none focus:border-[var(--color-input-focus)] focus:ring-2 focus:ring-[var(--color-focus-ring)] focus:ring-opacity-50',
          'transition-all duration-200',
          className
        )}
      />
      {currentValue && (
        <button
          type="button"
          onClick={handleClear}
          className="absolute right-3 p-1 rounded-full hover:bg-[var(--color-surface-hover)] transition-colors text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)]"
          aria-label="Limpar busca"
        >
          <ClearIcon />
        </button>
      )}
    </div>
  )
}
