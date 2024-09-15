import { ProductCart } from "../types/cart"
import { ProductsCart } from "@/cart"

interface Props {
  className?: string
  products: ProductCart[]
}

function roundToDecimals(num: number) {
  return parseInt(num.toFixed(0))
}

export const ProductsSummary = ({
  products,
  className
}: Props) => {
  let total = 0

  for (const product of products) {
    if (!product.price || !product.quantity) continue

    total += product.quantity * product.price
  }

  return (
    <section className={`${className}`}>
      <ProductsCart products={products} />
      <ul className="px-4 py-2 bg-bg-card/30 border border-bg-200 rounded-lg mt-4">
        {
          products?.map(product => {
            const total = (product?.price && product?.quantity) && roundToDecimals(product.quantity * product.price)

            return (
              <li
                key={product.id}
                className="flex items-center overflow-hidden justify-between gap-1.5 mb-1 last:mb-0"
              >
                <p className="text-text-200 overflow-hidden text-sm text-ellipsis whitespace-nowrap">
                  {product.name}
                </p>
                {
                  total ? (
                    <p className="text-text-200 font-bold flex items-center gap-2">
                      ${total}
                    </p>
                  ) : (
                    <p className="text-text-200 font-bold flex items-center gap-2">
                      --
                    </p>
                  )
                }
              </li>
            )
          })
        }

        <li className="flex items-center justify-between border-t border-bg-300 mt-2 pt-2">
          <p className="text-text-200 font-bold">Total</p>
          <p className="text-text-200 font-bold">{total > 0 ? `$${roundToDecimals(total)}` : '--'}</p>
        </li>
      </ul>
    </section>
  )
}