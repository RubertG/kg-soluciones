export interface Image {
  id: string
  name: string
  size: number
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  images: Image[]
}