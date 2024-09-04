import { Timestamp } from "firebase/firestore"

export interface Image extends File {
  id?: string
  url?: string
}

export interface Product {
  id: string
  category: string
  name: string
  description: string
  price: number
  images: Image[]
  createAt: Timestamp
}

export interface Category {
  id: string
  name: string
  createAt: Timestamp
}