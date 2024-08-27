import { Input, PrincipalActionButton } from "@/core"

interface Props {
  className?: string
}

const ContactForm = ({
  className
}: Props) => {
  return (
    <form
      className={`w-full max-w-xl mx-auto p-3 lg:p-5 border border-bg-200 rounded-lg bg-bg-card/30 backdrop-blur-[3px] ${className}`}
    >
      <Input
        labelText="Nombre y apellido"
        id="name"
        placeholder="Ingresa tu nombre y apellido"
      />
      <Input
        className="mt-4"
        labelText="Correo electrónico"
        id="email"
        type="email"
        placeholder="tucorreo@ejemplo.com"
      />
      <Input
        className="mt-4 appearance-none"
        labelText="Nombre y apellido"
        type="number"
        id="number"
        placeholder="Ingresa tu número de teléfono"
      />
      <PrincipalActionButton>
        Hacer cotización 
      </PrincipalActionButton>
    </form>
  )
}

export default ContactForm
