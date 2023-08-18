'use client'

// todo: 🔳 Convert it to non default export

import { usePathname } from 'next/navigation'

import WarningSign from "@/components/ui/warning-sign";
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Category } from '@/types';

interface MainNavProps
{
  data: Category[]
}

const MainNav = ( {
  data
}: MainNavProps ) =>
{
  const pathname = usePathname()


  const routes = data.map( ( { id, name } ) => ( {
    href: `/category/${ id }`,
    name: name,
    active: pathname === `/category/${ id }`,
  } ) )

  return (
    <div
      className='mx-6 flex items-center space-x-4 lg:space-x-6'
    >
      { routes.map( ( { href, name, active } ) => (
        <Link
          key={ href } href={ href }
          className={ cn( 'text-sm font-medium transition-colors', active ? 'text-black dark:text-white' : 'text-gray-500 hover:text-primary' ) }
        >
          { name }
        </Link>
      ) ) }
    </div>
  )
}

export default MainNav