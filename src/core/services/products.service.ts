import { collection, doc, getDoc, getDocs, limit, query, startAfter } from "firebase/firestore"
import { LIMIT_PRODUCTS } from "@/core"
import { db } from "@/core"
import { Product } from "../types/db/db"

export const getProducts = async (start: number, limitProducts: number = LIMIT_PRODUCTS) => {
  try {
    const q = query(collection(db, 'products'), limit(limitProducts), startAfter(start))
    const data = await getDocs(q)
    const products: Product[] = []

    data.forEach(doc => {
      products.push(doc.data() as Product)
    })

    if (products.length === 0) return {
      hasNext: false,
      products,
      lastProduct: null,
      error: null
    }

    return {
      hasNext: data.docs.length === limitProducts,
      products,
      lastProduct: products[products.length - 1],
      error: null
    }
  } catch (error) {
    console.log(error)

    return {
      hasNext: false,
      products: [],
      lastProduct: null,
      error: 'Error al obtener productos'
    }
  }
}

export const getProduct = async (id: string) => {
  const data = await getDoc(doc(db, 'products', id))

  if (!data.exists()) return null

  return data.data() as Product
}