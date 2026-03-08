// src/api/authApi.js

import httpClient from "../utils/httpClient";
import { ENDPOINTS } from "../utils/endpoints";

export const registerSeller = (data) => {
  return httpClient.post(ENDPOINTS.AUTH.REGISTER, data);
};

export const loginSeller = (data) => {
  return httpClient.post(ENDPOINTS.AUTH.LOGIN, data);
};

export const logoutSeller = () => {
  return httpClient.post(ENDPOINTS.AUTH.LOGOUT);
};

export const getSellerProfile = () => {
  return httpClient.get(ENDPOINTS.AUTH.PROFILE);
};

export const verifySeller = () => {
  return httpClient.get(ENDPOINTS.AUTH.VERIFY);
};

export const getDashboard = () => {
  return httpClient.get(ENDPOINTS.AUTH.DASHBOARD);
};