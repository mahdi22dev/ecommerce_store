"use client";
import { addToCart } from "@/lib/redux/cart/cartSlice";
import { RootState } from "@/lib/redux/store";
import { addtoCartAction } from "@/server-actions/dbActions";
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
  const { userId, isSignedIn } = useSelector((state: RootState) => state.user);
  const { addToCartLoading } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const {} = useSelector((state: RootState) => state.cart);
  return (
    <div className='bg-yellow-100 p-5 min-h-[350px] shadow-md relative'>
      <p>{item?.title}</p>
      <button
        onClick={async () => {
          try {
            if (isSignedIn) {
              dispatch(addToCart(false));
              const data = { itemId: item._id, userId: userId };
              await addtoCartAction(data.userId, data.itemId);
              dispatch(addToCart(true));
            } else {
              const cartItemObj = { ItemId: item._id, Quantity: 1 };
              const jsonString = JSON.stringify(cartItemObj);
              localStorage.setItem("cartItem:" + item._id, jsonString);
            }
          } catch (error) {
            console.log(error);
          }
        }}
        className='absolute bottom-3 left-[50%] bg-red-100 p-2 '
      >
        add to cart
      </button>
    </div>
  );
}

export default ItemCard;
