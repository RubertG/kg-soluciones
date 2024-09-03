import { db } from "@/core"
import { type Product } from "@/core/types/db/db"
import { collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc } from "firebase/firestore"
import { getCategories } from "./categories.service"

const NAME_COLLECTION = 'products'

export const getProducts = async () => {
  try {
    const q = query(collection(db, NAME_COLLECTION))
    const [data, { categories, error: errorCategories }] = await Promise.all([
      await getDocs(q),
      await getCategories()
    ])
    const products: Product[] = []

    if (errorCategories) return {
      products: [],
      error: 'Error al obtener categorias de los productos'
    }

    data.forEach(doc => {
      const category = categories.find(category => category.id === doc.data().category)
      products.push({
        ...doc.data(),
        category: category?.name || 'Sin categoría'
      } as Product)
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

export const saveProduct = async (product: Product) => {
  try {
    const docRef = doc(db, NAME_COLLECTION, product.id)
    await setDoc(docRef, product)

    return {
      message: 'Producto creado correctamente',
      error: false
    }
  } catch (error) {
    console.log(error)

    return {
      message: 'Error al crear el producto',
      error: true
    }
  }
}

export const deleteProduct = async (id: string) => {
  try {
    await deleteDoc(doc(db, NAME_COLLECTION, id))

    return {
      message: 'Producto eliminado correctamente',
      error: false
    }
  } catch (error) {
    console.log(error)

    return {
      message: 'Error al eliminar el producto',
      error: true
    }
  }
}

// Eliminar imagenes que fueron eliminadas por el usuario
export const updateProduct = async (product: Product) => {
  try {
    const docRef = doc(db, NAME_COLLECTION, product.id)
    await updateDoc(docRef, { ...product })

    return {
      message: 'Producto actualizado correctamente',
      error: false
    }
  } catch (error) {
    console.log(error)

    return {
      message: 'Error al actualizar el proyecto',
      error: true
    }
  }
}