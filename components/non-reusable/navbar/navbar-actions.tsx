'use client'
import { ShoppingBag } from "lucide-react"
import { useState, useEffect } from 'react'

import { Button } from "@/components/ui/button";

const NavbarActions = () =>
{
  const [ isMouted, setIsMouted ] = useState( false );

  useEffect( () => { setIsMouted( true ) }, [] )

  if ( !isMouted ) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        className='rounded-full flex items-center '
      >
        <ShoppingBag
          className="w-4 h-4"
        />
        <span className="ml-2 text-sm font-medium text-white">
          0
        </span>
      </Button>
    </div>
  );
}

export default NavbarActions;