interface Props {
  title: string
  children?: React.ReactNode
  className?: string
}

export const Header = ({
  children, title, className
}: Props) => {
  return (
    <header className={className}>
      <h1 className="text-text-100 text-3xl font-bold md:text-4xl">{title}</h1>
      {children}
      <hr className="my-5 border-bg-300" />
    </header>
  )
}
