"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import SignInBtn from "../ui/SignInBtn";
function User() {
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <div className='min-w-[50px]'>
      {isSignedIn ? <UserButton afterSignOutUrl='/' /> : <SignInBtn />}
    </div>
  );
}

export default User;
