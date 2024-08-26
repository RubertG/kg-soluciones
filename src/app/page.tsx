import { Header, Services } from "@/landing"

function Page() {
  return (
    <main className="relative overflow-hidden">
      <Header className="pt-20 md:pt-0" />
      <Services />
    </main>
  )
}

export default Page