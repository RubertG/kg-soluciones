import { ProductInfoContainer } from "@/catalog"
import { defaultUrl, getProduct } from "@/core"
import { BackButton } from "@/core"
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface Props {
  params: {
    id: string
  }
}

export const generateMetadata = async ({ params: { id } }: Props): Promise<Metadata> => {
  const { product } = await getProduct(id)

  return {
    title: `${product?.name} - KG Soluciones`,
    description: `${product?.description.replace(/<\/p>\s*<p>/g, '\n').replace(/<\/?p>/g, '')}`,
    openGraph: {
      title: `${product?.name} - KG Soluciones`,
      description: `${product?.description.replace(/<\/p>\s*<p>/g, '\n').replace(/<\/?p>/g, '')}`,
      url: `${defaultUrl}/catalogo/${id}`,
      siteName: `${product?.name} - KG Soluciones`,
      images: [
        {
          url: product?.images[0].url ?? "",
          width: 500,
          height: 400
        }
      ],
      locale: "es-ES",
      type: "website"
    }
  }
}

async function ProductPage({ params: { id } }: Props) {
  const { product, error } = await getProduct(id)

  if (!product || error) return notFound()

  return (
    <div className="mt-20 text-text-200">
      <section className="flex items-center gap-3 justify-between">
        <BackButton href="/catalogo" />
        {
          product.price && (
            <p className="text-accent-300 text-xl">
              ${product.price}
            </p>
          )
        }
      </section>

      <ProductInfoContainer product={product} className="mt-7" />
    </div>
  )
}

export default ProductPage