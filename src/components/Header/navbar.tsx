"use client";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import User from "../User/User";
import { FiShoppingCart } from "react-icons/fi";
import { MdCloseFullscreen } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { navlinks } from "@/config/nav-links";
import { navLinksTypes } from "@/lib/types";
import Link from "next/link";
import Cart from "../Cart/cart";
import { useDispatch, useSelector } from "react-redux";
import { openCloseCart } from "@/lib/redux/cart/cartSlice";
import { RootState } from "@/lib/redux/store";

function Navbar() {
  const dispatch = useDispatch();
  const { isCartopen } = useSelector((state: RootState) => state.cart);
  const [toggle, setToggle] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [hide, setHidden] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200;
      const hideThreshold = 3000;
      setIsSticky(scrollPosition > threshold);
      setHidden(scrollPosition > hideThreshold);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`${isSticky && "bg-white shadow-md"} ${
          hide ? "block" : "sticky"
        } top-0 flex justify-between items-center p-10 w-full h-24 px-[5%] lg:px-[15%] bg-background transition-colors duration-300 z-[1000]`}
      >
        <div
          className='flex-btw gap-2 cursor text-lg transition-all duration-300 hover:text-primary focus:text-primary'
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <IoMenu className='text-3xl' />
          <p className='hidden sm:block'>menu</p>
        </div>
        <div>logo</div>
        <div className='flex-btw gap-4 relative'>
          <div className='flex-btw gap-1 cursor hover:text-primary focus:text-primary '>
            <FiShoppingCart
              onClick={() => {
                dispatch(openCloseCart());
              }}
            />
            <p>0</p>
            {isCartopen && <Cart />}
          </div>
          <div className='flex-btw gap-1'>
            <p>orders</p>
            <p>0</p>
          </div>
          <User />
        </div>
      </nav>
      {/* black modal */}
      <div
        className={`${
          toggle ? "fixed" : "hidden"
        } bg-black/50 top-0 left-0 bottom-0 right-0 z-[1000]`}
        onClick={() => {
          setToggle(false);
        }}
      ></div>
      {/* responsive navbart part */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            className={`fixed top-0 left-0 bottom-0 right-2/4 w-full sm:w-2/4 lg:w-1/4 bg-background z-[1000] `}
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ duration: 0.8 }}
            key={"navbar"}
          >
            <div className='flex justify-end pt-12 px-12 pb-4'>
              <MdCloseFullscreen
                className='text-xl hover:scale-125 focus:scale-125 transition-all duration-200 cursor'
                onClick={() => {
                  setToggle(!toggle);
                }}
              />
            </div>
            <ul className='flex justify-between flex-col mt-7'>
              {navlinks.map((link: navLinksTypes) => {
                return (
                  <Link
                    onClick={() => {
                      setToggle(false);
                    }}
                    className='p-3 pl-8 font-medium hover:opacity-70 hover:pl-14 transition-[padding] duration-500 text-left resnavbaranimation showastick '
                    href={link.link}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
