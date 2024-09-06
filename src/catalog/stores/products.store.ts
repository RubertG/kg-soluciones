import { getProducts } from "@/core"
import { Product } from "@/core/types/db/db"
import { create, StateCreator } from "zustand"

interface ProductsState {
  products: { [key: string]: Product[] }
  productsFilter: Product[]
  error?: string
  loading: boolean

  setLoading: (loading: boolean) => void
  setProducts: (products: { [key: string]: Product[] }) => void
  setProductsFilter: (products: Product[]) => void
  setError: (error: string) => void
  setAllProducts: (products: Product[]) => void
  getProducts: (name?: string, category?: string) => Promise<void>

  fetchProducts: () => Promise<void>
}

const storeApi: StateCreator<ProductsState> = (set, get) => ({
  products: {},
  productsFilter: [],
  loading: true,

  setError: (error) => set({ error }),
  setProductsFilter: (products) => set({ productsFilter: products }),
  setProducts: (products) => set({ products }),
  setLoading: (loading) => set({ loading }),

  fetchProducts: async () => {
    get().setLoading(true)
    const { products: productsFetch, error } = await getProducts()

    if (error) get().setError(error)

    set({ productsFilter: productsFetch })
    get().setAllProducts(productsFetch)
    get().setLoading(false)
  },
  getProducts: async (name, category) => {
    const products = get().products
    const newProducts = Object.values(products).flat()
    let productsFilter: Product[] = []

    if (category) {
      if (!products[category]) {
        await get().fetchProducts()
      }

      productsFilter = get().products[category] || []
    } else {
      if (newProducts.length === 0) {
        await get().fetchProducts()
      }
      productsFilter = Object.values(get().products).flat()
      console.log(productsFilter)
    }

    if (name) {
      productsFilter = productsFilter.filter(product => product.name.toLowerCase().includes(name.toLowerCase()))
    }

    get().setProductsFilter(productsFilter)
  },
  setAllProducts: (products) => {
    const productsByCategory = products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = []
      }

      acc[product.category].push(product)

      return acc
    }, {} as { [key: string]: Product[] })

    set({ products: productsByCategory })
  }
})

export const useProductsStore = create<ProductsState>()(
  storeApi
)
