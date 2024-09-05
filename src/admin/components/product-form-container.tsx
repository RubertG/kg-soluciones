import { ProductImagesForm, SaveProductForm } from "@/admin"

export const ProductFormContainer = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[55%_auto] gap-6 items-start max-w-7xl">
      <SaveProductForm />
      <ProductImagesForm />
    </section>
  )
}