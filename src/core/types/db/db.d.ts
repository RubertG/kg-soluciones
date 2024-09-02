import { Timestamp } from "firebase/firestore"

export interface Image {
  id: string
  name: string
  size: number
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