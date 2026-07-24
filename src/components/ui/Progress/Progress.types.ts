export type ProgressSize = 'sm' | 'md' | 'lg'

export interface ProgressProps {
  value: number
  max?: number
  size?: ProgressSize
  showValue?: boolean
  label?: string
  className?: string
}
