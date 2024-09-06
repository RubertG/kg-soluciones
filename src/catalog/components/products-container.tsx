"use client"

import { ProductCard, ProductCardSkeleton, useProductsStore } from "@/catalog"
import { PrincipalButton } from "@/core"
import { useEffect } from "react"

interface Props {
  className?: string
  searchParams: { [key: string]: string | undefined }
}

export const ProductsContainer = ({
  className, searchParams: { nombre: name, categoria: category }
}: Props) => {
  const productsFilter = useProductsStore(state => state.productsFilter)
  const getProducts = useProductsStore(state => state.getProducts)
  const loading = useProductsStore(state => state.loading)

  useEffect(() => {
    getProducts(name, category)
  }, [name, category])

  return (
    <main className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-5 gap-3 items-start mb-10 ${className}`}>
      {
        loading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <ProductCardSkeleton key={index} />
          ))
        ) : (
          productsFilter.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )
      }
      {
        !loading && productsFilter.length === 0 && (
          <div className="text-center text-text-200 col-span-full">
            <p className="mb-4 text-sm lg:text-base">No hay productos en esta categoría :(</p>
            <PrincipalButton href="/catalogo">
              Ver todos los productos
            </PrincipalButton>
          </div>
        )
      }
    </main>
  )
}