import { Product } from "@/core/types/db/db"

interface Cart {
  [id: string]: {
    quantity?: number
  }
}

export interface ProductCart extends Product {
  quantity?: number
}