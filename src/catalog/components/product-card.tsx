import { Product } from "@/core/types/db/db"
import { Link } from "next-view-transitions"
import Image from "next/image"

interface Props {
  product: Product
}

export const ProductCard = ({
  product
}: Props) => {

  return (
    <Link
      href={`/catalogo/${product.id}`}
      className="w-full p-2 lg:p-2.5 bg-bg-card/40 border border-bg-200 rounded-lg lg:hover:bg-bg-200 lg:transition-colors"
      title={`Ir al producto ${product.name}`}
    >
      <picture>
        <Image
          src={product.images[0].url || ''}
          alt={product.name}
          width={350}
          height={350 * 0.33}
          className="w-full object-cover aspect-[4/3] rounded-lg"
        />
      </picture>
      <footer className="mt-2">
        <p className="text-text-200 text-sm lg:text-base line-clamp-2">
          {product.name}
        </p>
        {
          product.price && (
            <p className="text-text-100 lg:text-lg font-medium">
              ${product.price}
            </p>
          )
        }
      </footer>
    </Link>
  )
}
