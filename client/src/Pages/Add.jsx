import React from "react";
import styles from "../Styles/Add.module.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import SideNavbar from "../Components/SideNavbar";

const Add = () => {
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
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                className={styles.save_project_btn}
              >
                <Button style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                  Save Project{" "}
                </Button>
              </Form.Group>
            </Row>

            <Row className={`mb-3 ${styles.first_row_form}`}>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className={`mb-3 ${styles.first_row_form}`}>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <Row className={`mb-3 ${styles.first_row_form}`}>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <p style={{ textAlign: "right" }}>
              Status: <span style={{ fontWeight: "bold" }}>Registered</span>
            </p>

            <Button
              className={styles.save_project_btn_mobile}
              style={{ width: "100%" }}
            >
              Save Project
            </Button>
          </Form>
        </div>
      </div>
      <SideNavbar />
      <img title="Logout" className={styles.logout_logo} src="./assets/Logout.svg" alt="logout" />
    </>
  );
};

export default Add;
