import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { verifyToken } from "@/utils/util";
import { AuthApi, /* UserApi */ } from "@/api";
import { LoginRequest, JwtPayload, LoginResponse, /* SelfResponse */ } from "@/types";

type AuthContext = {
    isAuthenticated: boolean;
    role: "customer" | "ngo" | "business" | null;
    token: string | null;
    login: (payload: LoginRequest) => Promise<void>;
    logout: () => void;
    username: string;
    picture: string;
    update: boolean;
    setUpdate: (prop: boolean) => void;
};

const AuthContext = createContext<AuthContext>({
    isAuthenticated: false,
    role: null,
    token: null,
    login: async () => {},
    logout: () => {},
    username: "",
    picture: "",
    update: false,
    setUpdate: () => {}
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [role, setRole] = useState<"customer" | "ngo" | "business" | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [username, setUsername] = useState("user");
    const [picture, setPicture] = useState("");
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            const token = Cookies.get("j-token");

            if (token) {
                const decodedPayload: JwtPayload = verifyToken(token as string) as JwtPayload;

                try {
                    const user = "";
                    // const user: SelfResponse = await UserApi.getSelf(decodedPayload.id, token);

                    /* if (user) {
                        setIsAuthenticated(true);
                        setRole(user.role as "customer" | "ngo" | "business");
                        setUsername(user.name);
                        setPicture(user.image);
                        setToken(token);
                    } */
                } catch (error) {
                    Cookies.remove("j-token");
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
                Cookies.set("j-token", auth.token as string);
                setToken(auth.token as string);
            }
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setRole(null);
        Cookies.remove("j-token");
        setToken(null);
    };

    if (isLoading) return null;

    return (
        <AuthContext.Provider
            value={{ isAuthenticated, role, token, login, logout, update, setUpdate, username, picture }}
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