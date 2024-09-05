"use client"

import { toast } from "sonner"
import { LIMIT_SIZE, ProductForm, returnFileSize, saveProduct, useProductImagesFormStore } from "@/admin"
import { useRouter } from "next/navigation"
import { Timestamp } from "firebase/firestore"
import { Product } from "@/core/types/db/db"
import { v4 as uuid } from "uuid"
import { useEffect } from "react"

interface Props {
  className?: string
}

export const SaveProductForm = ({
  className
}: Props) => {
  const images = useProductImagesFormStore(state => state.images)
  const totalSize = useProductImagesFormStore(state => state.totalSize)
  const setImages = useProductImagesFormStore(state => state.setImages)
  const router = useRouter()

  useEffect(() => {
    setImages([])

    return () => setImages([])
  }, [])

  const onSubmit = async (inputs: ProductInputs) => {
    if (images.length === 0) {
      toast.error('Debe subir al menos una imagen')
      return
    }

    if (totalSize() > LIMIT_SIZE) {
      toast.error(`Las imagenes no pueden superar los ${returnFileSize(LIMIT_SIZE)}`)
      return
    }

    const newProduct: Product = {
      ...inputs,
      price: parseInt(inputs.price),
      id: uuid(),
      images: images,
      createAt: Timestamp.now()
    }
    const { error, success } = await saveProduct(newProduct)

    if (error) {
      toast.error(error)
    } else {
      toast.success(success)
      router.push('/administracion/productos')
    }
  }

  return (
    <ProductForm
      className={className}
      onSubmit={onSubmit}
    />
  )
}