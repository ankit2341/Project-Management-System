import React, { useEffect, useState } from "react";
import SideNavbar from "../Components/SideNavbar";
import styles from "../Styles/Project.module.css";
import Form from "react-bootstrap/Form";
import ProjectTable from "../Components/Projects/ProjectTable";
import ProjectCards from "../Components/Projects/ProjectCards";

const Projects = () => {
  const [activePage, setActivePage] = useState(1);
  const [sort, setSort] = useState("Priority");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (search === "") {
      fetch(
        `${process.env.REACT_APP_API}projects?page=${activePage}&sort=${sort}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      fetch(
        `${process.env.REACT_APP_API}projects?page=${activePage}&sort=${sort}&search=${search}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [activePage, sort, search]);

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
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              className="nosubmit"
              placeholder="Type to search"
            />
            <div className={styles.sort_by_div}>
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
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value);
                }}
              >
                <option value="Priority">Priority</option>
                <option value="Projectname">Project name</option>
                <option value="Reason">Reason</option>
                <option value="Type">Type</option>
                <option value="Category">Category</option>
                <option value="Priority">Priority</option>
                <option value="Department">Department</option>
                <option value="Location">Location</option>
                <option value="Status">Status</option>
              </Form.Select>
            </div>
          </div>

          {/* -------------------------------------projects list ----------------------------------------------- */}
          {data.length > 0 ? (
            <div style={{ paddingTop: "30px" }}>
              <ProjectTable data={data} />
              <ProjectCards data={data} />

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
                  style={{
                    background: "blue",
                    color: "white",
                    padding: "3px 10px",
                  }}
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
          ) : (
            <div style={{ paddingTop: "30px" }}>
              No data found
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
                  style={{
                    background: "blue",
                    color: "white",
                    padding: "3px 10px",
                  }}
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

export default Projects;
