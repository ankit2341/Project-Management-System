import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import styles from "../../Styles/Auth.module.css";
import { Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const AuthForm = () => {
  const [checkValid, setCheckValid] = useState(true);
  const [checkPassvalid,setCheckPassValid]=useState(true);
  const [isCredentialsValid, setisCredentialsValid] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate=useNavigate()
  // console.log(process.env.REACT_APP_API)
  useEffect(() => {
    if (email === ""&&pass==="") {
      setCheckValid(true);
    } 
    else if(email===""||pass===""){
      setCheckValid(false)
    }
    else {
      setCheckValid(true);
    }
  }, [email]);

  const handleLogin = () => {
    if (email === "" || pass === "") {
      setisCredentialsValid(false);
    } else {
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
          console.log(res)
          if (res.Message == "Password must be of 8 characters") {
            setisCredentialsValid(false);
            setCheckPassValid(false);
            console.log(res)
          } else if (res.Message == "Invalid User") {
            setisCredentialsValid(false);
          } else if (res.Message == "Valid User") {
            setisCredentialsValid(true);
            alert("Login Success");
            navigate("/dashboard")            
          }
        })
        .catch((err) => {
          console.log(err);
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
          <Button
            variant="primary"
            onClick={handleLogin}
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
