'use client'

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Color, Size } from "@/types"
import { Plus, X } from "lucide-react"
import { Dialog } from "@headlessui/react"
import ButtonIcon from "../ui/button-icon"
import Filter from "../ui/filter"

interface MobileFiltersProps
{
  filtersArray: {
    valueKey: string,
    name: string,
    data: Color[] | Size[]
  }[]
}

const MobileFilters = ( {
  filtersArray
}: MobileFiltersProps ) =>
{
  const [ open, setOpen ] = useState( false )

  const toggleOpen = () => setOpen( !open )

  return (
    <>
      <Button
        // className='w-fit text-left flex gap-2 rounded-full lg:hidden'
        className='w-fit text-left flex gap-2 rounded-full'
        variant='default'
        onClick={ toggleOpen }
      >
        Filters <Plus size={ 16 } />
      </Button>
      <Dialog
        open={ open } onClose={ toggleOpen }
        as='div' className='relative z-40'
      >
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel className='relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl'>
            <div className="flex item-center justify-end px-4">
              <ButtonIcon
                icon={ <X size={ 15 }></X> }
                onClick={ toggleOpen }
              />
            </div>
            <div className="p-4">
              {
                filtersArray.length > 1 && filtersArray.map( ( filter ) => (
                  <Filter
                    key={ filter.valueKey }
                    valueKey={ filter.valueKey }
                    name={ filter.name }
                    data={ filter.data }
                  />
                ) )
              }
            </div>
          </Dialog.Panel>
        </div>

      </Dialog>
    </>
  )
}

export default MobileFilters