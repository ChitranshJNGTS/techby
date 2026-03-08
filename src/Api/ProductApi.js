// src/api/productApi.js

import httpClient from "../utils/httpClient";
import { ENDPOINTS } from "../utils/endpoints";

export const createProduct = (formData) => {
  return httpClient.post(ENDPOINTS.PRODUCTS.CREATE, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updateProduct = (id, formData) => {
  return httpClient.put(ENDPOINTS.PRODUCTS.UPDATE(id), formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteProduct = (id) => {
  return httpClient.delete(ENDPOINTS.PRODUCTS.DELETE(id));
};

export const getAllProducts = () => {
  return httpClient.get(ENDPOINTS.PRODUCTS.GET_ALL);
};

export const getProductById = (id) => {
  return httpClient.get(ENDPOINTS.PRODUCTS.GET_ONE(id));
};

export const getSellerProducts = () => {
  return httpClient.get(ENDPOINTS.PRODUCTS.GET_SELLER_PRODUCTS);
};