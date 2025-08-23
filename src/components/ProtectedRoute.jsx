import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./store/auth-context"; 

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);  // Check login status

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;  // Redirect to login if not logged in
  }

  return children;  // Render the children (protected route) if logged in
};

export default ProtectedRoute;