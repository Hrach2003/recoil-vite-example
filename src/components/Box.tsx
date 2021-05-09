import React from "react";

export const Box: React.FC<{ className?: string }> = ({
  children,
  className,
}) => (
  <div
    className={`${className} mb-5 ring-2 ring-lightblue-900 rounded-lg bg-gray-800`}
  >
    {children}
  </div>
);
