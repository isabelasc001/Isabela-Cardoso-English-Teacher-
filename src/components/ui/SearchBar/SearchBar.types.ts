export interface SearchBarProps {
  placeholder?: string
  value?: string
  defaultValue?: string
  onSearch?: (query: string) => void
  onChange?: (query: string) => void
  fullWidth?: boolean
  className?: string
}
