"use client";
import { SignUp } from "@clerk/nextjs";

function page() {
  return (
    <main className='w-full min-h-[80vh] center'>
      <SignUp redirectUrl={"http://localhost:3000/extra"} />
    </main>
  );
}

export default page;
