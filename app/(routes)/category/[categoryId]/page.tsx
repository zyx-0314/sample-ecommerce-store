import { getSingleCategory } from "@/actions/get-categories";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import MobileFilters from "@/components/non-reusable/mobile-filter";
import BillboardSection from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import Filter from "@/components/ui/filter";
import ProductCard from "@/components/ui/product-card";
import WarningSign from "@/components/ui/warning-sign";

export const revalidate = 0

interface CategoryPageProps
{
  params: {
    categoryId: string
  },
  searchParams: {
    colorId: string,
    sizeId: string,
  }
}

export default async function CategoryPage ( {
  params: {
    categoryId
  },
  searchParams: {
    colorId,
    sizeId,
  }
}: CategoryPageProps )
{
  const products = await getProducts( {
    categoryId,
    colorId,
    sizeId,
  } )
  const sizes = await getSizes()
  const colors = await getColors()
  const category = await getSingleCategory( categoryId )

  const filtersArray = [
    {
      valueKey: 'sizeId',
      name: 'Sizes',
      data: sizes
    },
    {
      valueKey: 'colorId',
      name: 'Colors',
      data: colors
    },
  ]

  return (
    <div className="bg-white dark:bg-transparent">
      <Container>
        <BillboardSection data={ category.billboard } />
        <div className="px-4 sm:px-6 lg:px-8pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters filtersArray={ filtersArray } />
            <div className="hidden lg:block">
              {
                filtersArray.map( ( filter ) => (
                  <div key={ filter.valueKey }>
                    <Filter
                      valueKey={ filter.valueKey }
                      name={ filter.name }
                      data={ filter.data }
                    />
                    <hr />
                  </div>
                ) )
              }
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                { products.map( ( product ) => (
                  <ProductCard
                    key={ product.id }
                    data={ product }
                  />
                ) ) }
              </div>
            </div>
          </div>

        </div>
      </Container>
    </div>
  )
}
