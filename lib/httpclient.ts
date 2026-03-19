import { AuthResponseDto as AuthResponse } from "@/types/api.schemas";
import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import {
  deleteTokenPair,
  getAccessToken,
  getRefreshToken,
  setAuthTokenPair,
} from "./session";
import { errorMessage } from "./utils";

const TIMEOUT = 30_000;

const ERROR_MESSAGE = [
  "Unauthorized",
  "Given token not valid for any token type",
  "Authentication credentials were not provided.",
  "Authentication token invalid or expired",
];

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";

interface IApiInstance {
  ApiPublicApiInstance: AxiosInstance;
  ApiPrivateApiInstance: AxiosInstance;
}

const ApiInstance = {} as IApiInstance;

/* -------------------- Axios Instances -------------------- */

ApiInstance.ApiPublicApiInstance = axios.create({
  baseURL: API_URL,
  timeout: TIMEOUT,
});

ApiInstance.ApiPrivateApiInstance = axios.create({
  baseURL: API_URL,
  timeout: TIMEOUT,
});

/* -------------------- Request Interceptor -------------------- */

ApiInstance.ApiPrivateApiInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken();

    if (token && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  Promise.reject,
);

/* -------------------- Refresh Control -------------------- */

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (err: any) => void;
}> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) reject(error);
    else resolve(token!);
  });
  failedQueue = [];
};

/* -------------------- Response Interceptor -------------------- */

ApiInstance.ApiPrivateApiInstance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (!originalRequest || originalRequest._retry) {
      return Promise.reject(error);
    }

    if (!ERROR_MESSAGE.includes(errorMessage(error))) {
      return Promise.reject(error);
    }

    const refreshToken = getRefreshToken();

    if (!refreshToken) {
      forceLogout();
      return Promise.reject(error);
    }

    originalRequest._retry = true;

    if (isRefreshing) {
      // If refresh is already in progress, wait until it finishes
      return new Promise<string>((resolve, reject) => {
        failedQueue.push({ resolve, reject });
      }).then((token) => {
        originalRequest.headers.Authorization = `Bearer ${token}`;
        return ApiInstance.ApiPrivateApiInstance(originalRequest);
      });
    }

    isRefreshing = true;

    try {
      const response =
        await ApiInstance.ApiPublicApiInstance.post<AuthResponse>(
          "/api/auth/refresh",
          { refreshToken },
        );

      const {
        accessToken,
        refreshToken: newRefreshToken,
        refreshTokenExpires,
      } = (response as any).data.data || response.data;

      setAuthTokenPair(accessToken, newRefreshToken, refreshTokenExpires);

      // Retry the original request
      originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      processQueue(null, accessToken);

      return ApiInstance.ApiPrivateApiInstance(originalRequest);
    } catch (err) {
      processQueue(err, null);
      forceLogout();
      return Promise.reject(err);
    } finally {
      isRefreshing = false;
    }
  },
);

/* -------------------- Helpers -------------------- */

function forceLogout() {
  deleteTokenPair();

  if (typeof window !== "undefined") {
    const currentPath = window.location.pathname + window.location.search;

    sessionStorage.setItem("redirectAfterLogin", currentPath);
    window.location.href = "/auth";
  }
}

export default ApiInstance;
