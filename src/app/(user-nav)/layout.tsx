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
      {children}
      <Footer />
    </>
  )
}

export default FirebaseLayout