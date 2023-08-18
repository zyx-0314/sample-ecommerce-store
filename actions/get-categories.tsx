import { Category } from "@/types";

const URL = `${ process.env.NEXT_PUBLIC_API_URL }/categories`;

export default async function getCategories (): Promise<Category[]>
{
  const response = await fetch( URL )
  return response.json();
}