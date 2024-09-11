"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Cart } from "./icons"

interface Props {
  item: {
    name: string
    href: string
  }
}

export const NavItem = ({
  item: { name, href }
}: Props) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={clsx("block py-2 px-3 lg:py-1.5 lg:px-3 lg:rounded-lg w-full border-b lg:border-none border-bg-100 lg:hover:bg-bg-card/80 lg:transition-colors", {
        "text-primary-100": isActive
      })}>
      {name}
    </Link>
  )
}

export const CartNavItem = () => {
  const pathname = usePathname()
  const isActive = pathname === "/carrito"

  return (
    <Link
      className="block py-2 px-3 lg:py-1.5 lg:px-3 lg:rounded-lg w-full border-b lg:border-none border-bg-100 lg:hover:bg-bg-card/80 group lg:transition-colors"
      title="Ir al carrito de compras"
      href={"/carrito"}
    >
      <Cart className={clsx("w-6 h-6 lg:group-hover:stroke-primary-200 lg:transition-colors mx-auto", {
        "stroke-primary-200": isActive
      })}
       />
    </Link>
  )
}
