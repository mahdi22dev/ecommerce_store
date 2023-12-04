"use client";
import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { openCloseCart, removeFromCart } from "@/lib/redux/cart/cartSlice";
import Link from "next/link";
import { RootState } from "@/lib/redux/store";
import Image from "next/image";

function Cart() {
  const { CartItems, isCartopen } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();
  const closeCart = () => dispatch(openCloseCart());
  return (
    <>
      <div
        className={`${
          isCartopen ? "fixed" : "hidden"
        } bg-inherit top-0 left-0 bottom-0 right-0 z-[100]`}
        onClick={closeCart}
      ></div>
      <div
        className='absolute top-11 right-9 bg-black min-h-[256px] w-60 shadow-md pb-2 text-white z-[1000]'
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className='flex justify-end w-full'>
          <IoClose
            className='hover:text-red-500 focus:text-red-500 m-2'
            onClick={closeCart}
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
                    <div className='bg-white w-20 h-12 min-w-[5rem] relative'>
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        objectFit='cover'
                      />
                    </div>
                    <div className='font-thin text-xs'>
                      <p className='font-bold'>{item.title}</p>
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
              href={"/cart"}
              className='px-5 py-2 bg-primary/50 hover:bg-secondary focus:bg-secondary border border-black border-opacity-0 hover:border-opacity-100 focus:border-opacity-100  center cursor mb-1 delay-ms'
              onClick={closeCart}
            >
              View cart
            </Link>
            <Link
              href={"/cart"}
              className='px-5 py-2 bg-primary hover:bg-secondary focus:bg-secondary border border-black border-opacity-0 hover:border-opacity-100 focus:border-opacity-100 center cursor delay-ms'
              onClick={closeCart}
            >
              Check Out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
