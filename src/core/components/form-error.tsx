interface Props {
  children: React.ReactNode
  className?: string
}

export const FormError = ({
  children,
  className
}: Props) => {
  return (
    <p className={`text-red-500 text-sm mt-1 ${className}`}>
      {children}
    </p>
  )
}