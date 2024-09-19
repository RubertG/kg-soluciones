import { ProductInfoContainerSkeleton } from "@/catalog"
import { BackButton } from "@/core"
import Skeleton from "react-loading-skeleton"

export default function Loading() {
  return (
    <div className="mt-20 text-text-200">
      <section className="flex items-center gap-3 justify-between">
        <BackButton href="/catalogo" />
        <p className="text-accent-300 text-xl">
          <Skeleton className="w-full" />
        </p>
      </section>

      <ProductInfoContainerSkeleton className="mt-7" />
    </div>
  )
}