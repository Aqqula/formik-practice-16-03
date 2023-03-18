import { ErrorMessage, Field, Form, Formik } from "formik";
import { SIGN_UP_SCHEMA } from "../../../utils/validationSchema";
import React from "react";
import styles from "./SignUpForm.module.scss";
import InputValid from "../InputValid";

const initialValues = {
  firstName: "",
  lastName: "",
  displayName: "",
  email: "",
  password: "",
  passwordConfirm: "",
  join: "",
};

const SignUpForm = (props) => {
  const OnSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={OnSubmit}
      validationSchema={SIGN_UP_SCHEMA}
    >
      {(formikProps) => {
        return (
          <Form className={styles.form}>
            <div className={styles.container}>
              <InputValid
                name="firstName"
                type="text"
                placeholder="First name"
                className={styles.input}
              />
              <InputValid
                name="lastName"
                type="text"
                placeholder="Last name"
                className={styles.input}
              />
              <InputValid
                name="displayName"
                type="text"
                placeholder="Display name"
                className={styles.input}
              />
              <InputValid
                name="email"
                type="email"
                placeholder="Email Address"
                className={styles.input}
              />
              <InputValid
                name="password"
                type="password"
                placeholder="Password"
                className={styles.input}
              />
              <InputValid
                name="passwordConfirm"
                type="password"
                placeholder="Password Confirmation"
                className={styles.input}
              />
            </div>

            <label className={styles.radio}>
              <Field
                type="radio"
                name="join"
                value="buyer"
                className={styles.radio_input}
              />
              <ErrorMessage
                name="join"
                component="div"
                className={styles.error}
              />
              <p>
                Join As a Buyer
                <span>
                  I am looking for a Name, Logo or Tagline for my business,
                  brand or product.
                </span>
              </p>
            </label>
            <label className={styles.radio}>
              <Field
                type="radio"
                name="join"
                value="creative"
                className={styles.radio_input}
              />
              <ErrorMessage
                name="join"
                component="div"
                className={styles.error}
              />
              <p>
                Join As a Creative or Marketplace Seller
                <span>
                  I plan to submit name ideas, Logo designs or sell names in
                  Domain Marketplace.
                </span>
              </p>
            </label>
            <input
              type="submit"
              value="Create account"
              className={styles.btn}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default SignUpForm;
