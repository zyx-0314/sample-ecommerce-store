import getProducts, { getSigleProduct } from "@/actions/get-products"
import Gallery from "@/components/non-reusable/gallery"
import ProductInfo from "@/components/non-reusable/info"
import Container from "@/components/ui/container"
import ProductList from "@/components/ui/product-list"

interface ProductPageProps
{
  params: {
    productId: string
  }
}

export const revalidate = 0

export default async function ProductPage ( {
  params: {
    productId
  }
}: ProductPageProps )
{
  const product = await getSigleProduct( productId )
  const suggestedProducts = await getProducts( {
    categoryId: product?.category?.id
  } )

  suggestedProducts.splice( suggestedProducts.findIndex( ( p ) => p.id === product.id ), 1 )

  return (
    <div>
      <Container>

        <div className="flex flex-col gap-y-8 py-10 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={ product.images } />
            <div className="mt-10 px-4 sm:mt-16 ms:px-0 lg:mt-0">
              <ProductInfo data={ product } />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title='Related Products' items={ suggestedProducts } />
        </div>
      </Container>
    </div>
  )
}
