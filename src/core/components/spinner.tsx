interface Props {
  className?: string
  color?: string
}

export const Spinner = ({
  color = "#0085ff", className
}: Props) => {
  return (
    <div
      className={`custom-loader ${className}`}
      style={{
        background: `radial-gradient(farthest-side, ${color} 94%, #0000) top/5px 5px no-repeat, conic-gradient(#0000 30%, ${color})`
      }}
    />
  )
}
