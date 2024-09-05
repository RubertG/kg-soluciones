import { Image } from "@/core/types/db/db"
import { create, StateCreator } from "zustand"

interface ImagesStore {
  images: Image[]
  initialImages: Image[]
  setImages: (images: Image[]) => void
  setInitialImages: (images: Image[]) => void

  addImages: (images: Image[]) => void
  deleteImage: (image: Image) => void
  totalSize: () => number
}

const storeApi: StateCreator<ImagesStore> = (set, get) => ({
  images: [],
  initialImages: [],

  setImages: (images) => set({ images }),
  setInitialImages: (images) => set({ initialImages: images }),

  deleteImage: (image) => {
    const images = get().images
    const newImages = images.filter((i) => i !== image)
    set({ images: newImages })
  },
  addImages: (images) => set({ images: [...get().images, ...images] }),
  totalSize: () => {
    return get().images.reduce((acc, image) => acc + image.size, 0) 
  }  
})

export const useProductImagesFormStore = create<ImagesStore>()(
  storeApi
) 