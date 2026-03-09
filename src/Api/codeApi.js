// src/api/codeApi.js

import httpClient from "../utils/HttpClient";
import { ENDPOINTS } from "../utils/endpoints";

export const generateVerificationCode = (data) => {
  return httpClient.post(ENDPOINTS.CODE.GENERATE, data);
};

export const verifyCode = (code) => {
  return httpClient.post(ENDPOINTS.CODE.VERIFY, { code });
};

export const generatePricePool = (data) => {
  return httpClient.post(ENDPOINTS.CODE.GENERATE_PRICE_POOL, data);
};