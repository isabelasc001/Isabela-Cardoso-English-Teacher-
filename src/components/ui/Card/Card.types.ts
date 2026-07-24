export interface CardProps {
  header?: React.ReactNode
  footer?: React.ReactNode
  hoverable?: boolean
  clickable?: boolean
  onClick?: () => void
  children: React.ReactNode
  className?: string
}
