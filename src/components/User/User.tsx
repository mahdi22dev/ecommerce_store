"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
function User() {
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <div className='min-w-[50px]'>
      {isSignedIn ? (
        <UserButton afterSignOutUrl='/' />
      ) : (
        <Link className='p-2 bg-gray-300 shadow-lg' href={"/sign-in"}>
          sign in
        </Link>
      )}
    </div>
  );
}

export default User;
