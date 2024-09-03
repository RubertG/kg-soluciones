import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  className?: string
  children: React.ReactNode
}

export const SecondaryButton = ({
  children, className, ...props
}: Props) => {
  return (
    <Link
      className={`text-text-200 text-sm lg:text-base lg:hover:text-text-100 lg:transition-colors ${className}`}
      {...props}
    >
      {children}
    </Link>
  )
}

interface PropsButton extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const SecondaryActionButton = ({
  children, className, ...props
}: PropsButton) => {
  return (
    <button
      className={`text-text-200 text-sm lg:text-base lg:hover:text-text-100 lg:transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

