import { allType } from "@/lib/sanity/sanityQuerieTypes";
import { allProductSchema } from "@/lib/schema/schemaValidation";
import { allFetch } from "@/server-actions/sanityActions";

export default async function Home() {
  // const products: allType = await allFetch();
  // const validProductSchema = allProductSchema.safeParse(products);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 pb-[200%]'></main>
  );
}
