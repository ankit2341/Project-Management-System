import React from 'react'
import styles from "../Styles/Auth.module.css";
import AuthForm from '../Components/Auth/AuthForm';

const Auth = () => {
  return (
    <>
    <img src="./assets/login-bg-1.svg" alt="login_bg" className={styles.login_bg} />
    <AuthForm/>
    </>
  )
}

export default Auth