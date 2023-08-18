'use client'

import { useEffect, useState } from "react";

interface CurrencyProps
{
  value: string
}

const formatter = new Intl.NumberFormat( 'en-PH', {
  style: 'currency',
  currency: 'PHP',
  minimumFractionDigits: 2
} )

const Currency = ( { value }: CurrencyProps ) =>
{
  const [ isMounted, setIsMounted ] = useState( false );

  useEffect( () => { setIsMounted( true ); }, [] );
  if ( !isMounted ) return null;

  return (
    <div className='text-blue-700 font-bold'>
      { formatter.format( Number( value ) ) }
    </div>
  )
}

export default Currency