import { Categories, Searcher } from "@/catalog"

interface Props {
  searchParams: { [key: string]: string | undefined }
}

function CatalogPage({
  searchParams
}: Props) {
  return (
    <section className="max-w-6xl mx-auto px-4 lg:px-0">
      <header className="mt-20 flex flex-col items-center justify-center gap-4">
        <Searcher searchParams={searchParams} />
        <Categories />
      </header>
    </section >
  )
}

export default CatalogPage