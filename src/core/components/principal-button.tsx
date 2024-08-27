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
      className={`bg-primary-100 lg:hover:bg-blue-600 text-text-100 text-sm lg:text-base py-1.5 px-3.5 rounded-lg lg:transition-colors ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}

interface PropsButton extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  className?: string
  children: React.ReactNode
}

export const PrincipalActionButton = ({
  children, className, ...props
}: PropsButton) => {
  return (
    <button
      className={`bg-primary-100 lg:hover:bg-blue-600 text-text-100 text-sm lg:text-base py-1.5 px-3.5 rounded-lg lg:transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
