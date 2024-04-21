import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  return (
    token ? <Outlet /> : <Navigate to="/authentication" />
  );
}

export default ProtectedRoute;

