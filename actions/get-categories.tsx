import { Category } from "@/types";

const URL = `${ process.env.NEXT_PUBLIC_API_URL }/categories`;

export default async function getCategories (): Promise<Category[]>
{
  const response = await fetch( URL )
  return response.json();
}

export async function getSingleCategory ( id: string ): Promise<Category>
{
  const response = await fetch( `${ URL }/${ id }` )
  return response.json();
}