export type ProtectedRouteProps = {
    roles: Array<"admin" | "customer" | "ngo" | "business">;
    children: React.ReactNode;
};