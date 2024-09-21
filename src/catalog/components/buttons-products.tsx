"use client"

import { PrincipalActionButton, SecondaryActionButton } from "@/core"
import { useEffect, useState } from "react"
import { addCartServer, deleteCartServer, inCart as inCartService } from "@/cart"
import { useQuantityProduct } from "../stores/quantity-product.store"
import { useTransitionRouter } from "next-view-transitions"

interface Props {
  className?: string
  disabled?: boolean
  id: string
}

export const ButtonsProducts = ({
  className, id, disabled = false
}: Props) => {
  const [inCart, setInCart] = useState(false)
  const router = useTransitionRouter()
  const counter = useQuantityProduct(state => state.quantity)

  useEffect(() => {
    setInCart(inCartService(id))
  }, [])

  const handleCart = () => {
    if (inCart) {
      deleteCartServer(id)
    } else {
      addCartServer(id, counter > 0 ? counter : undefined)
    }

    setInCart(!inCart)
  }

  const handleQuote = () => {
    if (!inCart) addCartServer(id, counter > 0 ? counter : undefined)

    router.push(`/carrito/${id}`)
  }

  return (
    <footer
      className={`flex gap-3 gap-y-4 lg:gap-5 flex-wrap ${className}`}>
      <PrincipalActionButton
        aria-disabled={disabled}
        onClick={handleQuote}
      >
        Cotizar producto
      </PrincipalActionButton>
      <SecondaryActionButton
        aria-disabled={disabled}
        onClick={handleCart}
      >
        {inCart ? "Eliminar del carrito" : "Añadir al carrito"}
      </SecondaryActionButton>
    </footer>
  )
}