import { Product } from "@/core/types/db/db"
import { ButtonsProducts, CounterProduct, ImgsContainer } from "@/catalog"
import { ButtonShare, defaultUrl } from "@/core"

interface Props {
  className?: string
  product: Product
}

export const ProductInfoContainer = ({
  product, className
}: Props) => {
  return (
    <section className={`grid grid-cols-1 lg:grid-cols-[45%_auto] gap-4 lg:gap-5 ${className}`}>
      <ImgsContainer imgs={product.images} />
      <aside className="overflow-hidden">
        <header className="flex gap-2 items-center justify-between">
          <h2 className="text-xl lg:text-2xl font-bold text-text-100">
            {product.name}
          </h2>
          <ButtonShare
            url={`${defaultUrl}/catalogo/${product.id}`}
            title={`${product.name} - KG Soluciones`}
            text={`¡Te invito a que mires el producto "${product.name}" en KG Soluciones!`}
          />
        </header>

        <div className="text-text-200 text-sm lg:text-base mt-3" dangerouslySetInnerHTML={{ __html: product.description }} />

        {
          product.price && (
            <>
              <h2 className="text-lg font-bold text-text-100 mt-5">
                Selecciona la cantidad
              </h2>
              <CounterProduct
                className="mt-3"
                price={product.price}
              />
            </>
          )
        }

        <ButtonsProducts
          id={product.id}
          className="mt-6"
        />
      </aside>
    </section>
  )
}
