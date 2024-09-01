import { create } from 'zustand'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '@/core'

interface AuthState {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading })
}))

// Escucha cambios en el estado de autenticación de Firebase
onAuthStateChanged(auth, (user) => {
  useAuthStore.getState().setUser(user)
  useAuthStore.getState().setLoading(false)
})

