import React, { Suspense } from "react";
import { TodoList } from "./components/Todo/TodoList";
import { Toolbar } from "./components/Todo/Toolbar";
import { UserInfo } from "./components/User/UserInfo";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex pt-5 w-11/12 mx-auto space-x-5 min-h-screen">
        <div className="w-2/5 sticky top-5 self-start rounded-lg bg-gray-800">
          <Suspense fallback={<p>Loading ...</p>}>
            <UserInfo />
          </Suspense>
        </div>
        <div className="w-3/5">
          <Suspense fallback={<p>Loading ...</p>}>
            <Toolbar />
            <TodoList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
