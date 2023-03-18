import { Form, Formik } from "formik";
import { LOGIN_SCHEMA } from "../../../utils/validationSchema";
import React from "react";
import styles from "./LogInForm.module.scss";
import InputValid from "../InputValid";

const initialValues = {
  email: "",
  password: "",
};

const LogInForm = (props) => {
  const OnSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={OnSubmit}
      validationSchema={LOGIN_SCHEMA}
    >
        {(formikProps) => {
        return (
          <Form className={styles.form}>
            <InputValid name="email" type="email" placeholder="Email address" className={styles.input}/>
            <InputValid name="password" type="password" placeholder="Password" className={styles.input}/>
            <input type="submit" value="LOGIN" className={styles.btn}/>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LogInForm;
