import React from "react";
import Link from "next/link";
import Image from "next/image";

type dataType = {
  isBigGrid: boolean;
  data: { category: string; image: string };
};
export default function FirstSingleGrid({ data, isBigGrid }: dataType) {
  return (
    <Link
      href={"/"}
      className={`bg-yellow-200 h-80 relative z-0 ${
        isBigGrid && "md:col-span-2 "
      }`}
    >
      <p className='absolute top-10 left-10 z-50 font-extrabold'>
        {data.category}
      </p>
      <Image
        src={data.image}
        alt={data.category}
        fill
        objectFit='cover'
        className='z-0'
      />
    </Link>
  );
}
