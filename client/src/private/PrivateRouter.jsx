import React from "react";
import { useAuth } from "../hook/useAuth";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();
  if (loading) {
    return <Loading />;
  }
  if (user && user.email) {
    return children;
  }
  return <Navigate state={pathname} to="/login" />;
};

export default PrivateRouter;
