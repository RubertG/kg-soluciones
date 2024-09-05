"use client"

import { toast } from "sonner"
import { deleteProducts } from "../services/products.service"
import { Product } from "@/core/types/db/db"
import { useProductsTableStore } from "../stores/products-table.store"
import { useEffect } from "react"

export const useProductsTable = () => {
  const products = useProductsTableStore(state => state.products)
  const loading = useProductsTableStore(state => state.loading)
  const selectedProducts = useProductsTableStore(state => state.selectedProducts)
  const fetchProducts = useProductsTableStore(state => state.fetchProducts)
  const error = useProductsTableStore(state => state.error)
  const loadingDelete = useProductsTableStore(state => state.loadingDelete)
  const confirmDelete = useProductsTableStore(state => state.confirmDelete)
  const setConfirmDelete = useProductsTableStore(state => state.setConfirmDelete)
  const setSelectedProducts = useProductsTableStore(state => state.setSelectedProducts)
  const setLoadingDelete = useProductsTableStore(state => state.setLoadingDelete)
  const deleteProductsState = useProductsTableStore(state => state.deleteProducts)

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    if (!error) return

    toast.error(error)
  }, [error])

  const handlePopup = () => {
    setConfirmDelete(!confirmDelete)
  }

  const handleChange = (selectedRows: { allSelected: boolean; selectedCount: number; selectedRows: Product[]; }) => {
    setSelectedProducts(selectedRows.selectedRows)
  }

  const handleDelete = async () => {
    if (!selectedProducts) return

    setLoadingDelete(true)
    setConfirmDelete(false)
    const { error, success } = await deleteProducts(selectedProducts)

    if (error) {
      toast.error(error)
    } else {
      toast.success(success)
      deleteProductsState()
    }

    setLoadingDelete(false)
  }

  return {
    products,
    handleChange,
    selectedProducts,
    confirmDelete,
    loading,
    loadingDelete,
    handleDelete,
    handlePopup
  }
}