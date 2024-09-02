import { db } from "@/core"
import { Category } from "@/core/types/db/db"
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore"

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

export const getCategory = async (name: string) => {
  try {
    const data = await getDoc(doc(db, NAME_COLLECTION, name))

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
    const { category: categoryExist } = await getCategory(category.name)

    if (categoryExist) return {
      success: null,
      error: 'Categoría ya existe'
    }

    const docRef = doc(db, NAME_COLLECTION, category.name)
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