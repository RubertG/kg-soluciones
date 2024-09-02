import { Header } from "@/admin"
import { Categories, Products } from "@/core"
import Link from "next/link"

function AdminPage() {
  return (
    <section className="w-full py-7">
      <Header title="Administración" />
      <ul className="flex flex-wrap items-start justify-center md:justify-start gap-4">
        <li className="bg-bg-card/30 rounded-lg p-3.5 border border-bg-200 w-[200px]">
          <div>
            <Categories className="w-12 h-12 m-auto" />
          </div>
          <h2 className="font-bold text-text-200 text-center text-lg mt-4">Categorías</h2>
          <Link 
            href="/administracion/categorias"
            className="text-text-300 text-center text-sm block lg:hover:text-primary-100 lg:transition-colors"
            title="Ir a la seccion de categorias"
          >Más información</Link>
        </li>
        <li className="bg-bg-card/30 rounded-lg p-3.5 border border-bg-200 w-[200px]">
          <div>
            <Products className="w-12 h-12 m-auto" />
          </div>
          <h2 className="font-bold text-text-200 text-center text-lg mt-4">Productos</h2>
          <Link 
            href="/administracion/productos"
            className="text-text-300 text-center text-sm block lg:hover:text-primary-100 lg:transition-colors"
            title="Ir a la seccion de productos"
          >Más información</Link>
        </li>
      </ul>
    </section>
  )
}

export default AdminPage