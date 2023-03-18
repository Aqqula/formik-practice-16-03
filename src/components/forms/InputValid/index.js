import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Field } from "formik";
import styles from "./InputValid.module.scss";
import cx from "classnames";

const InputValid = (props) => {
  const { name, ...restProps } = props;
  return (
    <label className={styles.label}>
      <Field name={name}>
        {({ field, form, meta }) => {
          const classNames = cx({
            [styles.invalid]: meta.error && meta.touched,
          });
          return <input className={classNames} {...field} {...restProps} />;
        }}
      </Field>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </label>
  );
};

InputValid.defaultProps = {
  type: "text",
};

InputValid.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default InputValid;
