import { Outlet, RouteObject, createBrowserRouter } from "react-router-dom";
import { Home, Login, Register } from "@/pages";
import { Navbar, Footer } from "@/components";
import SetupProfileCustomer from "@/pages/SetupProfileCustomer";
import SetupProfileNGO from "@/pages/SetupProfileNGO";
import SetupProfileBusiness from "@/pages/SetupProfileBusiness";

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
        path: "/",
        element: <AuthLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/setup-cust",
                element: <SetupProfileCustomer />,
            },
            {
                path: "/setup-ngo",
                element: <SetupProfileNGO />,
            },
            {
                path: "/setup-business",
                element: <SetupProfileBusiness />,
            },
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;