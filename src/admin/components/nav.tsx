"use client"

import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import clsx from "clsx"
import { Categories, Home, Logout, MenuIcon, Products } from "@/core"
import { singOutSessionService } from "@/auth"
import { toast } from "sonner"
import Link from "next/link"

const links = [
  {
    name: "Inicio",
    icon: <Home className="w-7 h-7" />,
    path: "/"
  },
  {
    name: "Categorías",
    icon: <Categories className="stroke-primary-200 w-7 h-7" />,
    path: "/categorias"
  }, {
    name: "Productos",
    icon: <Products className="stroke-primary-200 w-7 h-7" />,
    path: "/productos"
  }
]

export const Nav = () => {
  const [open, setOpen] = useState(false)
  const pathName = usePathname()
  const router = useRouter()

  const handleOpenMenu = () => {
    setOpen(!open)
  }

  const handleLogout = async () => {
    const { error } = await singOutSessionService()

    if (error) {
      toast.error(error)
    }

    router.push("/login-administracion")
  }

  const handleClick = () => {
    setOpen(false)
  }

  return (
    <nav className={clsx("fixed bg-bg-200 h-full top-0 left-0 px-1 py-1 pb-3 flex flex-col justify-between overflow-hidden transition-all", {
      "w-[3.25rem]": !open,
      "w-48": open
    })}>
      <section>
        <div className="p-2">
          <button
            title="Abrir menu de administración"
            onClick={handleOpenMenu}
            className="flex justify-center items-center gap-[3px] flex-col w-7 h-7"
          >
            <MenuIcon open={open} />
          </button>
        </div>
        <ul className="mt-5 flex flex-col gap-1">
          {
            links.map(link => {
              let isActive = pathName === `/administracion${link.path}`
              console.log(`/administracion${link.path}`)

              if (link.path === "/") {
                isActive = pathName === `/administracion`
              }

              return (
                <li key={link.name}>
                  <Link
                    className={clsx("flex items-center gap-3 text-text-200 p-2 rounded-lg lg:hover:bg-bg-300 lg:transition-colors w-full", {
                      "bg-bg-300": isActive
                    })}
                    title={`Ir a la sección de ${link.name.toLocaleLowerCase()}`}
                    href={`/administracion${link.path}`}
                    onClick={handleClick}
                  >
                    <picture>{link.icon}</picture>
                    <p className="text-ellipsis overflow-hidden whitespace-nowrap">{link.name}</p>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </section>
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 text-text-200 p-2 rounded-lg lg:hover:bg-bg-300 w-full lg:transition-colors"
        title="Cerrar sesión"
      >
        <Logout className="min-w-7 min-h-7 max-w-7 max-h-7" />
        <p className="text-ellipsis overflow-hidden whitespace-nowrap">Cerrar sesión</p>
      </button>
    </nav>
  )
}