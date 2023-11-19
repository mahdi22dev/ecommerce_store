"use client";

import React from "react";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
};

export default function Button({ setCount, children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
