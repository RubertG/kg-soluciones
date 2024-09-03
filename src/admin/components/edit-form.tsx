"use client"

import { useCategoryTableStore } from "../stores/category-table.store"
import { CategoryForm } from "./category-form"

interface Props {
  className?: string
  editId: string
}

export const EditForm = ({
  className, editId
}: Props) => {
  const categories = useCategoryTableStore(state => state.categories)

  return (
    <>
      <CategoryForm
        className={className}
        defaultValues={{ name: categories.find(c => c.id === editId)?.name || "" }}
        idCategory={editId}
      />
    </>
  )
}