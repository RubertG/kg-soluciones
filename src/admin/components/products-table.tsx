"use client"

import { Product } from "@/core/types/db/db"
import DataTable, { TableColumn } from "react-data-table-component"
import { customStyles, TableLoader, useProductsTable } from "@/admin"
import Link from "next/link"
import { ConfirmPopup } from "@/core"

interface Props {
  className?: string
}

export const ProductsTable = ({
  className
}: Props) => {
  const {
    products, handleChange, selectedProducts,
    confirmDelete, loading, loadingDelete,
    handleDelete, handlePopup
  } = useProductsTable()

  const columns: TableColumn<Product>[] = [
    {
      name: 'Nombre',
      selector: (row) => row.name,
      sortable: true
    },
    {
      name: 'Descripción',
      selector: (row) => row.description,
      sortable: true
    },
    {
      name: "Precio",
      selector: (row) => row.price,
      sortable: true
    },
    {
      name: 'Categoría',
      selector: (row) => row.category,
      sortable: true
    },
    {
      name: 'Fecha',
      selector: (row) => row.createAt.toDate().toLocaleDateString('es-ES'),
      sortable: true
    },
    {
      name: 'Acciones',
      cell: (row) => (
        <Link
          href={`/administracion/productos/editar/${row.id}`}
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
    <aside className={`rounded-lg bg-bg-card/40 p-3.5 border border-bg-200 w-full max-w-7xl ${className}`}>
      <DataTable
        columns={columns}
        data={products}
        progressPending={loading}
        progressComponent={<TableLoader />}
        noDataComponent={(
          <p className='text-text-100 text-center'>
            No hay productos disponibles :(
          </p>
        )
        }
        selectableRows
        contextMessage={{
          plural: 'Productos',
          singular: 'Producto',
          message: 'No hay productos'
        }}
        customStyles={customStyles}
        onSelectedRowsChange={handleChange}
        pagination
      />
      {
        selectedProducts && selectedProducts.length > 0 && (
          <button
            className="text-red-100 bg-red-800/40 lg:hover:bg-red-800/60 lg:transition-colors backdrop-blur-sm border border-red-800 py-1.5 px-3.5 rounded-lg text-sm mt-3"
            onClick={handlePopup}
          >
            {
              loadingDelete ? (
                'Eliminando...'
              ) : (
                <>{`Eliminar ${selectedProducts.length} producto${selectedProducts.length > 1 ? 's' : ''}`}</>
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
            title="¿Estás seguro?"
            description="Ten en cuenta que esta operación no puede deshacerse y los productos junto con sus imágenes serán eliminados permanentemente"
          />
        )
      }
    </aside>
  )
}
