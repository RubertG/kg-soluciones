"use client"

import { Category } from "@/core/types/db/db"
import { useEffect } from "react"
import DataTable, { TableColumn, TableStyles } from "react-data-table-component"
import { deleteCategories, TableLoader, useCategoryTableStore } from "@/admin"
import Link from "next/link"
import { toast } from "sonner"

interface Props {
  className?: string
}

const customStyles: TableStyles = {
  table: {
    style: {
      backgroundColor: 'transparent'
    }
  },
  headRow: {
    style: {
      backgroundColor: 'transparent',
      borderBottomColor: 'transparent',
      color: '#f2f2f2',
      fontSize: '16px'
    }
  },
  rows: {
    style: {
      backgroundColor: 'transparent',
      borderTop: '1px solid #2b3545',
      color: '#b0b0b0',
      fontSize: '14px'
    }
  },
  headCells: {
    style: {
      backgroundColor: 'transparent',
      color: 'white'
    }
  },
  cells: {
    style: {
      backgroundColor: 'transparent',
      color: '#b0b0b0'
    }
  },
  noData: {
    style: {
      backgroundColor: 'transparent',
      color: '#b0b0b0'
    }
  },
  progress: {
    style: {
      backgroundColor: 'transparent',
      color: '#b0b0b0'
    }
  }
}

export const CategoryTable = ({
  className
}: Props) => {
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

  const columns: TableColumn<Category>[] = [
    {
      name: 'Nombre',
      selector: row => row.name,
      sortable: true
    },
    {
      name: 'Fecha',
      selector: row => row.createAt.toDate().toLocaleDateString('es-ES'),
      sortable: true
    },
    {
      name: 'Acciones',
      cell: (row) => (
        <Link
          href={`/administracion/categorias?editar=${row.id}`}
          className="text-sm text-text-100 lg:hover:text-primary-100 lg:transition-colors"
        >
          Editar
        </Link>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true
    }
  ]

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

  return (
    <aside className={`rounded-lg bg-bg-card/40 p-3.5 border border-bg-200 w-full max-w-2xl ${className}`}>
      <DataTable
        columns={columns}
        data={categories}
        progressPending={loading}
        progressComponent={<TableLoader />}
        noDataComponent={(
          <p className='text-text-100 text-center'>
            No hay categorías disponibles :(
          </p>
        )
        }
        selectableRows
        contextMessage={{
          plural: 'Categorías',
          singular: 'Categoría',
          message: 'No hay categorías'
        }}
        customStyles={customStyles}
        onSelectedRowsChange={handleChange}
      />
      {
        selectedCategories && selectedCategories.length > 0 && (
          <button
            className="text-red-100 bg-red-800/40 lg:hover:bg-red-800/60 lg:transition-colors backdrop-blur-sm border border-red-800 py-1.5 px-3.5 rounded-lg text-sm mt-3"
            onClick={handleDelete}
          >
            {
              loadingDelete ? (
                'Eliminando...'
              ) : (
                <>{`Eliminar ${selectedCategories.length} categoría${selectedCategories.length > 1 ? 's' : ''}`}</>
              )
            }
          </button>
        )
      }
    </aside>
  )
}
