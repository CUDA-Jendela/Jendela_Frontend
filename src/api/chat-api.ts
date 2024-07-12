import axios from "axios";
import { ChatResponse, SendChatRequest, SendChatResponse } from "@/types";
import { API_URL_LOCAL } from "@/constant";
import Cookies from "js-cookie";

class ChatApi {
  private static axios = axios.create({
    baseURL: import.meta.env.VITE_API_URL || API_URL_LOCAL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  static async getChat(): Promise<ChatResponse> {
    const token = Cookies.get("j-token");
    try {
      const response = await this.axios.get<ChatResponse>("/chat", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async sendChat(payload: SendChatRequest): Promise<SendChatResponse> {
    const token = Cookies.get("j-token");
    try {
      const response = await this.axios.post<SendChatResponse>(
        "/chat",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default ChatApi;
