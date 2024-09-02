import { CategoryForm, Header } from "@/admin"

function CategoriesPage() {
  return (
    <section className="py-7">
      <Header title="Categorías">
        <p className="text-text-300 text-sm mt-3">
          Administra todas las categorías de tu catálogo de productos. En esta sección, puedes crear, modificar y eliminar categorías de manera sencilla. Recuerda asignar un nombre breve a cada categoría, entre 3 y 20 caracteres, para facilitar su gestión y organización.
        </p>
      </Header>
      <div>
        <CategoryForm />
        <aside>

        </aside>
      </div>
    </section>
  )
}

export default CategoriesPage