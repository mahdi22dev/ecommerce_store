"use client";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>ecommerce store</h1>
    </main>
  );
}
