import { db } from "@/core"
import { Category } from "@/core/types/db/db"
import { collection, deleteDoc, doc, getDoc, getDocs, setDoc, updateDoc } from "firebase/firestore"

const NAME_COLLECTION = 'categories'

export const getCategories = async () => {
  try {
    const data = await getDocs(collection(db, NAME_COLLECTION))
    const categories: Category[] = []

    data.forEach(doc => {
      categories.push(doc.data() as Category)
    })

    return {
      categories,
      error: null
    }

  } catch (error) {
    console.log(error)

    return {
      categories: [],
      error: 'Error al obtener categorias'
    }
  }
}

export const getCategory = async (id: string) => {
  try {
    const data = await getDoc(doc(db, NAME_COLLECTION, id))

    if (!data.exists()) return {
      category: null,
      error: 'Categoría no encontrada'
    }

    return {
      category: data.data() as Category,
      error: null
    }

  } catch (error) {
    console.log(error)

    return {
      category: null,
      error: 'Error al obtener categoría'
    }
  }
}

export const saveCategory = async (category: Category) => {
  try {
    const { category: categoryExist } = await getCategory(category.id)

    if (categoryExist) return {
      success: null,
      error: 'Categoría ya existe'
    }

    const docRef = doc(db, NAME_COLLECTION, category.id)
    await setDoc(docRef, category)

    return {
      success: 'Categoría creada correctamente',
      error: null
    }
  } catch (error) {
    console.log(error)

    return {
      success: null,
      error: 'Error al crear la categoría'
    }
  }
}

export const updateCategory = async (category: Category) => {
  try {
    const docRef = doc(db, NAME_COLLECTION, category.id)
    await updateDoc(docRef, { ...category })

    return {
      success: 'Categoría actualizada correctamente',
      error: null
    }
  } catch (error) {
    console.log(error)

    return {
      success: null,
      error: 'Error al actualizar la categoría'
    }
  }
}

export const deleteCategories = async (categories: Category[]) => {
  try {
    await Promise.all(categories.map((category) => {
      const docRef = doc(db, NAME_COLLECTION, category.id)
      deleteDoc(docRef)
    }))

    return {
      error: null,
      success: `Categoría${categories.length > 1 ? "s" : ""} eliminadas correctamente`
    }
  } catch (error) {
    console.log(error)

    return {
      error: 'Error al eliminar categorías',
      success: null
    }
  }
}