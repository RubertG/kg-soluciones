import { getCartServer, ProductsSummary } from "@/cart"
import { PrincipalButton } from "@/core"

async function CartPage() {
  const products = await getCartServer()

  return (
    <section className="mt-20 text-text-200 flex flex-col-reverse gap-4 mx-auto lg:grid lg:grid-cols-2 lg:gap-6 lg:max-w-none">
      {
        products.length > 0 ? (
          <>
            <div></div>
            <aside>
              <ProductsSummary products={products} />
            </aside>
          </>
        ) : (
          <section className="flex flex-col items-center justify-center gap-3">
            <p className="text-text-100">No hay productos en el carrito :(</p>
            <PrincipalButton href="/catalogo">
              Seguir cotizando productos
            </PrincipalButton>
          </section>
        )
      }
    </section>
  )
}

export default CartPage