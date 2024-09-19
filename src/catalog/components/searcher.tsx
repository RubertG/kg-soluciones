"use client"

import { SearchIcon } from "@/core"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"

interface Props {
  searchParams: { [key: string]: string | undefined }
}

export const Searcher = ({
  searchParams
}: Props) => {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = formData.get('name') as string
    const newUrl = new URLSearchParams({
      ...(searchParams.categoria && { categoria: searchParams.categoria }),
      ...(name && { nombre: name })
    })

    router.push(`/catalogo?${newUrl.toString()}`)
  }

  useEffect(() => {
    formRef.current?.reset()
  }, [searchParams.categoria])

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full flex justify-center items-center gap-3 border border-bg-200 bg-bg-card/30 rounded-lg transition-colors text-text-100 placeholder:text-text-300 text-sm max-w-xl pr-2.5"
    >
      <input
        className="w-full bg-transparent outline-none px-3.5 py-2.5 rounded-lg"
        type="text"
        name="name"
        placeholder="Nombre del producto que quieres..."
        autoComplete="off"
        defaultValue={searchParams.nombre}
      />
      <button className="group" title="Buscar">
        <SearchIcon className="stroke-text-200 group-hover:lg:stroke-primary-100 lg:transition-colors" />
      </button>
    </form>
  )
}