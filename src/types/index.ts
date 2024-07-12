// FRONTEND COMPONENTS
// Card Props
export interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
}


// BACKEND-RELATED COMPONENTS
// JWT Payload
export interface JwtPayload {
    id: string;
    email: string;
    role: "customer" | "ngo" | "business";
    isVerified: boolean;
    iat: number;
    exp: number;
}

// Login Request
export interface LoginRequest {
    email: string;
    password: string;
}

// Login Response
export interface LoginResponse {
    success: boolean;
    token: string;
}

// Register Request
export interface RegisterRequest {
    email: string;
    password: string;
    role: string;
}

// Signup Response
export interface RegisterResponse {
    success: boolean;
    message: string;
    token?: string;
}