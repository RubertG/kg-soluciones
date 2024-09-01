'use client'

import clsx from "clsx"
import Link from "next/link"
import Image from "next/image"
import { MenuIcon, NavItems, useNav } from "@/core"

const links = [
  {
    name: "Inicio",
    href: "/"
  },
  {
    name: "Catálogo",
    href: "/catalogo"
  },
  {
    name: "Contactar",
    href: "/#contacto"
  }
]

export function Nav() {
  const { isTop, open, setOpen } = useNav()

  return (
    <nav
      className={clsx("fixed w-full top-0 left-0 z-30 px-4 py-2.5 transition-colors", {
        "bg-bg-100/90 lg:bg-bg-100/40 lg:backdrop-blur-sm": !isTop || open,
        "bg-transparent": isTop && !open
      })}
    >
      <nav
        className="flex items-center justify-between max-w-7xl mx-auto">
        <Link
          className="flex items-center gap-2"
          href="/"
        >
          <Image src="/logo.webp" alt="Logo de KG Soluciones" width={40} height={40} />
          <h1
            className="text-xl font-bold tracking-tighter text-text-100 lg:hover:text-primary-100 lg:transition-colors">
            KG Soluciones
          </h1>
        </Link>
        <NavItems
          links={links}
          open={open}
          setOpen={setOpen}
        />
        <button
          className="flex justify-between items-center gap-[3px] flex-col lg:hidden"
          title="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          <MenuIcon open={open} />
        </button>
      </nav>
    </nav>
  )
}
