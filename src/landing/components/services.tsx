import { Service } from "@/landing"
import Image from "next/image"

const services = [
  {
    description: "Servicio de diseño, modelado e impresión 3d, te fabricamos tu pieza plástica",
    image: "/assets/3d-printing.svg"
  },
  {
    description: "Fabricación, reparación o mantenimiento de sistemas de alarma vehicular y hogar",
    image: "/assets/alarm.svg"
  },
  {
    description: "Instalación de cámaras de seguridad, portones eléctricos y domótica",
    image: "/assets/camera.svg"
  },
  {
    description: "Sistema de gestión de seguridad y salud en el trabajo para tu empresa",
    image: "/assets/sst.svg",
    width: 80,
    height: 102
  },
  {
    description: "Diseño, construcción y mantenimiento de sistemas automatizados",
    image: "/assets/machine.svg"
  },
  {
    description: "Servicios técnicos de tarjetas electrónicas y electricidad automotriz",
    image: "/assets/chip.svg"
  }
]

interface Props {
  className?: string
}

export const Services = ({
  className
}: Props) => {
  return (
    <section
      className={`max-w-6xl mx-auto ${className}`}
    >
      <div className="relative w-full h-auto">
        <div className="decoration-grid-service absolute -top-10 left-1/2 -translate-x-1/2 w-full min-w-[1280px] min-h-[659px] opacity-10 -z-10" />
      </div>
      <h2 className="text-text-100 text-4xl font-bold text-center md:text-[3.4rem]">
        Servicios
      </h2>
      <ul className="flex items-center justify-center flex-wrap gap-3 gap-y-5 mt-16">
        {
          services.map((service, index) => (
            <li key={index}>
              <Service
                description={service.description}
                image={
                  <Image
                    className="w-auto h-auto"
                    src={service.image}
                    alt={`Imagen de ${service.description} - Kevin Gonzalez - KG Soluciones`}
                    width={service.width || 80}
                    height={service.height || 80}
                  />
                }
              />
            </li>
          ))
        }
      </ul>
    </section>
  )
}