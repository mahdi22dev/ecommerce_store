"use client";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import User from "../User/User";
import { FiShoppingCart } from "react-icons/fi";
import { MdCloseFullscreen } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200;
      setIsSticky(scrollPosition > threshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${
          isSticky && " bg-white shadow-md"
        } sticky top-0 flex justify-between items-center p-10 w-full h-24 px-[5%] lg:px-[15%] bg-gray-100 transition-colors duration-300`}
      >
        <div
          className='flex-btw gap-2 cursor text-lg transition-all duration-300 hover:text-red-500 focus:text-red-500'
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <IoMenu className='text-3xl' />
          <p className='hidden sm:block'>menu</p>
        </div>
        <div>logo</div>
        <div className='flex-btw gap-4'>
          <div className='cursor'>
            <FiShoppingCart />
          </div>
          <div>orders</div>
          <User />
        </div>
      </nav>

      <AnimatePresence>
        {toggle && (
          <motion.div
            className={`fixed top-0 left-0 bottom-0 right-2/4 w-full sm:w-2/4 lg:w-1/4 bg-white p-10 `}
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.8 }}
            key={"navbar"}
          >
            <div className='w-full h-full flex justify-end'>
              <MdCloseFullscreen
                className='text-xl hover:scale-125 focus:scale-125 transition-all duration-200 cursor'
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
