"use client";
import { SignUp } from "@clerk/nextjs";

function page() {
  return (
    <main className='w-full min-h-[80vh] center'>
      <SignUp />
    </main>
  );
}

export default page;
