'use client'

import Image from 'next/image'
import { toast } from 'react-hot-toast'
import { X } from 'lucide-react'

import ButtonIcon from '@/components/ui/button-icon'
import Currency from '@/components/ui/currency'
import useCart from '@/hooks/use-cart'
import { Product } from '@/types'

interface CartItemProps
{
  data: Product
}

const CartItem = ( { data }: CartItemProps ) =>
{
  const cart = useCart()

  const handleRemoveItem = () => cart.removeItem( data.id )

  return (
    <li className='flex py-6 border-b'>
      <div className="relative h-24 w-24 rpounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={ data?.images?.[ 0 ]?.url || '/static/images/placeholder/product.webp' }
          alt={ `${ data.name }; ${ data.category }` }
          className="object-cover"
        />
      </div>
      <div className="relative ml-4 flex flex-col justify-between flex-1 sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <ButtonIcon
            onClick={ handleRemoveItem }
            icon={ <X size={ 15 } /> }
          />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-seminold text-black">
              { data.name }
            </p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="text-gray-500">{ data.color.name }</p>
            <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">{ data.size.name }</p>
          </div>
          <Currency value={ data.price } />
        </div>
      </div>

    </li>
  )
}

export default CartItem