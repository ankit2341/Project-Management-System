import React, { useEffect, useState } from "react";
import SideNavbar from "../Components/SideNavbar";
import styles from "../Styles/Dashboard.module.css";
import VerticalBarChart from "../Components/Dashboard/VerticalBarChart";
import ScrollableBar from "../Components/Dashboard/ScrollableBar";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState("");
  const [scrollbarData, setscrollbarData] = useState([]);
  const [VBChartClosed, setVBChartClosed] = useState([]);
  const [VBChartTotal, setVBChartTotal] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}projects/details`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);

        let closuredelayCount = 0;
        let closedcount = 0;
        let runningcount = 0;
        let cancelcount = 0;

        for (let i = 0; i < res.scrollbarData.length; i++) {
          if (res.scrollbarData[i]._id === "Closed") {
            closedcount += res.scrollbarData[i].count;
          } else if (res.scrollbarData[i]._id === "Running") {
            runningcount += res.scrollbarData[i].count;
          } else if (res.scrollbarData[i]._id === "Cancelled") {
            cancelcount += res.scrollbarData[i].count;
          }
        }

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();

        if (dd < 10) {
          dd = "0" + dd;
        }

        if (mm < 10) {
          mm = "0" + mm;
        }

        today = yyyy + "-" + mm + "-" + dd;

        for (let i = 0; i < res.closureDelay.length; i++) {
          const d1 = Date.parse(`${res.closureDelay[i]._id}`);
          const d2 = Date.parse(`${today}`);

          if (d1 < d2) {
            closuredelayCount++;
          }
        }
        const scrolldata = [
          res.total,
          closedcount,
          runningcount,
          closuredelayCount,
          cancelcount,
        ];
        setscrollbarData(scrolldata);

        let strc = 0;
        let stro = 0;
        let finc = 0;
        let fino = 0;
        let qtyc = 0;
        let qtyo = 0;
        let manc = 0;
        let mano = 0;
        let stoc = 0;
        let stoo = 0;
        let hrc = 0;
        let hro = 0;
  
        for (let i = 0; i < res.departmentData.length; i++) {
          if (res.departmentData[i]._id === "Strategy") {
            stro = stro + res.departmentData[i].total;
            for (let j = 0; j < res.departmentData[i].allstatus.length; j++) {
              if (res.departmentData[i].allstatus[j].status === "Closed") {
                strc = strc + res.departmentData[i].allstatus[j].count;
              }
            }
          } else if (res.departmentData[i]._id  === "Finance") {
            fino = fino + res.departmentData[i].total;
            for (let j = 0; j < res.departmentData[i].allstatus.length; j++) {
              if (res.departmentData[i].allstatus[j].status === "Closed") {
                finc = finc + res.departmentData[i].allstatus[j].count;
              }
            }
          } else if (res.departmentData[i]._id  === "Quality") {
            qtyo = qtyo + res.departmentData[i].total;
            for (let j = 0; j < res.departmentData[i].allstatus.length; j++) {
              if (res.departmentData[i].allstatus[j].status === "Closed") {
                qtyc = qtyc + res.departmentData[i].allstatus[j].count;
              }
            }
          } else if (res.departmentData[i]._id  === "Manufacturing") {
            mano = mano + res.departmentData[i].total;
            for (let j = 0; j < res.departmentData[i].allstatus.length; j++) {
              if (res.departmentData[i].allstatus[j].status === "Closed") {
                manc = manc + res.departmentData[i].allstatus[j].count;
              }
            }
          } else if (res.departmentData[i]._id  === "STO") {
            stoo = stoo + res.departmentData[i].total;
            for (let j = 0; j < res.departmentData[i].allstatus.length; j++) {
              if (res.departmentData[i].allstatus[j].status === "Closed") {
                stoc = stoc + res.departmentData[i].allstatus[j].count;
              }
            }
          } else if (res.departmentData[i]._id  === "HR") {
            hro = hro + res.departmentData[i].total;
            for (let j = 0; j < res.departmentData[i].allstatus.length; j++) {
              if (res.departmentData[i].allstatus[j].status === "Closed") {
                hrc = hrc + res.departmentData[i].allstatus[j].count;
              }
            }
          }
        }

        
        setVBChartTotal([stro,fino,qtyo,mano,stoo,hro]);
        setVBChartClosed([strc,finc,qtyc,manc,strc,hrc]);
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
      <p className={styles.header_title}>
        {" "}
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            fill="#fff"
            viewBox="0 0 320 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </span>{" "}
        Dashboard
      </p>
      <div className={styles.parent_add_div}>
        <img src="./assets/Logo.svg" className={styles.logo} alt="logo" />
        <div className={styles.parentform}>
          {data.total !== undefined ? (
            <>
              <ScrollableBar data={scrollbarData} />

              <h3 style={{ paddingTop: "30px", paddingBottom: "30px" }}>
                Department wise- Total vs Closed
              </h3>
              <div className={styles.VerticalBarChart}>
                <VerticalBarChart open={VBChartTotal} closed={VBChartClosed} />
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
        onClick={() => {
          navigate("/");
          alert("Logout Success");
        }}
        alt="logout"
      />
    </>
  );
};

export default Dashboard;
