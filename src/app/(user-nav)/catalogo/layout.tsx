import { Contact } from "@/catalog"

function CatalogLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="max-w-6xl mx-auto px-4 xl:px-0 relative overflow-hidden">
      {children}
      <Contact className="pt-10 mb-16" />
    </main>
  )
}

export default CatalogLayout