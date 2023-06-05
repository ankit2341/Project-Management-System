import React from "react";
import SideNavbar from "../Components/SideNavbar";
import styles from "../Styles/Dashboard.module.css";
import VerticalBarChart from "../Components/Dashboard/VerticalBarChart";
import ScrollableBar from "../Components/Dashboard/ScrollableBar";

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
        <div className={styles.parentform}>
          
            <ScrollableBar data={[2, 4, 5, 1, 4]} />
          
          <h3 style={{ paddingTop: "30px", paddingBottom: "30px" }}>
            Department wise- Total vs Closed
          </h3>
          <div className={styles.VerticalBarChart}>
            <VerticalBarChart />
          </div>
        </div>
      </div>
      <SideNavbar />
      <img
        title="Logout"
        className={styles.logout_logo}
        src="./assets/Logout.svg"
        alt="logout"
      />
    </>
  );
};

export default Dashboard;
