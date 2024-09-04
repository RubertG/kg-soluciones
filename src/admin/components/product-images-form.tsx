"use client"

import { FileInput } from "@/core"
import { ImgProductCard, returnFileSize, useProductImagesFormStore } from "@/admin"
import { ChangeEvent } from "react"
import { Image as ImageType } from "@/core/types/db/db"

export const ProductImagesForm = () => {
  const images = useProductImagesFormStore(state => state.images)
  const addImages = useProductImagesFormStore(state => state.addImages)
  const deleteImage = useProductImagesFormStore(state => state.deleteImage)
  const totalSize = useProductImagesFormStore(state => state.totalSize)

  const handleUploadImages = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    if (!files) return

    const images: ImageType[] = Object.values(files).map(file => ({
      name: file.name,
      size: file.size,
      type: file.type,
      lastModified: file.lastModified,
      webkitRelativePath: file.webkitRelativePath,
      arrayBuffer: file.arrayBuffer,
      slice: file.slice,
      stream: file.stream,
      text: file.text,
      url: URL.createObjectURL(file)
    }))
    addImages(images)
  }

  const handleDeleteImage = (img: ImageType) => {
    deleteImage(img)
  }

  return (
    <aside>
      <FileInput
        multiple
        onChange={handleUploadImages}
      />
      <p className="text-text-100 text-sm font-bold mt-2">
        Tamaño total: {returnFileSize(totalSize())}
      </p>
      <ul className="grid grid-cols-1 gap-3 mt-4">
        {
          images.map((img, index) => (
            <ImgProductCard
              key={index}
              img={img}
              handleDeleteImage={handleDeleteImage}
            />
          ))
        }
      </ul>
    </aside>
  )
}