import { PrincipalButton, SecondaryButton } from "@/core"
import Image from "next/image"
import { HeaderDecoration } from "./header-decoration"

interface Props {
  className?: string
}

export const Header = ({
  className
}: Props) => {
  return (
    <header className={`h-screen max-h-[900px] lg:max-h-[650px] md:grid md:grid-cols-[auto_35%] md:items-center px-4 xl:px-0 max-w-6xl mx-auto ${className}`}>
      <HeaderDecoration />
      <section className="md:-mt-4">
        <h1 className="text-text-100 text-[2.5rem] font-bold text-center md:text-start md:text-6xl entry-animation">
          KG Soluciones
        </h1>
        <p
          className="text-sm text-text-200 mt-3 lg:text-base entry-animation"
          style={{
            animationDelay: "0.25s"
          }}
        >
          Profesional con capacidades para analizar y solucionar problemas relacionados con el diseño, montaje, mantenimiento y control de dispositivos y procesos de conversión de energía electromecánica requeridos para el desarrollo regional y nacional.
        </p>
        <footer
          className="flex items-center gap-4 mt-6 flex-wrap entry-animation"
          style={{
            animationDelay: "0.5s"
          }}
        >
          <PrincipalButton href="#contacto">
            Cotizar servicios
          </PrincipalButton>
          <SecondaryButton href="/catalogo">
            Catálogo de productos
          </SecondaryButton>
        </footer>
      </section>

      <Image
        className="w-full mt-8 md:mt-0 img-mask max-w-[400px] mx-auto entry-animation"
        src="/assets/perfil.webp"
        alt="Kevin Gonzalez - KG Soluciones"
        width={400}
        height={370}
        style={{
          animationDelay: "0.25s"
        }}
        priority
      />
    </header>
  )
}