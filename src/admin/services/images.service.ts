import { Image, ProductImage } from "@/core/types/db/db"
import { saveFile } from "../utils/firebase-storage"
import { v4 as uuid } from "uuid"

export const saveImages = async (images: Image[], nameCollection: string) => {
  const imgs = await Promise.all(
    images.map(async (image): Promise<ProductImage | null> => {
      try {
        const imgUrl = await saveFile(image, `/${nameCollection}`)
        return {
          name: image.name,
          size: image.size,
          type: image.type,
          lastModified: image.lastModified,
          webkitRelativePath: image.webkitRelativePath,
          id: uuid(),
          url: imgUrl
        }
      } catch (error) {
        console.error("Error guardando la imagen: ", error)
        return null
      }
    })
  )
  
  return imgs.filter(img => img !== null)
}