"use client";
import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { openCloseCart, removeFromCart } from "@/lib/redux/cart/cartSlice";
import Link from "next/link";
import { cartItemsTypes } from "@/lib/types";
import { RootState } from "@/lib/redux/store";

function Cart() {
  const { CartItems } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  console.log("displaying data from cart component");
  console.log(CartItems);
  console.log("done displaying data from cart component");
  return (
    <div className='absolute top-11 right-9 bg-black min-h-[256px] w-60 shadow-md pb-2  text-white'>
      <div className='flex justify-end w-full'>
        <IoClose
          className='hover:text-red-500 focus:text-red-500 m-2'
          onClick={() => {
            dispatch(openCloseCart());
          }}
        />
      </div>
      <div className='w-full h-full flex justify-between flex-col'>
        {CartItems.length == 0 ? (
          <p className='mb-[50%] mx-auto'>Please add items to cart</p>
        ) : (
          <div className='p-4'>
            {CartItems?.map((item: any) => {
              return (
                <div className='flex gap-2 mb-2'>
                  <div className='bg-red-400 w-20 h-12'>image</div>
                  <div className='font-thin text-xs'>
                    {/* <p className='font-bold'>{item.title}</p> */}
                    <p className='font-extralight'>{item.price}$</p>
                  </div>
                  <IoClose
                    className='hover:text-red-500 focus:text-red-500'
                    onClick={() => {
                      dispatch(removeFromCart(item._id));
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}
        <div className='p-5 mt-auto'>
          <Link
            href={"/"}
            className='px-5 py-2 bg-primary/50 hover:bg-secondary focus:bg-secondary border border-black border-opacity-0 hover:border-opacity-100 focus:border-opacity-100  center cursor mb-1 delay-ms'
          >
            View cart
          </Link>
          <Link
            href={"/c"}
            className='px-5 py-2 bg-primary hover:bg-secondary focus:bg-secondary border border-black border-opacity-0 hover:border-opacity-100 focus:border-opacity-100 center cursor delay-ms'
          >
            Check Out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Cart;
