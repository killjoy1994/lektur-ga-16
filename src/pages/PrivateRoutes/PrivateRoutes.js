import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  let userId = localStorage.getItem("token");

  if (!userId) {
    return <Navigate to={"/login"} replace />;
  }
  return <Outlet />;
};

export default PrivateRoutes;
