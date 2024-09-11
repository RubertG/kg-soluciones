import { Category } from "./category"
import { CategorySkeleton } from "./category-skeleton"

export const CategoriesSkeleton = () => {
  return (
    <ul className="flex flex-wrap gap-2 lg:gap-3 gap-y-3 items-center justify-center">
      <li>
        <Category category={{
          id: "all",
          name: "Todos"
        }} />
      </li>
      {
        Array.from({ length: 4 }).map((_, index) => (
          <li key={index}>
            <CategorySkeleton />
          </li>
        ))
      }
    </ul>
  )
}