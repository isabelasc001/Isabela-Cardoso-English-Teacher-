"use client"

import { useState } from 'react'
import { cn } from '@/lib/utils/cn'
import type { AvatarProps, AvatarSize } from './Avatar.types'

const sizeStyles: Record<AvatarSize, string> = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-16 h-16 text-lg',
}

function getInitials(name: string): string {
  const words = name.trim().split(/\s+/)
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase()
  }
  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase()
}

export function Avatar({ 
  src, 
  alt = 'Avatar', 
  name, 
  size = 'md', 
  className 
}: AvatarProps) {
  const [imageError, setImageError] = useState(false)
  
  const showFallback = !src || imageError
  const initials = name ? getInitials(name) : '?'

  if (showFallback) {
    return (
      <div
        className={cn(
          'inline-flex items-center justify-center rounded-full',
          'bg-[var(--color-brand-soft)] text-[var(--color-brand-primary)]',
          'font-medium select-none',
          sizeStyles[size],
          className
        )}
        role="img"
        aria-label={name || alt}
      >
        {initials}
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setImageError(true)}
      className={cn(
        'inline-block rounded-full object-cover',
        sizeStyles[size],
        className
      )}
    />
  )
}
