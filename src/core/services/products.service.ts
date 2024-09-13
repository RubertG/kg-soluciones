import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore"
import { db } from "@/core"
import { Product } from "../types/db/db"

const NAME_COLLECTION = 'products'

export const getProducts = async () => {
  try {
    const q = query(collection(db, NAME_COLLECTION), orderBy('createAt', 'desc'))
    const data = await getDocs(q)
    const products: Product[] = []

    data.forEach(doc => {
      products.push(doc.data() as Product)
    })

    return {
      products,
      error: null
    }
  } catch (error) {
    console.log(error)

    return {
      products: [],
      error: 'Error al obtener productos'
    }
  }
}

export const getProduct = async (id: string) => {
  try {
    const data = await getDoc(doc(db, 'products', id))

    if (!data.exists()) throw new Error()

    return {
      product: data.data() as Product,
      error: null
    }
  } catch (error) {
    console.log(error)
    
    return {
      product: null,
      error: "Error al obtener producto"
    }
  }
}