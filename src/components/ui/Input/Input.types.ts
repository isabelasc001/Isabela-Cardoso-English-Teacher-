export type InputSize = 'sm' | 'md' | 'lg'

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string
  helperText?: string
  error?: string
  inputSize?: InputSize
  fullWidth?: boolean
}
