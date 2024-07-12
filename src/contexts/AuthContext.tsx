import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { verifyToken } from "@/utils/util";
import { AuthApi, UserApi } from "@/api";
import { LoginRequest, JwtPayload, LoginResponse, SelfResponse } from "@/types";
import { toast } from "react-toastify";

type AuthContext = {
    isAuthenticated: boolean;
    role: "customer" | "ngo" | "business" | null;
    token: string | null;
    login: (payload: LoginRequest) => Promise<void>;
    logout: () => void;
    username: string;
    update: boolean;
    isVerified: "pending" | "in-progress" | "completed";
    setUpdate: (prop: boolean) => void;
};

const AuthContext = createContext<AuthContext>({
    isAuthenticated: false,
    role: null,
    token: null,
    login: async () => {},
    logout: () => {},
    username: "",
    update: false,
    isVerified: "pending",
    setUpdate: () => {}
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState<"customer" | "ngo" | "business" | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [username, setUsername] = useState("user");
    const [isVerified, setIsVerified] = useState<"pending" | "in-progress" | "completed">("pending");
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            const token = Cookies.get("j-token");

            if (token) {
                try {
                    const user: SelfResponse = await UserApi.getSelf(token);

                    if (user) {
                        setIsAuthenticated(true);
                        setRole(user.user.role as "customer" | "ngo" | "business");
                        setUsername(user.user.name || "user");
                        setIsVerified(user.user.isVerified as "pending" | "in-progress" | "completed");
                        setToken(token);
                    }
                } catch (error) {
                    // console.log(user);
                    // Cookies.remove("j-token");
                    console.error(error);
                }
            }

            setIsLoading(false);
        };

        fetchUser();
    }, [token]);

    const login = async (payload: LoginRequest) => {
        try {
            const auth: LoginResponse = await AuthApi.login(payload);

            if (auth.success === true) {
                setIsAuthenticated(true);
                const decodedPayload: JwtPayload = verifyToken(auth.token as string) as JwtPayload;
                setRole(decodedPayload.role);
                setIsVerified(decodedPayload.isVerified as "pending" | "in-progress" | "completed");
                Cookies.set("j-token", auth.token as string);
                setToken(auth.token as string);
                toast.success("Login successful");
                window.location.href = "/";
            }
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setRole(null);
        setIsVerified("pending");
        Cookies.remove("j-token");
        setToken(null);
    };

    if (isLoading) return null;

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, role, token, login, logout, update, setUpdate, isVerified, username }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

export default useAuth;