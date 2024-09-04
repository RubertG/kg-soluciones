import { Image as ImageType } from '@/core/types/db/db'
import Image from 'next/image'
import React from 'react'
import { returnFileSize } from '../utils/return-file-size'

interface Props {
  img: ImageType
  handleDeleteImage: (img: ImageType) => void
}

export const ImgProductCard = ({
  img, handleDeleteImage
}: Props) => {
  return (
    <li
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
        <p className="font-bold text-text-100 flex gap-1.5 items-center overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="whitespace-nowrap">{returnFileSize(img.size)}</span>
          <span className="text-sm font-normal text-text-300">
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
  )
}
