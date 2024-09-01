"use client"

import { FormError, Input, PrincipalActionButton, useForm } from "@/core"
import { loginSchema, loginService } from "@/auth"
import { LoginInputs } from "../types/login"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface Props {
  className?: string
}

export const LoginForm = ({
  className
}: Props) => {
  const router = useRouter()
  const { errors, handleSubmit, loading, register } = useForm<LoginInputs>({
    schema: loginSchema,
    actionSubmit: async (fields) => {
      const { error } = await loginService(fields.email, fields.password)

      if (error) {
        toast.error(error)
        return 
      } 

      router.push('/administracion')
    }
  })

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full max-w-lg mx-auto p-3 lg:p-5 border border-bg-200 rounded-lg bg-bg-card/30 backdrop-blur-[2px] ${className}`}
    >
      <h1 className="font-bold text-text-100 text-2xl lg:text-3xl text-center mb-4">Iniciar sesión</h1>
      <Input
        id="email"
        labelText="Correo electrónico"
        type="email"
        placeholder="Ingresa tu correo"
        isValid={errors.email?.message === undefined}
        {...register("email")}
      />
      {errors.email?.message && <FormError>{errors.email.message}</FormError>}

      <Input
        id="password"
        className="mt-4"
        type="password"
        labelText="Contraseña"
        placeholder="Ingresa tu contraseña"
        isValid={errors.password?.message === undefined}
        {...register("password")}
      />
      {errors.password?.message && <FormError>{errors.password.message}</FormError>}

      <PrincipalActionButton className="mt-5 w-full">
        {loading ? "Iniciando sesión..." : "Iniciar sesión"}
      </PrincipalActionButton>
    </form>
  )
}