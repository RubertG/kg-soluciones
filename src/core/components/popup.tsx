interface Props {
  className?: string
  children: React.ReactNode
}

export const Popup = ({
  className, children
}: Props) => {
  return (
    <main className={`fixed top-0 left-0 w-full h-full z-50 bg-bg-100/95 backdrop-blur-sm entry-animation-2 flex items-center justify-center p-4 ${className}`}>
      {children}
    </main>
  )
}
