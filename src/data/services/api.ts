import axios, { AxiosRequestConfig, Method } from "axios";

interface ApiError {
  status: string;
  code: string;
  message: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
}

class ApiService {
  private static instance: ApiService;
  private baseUrl: string = "http://192.168.1.3:3000";

  private constructor() {}

  public static get Instance(): ApiService {
    return this.instance || (this.instance = new this());
  }

  public async requestObject<T>(
    endpoint: string,
    method: Method,
    headers?: Record<string, string>,
    parameters?: Record<string, string>
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseUrl}${endpoint}`;

    const config: AxiosRequestConfig = {
      url,
      method,
      headers,
      params: parameters,
    };

    try {
      const response = await axios(config);
      return { success: true, data: response.data as T };
    } catch (error: any) {
      if (error.response) {
        const apiError: ApiError = {
          status: error.response.status.toString(),
          code: error.response.data.code || "erro_desconhecido",
          message: error.response.data.message || "Ocorreu um erro desconhecido",
        };
        return { success: false, error: apiError };
      } else {
        const apiError: ApiError = {
          status: "0",
          code: "erro_conexão",
          message: "Ocorreu um erro de conexão",
        };
        return { success: false, error: apiError };
      }
    }
  }
}

export default ApiService;
