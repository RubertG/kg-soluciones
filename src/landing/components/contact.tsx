import React from 'react'

interface Props {
  className?: string
}

const Contact = ({
  className
}: Props) => {
  return (
    <section
      className={`max-w-6xl mx-auto ${className}`}
    >
      <h2 className="text-text-100 text-4xl font-bold text-center md:text-[3.4rem]">
        Contacto
      </h2>
      <p className="text-sm text-text-200 mt-3 lg:text-base">
        Para solicitar presupuestos de cotizaciones o dudas o consultas sobre
        nuestros servicios, por favor no dude en contactarnos.
      </p>
    </section>
  )
}

export default Contact
