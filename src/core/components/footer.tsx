import Link from "next/link"

interface Props {
  className?: string
}

export const Footer = ({
  className
}: Props) => {
  return (
    <footer className={`px-4 py-3 text-text-300 text-center text-xs lg:text-sm ${className}`}>
      <p>© 2024 <strong>KG Soluciones</strong>. Todos los derechos reservados.</p>
      <p>
        Desarrollado por <Link
          href="https://www.instagram.com/webminds.col/"
          className="font-bold underline lg:no-underline lg:hover:underline"
          target="_blank"
        >
          WebMinds Colombia
        </Link>
      </p>
    </footer>
  )
}
