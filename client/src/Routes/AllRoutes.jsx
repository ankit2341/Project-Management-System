import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Projects from "../Pages/Projects";
import Add from "../Pages/Add";
import Auth from "../Pages/Auth";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/add" element={<Add />}></Route>
    </Routes>
  );
};

export default AllRoutes;
