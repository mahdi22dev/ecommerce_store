import { IntrouductionPageGridData } from "@/config/data";
import { allType } from "@/lib/sanity/sanityQuerieTypes";
import React from "react";

function FirstGrid() {
  const data = IntrouductionPageGridData;
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 w-full'>
      <div className='bg-yellow-200 h-80 md:col-span-2	'>{data[0].category}</div>
      <div className='bg-yellow-200 h-80'>{data[1].category}</div>
      <div className='bg-yellow-200 h-80'>{data[2].category}</div>
      <div className='bg-yellow-200 h-80 md:col-span-2'>{data[3].category}</div>
    </div>
  );
}

export default FirstGrid;
