import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/homeLayout/HomeLayout";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import CoursesDetails from "../pages/CourseDetails";
import PrivateRoute from "../provider/PrivateRoute";
import MyProfile from "../pages/MyProfile";
import Loading from "../pages/Loading";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path:'/profile',
        element:<PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>
      }
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
    path: "/skills/:id",
    element: <PrivateRoute>
      <CoursesDetails></CoursesDetails>
    </PrivateRoute>,
    loader: ()=>fetch("/learn.json"),
    hydrateFallbackElement: <Loading></Loading>
  },
  {
    path: "/*",
    element: <h2>Error -404</h2>,
  },
]);
export default router;
