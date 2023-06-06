import React, { useEffect, useState } from "react";
import styles from "../Styles/Add.module.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import SideNavbar from "../Components/SideNavbar";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [name, setname] = useState("");
  const [reason, setReason] = useState("For Personal");
  const [type, setType] = useState("Internal");
  const [division, setDivision] = useState("Filters");
  const [category, setCategory] = useState("Quality A");
  const [priority, setPriority] = useState("High");
  const [dept, setDept] = useState("Strategy");
  const [startdate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("Mumbai");
  const navigate = useNavigate();

  useEffect(() => {
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
    document.getElementById("datefield").setAttribute("min", today);
    document.getElementById("enddatefield").setAttribute("min", today);
  }, []);

  const handleAddProject = () => {
    if (name === "" || startdate === "" || endDate === "") {
      alert("Please fill all fields !");
    } else {
      const payload = {
        Projectname: name,
        Startdate: startdate,
        EndDate: endDate,
        Reason: reason,
        Type: type,
        Category: category,
        Priority: priority,
        Department: dept,
        Location: location,
        Status: "Registered",
      };

      fetch(`${process.env.REACT_APP_API}projects/addproject`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.Message == "Error in request body") {
            alert("Server error");
          } else if (res.Message == "New project added successfully") {
            alert("New project added successfully");
            navigate("/projects");
          } else {
            alert("Server error");
          }
        })
        .catch((err) => {
          console.log(err);
          alert("Network error");
        });
    }
  };

  return (
    <>
      <img
        src="./assets/Header-bg.svg"
        className={styles.header_bg}
        alt="header_bg"
      />
      <p className={styles.header_title}>Add Projects</p>
      <div className={styles.parent_add_div}>
        <img src="./assets/Logo.svg" className={styles.logo} alt="logo" />
        <div className={styles.parentform}>
          <Form>
            <Row className={`mb-3 ${styles.first_row_form}`}>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={name}
                  onChange={(e) => {
                    setname(e.target.value);
                  }}
                  isInvalid={name !== "" ? false : true}
                  placeholder="Enter project name"
                />
                <Form.Control.Feedback style={{ color: "red" }} type="invalid">
                  name is Required.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                className={styles.save_project_btn}
              >
                <Button
                  onClick={handleAddProject}
                  style={{ paddingLeft: "50px", paddingRight: "50px" }}
                >
                  Save Project{" "}
                </Button>
              </Form.Group>
            </Row>

            <Row className={`mb-3 ${styles.first_row_form}`}>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Reason</Form.Label>
                <Form.Select
                  value={reason}
                  onChange={(e) => {
                    setReason(e.target.value);
                  }}
                >
                  <option value="For Personal">For Personal</option>
                  <option value="For Business">For Business</option>
                  <option value="For Dealership">For Dealership</option>
                  <option value="For Transport">For Transport</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Type</Form.Label>
                <Form.Select
                  value={type}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  <option value="Internal">Internal</option>
                  <option value="External">External</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Division</Form.Label>
                <Form.Select
                  value={division}
                  onChange={(e) => {
                    setDivision(e.target.value);
                  }}
                >
                  <option value="Filters">Filters</option>
                  <option value="Strategy">Strategy</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className={`mb-3 ${styles.first_row_form}`}>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Category</Form.Label>
                <Form.Select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  <option value="Quality A">Quality A</option>
                  <option value="Quality B">Quality B</option>
                  <option value="Quality C">Quality C</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Priority</Form.Label>
                <Form.Select
                  value={priority}
                  onChange={(e) => {
                    setPriority(e.target.value);
                  }}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Department</Form.Label>
                <Form.Select
                  value={dept}
                  onChange={(e) => {
                    setDept(e.target.value);
                  }}
                >
                  <option value="Strategy">Strategy</option>
                  <option value="Finance">Finance</option>
                  <option value="Quality">Quality</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="STO">STO</option>
                  <option value="HR">HR</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className={`mb-3 ${styles.first_row_form}`}>
              <Form.Group as={Col}>
                <Form.Label>Start date</Form.Label>
                <Form.Control
                  value={startdate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                  type="date"
                  id="datefield"
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>End date</Form.Label>
                <Form.Control
                  value={endDate}
                  onChange={(e) => {
                    setEndDate(e.target.value);
                  }}
                  type="date"
                  id="enddatefield"
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Location</Form.Label>
                <Form.Select
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                >
                  <option value="Mumbai">Mumbai</option>
                  <option value="Pune">Pune</option>
                  <option value="Nasik">Nasik</option>
                  <option value="Nagpur">Nagpur</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <p style={{ textAlign: "right" }}>
              Status: <span style={{ fontWeight: "bold" }}>Registered</span>
            </p>

            <Button
              className={styles.save_project_btn_mobile}
              style={{ width: "100%" }}
              onClick={handleAddProject}
            >
              Save Project
            </Button>
          </Form>
        </div>
      </div>
      <SideNavbar />
      <img
        title="Logout"
        onClick={() => {
          navigate("/");
          alert("Logout Success");
        }}
        className={styles.logout_logo}
        src="./assets/Logout.svg"
        alt="logout"
      />
    </>
  );
};

export default Add;
