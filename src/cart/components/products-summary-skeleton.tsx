import Skeleton from "react-loading-skeleton"
import { ProductCartSkeleton } from "./product-cart-skeleton"

interface Props {
  className?: string
  numberSkeletons?: number
}

export const ProductsSummarySkeleton = ({
  className, numberSkeletons = 3
}: Props) => {
  const array = Array.from({ length: numberSkeletons })

  return (
    <section className={`${className}`}>
      <ul className="grid grid-cols-1 gap-2.5">
        {
          array.map((_, index) => (
            <ProductCartSkeleton key={index} />
          ))
        }
      </ul>
      <ul className="px-4 py-2 bg-bg-card/30 border border-bg-200 rounded-lg mt-4">
        {
          array.map((_, index) => {
            return (
              <li
                key={index}
                className="flex items-center overflow-hidden justify-between gap-1.5 mb-1 last:mb-0"
              >
                <p className="text-text-200 overflow-hidden text-sm text-ellipsis whitespace-nowrap w-[150px]">
                  <Skeleton className="w-full" />
                </p>
                <p className="text-text-200 font-bold flex items-center gap-2 whitespace-nowrap">
                  --
                </p>
              </li>
            )
          })
        }

        <li className="flex items-center justify-between border-t border-bg-300 mt-2 pt-2">
          <p className="text-text-200 font-bold">Total</p>
          <p className="text-text-200 font-bold">--</p>
        </li>
      </ul>
    </section>
  )
}