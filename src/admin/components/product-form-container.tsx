import { ProductForm, ProductImagesForm } from "@/admin"

export const ProductFormContainer = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[55%_auto] gap-6 items-start">
      <ProductForm />
      <ProductImagesForm />
    </section>
  )
}