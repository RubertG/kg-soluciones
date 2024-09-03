"use client"

import { Category } from "@/core/types/db/db"
import DataTable, { TableColumn } from "react-data-table-component"
import { customStyles, TableLoader, useCategoryTable } from "@/admin"
import Link from "next/link"
import { ConfirmPopup } from "@/core"

interface Props {
  className?: string
}

export const CategoryTable = ({
  className
}: Props) => {
  const {
    categories, handleChange, handleDelete,
    loading, loadingDelete, selectedCategories,
    confirmDelete, handlePopup
  } = useCategoryTable()

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
            onClick={handlePopup}
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
      {
        confirmDelete && (
          <ConfirmPopup
            actionAccept={handleDelete}
            actionCancel={handlePopup}
            title="¿Seguro que quieres eliminar estas categorías?"
            description="Ten en cuenta que esta operación no puede deshacerse y las categorías serán eliminadas permanentemente"
          />
        )
      }
    </aside>
  )
}
