import { SignIn } from "@clerk/nextjs";

function page() {
  return (
    <main className='w-full min-h-[80vh] center'>
      <SignIn />
    </main>
  );
}

export default page;
