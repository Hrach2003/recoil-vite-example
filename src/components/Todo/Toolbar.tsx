import React from "react";
import { TodoFilters } from "./TodoFilters";
import { TodoStats } from "./TodoStats";

export const Toolbar = () => {
  return (
    <div className="w-full">
      <TodoStats />
      <TodoFilters />
    </div>
  );
};
