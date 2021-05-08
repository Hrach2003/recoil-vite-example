import React, { Suspense } from "react";
import { TodoList } from "./components/Todo/TodoList";
import { Toolbar } from "./components/Todo/Toolbar";

function App() {
  return (
    <div className="mt-10 flex justify-between flex-col w-11/12 items-center mx-auto">
      <Suspense fallback={<p>Loading ...</p>}>
        <Toolbar />
        <TodoList />
      </Suspense>
      <Suspense fallback={<p>Loading ...</p>}></Suspense>
    </div>
  );
}

export default App;
