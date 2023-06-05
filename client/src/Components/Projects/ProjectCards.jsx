import React from "react";
import styles from "../../Styles/Card.module.css";

const ProjectCards = ({ data }) => {
  return (
    <>
      {data.map((el) => {
        return (
          <div id="parent_card" className={styles.parent_card}>
            <div className={styles.card_first_child}>
              <div style={{ textAlign: "left" }}>
                <h5>project name</h5>
                <p>date sfd sfdbn sfbn sgfb</p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p>Status</p>
              </div>
            </div>

            <div style={{ lineHeight: "15px" }}>
              <p>Reason :</p>
              <p>Type :</p>
              <p>Div :</p>
              <p>Category :</p>
              <p>Priority :</p>
              <p>Dept :</p>
              <p>Location :</p>
            </div>
            <div style={{ paddingTop: "10px" }}>
              <button
                style={{
                  background: "blue",
                  color: "white",
                  borderRadius: "15px",
                  border: "none",
                  height: "30px",
                  marginLeft: "0px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                Start
              </button>
              <button
                style={{
                  borderRadius: "15px",
                  border: "1px solid blue",
                  height: "30px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  marginLeft: "10px",
                }}
              >
                Close
              </button>
              <button
                style={{
                  borderRadius: "15px",
                  border: "1px solid blue",
                  marginLeft: "10px",
                  height: "30px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
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
