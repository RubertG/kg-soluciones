import {z} from "zod"

export const categorySchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "El nombre debe tener al menos 3 caracteres"
    })
    .max(20, {
      message: "El nombre debe tener como máximo 20 caracteres"
    })
})