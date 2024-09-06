import { Contact } from "@/catalog"

function CatalogLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="max-w-6xl mx-auto px-4 xl:px-0">
      <div className="row-span-full max-w-[calc(100vw-80px)] lg:max-w-[calc(100vw-104px)]">
        {children}
      </div>
      <Contact className="pt-10 mb-16" />
    </main>
  )
}

export default CatalogLayout