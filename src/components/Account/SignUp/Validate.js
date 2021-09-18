import * as yup from "yup";

const PASSWORD_VALIDATIONS = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const validationSchema = yup.object().shape({
  sponsorUserName: yup
    .string()
    .required("Sponsor Username is required")
    .min(2, "Sponsor Username must be at least 2 characters")
    .max(12, "Sponsor Username cannot be greater than 12 characters"),
  userName: yup
    .string()
    .required("Username is required")
    .min(2, "Username must be at least 2 characters")
    .max(12, "Username cannot be greater than 12 characters"),
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(12, "First name cannot be greater than 12 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(12, "Last name cannot be greater than 12 characters"),
  email: yup
    .string()
    .email("Please enter a valid E-mail Address")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(PASSWORD_VALIDATIONS, "Password must contain a number."),
  country: yup.string().required("Country is required."),
  date: yup.string().required("Date is required."),
  month: yup.string().required("Month is required."),
  year: yup.string().required("Year is required."),
});

export const loginValidationSchema = yup.object().shape({
  userName: yup.string().required("Username is required"),
  Password: yup.string().required("Password is required."),
});
