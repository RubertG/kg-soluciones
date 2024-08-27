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
      <div className="mt-14">
        <ContactForm />
        <Social className="mt-5" />
      </div>
    </section>
  )
}

export default Contact
