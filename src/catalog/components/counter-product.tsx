"use client"

import { Counter } from "@/core"
import { useQuantityProduct } from "@/catalog"
import { useEffect } from "react"

export const CounterProduct = ({
  className,
  price
}: {
  className?: string,
  price: number
}) => {
  const quatity = useQuantityProduct(state => state.quantity)
  const setQuantity = useQuantityProduct(state => state.setQuantity)

  useEffect(() => {
    setQuantity(0)
    return () => setQuantity(0)
  }, [])

  const handleSubstract = () => {
    if (quatity === 0) return

    const newCount = quatity - 1
    setQuantity(newCount)
  }

  const handleSum = () => {
    setQuantity(quatity + 1)
  }

  return (
    <div className={`flex items-center justify-start gap-3 lg:gap-5 ${className}`}>
      <Counter
        handleSubtract={handleSubstract}
        count={quatity}
        handleSum={handleSum}
      />
      {
        quatity > 0 && (
          <p className="text-lg text-text-100">${Math.ceil(price * quatity)}</p>
        )
      }
    </div>
  )
}