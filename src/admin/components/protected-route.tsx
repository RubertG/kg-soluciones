"use client"

import { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthStore } from '@/auth/stores/auth.store'
import { Spinner } from '@/core/components/spinner'

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
    return (
      <main className='h-[86dvh] flex items-center justify-center'>
        <Spinner />
      </main>
    )
  }

  if (user) {
    return <>{children}</>
  }

  return (
    <main className='h-[86dvh] flex items-center justify-center'>
      <Spinner />
    </main>
  )
}
