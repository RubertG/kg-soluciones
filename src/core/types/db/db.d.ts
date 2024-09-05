import { Timestamp } from "firebase/firestore"

export interface Image extends File {
  id?: string
  url?: string
}

export interface ProductImage extends Omit<File, "arrayBuffer" | "slice" | "stream" | "text">, Partial<Image> { }

export interface Product {
  id: string
  category: string
  name: string
  description: string
  price?: number
  images: Image[]
  createAt: Timestamp
}

export interface Category {
  id: string
  name: string
  createAt: Timestamp
}