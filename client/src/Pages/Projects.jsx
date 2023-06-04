import React, { useEffect, useState } from "react";
import SideNavbar from "../Components/SideNavbar";
import styles from "../Styles/Project.module.css";
import Form from "react-bootstrap/Form";
import ProjectTable from "../Components/Projects/ProjectTable";

const Projects = () => {
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {}, [activePage]);

  return (
    <>
      <img
        src="./assets/Header-bg.svg"
        className={styles.header_bg}
        alt="header_bg"
      />
      <p className={styles.header_title}>All Projects</p>
      <div className={styles.parent_add_div}>
        <img src="./assets/Logo.svg" className={styles.logo} alt="logo" />
        <div className={styles.parentform}>
          <div className={styles.searchbox_selectsort_parent}>
            <input
              type="search"
              className="nosubmit"
              placeholder="Type to search"
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
                width: "100%",
              }}
            >
              <p style={{ paddingTop: "20px", paddingRight: "20px" }}>
                Sort by
              </p>
              <Form.Select
                aria-label="Default select example"
                style={{
                  width: "30%",
                  border: "none !important",
                  borderBottom: "1px solid gray !important",
                }}
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </div>

          {/* -------------------------------------projects list ----------------------------------------------- */}

          <div style={{ paddingTop: "30px" }}>
            <ProjectTable />

            <div title="pagination" className={styles.pagination}>
              <button
                style={{ padding: "3px 10px" }}
                onClick={() => {
                  setActivePage((page) => page - 1);
                }}
                disabled={activePage === 1 ? true : false}
              >
                Prev
              </button>
              <button
                style={{ background: "blue",color:"white", padding: "3px 10px" }}
                onClick={() => {
                  setActivePage((page) => page);
                }}
              >
                {activePage}
              </button>
              <button
                style={{ padding: "3px 10px" }}
                onClick={() => {
                  setActivePage((page) => page + 1);
                }}
              >
                {activePage + 1}
              </button>
              <button
                style={{ padding: "3px 10px" }}
                onClick={() => {
                  setActivePage((page) => page + 2);
                }}
              >
                {activePage + 2}
              </button>
              <button
                style={{ padding: "3px 10px" }}
                disabled={activePage === 10 ? true : false}
                onClick={() => {
                  setActivePage((page) => page + 1);
                }}
              >
                Next
              </button>
            </div>
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

export default Projects;
