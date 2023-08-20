'use client'

import axios from 'axios'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import { useSearchParams } from 'next/navigation'

import useCart from '@/hooks/use-cart'
import Currency from '@/components/ui/currency'
import { Button } from '@/components/ui/button'

const Summary = () =>
{
  const searchParams = useSearchParams()
  const items = useCart( ( state ) => state.items )
  const removeAllItems = useCart( ( state ) => state.removeAllItems )

  const totalPrice = items.reduce( ( total, item ) =>
  {
    return total + Number( item.price )
  }, 0 )

  const handleCheckout = async () =>
  {
    const response = await axios.post( `${ process.env.NEXT_PUBLIC_API_URL }/checkout`, {
      productIds: items.map( item => item.id )
    } )

    window.location.href = response.data.url
  }

  useEffect( () =>
  {
    if ( searchParams.get( 'success' ) )
    {
      toast.success( 'Payment Successful' )
      removeAllItems()
    }

    if ( searchParams.get( 'canceled' ) )
    {
      toast.error( 'Payment Canceled' )
    }
  }, [ searchParams ] )

  return (
    <div
      className='mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8'
    >
      <h2 className="text-lg font-medium text-gray-900">
        Order Summary
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">
            Subtotal:
          </div>
          <Currency value={ totalPrice.toString() } />
        </div>
      </div>
      <Button
        onClick={ handleCheckout }
        className='w-full mt-6'
      >
        Checkout
      </Button>

    </div>
  )
}

export default Summary