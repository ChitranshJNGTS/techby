import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import httpClient from "../utils/HttpClient";

const SellerProtectedRoute = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    httpClient
      .get("/auth/sellers/verify")
      .then(() => setAuthenticated(true))
      .catch(() => setAuthenticated(false));
  }, []);

  if (authenticated === null) return <div>Loading...</div>;

  if (!authenticated) {
    return <Navigate to="/seller-login" replace />;
  }

  return children;
};

export default SellerProtectedRoute;