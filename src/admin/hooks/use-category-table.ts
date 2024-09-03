"use client"

import { useEffect } from "react"
import { useCategoryTableStore } from "../stores/category-table.store"
import { toast } from "sonner"
import { deleteCategories } from "../services/categories.service"
import { Category } from "@/core/types/db/db"

export const useCategoryTable = () => {
  const fetchCategories = useCategoryTableStore(state => state.fetchCategories)
  const loading = useCategoryTableStore(state => state.loading)
  const error = useCategoryTableStore(state => state.error)
  const loadingDelete = useCategoryTableStore(state => state.loadingDelete)
  const categories = useCategoryTableStore(state => state.categories)
  const setSelectedCategories = useCategoryTableStore(state => state.setSelectedCategories)
  const selectedCategories = useCategoryTableStore(state => state.selectedCategories)
  const deleteCategoriesState = useCategoryTableStore(state => state.deleteCategories)
  const setLoadingDelete = useCategoryTableStore(state => state.setLoadingDelete)

  useEffect(() => {
    fetchCategories()
  }, [])

  useEffect(() => {
    if (!error) return
    toast.error(error)
  }, [error])

  const handleDelete = async () => {
    if (!selectedCategories) return

    setLoadingDelete(true)
    const { error, success } = await deleteCategories(selectedCategories)

    if (error) {
      toast.error(error)
    } else if (success) {
      toast.success(success)
      deleteCategoriesState()
    }

    setLoadingDelete(false)
  }

  const handleChange = (selectedRows: { allSelected: boolean; selectedCount: number; selectedRows: Category[]; }) => {
    setSelectedCategories(selectedRows.selectedRows)
  }

  return {
    loading,
    loadingDelete,
    categories,
    selectedCategories,
    handleDelete,
    handleChange
  }
}