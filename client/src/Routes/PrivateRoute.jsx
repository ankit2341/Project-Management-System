import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({children}) => {
  const token = JSON.parse(localStorage.getItem("token")) || "";

  if (token === "") {
    toast.info("Login First");
    return(
      <Navigate to={"/"}/>
    )
  }

  return children;
};

export default PrivateRoute;
