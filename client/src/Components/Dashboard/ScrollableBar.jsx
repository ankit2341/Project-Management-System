import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1
  }
};

const ScrollableBar = ({ data }) => {
  const titles = [
    "Total Projects",
    "Closed",
    "Running",
    "Closure Delay",
    "Cancelled",
  ];
  const output=[
    "Total",
    "Closed",
    "Running",
    "closeureda;ay",
    "Cancelled"
  ]

  return (
    <>
    <Carousel autoPlay={false}  removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive}>
      {titles.map((el, i) => {
        return (
          <div
            key={el}
            className="dashboard_summary_div"
            style={{
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              height: "98%",
              borderLeft: "10px solid skyblue",
              background: "#fff",
              borderRadius: "10px",
              padding: "0.5%",
              textAlign: "left",
              display: "flex",
              alignItems: "left",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <p style={{paddingLeft:"15px",paddingTop:"10px"}}>{el}</p>
            <h3 style={{paddingLeft:"15px"}}>{data[i]}</h3>
          </div>
        );
      })}
      </Carousel>
    </>
  );
};

export default ScrollableBar;
