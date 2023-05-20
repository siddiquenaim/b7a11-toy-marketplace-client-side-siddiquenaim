import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="min-h-[calc(100vh-260px)] flex items-center justify-center">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }}
        replace
      ></Navigate>
    );
  }
};

export default PrivateRoute;
