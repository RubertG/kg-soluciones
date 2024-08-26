import { Header, HeaderDecoration } from "@/landing"

function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <HeaderDecoration />
      <Header className="pt-20 md:pt-0" />
    </main>
  )
}

export default Page