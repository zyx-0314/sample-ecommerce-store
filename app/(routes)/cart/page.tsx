'use client'

import CartItem from '@/components/non-reusable/cart/cart-item';
import Summary from '@/components/non-reusable/cart/summary';
import Container from '@/components/ui/container';
import useCart from '@/hooks/use-cart';
import { useState, useEffect } from 'react'


export default function CartPage ()
{
  const [ isMouted, setIsMouted ] = useState( false );
  const cart = useCart()

  useEffect( () => { setIsMouted( true ) }, [] )

  if ( !isMouted ) return null;

  return (
    <div className='bg-white'>
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className='text-3xl font-bolf text-black'>
            Shopping Cart
          </h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              { cart.items.length > 0 &&
                <p className='text-nuetral-500'>
                  No Items added
                </p>
              }
              <ul>
                { cart.items.map( ( item ) => (
                  <CartItem
                    key={ item.id }
                    data={ item }
                  />
                ) ) }
              </ul>
            </div>
            <Summary />
          </div>

        </div>
      </Container>
    </div>
  )
}
