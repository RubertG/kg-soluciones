"use client"

import { FormError, Input, PrincipalActionButton, TextArea, useForm } from "@/core"
import { productSchema } from "@/admin"
import { CategorySelect } from "./category-select"

interface Props {
  className?: string
  defaultValues?: ProductInputs
  onSubmit: (inputs: ProductInputs) => Promise<void>
}

export const ProductForm = ({
  className, defaultValues, onSubmit
}: Props) => {
  const { errors, handleSubmit, loading, register } = useForm<ProductInputs>({
    schema: productSchema,
    values: defaultValues,
    actionSubmit: onSubmit
  })

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full p-3 lg:p-5 lg:pt-4 border border-bg-200 rounded-lg bg-bg-card/30 ${className}`}
    >
      <h2 className="text-xl lg:text-2xl font-bold text-text-100 text-center">
        {defaultValues ? 'Editar producto' : 'Crear producto'}
      </h2>

      <Input
        className="mt-5"
        id="name"
        labelText="Nombre del producto"
        placeholder="Ej: Batman pequeño de 30 cm"
        isValid={errors.name?.message === undefined}
        {...register('name')}
      />
      {errors.name && <FormError>{errors.name.message}</FormError>}

      <TextArea
        className="mt-4"
        labelText="Descripción del producto"
        id="description"
        placeholder="Ej: Descripción breve del producto. Puedes dar detalles como el tamaño, material, color, etc."
        isValid={errors.description?.message === undefined}
        {...register('description')}
      />
      {errors.description && <FormError>{errors.description.message}</FormError>}

      <Input
        className="mt-2"
        labelText="Precio del producto"
        id="price"
        type="number"
        placeholder={defaultValues && !defaultValues.price ? "Sin precio" : "Ej: 20000"}
        isObligatory={false}
        isValid={errors.price?.message === undefined}
        {...register('price')}
      />
      {errors.price && <FormError>{errors.price.message}</FormError>}

      <CategorySelect
        className="mt-4"
        isValid={errors.category?.message === undefined}
        register={register}
      />
      {errors.category && <FormError>{errors.category.message}</FormError>}

      <PrincipalActionButton className="mt-5 w-full">
        {
          loading ? (
            <p>{defaultValues ? 'Actualizando producto...' : 'Creando producto...'}</p>
          ) : (
            <p>{defaultValues ? 'Actualizar producto' : 'Crear producto'}</p>
          )
        }
      </PrincipalActionButton>
    </form>
  )
}