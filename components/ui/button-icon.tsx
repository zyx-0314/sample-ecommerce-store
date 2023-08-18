import { cn } from "@/lib/utils"
import { MouseEventHandler } from "react"

interface ButtonIconProps
{
  onClick?: MouseEventHandler<HTMLButtonElement>
  icon: React.ReactElement
  className?: string
}

const ButtonIcon = ( {
  onClick,
  icon,
  className
}: ButtonIconProps ) =>
{

  return (
    <button
      onClick={ onClick }
      className={ cn(
        "rounded-full flex items-center justify-center bg-white border shadow-md p-2 hover:scale-110 transition duration-300 ease-in-out", className
      ) }
    >
      { icon }
    </button>
  )
}

export default ButtonIcon