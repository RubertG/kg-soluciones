import { Header, Services } from "@/landing"
import { Contact } from "@/landing/components/contact"

function Page() {
  return (
    <main className="relative overflow-hidden">
      <Header className="pt-20 md:pt-0" />
      <Services className="mt-10 lg:mt-0 pb-32" />
      <Contact className="pb-20" />
    </main>
  )
}

export default Page