import React from "react";
import { HTMLType } from "../types";

export const LightText: React.FC<HTMLType<HTMLSpanElement>> = ({
  children,
  ...props
}) => (
  <span className="text-gray-200 text-base font-light" {...props}>
    {children}
  </span>
);
