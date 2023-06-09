import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import styles from "../../Styles/Auth.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { toast } from "react-toastify";

const AuthForm = () => {
  const [checkValid, setCheckValid] = useState(true);
  const [checkPassvalid, setCheckPassValid] = useState(true);
  const [isCredentialsValid, setisCredentialsValid] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (email === "" && pass === "") {
      setCheckValid(false);
    } else if (email !== "" || pass === "") {
      setCheckValid(true);
    } else {
      setCheckValid(false);
    }
  }, [email, pass]);

  const handleLogin = () => {
    if (email === "" || pass === "") {
      setisCredentialsValid(false);
      setCheckPassValid(false);
      setCheckValid(false);
    } else {
      setLoading(true);
      fetch(`${process.env.REACT_APP_API}users/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: pass,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.Message == "Password must be of 8 characters") {
            setisCredentialsValid(false);
            setCheckPassValid(false);
            setLoading(false);
          } else if (res.Message == "Invalid User") {
            setisCredentialsValid(false);
            setLoading(false);
          } else if (res.Message == "Valid User") {
            setisCredentialsValid(true);
            toast.info("Login Success");
            navigate("/dashboard");
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  };

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
            isInvalid={!checkPassvalid ? true : false}
            type="password"
            placeholder="Password"
          />
          <Form.Control.Feedback style={{ color: "red" }} type="invalid">
            Password must be of 8 characters.
          </Form.Control.Feedback>
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
          {!loading ? (
            <Button
              variant="primary"
              onClick={handleLogin}
              className={styles.loginbtn}
            >
              Login
            </Button>
          ) : (
            <Button
              variant="primary"
              disabled
              className={styles.loginbtn}
            >
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Button>
          )}
        </div>
        <p style={{ color: "red", paddingTop: "20px", textAlign: "center" }}>
          {isCredentialsValid ? "" : "Invalid Credentials"}
        </p>
      </Form>
    </div>
  );
};

export default AuthForm;
