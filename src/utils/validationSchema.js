import * as Yup from "yup";

export const NAME_SCHEMA = Yup.string()
  .trim()
  .min(3, "Must be 3 symbols")
  .max(17, "Must be less 18 symbols")
  .matches(/^[A-Z][a-z]{2,16}$/, "Must be latin letter in format like 'Brad' ")
  .required();

export const EMAIL_SCHEMA = Yup.string()
  .trim()
  .email("Must include @")
  .required();

export const PASSWORD_SCHEMA = Yup.string()
  .matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,16}$/,
    "Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character"
  )
  .required();

//gr3at@3wdsG

export const SIGN_UP_SCHEMA = Yup.object({
  firstName: NAME_SCHEMA,
  lastName: NAME_SCHEMA,
  displayName: NAME_SCHEMA,
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Wrong")
    .required(),
  join: Yup.string()
    .oneOf(["buyer", "creative"], "Must be of buyer or creative")
    .required(),
});

export const LOGIN_SCHEMA = Yup.object({
  email: EMAIL_SCHEMA,
  password: PASSWORD_SCHEMA,
});
