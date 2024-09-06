interface Props {
  params: {
    id: string
  }
}

export default function Page({ params: { id } }: Props) {
  return (
    <div className="mt-20 text-text-200">
      Producto con el id {id}
    </div>
  )
}