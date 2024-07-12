import axios from "axios";

import { CourseAddRequest, CoursesResponse, LocationResponse } from "@/types";
import { API_URL_LOCAL } from "@/constant";

class CourseApi {
    private static axios = axios.create({
        baseURL: import.meta.env.VITE_API_URL + "/course" || API_URL_LOCAL + "/course",
        headers: {
            "Content-Type": "application/json",
        },
    });

    static async getAll(token: string): Promise<CoursesResponse> {
        try {
            const response = await this.axios.get<CoursesResponse>(`/list`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async getLocation(token: string): Promise<LocationResponse> {
        try {
            const response = await this.axios.get<LocationResponse>(`/location`, {
                headers: {
                    "Authorization": `Bearer ${token}`,
                }
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }

    static async add(payload: CourseAddRequest, token: string): Promise<any> {
        try {
            const response = await this.axios.post<any>("/", payload, {
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

export default CourseApi;