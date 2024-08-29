"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
      className={clsx("block py-2 px-3 lg:py-1.5 lg:px-3 lg:rounded-lg w-full border-b lg:border-none border-bg-100 lg:hover:bg-bg-card/50 lg:transition-colors", {
        "text-primary-100": isActive
      })}>
      {name}
    </Link>
  )
}
