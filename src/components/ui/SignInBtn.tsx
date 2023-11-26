import React from "react";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
function SignInBtn() {
  return (
    <Link href={"/sign-in"} className='Btn'>
      <div className='sign'>
        <FaRegUser />
      </div>
      <div className='text'>Sign_in</div>
    </Link>
  );
}

export default SignInBtn;
