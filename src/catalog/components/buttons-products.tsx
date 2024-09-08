"use client"

import { defaultUrl, PrincipalButton } from "@/core"
import { usePathname } from "next/navigation"

export const ButtonsProducts = ({
  className
}: {
  className?: string
}) => {
  const pathname = usePathname()
  const message = `¡Hola KG Soluciones! 👋
          %0AQuiero cotizar este producto:
          %0A   ${defaultUrl}${pathname}
  `

  return (
    <footer
      className={`flex gap-3 gap-y-4 lg:gap-5 flex-wrap ${className}`}>
      <PrincipalButton
        href={`https://api.whatsapp.com/send?phone=3114470929&text=${message}`}
      >
        Cotizar producto
      </PrincipalButton>
      {/* <button
        className={clsx("relative inline-flex items-center justify-center rounded-lg text-text-200 gap-2 text-center", {
          "lg:hover:text-principal-300 group": !inCart
        })}
        type="button"
        onClick={handleAddCart}
        disabled={inCart}
      >
        {inCart ? "En el carrito" : "Añadir al carrito"}
      </button> */}
    </footer>
  )
}