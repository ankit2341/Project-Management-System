import React, { useEffect, useState } from "react";
import styles from "../Styles/SideNavbar.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const SideNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [dashboard, setDahboard] = useState(false);
  const [add, setAdd] = useState(false);
  const [list, setList] = useState(false);

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setDahboard(true);
      setAdd(false);
      setList(false);
    } else if (location.pathname === "/add") {
      setAdd(true);
      setDahboard(false);
      setList(false);
    } else if (location.pathname === "/projects") {
      setList(true);
      setAdd(false);
      setDahboard(false);
    }
  }, [location.pathname]);

  return (
    <div className={styles.sidenav_parent}>
      <div className={styles.sidenav_child}>
        <img
          title="Dashboard"
          src={
            dashboard
              ? "./assets/Dashboard-active.svg"
              : "./assets/Dashboard.svg"
          }
          style={
            dashboard ? { transform: "scale(1.3)" } : { transform: "scale(1)" }
          }
          alt="dashboard"
          onClick={() => {
            navigate("/dashboard");
          }}
        />
        <img
          title="All Projects"
          src={
            list
              ? "./assets/Project-list-active.svg"
              : "./assets/Project-list.svg"
          }
          style={list ? { transform: "scale(1.3)" } : { transform: "scale(1)" }}
          alt="list"
          onClick={() => {
            navigate("/projects");
          }}
        />
        <img
          title="Add Project"
          src={
            add
              ? "./assets/create-project-active.svg"
              : "./assets/create-project.svg"
          }
          style={add ? { transform: "scale(1.3)" } : { transform: "scale(1)" }}
          alt="add"
          onClick={() => {
            navigate("/add");
          }}
        />
      </div>
    </div>
  );
};

export default SideNavbar;
