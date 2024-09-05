import { Image } from "@/core/types/db/db"
import { saveFile } from "../utils/firebase-storage"
import { v4 as uuid } from "uuid"

export const saveImages = async (images: Image[], nameCollection: string) => {
  const imgs = await Promise.all(
    images.map(async (image) => {
      try {
        const img = await saveFile(image, nameCollection)
        return {
          ...image,
          id: uuid(),
          url: img
        }
      } catch (error) {
        console.error("Error guardando la imagen: ", error)
        return null
      }
    })
  )
  
  return imgs.filter(img => img !== null)
}