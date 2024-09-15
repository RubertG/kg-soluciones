import { getCartServer, ProductsSummary, QuoteForm } from "@/cart"
import { BackButton, PrincipalButton } from "@/core"

async function CartPage() {
  const products = await getCartServer()

  return (
    <>
      <BackButton href="/catalogo" className="mt-20" />
      <section className="mt-7 text-text-200 flex flex-col-reverse gap-4 mx-auto max-w-lg lg:grid lg:grid-cols-2 lg:gap-7 lg:max-w-none lg:items-start">
        {
          products.length > 0 ? (
            <>
              <QuoteForm products={products} />
              <aside>
                <ProductsSummary products={products} />
              </aside>
            </>
          ) : (
            <section className="flex flex-col items-center justify-center gap-3 lg:col-span-full">
              <p className="text-text-100">No hay productos en el carrito :(</p>
              <PrincipalButton href="/catalogo">
                Seguir cotizando productos
              </PrincipalButton>
            </section>
          )
        }
      </section>
    </>
  )
}

export default CartPage