import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const SellerProtectedRoute = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/sellers/verify", {
        withCredentials: true,
      })
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