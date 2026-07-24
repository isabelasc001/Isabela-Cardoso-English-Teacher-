export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'error'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps {
  variant?: BadgeVariant
  size?: BadgeSize
  children: React.ReactNode
  className?: string
}
