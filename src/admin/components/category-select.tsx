"use client"

import { SelectInput } from "@/core"
import { useCategoryTableStore } from "../stores/category-table.store"
import { UseFormRegister } from "react-hook-form"
import { useEffect } from "react"

interface Props {
  className?: string
  register: UseFormRegister<ProductInputs>
  isValid: boolean
}

export const CategorySelect = ({
  className, register, isValid
}: Props) => {
  const categories = useCategoryTableStore(state => state.categories)
  const fetchCategories = useCategoryTableStore(state => state.fetchCategories)

  useEffect(() => {
    if (categories.length === 0)
    fetchCategories()
  }, [])
  
  return (
    <SelectInput
      className={className}
      labelText="Categoría del producto"
      id="category"
      title="Selecciona su categoría"
      items={categories}
      isValid={isValid}
      {...register('category')}
    />
  )
}