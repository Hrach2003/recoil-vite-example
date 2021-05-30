import React from "react";
import { HTMLType } from "../types";

export const Box: React.FC<HTMLType<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div
    {...props}
    className={`${className} mb-5 ring-2 ring-lightblue-900 rounded-lg bg-gray-800`}
  >
    {children}
  </div>
);
