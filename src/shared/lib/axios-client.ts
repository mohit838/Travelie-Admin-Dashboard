import { useAppStore } from "@/app/app-store";
import axios, { AxiosError, type AxiosInstance, type InternalAxiosRequestConfig } from "axios";
import { toast } from "sonner";
import { API_ROUTES } from "../api-routes";

// ================================
//  Axios Instance
// ================================
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
  withCredentials: true,
  timeout: 15000,
});

// ================================
//  Token Refresh Logic
// ================================
let isRefreshing = false;

interface FailedRequest {
  resolve: (value?: unknown) => void;
  reject: (error: unknown) => void;
}

let failedQueue: FailedRequest[] = [];

const processQueue = (error: unknown, token: string | null) => {
  failedQueue.forEach((pending) => {
    if (error) pending.reject(error);
    else pending.resolve(token);
  });
  failedQueue = [];
};

// ================================
//  Attach Access Token
// ================================
apiClient.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const token = useAppStore.getState().accessToken;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ================================
//  Response Interceptor
// ================================
apiClient.interceptors.response.use(
  (response) => response,

  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // 401 Unauthorized Handling
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            if (token && originalRequest.headers) {
              originalRequest.headers.Authorization = `Bearer ${token}`;
            }
            return apiClient(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        const refreshToken = useAppStore.getState().refreshToken;
        if (!refreshToken) throw new Error("Missing refresh token");

        // FIXED URL
        const res = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}${API_ROUTES.REFRESH_TOKEN}`,
          { refreshToken },
          { withCredentials: true }
        );

        const newAccessToken: string = res.data?.accessToken;

        useAppStore.getState().setAccessToken(newAccessToken);

        if (originalRequest.headers) {
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        }

        processQueue(null, newAccessToken);

        return apiClient(originalRequest);
      } catch (err) {
        processQueue(err, null);

        useAppStore.getState().logout();
        toast.error("Session expired. Please log in again.");

        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    // ================================
    // Global Error Handler
    // ================================
    let errorMessage = "Something went wrong";

    const responseData = error.response?.data;

    if (typeof responseData === "string") {
      errorMessage = responseData;
    } else if (
      typeof responseData === "object" &&
      responseData !== null &&
      "message" in responseData
    ) {
      errorMessage = (responseData as { message: string }).message;
    }

    toast.error(errorMessage);

    return Promise.reject(error);
  }
);

export default apiClient;
