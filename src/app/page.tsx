import FirstGrid from "@/components/Home/FirstGrid";
import { allType } from "@/lib/sanity/sanityQuerieTypes";
import { allProductSchema } from "@/lib/schema/schemaValidation";
import { allFetch } from "@/server-actions/sanityActions";

export default async function Home() {
  try {
    const products: allType = await allFetch();
    const validProductSchema = allProductSchema.safeParse(products);
    console.log(validProductSchema);
  } catch (error) {
    throw error;
  }

  return (
    <main className='flex min-h-screen max-w mx-auto flex-col items-center justify-between p-4 pb-[200%]'>
      <FirstGrid />
    </main>
  );
}
