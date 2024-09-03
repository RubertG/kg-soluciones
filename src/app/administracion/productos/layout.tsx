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
          Administra todos los productos de tu catálogo. En esta sección, puedes añadir, editar y eliminar productos de manera eficiente. Asegúrate de proporcionar detalles claros y precisos para cada producto, incluyendo nombre, descripción, imagenes en formato <strong>4/3</strong> y precio, para mantener tu inventario bien organizado y actualizado. Te recomendamos subir las imagenes con extención webp y que cada una pese menos de 200 KB.
        </p>
      </Header>
      {children}
    </main>
  )
}

export default ProductsLayout