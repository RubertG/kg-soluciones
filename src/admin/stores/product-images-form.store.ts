import { Image } from "@/core/types/db/db"
import { create, StateCreator } from "zustand"

interface ImagesStore {
  images: Image[]
  setImages: (images: Image[]) => void

  addImages: (images: Image[]) => void
  deleteImage: (image: Image) => void
  totalSize: () => number
}

const storeApi: StateCreator<ImagesStore> = (set, get) => ({
  images: [],

  setImages: (images) => set({ images }),

  deleteImage: (image) => {
    const images = get().images
    const newImages = images.filter((i) => i !== image)
    set({ images: newImages })
  },
  addImages: (images) => set({ images: [...get().images, ...images] }),
  totalSize: () => {
    const images = get().images

    return images.reduce((acc, image) => acc + image.size, 0)
  }  
})

export const useProductImagesFormStore = create<ImagesStore>()(
  storeApi
) 