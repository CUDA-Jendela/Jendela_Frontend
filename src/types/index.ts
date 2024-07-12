// FRONTEND COMPONENTS
// Card Props
export interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

// Card Course Props
export interface CourseCardProps {
  id: string;
  title: string;
  ngoName: string;
  location: string;
  startDate: string;
  endDate: string;
  quota: string;
  skills: string[];
}

export interface BusinessCardProps {
  logo: string;
  name: string;
  industry: string;
  city: string;
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

// Self Response
export interface SelfResponse {
  success: boolean;
  user: userData;
}

// User data
interface userData {
  id: string;
  name: string;
  password: string;
  role: string;
  isVerified: boolean;
  email: string;
}

export interface Message {
  type: "user" | "bot";
  content: string;
}
