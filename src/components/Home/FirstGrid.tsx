import { IntrouductionPageGridData } from "@/config/data";
import { allType } from "@/lib/sanity/sanityQuerieTypes";
import Image from "next/image";
import React from "react";
import Link from "next/link";

function FirstGrid() {
  const data = IntrouductionPageGridData;
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 w-full'>
      <Link href={"/"} className='bg-yellow-200 h-80 md:col-span-2 relative'>
        <p className='absolute top-10 left-10 z-50'>{data[0].category}</p>
        <Image
          src={data[0].image}
          alt={data[0].category}
          fill
          objectFit='cover'
        />
      </Link>
      <Link href={"/"} className='bg-yellow-200 h-80 relative'>
        <Image
          src={data[1].image}
          alt={data[1].category}
          fill
          objectFit='cover'
          className='z-0'
        />
        <p className='z-50'>{data[1].category}</p>
      </Link>
      <Link href={"/"} className='bg-yellow-200 h-80 relative'>
        {" "}
        <Image
          src={data[2].image}
          alt={data[2].category}
          fill
          objectFit='cover'
          className='z-0'
        />
        <p className='z-50'>{data[2].category}</p>
      </Link>
      <Link href={"/"} className='bg-yellow-200 h-80 md:col-span-2 relative'>
        {" "}
        <Image
          src={data[3].image}
          alt={data[3].category}
          fill
          objectFit='cover'
          className='z-0'
        />
        <p className='z-50'>{data[3].category}</p>
      </Link>
    </div>
  );
}

export default FirstGrid;
