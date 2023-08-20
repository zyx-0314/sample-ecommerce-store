'use client'

import { useState, useEffect } from "react"

import PreviewModal from "@/components/non-reusable/preview-modal"

const ModalProvider = () =>
{
  const [ isMounted, setIsMounted ] = useState( false )

  useEffect( () => { setIsMounted( true ) }, [] )

  if ( !isMounted ) return null

  return (
    <div>
      <PreviewModal />
    </div>
  )
}

export default ModalProvider