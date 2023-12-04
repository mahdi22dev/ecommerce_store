"use client";
import { removeFromCart } from "@/lib/redux/cart/cartSlice";
import { RootState } from "@/lib/redux/store";
import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

function PageCart() {
  const { isCartopen, CartItems } = useSelector(
    (state: RootState) => state.cart
  );
  const dispatch = useDispatch();
  return (
    <>
      {CartItems.length == 0 ? (
        <p className='mb-[50%] mx-auto'>Please add items to cart</p>
      ) : (
        <div className='p-4'>
          {CartItems?.map((item: any) => {
            return (
              <>
                <div className='bg-white'>
                  Shopping Cart ({CartItems.length})
                </div>
                <div className='flex gap-2 mb-2 bg-white'>
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
              </>
            );
          })}
        </div>
      )}
    </>
  );
}

export default PageCart;
