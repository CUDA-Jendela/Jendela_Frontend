import axios from "axios";

import { SelfResponse } from "@/types";
import { API_URL_LOCAL } from "@/constant";

class UserApi {
    private static axios = axios.create({
        baseURL: import.meta.env.VITE_API_URL + "/user" || API_URL_LOCAL + "/user",
        headers: {
            "Content-Type": "application/json",
        },
    });

    static async getSelf(token: string): Promise<SelfResponse> {
        try {
            const response = await this.axios.get<SelfResponse>(`/me`, {
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

export default UserApi;