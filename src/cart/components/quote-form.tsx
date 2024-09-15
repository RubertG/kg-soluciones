"use client"

import { FormError, Input, PrincipalActionButton, SelectInput, TextArea, useForm } from "@/core"
import { quoteFormSchema } from "../schemas/quote-form.schema"
import { ProductCart } from "../types/cart"
import { toast } from "sonner"
import { useRef } from "react"

interface Props {
  className?: string
  products?: ProductCart[]
}

interface Inputs {
  name: string
  email: string
  number: string
  address: string
  paymentMethod: string
  message?: string
}

const paymentMethods = [
  {
    id: 'Efectivo',
    name: 'Efectivo'
  },
  {
    id: 'Transferencia',
    name: 'Transferencia'
  }
]

export const QuoteForm = ({
  className, products
}: Props) => {
  const formRef = useRef<HTMLFormElement>(null)
  const { errors, handleSubmit, loading, register } = useForm<Inputs>({
    schema: quoteFormSchema,
    actionSubmit: async (inputs) => {
      if (!products || products.length === 0) {
        toast.error('No hay productos en el carrito')
        return
      }

      let total = 0
      let productsParser = ""

      for (let i = 0; i < products.length; i++) {
        const product = products[i]

        if (product.price && product.quantity) total += product.price * product.quantity

        productsParser += `
          %0A      ${i + 1}. Nombre: ${product.name}
          ${product.price && product.quantity ?
            `%0A         ${product.price} x ${product.quantity} = $${product.price * product.quantity}` : ''
          }
        `
      }

      const message = `¡Hola KG Soluciones! 👋
          %0AEste es el resumen de mi pedido:
          %0A   
          %0A   Fecha: ${new Date().toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })}
          %0A   Nombre del cliente: ${inputs.name}
          %0A   Teléfono: ${inputs.number}
          %0A   Email: ${inputs.email}
          %0A   Forma de Pago: ${inputs.paymentMethod}
          %0A   Dirección: ${inputs.address}
          ${inputs.message ? `%0A   Mensaje: ${inputs.message}` : ''}
          %0A   Cantidad de Productos: ${products.length}
          %0A   
          %0A   Productos:
          ${productsParser}
          %0A   
          ${total ? `%0A   Total: $${parseInt(total.toFixed(0))}` : ''}
        `
      const url = `https://api.whatsapp.com/send?phone=57${process.env.NEXT_PUBLIC_PHONE}&text=${message}`

      if (window) {
        formRef.current?.reset()
        window.open(url, '_blank')
      }
    }
  })

  return (
    <form
      ref={formRef}
      className={`w-full p-3 lg:p-5 border border-bg-200 rounded-lg bg-bg-card/30 ${className}`}
      onSubmit={handleSubmit}
    >
      <Input
        id="name"
        labelText="Nombre y apellido"
        placeholder="Ingresa tu nombre y apellido"
        isValid={errors.name?.message === undefined}
        {...register('name')}
      />
      {errors.name?.message && <FormError>{errors.name.message}</FormError>}

      <Input
        id="email"
        type="email"
        className="mt-4"
        labelText="Correo electrónico"
        placeholder="tucorreo@ejemplo.com"
        isValid={errors.email?.message === undefined}
        {...register('email')}
      />
      {errors.email?.message && <FormError>{errors.email.message}</FormError>}

      <Input
        id="number"
        type="number"
        className="mt-4"
        labelText="Número de teléfono"
        placeholder="Ingresa tu número de teléfono"
        isValid={errors.number?.message === undefined}
        {...register('number')}
      />
      {errors.number?.message && <FormError>{errors.number.message}</FormError>}

      <Input
        id="address"
        className="mt-4"
        labelText="Dirección de envío"
        placeholder="Ingresa la dirección de envío"
        isValid={errors.address?.message === undefined}
        {...register('address')}
      />
      {errors.address?.message && <FormError>{errors.address.message}</FormError>}

      <SelectInput
        title="Selecciona el método de pago"
        className="mt-4"
        id="paymentMethod"
        items={paymentMethods}
        labelText="Método de pago"
        placeholder="Selecciona un método de pago"
        isValid={errors.paymentMethod?.message === undefined}
        {...register('paymentMethod')}
      />
      {errors.paymentMethod?.message && <FormError>{errors.paymentMethod.message}</FormError>}

      <TextArea
        id="message"
        className="mt-4"
        isObligatory={false}
        labelText="Información adicional"
        placeholder="Ingresa información adicional si es necesario"
        isValid={errors.message?.message === undefined}
        {...register('message')}
      />
      {errors.message?.message && <FormError>{errors.message.message}</FormError>}

      <PrincipalActionButton className="mt-4 w-full">
        {loading ? 'Enviando cotización...' : 'Enviar cotización'}
      </PrincipalActionButton>
    </form>
  )
}
