import { db } from "@/core"
import { type Product } from "@/core/types/db/db"
import { deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore"

export const saveProduct = async (product: Product) => {
  try {
    const docRef = doc(db, 'products', product.id)
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
    await deleteDoc(doc(db, 'products', id))

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
    const docRef = doc(db, 'products', product.id)
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