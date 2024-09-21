import { Link } from "next-view-transitions"
import { BackIcon } from "./icons"

interface Props {
  className?: string
  href: string
}

export const BackButton = ({ className, href }: Props) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-1 text-text-200 cursor-pointer lg:hover:text-primary-100 lg:transition-colors ${className}`}>
      <BackIcon className="w-5 h-5" />
      Atrás
    </Link>
  )
}