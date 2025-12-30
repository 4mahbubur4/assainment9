import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/homeLayout/HomeLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news",
    element: <h2>News</h2>,
  },
  {
    path: "/*",
    element: <h2>Error -404</h2>,
  },
]);
export default router;
