import PageCart from "@/components/Cart/PageCart";
import { currentUser } from "@clerk/nextjs";

async function page() {
  try {
    const user = await fetch("http://localhost:3000/user");
    const userId = await user.json();
    console.log(userId);
  } catch (error) {
    console.log(error.message);
  }

  return (
    <main className='flex w-full p-5 min-h-screen mx-auto flex-col items-center justify-between'>
      <PageCart />
    </main>
  );
}

export default page;
