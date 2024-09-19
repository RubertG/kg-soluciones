import { ButtonsProducts } from "@/catalog"
import { ButtonShare, defaultUrl } from "@/core"
import Skeleton from "react-loading-skeleton"

interface Props {
  className?: string
}

export const ProductInfoContainerSkeleton = ({
  className
}: Props) => {
  return (
    <section className={`grid grid-cols-1 lg:grid-cols-[45%_auto] gap-4 lg:gap-5 ${className}`}>
      <div className="-mt-1">
        <Skeleton
          className="w-full rounded-lg aspect-[4/3]"
        />
      </div>
      <aside className="overflow-hidden">
        <header className="flex gap-2 items-center justify-between">
          <div className="w-full">
            <Skeleton className="text-xl" count={1} />
          </div>
          <ButtonShare
            url={`${defaultUrl}/catalogo`}
            title={`Compartir producto - KG Soluciones`}
            text=""
          />
        </header>

        <Skeleton
          className="text-sm lg:text-base mt-3"
          count={3}
        />

        <ButtonsProducts
          id=""
          disabled
          className="mt-5"
        />
      </aside>
    </section>
  )
}
