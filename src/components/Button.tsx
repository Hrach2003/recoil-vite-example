import React from "react";
import { HTMLType } from "../types";

export const Button: React.FC<HTMLType<HTMLButtonElement>> = ({
  children,
  ...props
}) => {
  return (
    <button
      className="ml-2 px-3 py-2 bg-gray-700 rounded-md focus:outline-none focus:bg-lightblue-800 hover:bg-lightblue-600 text-white focus:ring-4 ring-lightblue-300"
      {...props}
    >
      {children}
    </button>
  );
};
