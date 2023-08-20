'use client'
import { ShoppingBag } from "lucide-react"
import { useState, useEffect } from 'react'

import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () =>
{
  const [ isMouted, setIsMouted ] = useState( false );
  const cart = useCart()
  const router = useRouter()

  useEffect( () => { setIsMouted( true ) }, [] )


  if ( !isMouted ) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        onClick={ () => router.push( '/cart' ) }
        className='rounded-full flex items-center '
      >
        <ShoppingBag
          className="w-4 h-4"
        />
        <span className="ml-2 text-sm font-medium text-white">
          { cart?.items.length || 0 }
        </span>
      </Button>
    </div>
  );
}

export default NavbarActions;