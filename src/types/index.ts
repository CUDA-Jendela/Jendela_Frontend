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
  name: string;
  ngoName: string;
  ngoCity: string;
  startDate: string;
  endDate: string;
  quota: number;
  skills: string[];
}

export interface BusinessCardProps {
  id: string;
  logo: string;
  name: string;
  industry: string;
  address: string;
  city: string;
  phone: string;
  description: string;
}

export interface CustomerCardProps {
  id: string;
  profilePicture: string;
  name: string;
  city: string;
  skills: string[];
}

// BACKEND-RELATED COMPONENTS
// JWT Payload
export interface JwtPayload {
  id: string;
  email: string;
  role: "customer" | "ngo" | "business";
  isVerified: string;
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
  isVerified: string;
  email: string;
}

// Customer Request
export interface CustomerRequest {
  userID: string;
  name: string;
  birthDate: string;
  city: string;
  phoneNumber: string;
  profilePicture: string;
}

// Customer Response
export interface CustomerResponse {
  success: boolean;
  message: string;
  token?: string;
}

export interface Message {
  type: "user" | "bot";
  content: string;
}

// Skill Response
export interface SkillResponse {
  success: boolean;
  message: string;
  data: SkillData[];
}

export interface SkillData {
  id: string;
  name: string;
}

// NGO Request
export interface NGORequest {
  name: string;
  address: string;
  city: string;
  description: string;
  phoneNumber: string;
  logo: string;
}

// Business Request
export interface BusinessRequest {
  name: string;
  industry: string;
  description: string;
  address: string;
  phoneNumber: string;
  logoPicture: string;
}

// Get Chat Response
export interface ChatResponse {
  success: boolean;
  message: string;
  data: ChatData[];
}

// Chat Data
export interface ChatData {
  question: string;
  answer: string;
}

// Send Chat
export interface SendChatRequest {
  prompt: string;
}

export interface SendChatResponse {
  success: boolean;
  message: string;
}


// Courses Respone
export interface CoursesResponse {
  success: boolean;
  message: string;
  data: CourseCardProps[];
}

// Courses Respone
export interface LocationResponse {
  success: boolean;
  message: string;
  data: string[];
}

// CourseAdd Request
export interface CourseAddRequest {
  name: string;
  description: string;
  skills: string[];
  quota: number;
  startDate: string;
  endDate: string;
}