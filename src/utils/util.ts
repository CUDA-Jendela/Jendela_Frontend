import { decodeToken } from "react-jwt";
import { JwtPayload } from "@/types";

function isJwtPayload(object: any): object is JwtPayload {
    return (
        typeof object === 'object' &&
        typeof object.sub === 'number' &&
        typeof object.role === 'string' &&
        typeof object.exp === 'number'
    );
}
  
function verifyToken(token: string): JwtPayload | null {
    try {
        const decoded = decodeToken(token);
        if (isJwtPayload(decoded)) {
            return decoded;
        } else {
            console.error("Decoded token is not of type JwtPayload");
            return null;
        }
    } catch (error) {
        console.error("Error verifying token:", error);
        return null;
    }
}
  
export { verifyToken }