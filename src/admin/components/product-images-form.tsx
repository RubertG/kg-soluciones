"use client"

import { FileInput } from "@/core"
import { ImgProductCard, returnFileSize, useProductImagesFormStore } from "@/admin"
import { ChangeEvent, useEffect } from "react"
import { Image as ImageType } from "@/core/types/db/db"

interface Props {
  initialImages?: ImageType[]
}

export const ProductImagesForm = ({
  initialImages
}: Props) => {
  const images = useProductImagesFormStore(state => state.images)
  const setImages = useProductImagesFormStore(state => state.setImages)
  const addImages = useProductImagesFormStore(state => state.addImages)
  const deleteImage = useProductImagesFormStore(state => state.deleteImage)
  const totalSize = useProductImagesFormStore(state => state.totalSize)
  const setInitialImages = useProductImagesFormStore(state => state.setInitialImages)

  useEffect(() => {
    if (initialImages) {
      setInitialImages(initialImages)
      setImages(initialImages)
    }

    return () => {
      setImages([])
      if (initialImages) setInitialImages([])
    }
  }, [])

  const handleUploadImages = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files

    if (!files) return

    const images: ImageType[] = Object.values(files).map(file => {
      const newFile = new File([file], file.name, { type: file.type }) as ImageType

      newFile.url = URL.createObjectURL(file)

      return newFile
    })
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