import React, { useEffect, useState } from "react";
import SideNavbar from "../Components/SideNavbar";
import styles from "../Styles/Project.module.css";
import Form from "react-bootstrap/Form";
import ProjectTable from "../Components/Projects/ProjectTable";
import ProjectCards from "../Components/Projects/ProjectCards";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { toast } from "react-toastify";

const Projects = () => {
  const [activePage, setActivePage] = useState(1);
  const [sort, setSort] = useState("Priority");
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (search === "") {
      setloading(true);
      fetch(
        `${process.env.REACT_APP_API}projects?page=${activePage}&sort=${sort}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
          setloading(false);
        })
        .catch((err) => {
          console.log(err);
          setloading(false);
        });
    } else {
      setloading(true);
      fetch(
        `${process.env.REACT_APP_API}projects?page=${activePage}&sort=${sort}&search=${search}`
      )
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
          setloading(false);
        })
        .catch((err) => {
          console.log(err);
          setloading(false);
        });
    }
  }, [activePage, sort, search]);

  if (loading) {
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
          All Projects
        </p>
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
            <div
              style={{
                padding: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          </div>
        </div>
        <SideNavbar />
        <img
          title="Logout"
          className={styles.logout_logo}
          src="./assets/Logout.svg"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
            toast.info("Logout Success");
          }}
          alt="logout"
        />
      </>
    );
  }

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
        All Projects
      </p>
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
        onClick={() => {
          navigate("/");
          alert("Logout Success");
        }}
        alt="logout"
      />
    </>
  );
};

export default Projects;
