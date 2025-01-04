import { createBrowserRouter, Navigate } from "react-router-dom";
import User1 from "./pages/User1";
import User2 from "./pages/User2";
import Child from "./pages/Child";
import InActive from "./pages/InActive";

const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="/user" />,
  },
  {
    path: "/user",
    element: <User1 />,
  },
  {
    path: "/user/2",
    element: <User2 />,
  },
  {
    path: "/user/child",
    element: <Child />,
  },
  {
    path: "/inactive",
    element: <InActive />,
  },
]);

export default router;
