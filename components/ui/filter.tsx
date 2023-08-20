'use client'

import { Color, Size } from "@/types"
import { useSearchParams, useRouter } from "next/navigation"
import queryString from "query-string"
import { Button } from "./button"

interface FilterProps
{
  valueKey: string,
  name: string,
  data: Size[] | Color[]
}

const Filter = ( {
  valueKey,
  name,
  data
}: FilterProps ) =>
{
  const searchParams = useSearchParams()
  const router = useRouter()

  const selectValue = searchParams.get( valueKey )

  const handleFilter = ( value: string ) =>
  {
    const current = queryString.parse( searchParams.toString() )

    const query = {
      ...current,
      [ valueKey ]: value
    }

    if ( current[ valueKey ] === value )
    {
      query[ valueKey ] = null
    }

    const url = queryString.stringifyUrl( {
      url: window.location.href,
      query
    }, { skipNull: true } )

    router.push( url )
  }

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">
        { name }
      </h3>
      <div className="flex flex-wrap gap-2">
        { data.map( ( item ) => (
          <div key={ item.id } className="flex items-center">
            <Button
              variant={ selectValue === item.id ? 'default' : 'ghost' }
              className={ `rounded-full border-2 border-gray-200 ${ valueKey === 'colorId' ? 'px-1.5 py-0.5' : '' }` }

              onClick={ () => handleFilter( item.id ) }
            >
              {
                valueKey === 'colorId'
                  ? <div
                    className="w-6 h-6 rounded-full"
                    style={ { backgroundColor: item.value } }
                  />
                  : item.name
              }
            </Button>
          </div>
        ) ) }
      </div>

    </div>
  )
}

export default Filter