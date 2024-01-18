import { Suspense, lazy } from "react";

const Loading = <div>Loading.....</div>; //Loading 메세지 출력

const TodoList = lazy(() => import("../pages/todo/ListPage"));

const todoRouter = () => {
  return [
    {
      path: "list",
      element: (
        <Suspense fallback={Loading}>
          <TodoList />
        </Suspense>
      ),
    },
  ];
};

export default todoRouter;
