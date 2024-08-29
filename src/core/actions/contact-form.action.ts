"use server"

import { redirect } from "next/navigation"
import { Inputs } from "../types/contact-form"

export async function contactFormSubmit(inputs: Inputs) {
  const message = `¡Hola KG Soluciones!
Soy *${inputs.name}*. 

*Mensaje*: ${inputs.message}
*Mi correo*: ${inputs.email} 
*Mi número de teléfono:* ${inputs.number}
      `

  redirect(`https://wa.me/57${process.env.NEXT_PUBLIC_PHONE}?text=${encodeURIComponent(message)}`)
}