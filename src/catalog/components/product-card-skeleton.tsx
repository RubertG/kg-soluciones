import Skeleton from "react-loading-skeleton"

export const ProductCardSkeleton = () => {
  return (
    <div className="w-full p-2 lg:p-2.5 !pt-1.5 bg-bg-card/40 border border-bg-200 rounded-lg">
      <Skeleton
        className="w-full object-cover aspect-[4/3] rounded-lg"
      />
      <footer className="mt-2">
        <p>
          <Skeleton />
        </p>
      </footer>
    </div>
  )
}
