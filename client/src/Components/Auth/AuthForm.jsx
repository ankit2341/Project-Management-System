import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import styles from "../../Styles/Auth.module.css";
import { Button } from "react-bootstrap";

const AuthForm = () => {
  const [checkValid, setCheckValid] = useState(true);
  const [isCredentialsValid, setisCredentialsValid] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    if (email === "") {
      setCheckValid(false);
    } else {
      setCheckValid(true);
    }
  }, [email]);

  const handleLogin=()=>{
     if(email===""||pass===""){
        setisCredentialsValid(false);
     }
     else{
        setisCredentialsValid(true);
     }
  }

  return (
    <div className={styles.authform_div}>
      <div className={styles.logo_title}>
        <img src="./assets/Logo.svg" alt="logo" />
        <p className={styles.logo_title_p}>Online Project Management</p>
      </div>
      <Form className={styles.form}>
        <p className={styles.form_p}>Login to get started</p>
        <Form.Group style={{ marginBottom: "20px" }} controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            isInvalid={!checkValid ? true : false}
            placeholder="Enter email"
          />
          <Form.Control.Feedback style={{ color: "red" }} type="invalid">
            Email is Required.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
          <Button
            variant="primary" onClick={handleLogin}
            className={styles.loginbtn}
          >
            Login
          </Button>
        </div>
        <p style={{ color: "red", paddingTop: "20px", textAlign: "center" }}>
          {isCredentialsValid ? "" : "Invalid Credentials"}
        </p>
      </Form>
    </div>
  );
};

export default AuthForm;
