import PageCart from "@/components/Cart/PageCart";
import { auth } from "@clerk/nextjs";

function page() {
  const { userId }: { userId: string | null } = auth();
  console.log(userId);

  return (
    <main className='flex w-full p-5 min-h-screen mx-auto flex-col items-center justify-between'>
      <PageCart />
    </main>
  );
}

export default page;
