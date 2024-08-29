"use client"

import { contactFormSchema, contactFormSubmit, FormError, Input, PrincipalActionButton, useForm } from "@/core"
import { TextArea } from "./text-area"
import { Inputs } from "../types/contact-form"

interface Props {
  className?: string
}

export const ContactForm = ({
  className
}: Props) => {
  const { errors, handleSubmit, register } = useForm<Inputs>({
    schema: contactFormSchema,
    actionSubmit: async (fields) => contactFormSubmit(fields)
  })

  return (
    <form
      className={`w-full max-w-lg mx-auto p-3 lg:p-5 border border-bg-200 rounded-lg bg-bg-card/30 backdrop-blur-[2px] ${className}`}
      onSubmit={handleSubmit}
    >
      <Input
        labelText="Nombre y apellido"
        id="name"
        placeholder="Ingresa tu nombre y apellido"
        isValid={errors.name?.message === undefined}
        {...register("name")}
      />
      {errors.name?.message && <FormError>{errors.name.message}</FormError>}

      <Input
        className="mt-4"
        labelText="Correo electrónico"
        id="email"
        type="email"
        placeholder="tucorreo@ejemplo.com"
        isValid={errors.email?.message === undefined}
        {...register("email")}
      />
      {errors.email?.message && <FormError>{errors.email.message}</FormError>}

      <Input
        className="mt-4 appearance-none"
        labelText="Número de teléfono"
        type="number"
        id="number"
        placeholder="Ingresa tu número de teléfono"
        isValid={errors.number?.message === undefined}
        {...register("number")}
      />
      {errors.number?.message && <FormError>{errors.number.message}</FormError>}

      <TextArea
        className="mt-4"
        labelText="¿Qué necesitas?"
        id="message"
        placeholder="Ingresa información sobre el servicio que necesitas"
        isValid={errors.message?.message === undefined}
        {...register("message")}
      />
      {errors.message?.message && <FormError>{errors.message.message}</FormError>}

      <PrincipalActionButton
        className="w-full mt-4"
      >
        Hacer cotización
      </PrincipalActionButton>
    </form>
  )
}