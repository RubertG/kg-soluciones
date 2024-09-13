"use server"

import { getProduct } from "@/core"
import { cookies } from "next/headers"

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

  console.log(cartCookies)

  return newCart.filter(product => product !== null)
}