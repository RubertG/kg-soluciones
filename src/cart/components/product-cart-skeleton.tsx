import { Delete } from "@/core"
import Skeleton from "react-loading-skeleton"

export const ProductCartSkeleton = () => {
  return (
    <li className="flex w-full gap-2 items-center justify-between rounded-lg lg:hover:bg-bg-card/30 lg:transition-colors pr-2">
      <div className="flex gap-3 items-center overflow-hidden w-full">
        <div className="rounded-lg aspect-[4/3] w-[100px] overflow-hidden">
          <picture className="-mt-2 block h-[110%]">
            <Skeleton className="w-full h-full" />
          </picture>
        </div>

        <div className="flex flex-col items-start justify-start gap-1 overflow-hidden py-2">
          <h3 className="w-full">
            <Skeleton className="w-full" width={150} height={20} />
          </h3>
        </div>
      </div>
      <button disabled>
        <Delete className="w-5 h-5 stroke-text-300" />
      </button>
    </li>
  )
}