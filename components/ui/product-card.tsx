'use client'

import Image from "next/image"
import { MouseEventHandler } from "react"
import { useRouter } from "next/navigation"
import { Expand, ShoppingCart } from "lucide-react"

import { Product } from "@/types"
import Currency from "@/components/ui/currency"
import ButtonIcon from "@/components/ui/button-icon"
import usePreviewModal from "@/hooks/use-preview-modal"
import useCart from "@/hooks/use-cart"

interface ProductCardProps
{
  data: Product
}

const ProductCard = ( { data }: ProductCardProps ) =>
{
  const previewModal = usePreviewModal()
  const router = useRouter()
  const cart = useCart()

  const handleClick = () =>
  {
    router.push( `/product/${ data?.id }` )
  }

  const handlePreview: MouseEventHandler<HTMLButtonElement> = ( e ) =>
  {
    e.stopPropagation()
    previewModal.onOpen( data )
  }

  const handleAddtoCart: MouseEventHandler<HTMLButtonElement> = ( e ) =>
  {
    e.stopPropagation()
    cart.addItem( data )
  }

  return (
    <div
      onClick={ handleClick }
      className="bg-white dark:bg-gray-200 group cursor-pointer rounded-xl border p-3 space-y-4"
    >
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
              onClick={ handlePreview }
              icon={ <Expand size={ 20 } className="text-gray-600" /> }

            />
            <ButtonIcon
              onClick={ handleAddtoCart }
              icon={ <ShoppingCart size={ 20 } className="text-gray-600" /> }
            />

          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="font-semibold text-lg dark:text-black">
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