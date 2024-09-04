import { ProductsTable } from "@/admin"
import { PrincipalButton } from "@/core"

function ProductsPage() {
  return (
    <section className="flex flex-col flex-wrap gap-5 items-start">
      <PrincipalButton
        className="w-full md:w-auto text-center"
        href="/administracion/productos/nuevo"
      >
        Crear nuevo producto
      </PrincipalButton>
      <ProductsTable />
    </section>
  )
}

export default ProductsPage