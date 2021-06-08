import React, { Suspense } from "react";
import { useResetRecoilState } from "recoil";
import { Box } from "./components/Box";
import { Button } from "./components/Button";
import { Loading } from "./components/Loading";
import { TodoFilters } from "./components/Todo/TodoFilters";
import { TodoList } from "./components/Todo/TodoList";
import { TodoStats } from "./components/Todo/TodoStats";
import { UserInfo } from "./components/User/UserInfo";
import { todoListAtom } from "./stores/todo.module";

function App() {
  const resetTodoList = useResetRecoilState(todoListAtom);
  return (
    <div className="bg-gray-900 text-white lg:h-screen md:py-4 p-2 overflow-hidden">
      <div className="lg:w-11/12 mx-auto h-full">
        <div className="md:flex md:space-x-5 h-full">
          <div className="md:w-2/5 w-full h-full">
            <Box>
              <TodoFilters />
            </Box>
            <Box>
              <Suspense fallback={<Loading />}>
                <TodoStats />
              </Suspense>
            </Box>
            <Box>
              <Suspense fallback={<Loading />}>
                <UserInfo />
              </Suspense>
            </Box>
            <div className="flex justify-center lg:justify-end mb-5">
              <Button onClick={resetTodoList}>Refresh</Button>
            </div>
          </div>

          <div className="md:w-3/5 w-full h-full">
            <Box className="h-full">
              <Suspense fallback={<Loading />}>
                <TodoList />
              </Suspense>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
