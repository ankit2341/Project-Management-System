import React from "react";
import SideNavbar from "../Components/SideNavbar";
import styles from "../Styles/Dashboard.module.css";

const Dashboard = () => {
  return (
    <>
      <img
        src="./assets/Header-bg.svg"
        className={styles.header_bg}
        alt="header_bg"
      />
      <p className={styles.header_title}>Dashboard</p>
      <div className={styles.parent_add_div}>
        <img src="./assets/Logo.svg" className={styles.logo} alt="logo" />
        <div className={styles.parentform}></div>
      </div>
      <SideNavbar />
      <img title="Logout" className={styles.logout_logo} src="./assets/Logout.svg" alt="logout" />
    </>
  );
};

export default Dashboard;
