import { Outlet, RouteObject, createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages";
import { Navbar, Footer } from "@/components";
import Login from "@/pages/Login";

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

const AuthLayout = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

const routes: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            }
        ],
    },
    {
        path: "/login",
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            }
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;