"use client"

import { FormError, Input, PrincipalActionButton, useForm } from "@/core"
import { categorySchema, saveCategory, updateCategory, useCategoryTableStore } from "@/admin"
import { CategoryInputs } from "../types/category"
import { Category } from "@/core/types/db/db"
import { Timestamp } from "firebase/firestore"
import { toast } from "sonner"
import { useRef } from "react"
import { v4 as uuid } from "uuid"
import { useRouter } from "next/navigation"

interface Props {
  className?: string,
  defaultValues?: CategoryInputs
  idCategory?: string
}

export const CategoryForm = ({
  className, defaultValues, idCategory
}: Props) => {
  const router = useRouter()
  const addCategory = useCategoryTableStore(state => state.addCategory)
  const editCategory = useCategoryTableStore(state => state.editCategory)
  const formRef = useRef<HTMLFormElement>(null)
  const { errors, handleSubmit, loading, register } = useForm<CategoryInputs>({
    schema: categorySchema,
    values: defaultValues,
    actionSubmit: async (inputs) => {
      const newCategory: Category = {
        id: idCategory || uuid(),
        name: inputs.name,
        createAt: Timestamp.now()
      }
      let success, error

      if (defaultValues) {
        const res = await updateCategory(newCategory)
        success = res.success
        error = res.error
      } else {
        const res = await saveCategory(newCategory)
        success = res.success
        error = res.error
      }

      if (success) {
        if (defaultValues) {
          editCategory(newCategory)
        } else {
          addCategory(newCategory)
        }

        toast.success(success)
        formRef.current?.reset()
      } else {
        toast.error(error)
      }
      
      if (defaultValues) router.replace("/administracion/categorias")
    }
  })

  return (
    <form
      className={`w-full max-w-lg p-3 lg:p-5 border border-bg-200 rounded-lg bg-bg-card/30 ${className}`}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <h2 className="text-text-100 text-2xl font-bold text-center">
        {defaultValues ? "Editar" : "Agregar"} categoría
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