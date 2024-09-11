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
  const products = await getProduct(id)

  return {
    title: `${products?.name} - KG Soluciones`,
    description: `${products?.description} - KG Soluciones`,
    openGraph: {
      title: `${products?.name} - KG Soluciones`,
      description: `${products?.description} - KG Soluciones`,
      url: `${defaultUrl}/catalogo/${id}`,
      siteName: `${products?.name} - KG Soluciones`,
      images: [
        {
          url: products?.images[0].url ?? "",
          width: 1200,
          height: 630
        }
      ],
      locale: "es-ES",
      type: "website"
    }
  }
}

async function ProductPage({ params: { id } }: Props) {
  const product = await getProduct(id)

  if (!product) return notFound()

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