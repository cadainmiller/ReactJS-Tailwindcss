import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import TokenService from "../services/tokenServices";

function ProtectedRoute() {
  const isAdmin = TokenService.isAdmin();
  return isAdmin ? <Outlet /> : <Navigate to="/login" />;
}
export default ProtectedRoute;
