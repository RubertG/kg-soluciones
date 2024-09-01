import { create } from 'zustand'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '@/core'

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  loading: true,
  error: null,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading })
}))

// Escucha cambios en el estado de autenticación de Firebase
onAuthStateChanged(auth, (user) => {
  useAuthStore.getState().setUser(user)
  useAuthStore.getState().setLoading(false)
})

