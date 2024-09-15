import { z } from "zod"

export const quoteFormSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "El nombre debe tener al menos 3 caracteres"
    })
    .max(50, {
      message: "El nombre debe tener como máximo 50 caracteres"
    }),
  email: z
    .string()
    .email({
      message: "Ingresa un correo electrónico válido"
    }),
  number: z
    .string()
    .min(10, {
      message: "El número de teléfono debe tener 10 caracteres"
    })
    .max(10, {
      message: "El número de teléfono debe tener 10 caracteres"
    }),
  paymentMethod: z
    .string()
    .min(1, {
      message: "Debe seleccionar un método de pago"
    }),
  address: z
    .string()
    .min(3, {
      message: "La dirección de envío debe tener al menos 3 caracteres"
    }),
  message: z
    .string()
    .optional()
})