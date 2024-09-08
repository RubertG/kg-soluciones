import { PrincipalButton } from "@/core"

export const metadata = {
  title: 'No se encontró la página que buscas'
}

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col h-dvh">
      <h2 className="lg:text-8xl text-5xl text-primary-100 font-bold">
        404
      </h2>
      <p className="text-text-100 mb-4">
        No se encontró la página que buscas
      </p>
      <PrincipalButton
        href="/"
      >
        Ir a inicio
      </PrincipalButton>
    </div>
  )
}