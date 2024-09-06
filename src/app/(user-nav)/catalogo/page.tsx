import { Categories, ProductsContainer, Searcher } from "@/catalog"

interface Props {
  searchParams: { [key: string]: string | undefined }
}

function CatalogPage({
  searchParams
}: Props) {
  return (
    <section>
      <header className="mt-20 flex flex-col items-center justify-center gap-4">
        <Searcher searchParams={searchParams} />
        <Categories />
      </header>
      <ProductsContainer searchParams={searchParams} className="mt-12" />
    </section>
  )
}

export default CatalogPage