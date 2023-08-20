import { Billboard } from "@/types";

const URL = `${ process.env.NEXT_PUBLIC_API_URL }/billboards`;

export default async function getSingleBillboard ( id: string ): Promise<Billboard>
{
  const response = await fetch( `${ URL }/${ id }` )
  return response.json();
}

export async function getBillboards (): Promise<Billboard[]>
{
  const response = await fetch( URL );
  return response.json();
}