import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; 

const Privaterouting = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
};

export default Privaterouting;