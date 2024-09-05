import { z } from "zod"

export const productSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "El nombre debe tener al menos 3 caracteres"
    })
    .max(20, {
      message: "El nombre debe tener máximo 20 caracteres"
    }),
  description: z
    .string()
    .min(3, {
      message: "La descripción debe tener al menos 3 caracteres"
    }),
  price: z
    .string()
    .refine((value) => {
      if (!value || value === "") return true
      return parseInt(value) > 0
    }, {
      message: "El precio debe ser mayor a 0"
    })
    .optional(),
  category: z
    .string()
    .min(1, {
      message: "Debe seleccionar una categoria"
    })
})