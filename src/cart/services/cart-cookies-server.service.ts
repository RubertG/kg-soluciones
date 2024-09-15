"use server"

import { getProduct } from "@/core"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { Cart } from "../types/cart"

const PATH_NAME = "cart"

export const getCartServer = async () => {
  const cookiesStore = cookies()
  const cartCookies = cookiesStore.get(PATH_NAME)?.value || "{}"
  const cart = JSON.parse(cartCookies) as Cart

  const newCart = await Promise.all(Object.keys(cart).map(async (key) => {
    const { error, product } = await getProduct(key)

    if (error || !product) return null

    return {
      ...product,
      quantity: cart[key].quantity
    }
  }))

  return newCart.filter(product => product !== null)
}

export const addCartServer = (id: string, quantity?: number) => {
  const cookiesStore = cookies()
  const cartCookies = cookiesStore.get(PATH_NAME)?.value || "{}"
  const cart = JSON.parse(cartCookies) as Cart

  cart[id] = {
    ...(quantity ? { quantity } : {})
  }

  cookiesStore.set(PATH_NAME, JSON.stringify(cart))
  revalidatePath("/carrito")
}

export const deleteCartServer = (id: string) => {
  const cookiesStore = cookies()
  const cartCookies = cookiesStore.get(PATH_NAME)?.value || "{}"
  const cart = JSON.parse(cartCookies) as Cart

  delete cart[id]
  cookiesStore.set(PATH_NAME, JSON.stringify(cart))
  revalidatePath("/carrito")
}