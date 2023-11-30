import { allType } from "@/lib/sanity/sanityQuerieTypes";
import { allFetch } from "@/server-actions/sanityActions";
import React from "react";
import ItemCard from "./ItemCard";

async function Items() {
  let products: allType;
  try {
    products = await allFetch();
  } catch (error) {
    throw error;
  }
  return (
    <div className='grid grid-cols-3 gap-3'>
      {products?.map((item) => {
        return <ItemCard item={item} key={item.title} />;
      })}
    </div>
  );
}

export default Items;
