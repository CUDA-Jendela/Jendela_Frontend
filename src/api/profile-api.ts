import axios from "axios";

import { CustomerRequest, CustomerResponse } from "@/types";
import { API_URL_LOCAL } from "@/constant";

class ProfileApi {
    private static axios = axios.create({
        baseURL: import.meta.env.VITE_API_URL || API_URL_LOCAL,
        headers: {
            "Content-Type": "application/json",
        },
    });

    static async customer1(payload: CustomerRequest, token: string): Promise<CustomerResponse> {
        try {
            const response = await this.axios.post<CustomerResponse>("/customer/1", payload, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async customer2(payload: any, token: string): Promise<any> {
        try {
            const response = await this.axios.post<any>("/customer/2", payload, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async ngo(payload: any, token: string): Promise<any> {
        try {
            const response = await this.axios.post<any>("/ngo", payload, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async business(payload: any, token: string): Promise<any> {
        try {
            const response = await this.axios.post<any>("/business", payload, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default ProfileApi;