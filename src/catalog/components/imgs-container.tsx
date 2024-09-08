"use client"

import { Popup, SearchIcon, X } from "@/core"
import { type Image as ImageType } from "@/core/types/db/db"
import clsx from "clsx"
import Image from "next/image"
import { useState } from "react"

export const ImgsContainer = ({
  imgs,
  className
}: {
  imgs: ImageType[],
  className?: string
}) => {
  const [imgActive, setImgActive] = useState(0)
  const [popup, setPopup] = useState(false)

  const handleImgActive = (id: number) => setImgActive(id)

  return (
    <div className={`${className}`}>
      <picture className="w-full relative">
        <button
          onClick={() => setPopup(!popup)}
          className="absolute top-2 left-2 bg-bg-100/40 backdrop-blur-sm p-2 rounded-full lg:hover:bg-bg-100/50 lg:transition-colors"
        >
          <SearchIcon className="w-5 h-5 stroke-text-100" />
        </button>
        <Image
          width={600}
          height={600 * 0.33}
          src={imgs[imgActive].url || ""}
          alt={`${imgs[imgActive].name} - KG Soluciones`}
          className="w-full object-cover rounded-lg aspect-[4/3]"
        />
      </picture>
      <footer className="mt-2.5 flex gap-2 items-center overflow-auto pb-1 scrollbar-hide-sm">
        {
          imgs.length > 1 && (
            imgs.map((img, i) => (
              <Image
                width={150}
                height={150 * 0.33}
                key={img.name}
                src={img.url || ""}
                alt={`${img.name} - KG Soluciones`}
                onClick={() => handleImgActive(i)}
                className={clsx("h-24 object-cover rounded-lg aspect-[4/3] cursor-pointer border transition-colors", {
                  "border-primary-100": imgActive === i,
                  "border-transparent": imgActive !== i
                })}
              />
            ))
          )
        }
      </footer>
      {
        popup && (
          <Popup>
            <button
              className="group absolute top-4 right-4"
              onClick={() => setPopup(false)}
            >
              <X className="w-7 h-7 stroke-text-200 lg:group-hover:stroke-text-100 lg:transition-colors" />
            </button>
            <div className="flex items-center justify-center px-4">
              <img
                src={imgs[imgActive].url || ""}
                alt={`${imgs[imgActive].name} - KG Soluciones`}
                className="w-full md:w-[90%] max-h-screen object-cover rounded-lg"
              />
            </div>
          </Popup>
        )
      }
    </div>
  )
}