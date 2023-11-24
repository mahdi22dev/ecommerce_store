"use client";
import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { openCloseCart } from "@/lib/redux/cart/cartSlice";
function Cart() {
  const dispatch = useDispatch();
  return (
    <div className='absolute top-11 right-9  bg-white h-64 w-56 shadow-md'>
      <div className='flex justify-end w-full'>
        <IoClose
          className='hover:text-red-500 focus:text-red-500'
          onClick={() => {
            dispatch(openCloseCart());
          }}
        />
      </div>
      cart
    </div>
  );
}

export default Cart;
