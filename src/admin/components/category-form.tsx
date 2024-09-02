"use client"

import { FormError, Input, PrincipalActionButton, useForm } from "@/core"
import { categorySchema, saveCategory } from "@/admin"
import { CategoryInputs } from "../types/category"
import { Category } from "@/core/types/db/db"
import { Timestamp } from "firebase/firestore"
import { toast } from "sonner"

interface Props {
  className?: string
}

export const CategoryForm = ({
  className
}: Props) => {
  const { errors, handleSubmit, loading, register } = useForm<CategoryInputs>({
    schema: categorySchema,
    actionSubmit: async (inputs) => {
      const newCategory: Category = {
        id: inputs.name,
        name: inputs.name,
        createAt: Timestamp.now()
      }
      const { success, error } = await saveCategory(newCategory)

      if (success) {
        toast.success(success)
      } else {
        toast.error(error)
      }
    }
  })

  return (
    <form
      className={`w-full max-w-lg p-3 lg:p-5 border border-bg-200 rounded-lg bg-bg-card/30 ${className}`}
      onSubmit={handleSubmit}
    >
      <h2 className="text-text-100 text-2xl font-bold text-center">
        Agregar categoría
      </h2>

      <Input
        id="name"
        className="mt-4"
        labelText="Nombre de la categoria"
        placeholder="Ingresa el nombre de la categoria"
        isValid={errors.name?.message === undefined}
        {...register("name")}
      />
      {errors.name?.message && <FormError>{errors.name.message}</FormError>}

      <PrincipalActionButton
        className="mt-5 w-full"
      >
        {loading ? "Guardando..." : "Guardar"}
      </PrincipalActionButton>
    </form>
  )
}