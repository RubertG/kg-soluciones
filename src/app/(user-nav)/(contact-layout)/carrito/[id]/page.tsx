import { getCartServerById, ProductsSummary, QuoteForm } from "@/cart"
import { BackButton } from "@/core"
import { notFound } from "next/navigation"

interface Props {
  params: {
    id: string
  }
}

async function CartProductPage({
  params: { id }
}: Props) {
  const product = await getCartServerById(id)

  if (!product) return notFound()

  return (
    <>
      <BackButton href="/catalogo" className="mt-20" />
      <section className="mt-7 text-text-200 flex flex-col-reverse gap-4 mx-auto max-w-lg lg:grid lg:grid-cols-2 lg:gap-7 lg:max-w-none lg:items-start">
        <QuoteForm products={[product]} />
        <aside>
          <ProductsSummary products={[product]} />
        </aside>
      </section>
    </>
  )
}

export default CartProductPage