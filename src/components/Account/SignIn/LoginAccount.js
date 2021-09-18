import React, { useState, useEffect } from "react";
import { Paper, makeStyles, Grid } from "@material-ui/core";
import "../../../utilities/style.css";
import login from "../../../assets/images/login.png";
import { Form, Formik, Field } from "formik";
import { Link } from "react-router-dom";
import { renderTextFieldEdit } from "../../../utilities/WtFields";
import FilledButton from "../../../utilities/FilledButton";
import { loginValidationSchema } from "../SignUp/Validate";

const useStyles = makeStyles((theme) => ({
  highlight: {
    textDecoration: "none",
    backgroundImage: "linear-gradient(97.42deg, #4C73FF 0%, #FF4CD8 100%)",
    backgroundSize: "100%",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",
    fontSize: "16px",
  },
  button: {
    background: "none!important",
    border: "none",
    padding: "0!important",
    color: "#4C73FF",
    cursor: "pointer",
    position: "absolute",
    left: "300px",
    top: "20px",
    // [theme.breakpoints.down("md")]: {
    //   left: "180px",
    // },
    [theme.breakpoints.down("sm")]: {
      left: "180px",
    },
  },
}));
const LoginAccountMain = () => {
  const classes = useStyles();
  const [initialValues, setInitialValues] = useState({
    userName: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const submitForm = () => {};

  return (
    <div className="component-center">
      <Paper elevation={0} className="component-paper">
        <div className="component-form">
          <h1 className="component-header">Hello! Welcome Back</h1>
          <small className="component-title">
            Don’t have an account?
            <Link to="/signup" className={classes.highlight}>
              {" "}
              Sign Up
            </Link>
          </small>
          <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
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
                <Grid
                  container
                  style={{ marginTop: "20px" }}
                  className={classes.flex}
                >
                  <Grid item xl={12} md={12} sm={12}>
                    <Grid
                      className={classes.marginTop}
                      item
                      xl={12}
                      md={12}
                      xs={12}
                    >
                      <Field
                        name="userName"
                        label="Username"
                        component={renderTextFieldEdit}
                      />{" "}
                    </Grid>
                    <Grid
                      className={classes.marginTop}
                      style={{ position: "relative" }}
                      item
                      xl={12}
                      md={12}
                      xs={12}
                    >
                      <Field
                        name="password"
                        label="Password"
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        component={renderTextFieldEdit}
                      />{" "}
                      {values.password && (
                        <button
                          type="button"
                          className={classes.button}
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {!showPassword ? "Show" : "Hide"}
                        </button>
                      )}
                    </Grid>
                    <Grid
                      className={classes.marginTop}
                      item
                      xl={12}
                      md={12}
                      xs={12}
                    >
                      <small
                        className={classes.highlight}
                        style={{ padding: "15px 5px" }}
                      >
                        Forgot password?
                      </small>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xl={12}
                    xs={12}
                    spacing={2}
                    className={classes.flexController}
                  >
                    <Grid item xs={6} xl={6}></Grid>
                    <Grid item xs={6} xl={6}>
                      <FilledButton
                        buttonText="Log In"
                        type="submit"
                        disabled={
                          values.userName === "" || values.password === ""
                            ? true
                            : false
                        }
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </div>
        <div className="component-image">
          <img src={login} alt="person" className="image-login-account" />
        </div>
      </Paper>
    </div>
  );
};

export default LoginAccountMain;
