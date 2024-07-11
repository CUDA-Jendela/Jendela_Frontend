export interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
}

// JWT Payload
export interface JwtPayload {
    id: string;
    email: string;
    role: "customer" | "ngo" | "business";
    isVerified: boolean;
    iat: number;
    exp: number;
}