"use client";
import { SignUp } from "@clerk/nextjs";

function page() {
  return (
    <div>
      <SignUp redirectUrl={"http://localhost:3000/extra"} />
    </div>
  );
}

export default page;
