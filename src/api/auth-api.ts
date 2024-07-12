import axios from "axios";

import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from "@/types";
import { API_URL_LOCAL } from "@/constant";

class AuthApi {
    private static axios = axios.create({
        baseURL: import.meta.env.VITE_API_URL || API_URL_LOCAL,
        headers: {
            "Content-Type": "application/json",
        },
    });

    static async login(payload: LoginRequest): Promise<LoginResponse> {
        try {
            const response = await this.axios.post<LoginResponse>("/login", payload);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async register(payload: RegisterRequest): Promise<RegisterResponse> {
        try {
            const response = await this.axios.post<RegisterResponse>("/register", payload);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default AuthApi;