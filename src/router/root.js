import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading.....</div>; //Loading 메세지 출력
const Main = lazy(() => import("../pages/MainPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
]);

export default root;
