"use client"

import { Counter, Delete } from "@/core"
import Link from "next/link"
import { ProductCart as Product } from "../types/cart"
import Image from "next/image"
import { useState } from "react"
import { addCartServer } from "../services/cart-cookies-server.service"

interface Props {
  product: Product
  handleDelete: (id: string) => void
}

export const ProductCart = ({
  product,
  handleDelete
}: Props) => {
  const [counter, setCounter] = useState(product.quantity || 1)

  const handleSubtract = () => {
    const newCounter = counter - 1

    if (newCounter === 0) {
      handleDelete(product.id)
      return
    }

    setCounter(newCounter)
    addCartServer(product.id, newCounter)
  }

  const handleSum = () => {
    const newCounter = counter + 1
    setCounter(newCounter)
    addCartServer(product.id, newCounter)
  }

  return (
    <li className="flex w-full gap-2 items-center justify-between rounded-lg lg:hover:bg-bg-card/30 lg:transition-colors pr-2">
      <div className="flex gap-3 items-center overflow-hidden w-full">
        <Image
          className="object-cover rounded-lg aspect-[4/3]"
          src={product.images[0].url || ""}
          alt={`${product.name} - Bonita Maquillaje`}
          title={`${product.name} - Bonita Maquillaje`}
          width={100}
          height={100 * 0.33}
        />
        <div className="flex flex-col items-start justify-start gap-1 overflow-hidden py-2">
          <h3 className="text-text-100 text-ellipsis overflow-hidden whitespace-nowrap"
            title={product.name}
          >
            <Link
              href={`/catalogo/${product.id}`}
              title={`Ir al producto ${product.name}`}>
              {product.name}
            </Link>
          </h3>

          {
            product.price && product.quantity && (
              <div className="flex gap-3 items-center flex-wrap">
                <Counter
                  count={counter}
                  handleSubtract={handleSubtract}
                  handleSum={handleSum}
                />
                <p
                  className="text-text-300"
                  title={`$${product.price}`}
                >
                  ${product.price}
                </p>
              </div>
            )
          }
        </div>
      </div>
      <button
        onClick={() => handleDelete(product.id)}
      >
        <Delete className="w-5 h-5 stroke-text-300 lg:hover:scale-125 lg:transition-transform" />
      </button>
    </li>
  )
}