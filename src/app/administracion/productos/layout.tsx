import { Header } from "@/admin"

function ProductsLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className="py-7">
      <Header title="Productos">
        <p className="text-text-200 text-sm lg:text-base mt-3">
          Administra todas las categorías de tu catálogo de productos. En esta sección, puedes crear, modificar y eliminar categorías de manera sencilla. Recuerda asignar un nombre breve a cada categoría, entre 3 y 20 caracteres, para facilitar su gestión y organización.
        </p>
      </Header>
      {children}
    </main>
  )
}

export default ProductsLayout