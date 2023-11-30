"use client";
import { addToCart } from "@/lib/redux/cart/cartSlice";
import { RootState } from "@/lib/redux/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

type item = {
  item: {
    _id: string;
    title: string;
    price: number;
  };
};

function ItemCard({ item }: item) {
  const dispatch = useDispatch();
  const {} = useSelector((state: RootState) => state.cart);
  return (
    <div className='bg-yellow-100 p-5 min-h-[350px] shadow-md relative'>
      <p>{item?.title}</p>
      <button
        onClick={() => {
          dispatch(addToCart(item._id));
        }}
        className='absolute bottom-3 left-[50%] bg-red-100 p-2 '
      >
        add to cart
      </button>
    </div>
  );
}

export default ItemCard;
