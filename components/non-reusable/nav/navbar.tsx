import Link from "next/link";

import Container from "@/components/ui/container";
import WarningSign from "@/components/ui/warning-sign";
import MainNav from "@/components/non-reusable/nav/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/non-reusable/nav/navbar-actions";

export const revalidate = 0;

export const Navbar = async () =>
{
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative px-4 sm:px-6lg:px-8 flex h-16 items-center">

          <Link href='/' className='ml-4 flex lg:ml-0 gap-x-2' >
            <p className="font-bold text-xl">Store</p>
          </Link>
          <MainNav data={ categories } />
          <NavbarActions />
        </div>
      </Container>
    </div >
  )
}
