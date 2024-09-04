"use client"

import { FormError, Input, PrincipalActionButton, SelectInput, TextArea, useForm } from "@/core"
import { productSchema } from "@/admin"

interface Props {
  className?: string
}

export const ProductForm = ({
  className
}: Props) => {
  const { errors, handleSubmit, loading, register } = useForm<ProductInputs>({
    schema: productSchema,
    actionSubmit: async (inputs) => {
      console.log(inputs)
    }
  })

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full p-3 lg:p-5 lg:pt-4 border border-bg-200 rounded-lg bg-bg-card/30 ${className}`}
    >
      <h2 className="text-xl lg:text-2xl font-bold text-text-100">
        Crear producto
      </h2>

      <Input
        className="mt-5"
        id="name"
        labelText="Nombre del producto"
        placeholder="Batman pequeño impresion 3D"
        {...register('name')}
      />
      {errors.name && <FormError>{errors.name.message}</FormError>}

      <TextArea
        className="mt-4"
        labelText="Descripción del producto"
        id="description"
        placeholder="Descripción breve del producto. Puedes dar detalles como el tamaño, material, color, etc."
        {...register('description')}
      />
      {errors.description && <FormError>{errors.description.message}</FormError>}

      <Input
        className="mt-2"
        labelText="Precio del producto"
        id="price"
        type="number"
        placeholder="20000"
        {...register('price')}
      />
      {errors.price && <FormError>{errors.price.message}</FormError>}

      <SelectInput
        className="mt-4"
        labelText="Categoría del producto"
        id="category"
        title="Selecciona su categoría"
        items={[
          { id: '1', name: 'Categoría 1' },
          { id: '2', name: 'Categoría 2' },
          { id: '3', name: 'Categoría 3' }
        ]}
        {...register('category')}
      />
      {errors.category && <FormError>{errors.category.message}</FormError>}

      <PrincipalActionButton className="mt-5">
        {loading ? 'Creando producto...' : 'Crear producto'}
      </PrincipalActionButton>
    </form>
  )
}