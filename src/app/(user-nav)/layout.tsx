import { Nav } from "@/core"

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
    </>
  )
}

export default FirebaseLayout