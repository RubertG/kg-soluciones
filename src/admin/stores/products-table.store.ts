import { getProducts } from "@/core"
import { Product } from "@/core/types/db/db"
import { create, StateCreator } from "zustand"

interface ProductTableState {
  products: Product[];
  loading: boolean;
  error?: string;
  selectedProducts?: Product[];
  loadingDelete: boolean;
  setLoadingDelete: (loadingDelete: boolean) => void;
  setSelectedProducts: (selectedProducts: Product[]) => void;
  setError: (error: string | undefined) => void;
  setLoading: (loading: boolean) => void;
  setProducts: (products: Product[]) => void;
  deleteProducts: () => void;
  editProduct: (product: Product) => void;
  fetchProducts: () => Promise<void>;
  addProduct: (product: Product) => void;
}

const storeApi: StateCreator<ProductTableState> = (set, get) => ({
  products: [],
  loading: true,
  loadingDelete: false,
  error: undefined,
  selectedProducts: undefined,

  setLoading: (loading) => set({ loading }),
  setLoadingDelete: (loadingDelete) => set({ loadingDelete }),
  setProducts: (products) => set({ products }),
  setError: (error) => set({ error }),
  setSelectedProducts: (selectedProducts) => set({ selectedProducts }),

  deleteProducts: () => {
    const selectedProducts = get().selectedProducts

    if (!selectedProducts) return

    const products = get().products
    const newProducts = products.filter((product) => !selectedProducts.includes(product))
    get().setSelectedProducts([])
    set({ products: newProducts })
  },
  editProduct: (product) => {
    const products = get().products
    const newProducts = products.map((p) => (p.id === product.id ? product : p))
    set({ products: newProducts })
  },
  fetchProducts: async () => {
    const { products, error } = await getProducts(0, 1000)

    if (error) {
      get().setError(error)
    } else {
      get().setProducts(products)
    }
    
    get().setLoading(false)
  },
  addProduct: (product) => {
    const products = get().products
    const newProducts = [...products, product]
    set({ products: newProducts })
  }
})

export const useProductsTableStore = create<ProductTableState>()(
  storeApi
)