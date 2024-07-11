import { Outlet, RouteObject, createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages";
import { Navbar, Footer } from "@/components";

const AuthProviderLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

const routes: RouteObject[] = [
    {
        path: "/",
        element: <AuthProviderLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            }
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;