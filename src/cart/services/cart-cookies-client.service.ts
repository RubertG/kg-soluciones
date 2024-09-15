import { getCookie, setCookie } from "cookies-next"
import { Cart } from "../types/cart"

const PATH_NAME = "cart"

export const inCart = (id: string) => {
  const cart = getCookie(PATH_NAME)

  if (!cart) return false

  const newCart = JSON.parse(cart) as Cart

  return newCart[id] ? true : false
}

export const addCart = (id: string, quantity?: number) => {
  const cartCookies = getCookie(PATH_NAME) || "{}"
  const cart = JSON.parse(cartCookies) as Cart

  cart[id] = {
    ...(quantity ? { quantity } : {})
  }

  setCookie(PATH_NAME, JSON.stringify(cart))
}