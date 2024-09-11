interface Props {
  params: {
    id: string
  }
}

function CartProductPage({
  params: { id }
}: Props) {
  return (
    <div className="mt-20 text-text-200">
      Producto del carrito con id <code>{id}</code>
    </div>
  )
}

export default CartProductPage