"use client"

import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/auth/stores/auth.store'

interface Props {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: Props) => {
  const router = useRouter()
  const user = useAuthStore(state => state.user)
  const loading = useAuthStore(state => state.loading)

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login-administracion') 
    }
  }, [user, loading, router])

  if (loading) {
    return <div>Loading...</div> 
  }

  if (user) {
    return <>{children}</> 
  }

  return null
}
