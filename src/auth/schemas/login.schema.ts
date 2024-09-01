import { z } from "zod"

export const loginSchema = z.object({
  email: z
    .string()
    .email({
      message: "Ingresa un correo electrónico valido"
    }),
  password: z
    .string()
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres"
    })
})