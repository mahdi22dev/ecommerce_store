import FirstGrid from "@/components/Home/FirstGrid";
import Image from "next/image";
import Link from "next/link";
export default async function Home() {
  try {
    // const products: allType = await allFetch();
    // const validProductSchema = allProductSchema.safeParse(products);
    // const data = await fetchCartItems("6568c8676e89736e002d36ae");
    // console.table(data);
  } catch (error) {
    throw error;
  }

  return (
    <main className='flex min-h-screen mx-auto flex-col items-center justify-between'>
      <div className='relative w-full h-[80vh]'>
        <Image src={"/bg-2.jpg"} objectFit='cover' alt='image' fill />
        <div className='absolute top-[35%] left-[23%] z-50 flex flex-col gap-3'>
          <p className='font-extrabold'>Welcome</p>
          <p className='max-w-xs'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eum,
            pariatur,
          </p>
          <Link
            href={"/"}
            className='button transition-colors duration-300 w-52'
          >
            shop now
          </Link>
        </div>
      </div>
      <div className='p-4 max-w w-full'>
        <FirstGrid />
      </div>
    </main>
  );
}
