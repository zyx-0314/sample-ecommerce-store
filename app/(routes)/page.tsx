import React from 'react'

import getBillboard from '@/actions/get-billboards'
import getProducts from '@/actions/get-products'
import BillboardSection from '@/components/ui/billboard'
import ProductList from '@/components/ui/product-list'
import Container from '@/components/ui/container'

export const revalidate = 0

export default async function HomePage ()
{
  const products = await getProducts( { isFeatured: true } )
  const billboards = await getBillboard( '00f63c71-9de4-42cd-8235-8ce198447573' )

  return (
    <Container>
      <div className="space-y-10 p">
        <BillboardSection data={ billboards } />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title='Featured Products' items={ products } />
      </div>
    </Container>
  )
}
