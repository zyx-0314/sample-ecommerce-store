import { Product } from "@/types";
import qs from "query-string";

const URL = `${ process.env.NEXT_PUBLIC_API_URL }/products`;

interface Query
{
  categoryId?: string
  colorId?: string
  sizeId?: string
  isFeatured?: boolean
}

export default async function getProducts ( {
  categoryId,
  colorId,
  sizeId,
  isFeatured
}: Query ): Promise<Product[]>
{
  const url = qs.stringifyUrl( {
    url: URL,
    query: {
      _sort: "updatedAt:DESC",
      colorId,
      sizeId,
      categoryId,
      isFeatured
    }
  } );
  const response = await fetch( URL )
  return response.json();
}