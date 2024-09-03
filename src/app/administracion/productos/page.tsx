import { ProductsTable } from "@/admin"

function ProductsPage() {
  return (
    <section className="flex flex-col flex-wrap gap-5 items-start">
      <ProductsTable />
    </section>
  )
}

export default ProductsPage