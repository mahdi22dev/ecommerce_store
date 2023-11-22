import React from "react";
import { IoMenu } from "react-icons/io5";
function Navbar() {
  return (
    <nav className='hidden sm:flex justify-between items-center p-10 w-full h-24 bg-gray-200 px-[15%]  '>
      <div className='flex-btw gap-2 cursor-pointer text-lg transition-all duration-300 hover:text-red-500 focus:text-red-500'>
        <IoMenu className='text-3xl' />
        menu
      </div>
      <div>logo</div>
      <div>cart</div>
    </nav>
  );
}

export default Navbar;
