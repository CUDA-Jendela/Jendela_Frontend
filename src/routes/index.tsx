import { Outlet, RouteObject, createBrowserRouter } from "react-router-dom";
import { 
    Home, 
    Login, 
    Register, 
    SetupProfileCustomer, 
    SetupProfileNGO, 
    SetupProfileBusiness, 
    SkillAssessment, 
    Course
} from "@/pages";
import { ProtectedRoute, Navbar, Footer } from "@/components";
import { AuthProvider } from "@/contexts/AuthContext";
import AddCourse from "@/pages/AddCourse";
import ExploreBusiness from "@/pages/Business";
import ChatbotFloatingButton from "@/components/ChatbotFloatingButton";
import HiringList from "@/pages/HiringList";

const MainLayout = () => {
    return (
        <AuthProvider>
            <Navbar />
            <Outlet />
            <Footer />
            <ChatbotFloatingButton />
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
            },
            {
                path: "/course",
                element: <Course />,
            },
            {
                path: "/add-course",
                element: <AddCourse />,
            },
            {
                path: "/business",
                element: <ExploreBusiness />,
            },
            {
                path: "/hiring",
                element: <HiringList />,
            },
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
                path: "/setup-cust-skill",
                element: (
                    <ProtectedRoute roles={["customer"]}>
                        <SkillAssessment />
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