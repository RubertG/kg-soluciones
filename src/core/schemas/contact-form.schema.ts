import { z } from "zod"

// Completar errores de validacion
export const contactFormSchema = z.object({
  name: z.string().min(3, {
    message: "El nombre debe tener al menos 3 caracteres"
  }).max(50, {
    message: "El nombre debe tener como máximo 50 caracteres"
  }),
  email: z
    .string()
    .email({
      message: "Ingresa un correo electrónico válido"
    }),
  number: z.string().min(10, {
    message: "El número de teléfono debe tener 10 caracteres"
  }).max(10, {
    message: "El número de teléfono debe tener 10 caracteres"
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres"
  }).max(1000, {
    message: "El mensaje debe tener como máximo 1000 caracteres"
  })
})