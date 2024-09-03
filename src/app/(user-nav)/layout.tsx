import { Footer, Nav } from "@/core"

async function FirebaseLayout({
  children
}: {
  children:
  React.ReactNode
}) {
  return (
    <>
      <Nav />
      <main className="grid grid-rows-2 min-h-[100dvh]">
        <div className="row-span-full">
          {children}
        </div>
        <Footer />
      </main>
    </>
  )
}

export default FirebaseLayout