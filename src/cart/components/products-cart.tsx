"use client"

import { deleteCartServer, ProductCart } from "@/cart"
import { ProductCart as Product } from "../types/cart"

interface Props {
  products: Product[]
}

export const ProductsCart = ({
  products
}: Props) => {
  return (
    <ul className="grid grid-cols-1 gap-2.5">
      {
        products.map(product => (
          <ProductCart
            key={product.id}
            handleDelete={deleteCartServer}
            product={product}
          />
        ))
      }
    </ul>
  )
}