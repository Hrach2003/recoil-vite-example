import React, { Suspense } from "react";
import { Box } from "./components/Box";
import { Loading } from "./components/Loading";
import { TodoFilters } from "./components/Todo/TodoFilters";
import { TodoList } from "./components/Todo/TodoList";
import { TodoStats } from "./components/Todo/TodoStats";
import { UserInfo } from "./components/User/UserInfo";

function App() {
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
