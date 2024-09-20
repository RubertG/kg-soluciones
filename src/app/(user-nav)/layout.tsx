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
      <main className="grid grid-rows-2 min-h-[100dvh] max-w-6xl mx-auto px-4 xl:px-0 relative overflow-hidden">
        <div className="row-span-full">
          {children}
        </div>
        <Footer />
      </main>
    </>
  )
}

export default FirebaseLayout