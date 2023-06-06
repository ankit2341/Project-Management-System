import React, { useEffect, useState } from "react";
import SideNavbar from "../Components/SideNavbar";
import styles from "../Styles/Dashboard.module.css";
import VerticalBarChart from "../Components/Dashboard/VerticalBarChart";
import ScrollableBar from "../Components/Dashboard/ScrollableBar";
import Spinner from "react-bootstrap/Spinner";

const Dashboard = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}projects/details`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          {data !== "" ? (
            <>
              <ScrollableBar data={data.scrollbar} />

              <h3 style={{ paddingTop: "30px", paddingBottom: "30px" }}>
                Department wise- Total vs Closed
              </h3>
              <div className={styles.VerticalBarChart}>
                <VerticalBarChart
                  open={data.chartdata}
                  closed={data.chartdataclosed}
                />
              </div>
            </>
          ) : (
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
                paddingTop: "100px",
              }}
            >
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          )}
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
