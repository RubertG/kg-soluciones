import { Facebook, Instagram, Linkedin, Whatsapp } from "@/core"
import Link from "next/link"

const social = [
  {
    name: 'Whatsapp',
    icon: <Whatsapp className="w-10 h-10" />,
    href: "https://api.whatsapp.com/send?phone=3114470929&text=Hola%20Kevin%20Gonzalez%20-%20KG%20Soluciones"
  }, {
    name: 'Instagram',
    icon: <Instagram className="w-10 h-10" />,
    href: "https://www.instagram.com/kg_soluciones/"
  }, {
    name: 'Facebook',
    icon: <Facebook className="w-10 h-10" />,
    href: "https://www.facebook.com/profile.php?id=100090741046930"
  }, {
    name: 'Linkedin',
    icon: <Linkedin className="w-10 h-10" />,
    href: "https://www.linkedin.com/in/kevin-jhoel-gonzalez-perez-9a2109280/"
  }
]

interface Props {
  className?: string
}

export const Social = ({
  className
}: Props) => {
  return (
    <ul className={`flex items-center justify-center gap-3 ${className}`}>
      {
        social.map(({ name, icon, href }) => (
          <li
            className="lg:hover:scale-110 lg:transition-transform"
            key={name}
          >
            <Link
              title={`Ir a mi cuenta de ${name}`}
              href={href}>
              {icon}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}
