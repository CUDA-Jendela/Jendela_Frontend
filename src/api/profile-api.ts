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

    static async customer(payload: CustomerRequest): Promise<CustomerResponse> {
        try {
            const response = await this.axios.post<CustomerResponse>("/customer", payload);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default ProfileApi;