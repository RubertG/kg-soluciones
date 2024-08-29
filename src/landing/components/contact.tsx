import { ContactForm, Social } from "@/core"

interface Props {
  className?: string
}

const Contact = ({
  className
}: Props) => {
  return (
    <section
      className={`max-w-6xl mx-auto px-4 xl:px-0 ${className}`}
    >
      <h2 className="text-text-100 text-4xl font-bold text-center md:text-[3.4rem]">
        Contacto
      </h2>
      <div className="relative w-full h-auto">
        <div className="decoration-grid-contact absolute -top-10 left-1/2 -translate-x-1/2 w-full min-w-[1000px] max-w-[1280px] min-h-[638.38px] opacity-10 -z-10" />
      </div>
      <div className="mt-14">
        <ContactForm />
        <Social className="mt-5" />
      </div>
    </section>
  )
}

export default Contact
