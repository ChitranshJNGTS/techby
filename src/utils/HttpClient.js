import axios from "axios";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Request Interceptor
httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    const storeToken = localStorage.getItem("storeToken");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    if (storeToken) {
      config.headers["x-store-token"] = storeToken;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Response Interceptor
httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.log("Unauthorized - Logging out");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default httpClient;