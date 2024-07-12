import axios from "axios";
import {
  ChatRequest,
  ChatResponse,
  SendChatRequest,
  SendChatResponse,
} from "@/types";
import { API_URL_LOCAL } from "@/constant";

class ChatApi {
  private static axios = axios.create({
    baseURL: import.meta.env.VITE_API_URL || API_URL_LOCAL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  static async getChat(): Promise<ChatResponse> {
    try {
      const response = await this.axios.get<ChatResponse>("/chat");
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async sendChat(payload: SendChatRequest): Promise<SendChatResponse> {
    try {
      const response = await this.axios.post<SendChatResponse>(
        "/chat",
        payload
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default ChatApi;
