import { createBrowserRouter } from "react-router";
import HomeLayout from "../components/homeLayout/HomeLayout";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element: <HomeLayout></HomeLayout>
        },
        {
            path: "/auth",
            element: <h2>Authentication Layout</h2>
        },
        {
            path:'/news',
            element: <h2>News</h2>
        },
        {
            path:'/*',
            element: <h2>Error -404</h2>
        },
    ]
);
export default router;