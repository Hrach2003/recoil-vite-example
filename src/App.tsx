import React, { Suspense } from "react";
import { atom, useRecoilState } from "recoil";
import { TodoList } from "./components/TodoList";
import { Toolbar } from "./components/Toolbar";

function App() {
  return (
    <div className="mt-10 flex justify-between flex-col w-4/6 items-center mx-auto">
      <Suspense fallback={<p>Loading ...</p>}>
        <Toolbar />
        <TodoList />
      </Suspense>
    </div>
  );
}

export default App;
