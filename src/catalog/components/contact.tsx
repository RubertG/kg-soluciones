import { ContactForm, Social } from "@/core"

interface Props {
  className?: string
}

export const Contact = ({ className }: Props) => {
  return (
    <section className={className}>
      <h2 className="text-text-100 text-xl md:text-2xl lg:text-3xl font-bold mb-4">
        ¿No encuentras el producto que buscas?
      </h2>
      <p className="text-text-200 text-sm lg:text-base">
        ¡No te preocupes! Contáctame y juntos diseñaremos la solución ideal para ti. Ofrezco diseño, modelado e impresión 3D, y también me especializo en sistemas de alarma, cámaras de seguridad, portones eléctricos, y domótica. Además, realizo mantenimiento en electricidad automotriz y puedo ayudarte a implementar sistemas de gestión de seguridad y salud en el trabajo adaptado a tu empresa, ¡No dudes en contactarme!
      </p>
      <div className="relative w-full h-auto">
        <div className="decoration-grid-contact absolute -top-10 left-1/2 -translate-x-1/2 w-full min-w-[1000px] max-w-[1280px] min-h-[638.38px] opacity-10 -z-10" />
      </div>
      <div className="mt-12">
        <ContactForm />
        <Social className="mt-5" />
      </div>
    </section>
  )
}