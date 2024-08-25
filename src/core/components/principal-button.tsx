import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  className?: string
  children: React.ReactNode
}

export const PrincipalButton = ({
  children, className, ...props
}: Props) => {
  return (
    <Link
      className={`bg-primary-100 lg:hover:bg-blue-600 text-text-100 text-sm lg:text-base py-1.5 px-3.5 rounded-lg lg:transition-opacity ${className}`}
      {...props}
    >
      {children}
    </Link>

  )
}
