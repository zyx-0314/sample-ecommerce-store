'use client'

import { Product } from "@/types"
import Image from "next/image"
import ButtonIcon from "@/components/ui/button-icon"
import { Expand, ShoppingCart } from "lucide-react"
import Currency from "./currency"

interface ProductCardProps
{
  data: Product
}

const ProductCard = ( { data }: ProductCardProps ) =>
{
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt={ `${ data.name }; ${ data.category }` }
          src={ data?.images?.[ 0 ]?.url || '/static/images/placeholder/product.webp' }
          className="aspect-square rounded-md object-cover"
          fill
        />
        <div
          className="opacity-0 group-hover:opacity-100 transition-all absolute w-full px-6  bottom-2 group-hover:bottom-5"
        >
          <div
            className="flex gap-x-6 justify-center"
          >
            <ButtonIcon
              onClick={ () => { } }
              icon={ <Expand size={ 20 } className="text-gray-600" /> }

            />
            <ButtonIcon
              onClick={ () => { } }
              icon={ <ShoppingCart size={ 20 } className="text-gray-600" /> }

            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between">

          <p className="font-semibold text-lg">
            { data.name }
          </p>
          <Currency value={ data.price } />
        </div>
        <p className="text-sm text-gray-500">
          { data.category?.name }
        </p>
      </div>

    </div>
  )
}

export default ProductCard