"use client"

import { useCategoryTableStore, CategoryForm } from "@/admin"
import { X } from "@/core"
import Link from "next/link"

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
      <Link
        className="absolute top-5 right-5"
        href={`/administracion/categorias`}
      >
        <X />
      </Link>
      <CategoryForm
        className={className}
        defaultValues={{ name: categories.find(c => c.id === editId)?.name || "" }}
        idCategory={editId}
      />
    </>
  )
}