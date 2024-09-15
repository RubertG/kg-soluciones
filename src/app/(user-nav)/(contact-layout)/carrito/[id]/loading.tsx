import { ProductsSummarySkeleton, QuoteForm } from "@/cart"
import { BackButton } from "@/core"

function Loading() {
  return (
    <>
      <BackButton href="/catalogo" className="mt-20" />
      <section className="mt-7 text-text-200 flex flex-col-reverse gap-4 mx-auto max-w-lg lg:grid lg:grid-cols-2 lg:gap-7 lg:max-w-none lg:items-start">
        <QuoteForm />
        <aside>
          <ProductsSummarySkeleton numberSkeletons={1} />
        </aside>
      </section>
    </>
  )
}

export default Loading