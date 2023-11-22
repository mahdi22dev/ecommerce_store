import { allType } from "@/lib/sanityQuerieTypes";
import { allProductSchema } from "@/lib/schemaValidation";
import { allFetch } from "@/server-actions/sanityActions";

// false | 'force-cache' | 0 | number
export default async function Home() {
  const products: allType = await allFetch();
  console.log(products);
  const validProductSchema = allProductSchema.safeParse(products);
  console.log(validProductSchema);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-gray-100'></main>
  );
}
