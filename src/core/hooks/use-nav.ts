"use client"

import { useEffect, useState } from "react"

export const useNav = () => {
  const [open, setOpen] = useState(false)
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 10)
    }
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    open,
    setOpen,
    isTop
  }
}