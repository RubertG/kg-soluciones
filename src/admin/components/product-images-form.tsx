"use client"

import { FileInput } from "@/core"
import { returnFileSize, useProductImagesFormStore } from "@/admin"
import { ChangeEvent } from "react"
import { Image as ImageType } from "@/core/types/db/db"
import Image from "next/image"

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
            <li
              key={index}
              className="flex gap-2 items-center lg:hover:bg-bg-200 lg:transition-colors pr-4 rounded-lg"
            >
              <Image
                src={img.url || ""}
                alt={img.name || ""}
                width={100}
                height={100 * 0.33}
                className="object-cover w-24 aspect-[4/3] rounded-lg"
              />
              <div className="w-full">
                <p className="font-bold text-text-100 flex gap-2 items-center">
                  {returnFileSize(img.size)}
                  <span className="text-sm font-normal text-text-300 overflow-hidden text-ellipsis text-nowrap">
                    {img.name}
                  </span>
                </p>
                <button
                  className="text-sm text-text-200 lg:hover:text-red-600 lg:transition-colors"
                  onClick={() => handleDeleteImage(img)}
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}