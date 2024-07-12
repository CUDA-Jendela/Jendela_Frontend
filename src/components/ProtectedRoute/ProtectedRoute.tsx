import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "@/contexts/AuthContext";
import { ProtectedRouteProps } from "./ProtectedRoute.props";

const ProtectedRoute = (props: ProtectedRouteProps) => {
    const { roles, children } = props;

    const { isAuthenticated, role } = useAuth();
    const navigate = useNavigate();

    const checkAuth = async () => {
        try {
            if (!isAuthenticated) {
                navigate("/login");
                return;
            }

            if (!roles.includes(role as "customer" | "ngo" | "business")) {
                navigate("/");
                return;
            }
        } catch (error) {
            navigate("/login");
            return;
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return children;
};

export default ProtectedRoute;