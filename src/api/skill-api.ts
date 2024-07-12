import axios from "axios";

import { SkillResponse } from "@/types";
import { API_URL_LOCAL } from "@/constant";

class SkillApi {
    private static axios = axios.create({
        baseURL: import.meta.env.VITE_API_URL || API_URL_LOCAL,
        headers: {
            "Content-Type": "application/json",
        },
    });

    static async all(): Promise<SkillResponse> {
        try {
            const response = await this.axios.get<SkillResponse>("/skill");
            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default SkillApi;