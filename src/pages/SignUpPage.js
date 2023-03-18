import React from "react";
import SignUpForm from "../components/forms/SignUpForm";
import styles from "./pages.module.scss";

const SignUpPage = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.h1}>CREATE AN ACCOUNT</h1>
      <p className={styles.p}>We always keep your name and email address private.</p>
      <SignUpForm/>
    </section>
  );
};

export default SignUpPage;
