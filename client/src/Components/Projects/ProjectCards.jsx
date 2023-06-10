import React from "react";
import styles from "../../Styles/Card.module.css";
import { toast } from "react-toastify";

const ProjectCards = ({ data }) => {

  const handleStatus = (statusvalue,id) => {
    const payload = {
      Status: `${statusvalue}`,
    };

    fetch(`${process.env.REACT_APP_API}projects/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
       if (res.Message == "Project updated successfully") {
          toast.info("Status updated successfully");
          window.location.reload(false);
        } else {
          toast.info("Server error");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.info("Network error");
      });
  };

  return (
    <>
      {data.map((el) => {
        return (
          <div key={el._id} id="parent_card" className={styles.parent_card}>
            <div className={styles.card_first_child}>
              <div style={{ textAlign: "left" }}>
                <h5>{el.Projectname}</h5>
                <p>
                  {el.Startdate} to {el.EndDate}
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p>{el.Status}</p>
              </div>
            </div>

            <div style={{ lineHeight: "15px" }}>
              <p>Reason : {el.Reason}</p>
              <p>Type : {el.Type}</p>
              <p>Category : {el.Category}</p>
              <p>Priority : {el.Priority}</p>
              <p>Dept : {el.Department}</p>
              <p>Location : {el.Location}</p>
            </div>
            <div style={{ paddingTop: "10px" }}>
              <button
                style={{
                  background: "#1378d4ff",
                  color: "white",
                  borderRadius: "15px",
                  border: "none",
                  height: "30px",
                  marginLeft: "0px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
                onClick={() => {
                  handleStatus("Running",el._id);
                }}
              >
                Start
              </button>
              <button
                style={{
                  borderRadius: "15px",
                  border: "1px solid #1378d4ff",
                  height: "30px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  marginLeft: "10px",
                }}
                onClick={() => {
                  handleStatus("Closed",el._id);
                }}
              >
                Close
              </button>
              <button
                style={{
                  borderRadius: "15px",
                  border: "1px solid #1378d4ff",
                  marginLeft: "10px",
                  height: "30px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
                onClick={() => {
                  handleStatus("Cancelled",el._id);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectCards;
