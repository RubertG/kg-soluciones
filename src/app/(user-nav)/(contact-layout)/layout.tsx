import { Contact } from "@/catalog"

async function FirebaseLayout({
  children
}: {
  children:
  React.ReactNode
}) {
  return (
    <>
      {children}
      <Contact className="py-16" />
    </>
  )
}

export default FirebaseLayout