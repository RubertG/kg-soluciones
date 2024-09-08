import { create, StateCreator } from "zustand"

interface QuantityState {
  quantity: number
  setQuantity: (quantity: number) => void
}

const storeApi: StateCreator<QuantityState> = (set) => ({
  quantity: 1,
  setQuantity: (quantity) => {
    if (quantity > 0) set({ quantity })
  }
})

export const useQuantityProduct = create<QuantityState>()(
  storeApi
)