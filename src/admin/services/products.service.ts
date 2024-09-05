import { db } from "@/core"
import { Image, type Product } from "@/core/types/db/db"
import { collection, deleteDoc, doc, getDocs, orderBy, query, setDoc, updateDoc } from "firebase/firestore"
import { getCategories } from "./categories.service"
import { deleteFile, saveImages } from "@/admin"

const NAME_COLLECTION = 'products'

export const getProducts = async () => {
  try {
    const q = query(collection(db, NAME_COLLECTION), orderBy('createAt', 'desc'))
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
    const images = await saveImages(product.images, NAME_COLLECTION)
    const newProduct = {
      ...product,
      images
    }
    console.log(newProduct)

    const docRef = doc(db, NAME_COLLECTION, newProduct.id)
    await setDoc(docRef, newProduct)

    return {
      success: 'Producto creado correctamente',
      error: null
    }
  } catch (error) {
    console.log(error)

    return {
      error: 'Error al crear el producto',
      success: null
    }
  }
}

export const deleteProduct = async (product: Product) => {
  try {
    await Promise.all([
      deleteDoc(doc(db, NAME_COLLECTION, product.id)),
      Promise.all(product.images.map((image) => {
        if (!image.url) return

        return deleteFile(image.url)
      }))
    ])

    return {
      success: 'Producto eliminado correctamente',
      error: null
    }
  } catch (error) {
    console.log(error)

    return {
      error: 'Error al eliminar el producto',
      success: null
    }
  }
}

export const deleteProducts = async (products: Product[]) => {
  try {
    await Promise.all(products.map(async (product) => {
      const { error } = await deleteProduct(product)

      if (error) throw error
    }))

    return {
      success: 'Productos eliminados correctamente',
      error: null
    }
  } catch (error) {
    console.log(error)

    return {
      success: null,
      error: 'Error al eliminar los proyectos'
    }
  }
}

export const updateProduct = async (product: Product, initialImages: Image[]) => {
  try {
    const productImagesSet = new Set(product.images.map(img => img.url))

    const newImagesSave = product.images.filter(img => img.url?.startsWith("blob"))

    const [newImages, imagesOld] = await Promise.all([
      await saveImages(newImagesSave, NAME_COLLECTION),
      Promise.all(
        initialImages.map(async (img) => {
          try {
            if (productImagesSet.has(img.url)) return img

            await deleteFile(img.url || '')

            return null
          } catch (error) {
            console.error("Error eliminando la imagen:", error)

            return img
          }
        })
      )
    ])

    const filteredImages = imagesOld.filter(img => img !== null)
    const newProduct = {
      ...product,
      images: [...filteredImages, ...newImages]
    }

    const docRef = doc(db, NAME_COLLECTION, product.id)
    await updateDoc(docRef, { ...newProduct })

    return {
      success: 'Producto actualizado correctamente',
      error: null
    }
  } catch (error) {
    console.log(error)

    return {
      error: 'Error al actualizar el producto',
      success: null
    }
  }
}