import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className = "", ...rest }: Props) {
  return (
    <button
      {...rest}
      className={
        "px-4 py-2 rounded-md border border-transparent bg-indigo-500 text-white hover:bg-indigo-600 transition " +
        className
      }
    >
      {children}
    </button>
  );
}
