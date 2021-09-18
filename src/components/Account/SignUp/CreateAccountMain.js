import React, { useState, useEffect } from "react";
import { Paper } from "@material-ui/core";
import accountcreatepic from "../../../assets/images/createaccount.png";
import { Form, Formik } from "formik";
import AccountSignUpForm from "./AccountSignUpForm";
import { Link } from "react-router-dom";
import { validationSchema } from "./Validate";
import { makeStyles } from "@material-ui/core";
import "../../../utilities/style.css";

const useStyles = makeStyles((theme) => ({
  highlight: {
    textDecoration: "none",
    backgroundImage: "linear-gradient(97.42deg, #4C73FF 0%, #FF4CD8 100%)",
    backgroundSize: "100%",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",
  },
}));

const CreateAccountMain = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(1);

  const [initialValues, setInitialValues] = useState({
    sponsorUserName: "",
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
    date: "",
    month: "",
    year: "",
  });
  const submitForm = () => {};

  return (
    <div className="component-center">
      <Paper elevation={0} className="component-paper">
        <div className="component-form">
          <h1 className="component-header">Create your account</h1>
          <small className="component-title">
            Already have an account?
            <Link to="/signin" className={classes.highlight}>
              {"   "}Login
            </Link>
          </small>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={(values, { resetForm }) => {
              submitForm(values);
              resetForm({
                values: "",
              });
            }}
          >
            {({ values, errors, touched }) => (
              <Form
                style={{
                  display: "flex",
                  justifyContent: "center",
                  height: "inherit",
                }}
              >
                <AccountSignUpForm
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                  values={values}
                  errors={errors}
                  touched={touched}
                />
              </Form>
            )}
          </Formik>
        </div>
        <div className="component-image">
          <img
            src={accountcreatepic}
            alt="person"
            className="image-create-account"
          />
        </div>
      </Paper>
    </div>
  );
};

export default CreateAccountMain;
