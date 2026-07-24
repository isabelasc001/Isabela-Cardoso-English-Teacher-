export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'card'

export interface SkeletonProps {
  variant?: SkeletonVariant
  width?: string | number
  height?: string | number
  className?: string
}
