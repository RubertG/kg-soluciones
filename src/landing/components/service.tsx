interface Props {
  description: string
  image: React.ReactNode
  className?: string
}

export const Service = ({
  description,
  image,
  className
}: Props) => {
  return (
    <div className={`bg-bg-card/30 backdrop-blur-[3px] rounded-lg p-3.5 text-sm text-text-200 text-center w-[275px] ${className}`}>
      <picture
        className="flex h-[80px] items-center justify-center"
      >
        {image}
      </picture>
      <p className="mt-2">
        {description}
      </p>
    </div>
  )
}