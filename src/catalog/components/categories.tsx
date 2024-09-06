import { getCategories } from "@/admin"
import { Category } from "@/catalog"

export const Categories = async () => {
  const { categories } = await getCategories()

  return (
    <ul className="flex flex-wrap gap-2 lg:gap-3 gap-y-3 items-center justify-center">
      <li>
        <Category category={{
          id: "all",
          name: "Todos"
        }} />
      </li>
      {
        categories.map(category => (
          <li key={category.id}>
            <Category category={{
              id: category.id,
              name: category.name
            }} />
          </li>
        ))
      }
    </ul>
  )
}