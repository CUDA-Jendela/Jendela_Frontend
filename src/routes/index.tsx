import { Outlet, RouteObject, createBrowserRouter } from "react-router-dom";
import { Home, Login, Register, SetupProfileCustomer, SetupProfileNGO, SetupProfileBusiness } from "@/pages";
import { ProtectedRoute, Navbar, Footer } from "@/components";
import { AuthProvider } from "@/contexts/AuthContext";
import SkillAssessment from "@/pages/SkillAssessment";

const MainLayout = () => {
    return (
        <AuthProvider>
            <Navbar />
            <Outlet />
            <Footer />
        </AuthProvider>
    );
};

const AuthLayout = () => {
    return (
        <AuthProvider>
            <Outlet />
        </AuthProvider>
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
                element: (
                    <ProtectedRoute roles={["customer"]}>
                        <SetupProfileCustomer />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/setup-ngo",
                element: (
                    <ProtectedRoute roles={["ngo"]}>
                        <SetupProfileNGO />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/setup-business",
                element: (
                    <ProtectedRoute roles={["business"]}>
                        <SetupProfileBusiness />
                    </ProtectedRoute>
                ),
            },
        ],
    },
];

const router = createBrowserRouter(routes);

export default router;