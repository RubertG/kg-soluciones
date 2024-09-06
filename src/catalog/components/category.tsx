"use client"

import { type Category as CategoryType } from "@/core/types/db/db"
import clsx from "clsx"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

interface Props {
  category: Pick<CategoryType, "name" | "id">
}

export const Category = ({
  category: { name, id }
}: Props) => {
  const searchParams = useSearchParams()
  const category = searchParams.get("categoria")
  const isActive = id !== "all" ? category === id : !category
  const newUrl = new URLSearchParams(id !== "all" ? { categoria: id } : {})

  return (
    <Link
      href={`/catalogo${id !== "all" ? "?" : ""}${newUrl}`}
      className={clsx(
        "bg-bg-200 px-3.5 py-1.5 text-xs md:text-sm text-text-200 rounded-lg cursor-pointer hover:bg-bg-300 transition-colors",
        isActive && "bg-bg-300"
      )}
    >
      {name}
    </Link>
  )
} 