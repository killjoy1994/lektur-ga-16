import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PrivateRoutes = ({ user, redirectPath = "/login" }) => {
  //   const navigate = useNavigate();

  if (!user) {
    return <Navigate to={redirectPath} replace />;
    // navigate(redirectPath);
  }
  return <Outlet />;
};

export default PrivateRoutes;
