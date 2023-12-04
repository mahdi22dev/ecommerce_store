"use client";
import { addToCart } from "@/lib/redux/cart/cartSlice";
import { RootState } from "@/lib/redux/store";
import { urlFor } from "@/lib/sanity-utils";
import { addtoCartAction } from "@/server-actions/dbActions";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

type item = {
  item: {
    _id: string;
    title: string;
    price: number;
    images: any;
  };
};

function ItemCard({ item }: item) {
  console.log(item);
  const imageSrc = urlFor(item.images[0].image).width(50).height(50).url();
  console.log(imageSrc);

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
              const data = {
                itemId: item._id,
                price: item.price,
                title: item.title,
                imageUrl: imageSrc,
                Quantity: 1,
              };
              await addtoCartAction(data, userId);
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
