import React, { useState } from "react";
import { makeStyles, Grid } from "@material-ui/core";
import { Field } from "formik";
import {
  renderTextFieldEdit,
  renderSelectFieldEdit,
} from "../../../utilities/WtFields";
import FilledButton from "../../../utilities/FilledButton";
import countryFlagEmoji from "country-flag-emoji";
import { generateArrayOfYears } from "../../../utilities/generateArrayOfYears";

const useStyles = makeStyles((theme) => ({
  marginBottom: {
    marginBottom: theme.spacing(2),
  },
  flex: {
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-between",
    height: "400px",
  },
  flexController: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  marginTop: {
    marginTop: "0.4rem",
  },
  steps: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "145.5%",
    color: "#666666",
  },
  step_line1: {
    width: "153px",
    height: "4px",
    background: "linear-gradient(90deg, #4C73FF , 33%, #D9D9D9 66%)",
  },

  step_line2: {
    width: "153px",
    height: "4px",
    background: "linear-gradient(90deg, #4C73FF , 66%, #D9D9D9 33%)",
  },

  step_line3: {
    width: "153px",
    height: "4px",
    background: "linear-gradient(90deg, #4C73FF , 100%, #D9D9D9 0%)",
  },
  button: {
    background: "none!important",
    border: "none",
    padding: "0!important",
    color: "#4C73FF",
    cursor: "pointer",
    position: "absolute",
    left: "270px",
    top: "20px",
  },
  manageFootForm: {
    display: "flex",
    alignItems: "center",
  },
}));

const AccountSignUpForm = ({
  activeStep,
  setActiveStep,
  values,
  errors,
  touched,
}) => {
  const checkDisabledButton = () => {
    if (activeStep === 1) {
      return values.sponsorUserName === "" ||
        values.userName === "" ||
        (touched.sponsorUserName && errors.sponsorUserName) ||
        (touched.userName && errors.userName)
        ? true
        : false;
    } else if (activeStep === 2) {
      return values.firstName === "" ||
        values.lastName === "" ||
        values.email === "" ||
        values.password === "" ||
        (touched.firstName && errors.firstName) ||
        (touched.lastName && errors.lastName) ||
        (touched.email && errors.email) ||
        (touched.password && errors.password)
        ? true
        : false;
    } else {
      return values.country === "" ||
        values.date === "" ||
        values.month === "" ||
        values.year === "" ||
        (touched.country && errors.country) ||
        (touched.date && errors.date) ||
        (touched.month && errors.month) ||
        (touched.year && errors.year)
        ? true
        : false;
    }
  };
  const classes = useStyles();
  const [setOfYears, setYears] = useState([]);

  React.useEffect(() => {
    setYears(generateArrayOfYears());
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  // const [year] = useState([
  //   "2020",
  //   "2019",
  //   "2018",
  //   "2017",
  //   "2016",
  //   "2015",
  //   "2014",
  //   "2013",
  //   "2012",
  //   "2011",
  //   "2010",
  //   "2009",
  //   "2008",
  //   "2007",
  //   "2006",
  //   "2005",
  //   "2004",
  //   "2003",
  //   "2002",
  //   "2001",
  //   "2000",
  //   "1999",
  //   "1998",
  //   "1997",
  //   "1996",
  //   "1995",
  //   "1994",
  //   "1993",
  //   "1992",
  //   "1991",
  //   "1990",])

  const [month] = useState([
    "01",
    "02",
    "03",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ]);

  const [dates] = useState([
    "01",
    "02",
    "03",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ]);

  return (
    <React.Fragment>
      <Grid container style={{ marginTop: "20px" }} className={classes.flex}>
        {(() => {
          switch (activeStep) {
            case 1:
              return (
                <Grid item xl={12} md={12} sm={12}>
                  <Grid
                    className={classes.marginTop}
                    item
                    xl={12}
                    md={12}
                    xs={12}
                  >
                    {console.log(values)}
                    <Field
                      name="sponsorUserName"
                      label="Sponsor Username"
                      component={renderTextFieldEdit}
                    />{" "}
                  </Grid>
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
                </Grid>
              );

              break;
            case 2:
              return (
                <Grid item xl={12} md={12} sm={12}>
                  <Grid
                    className={classes.marginTop}
                    item
                    xl={12}
                    md={12}
                    xs={12}
                  >
                    <Field
                      name="firstName"
                      label="First Name"
                      component={renderTextFieldEdit}
                    />{" "}
                  </Grid>
                  <Grid
                    className={classes.marginTop}
                    item
                    xl={12}
                    md={12}
                    xs={12}
                  >
                    <Field
                      name="lastName"
                      label="Last Name"
                      component={renderTextFieldEdit}
                    />{" "}
                  </Grid>
                  <Grid
                    className={classes.marginTop}
                    item
                    xl={12}
                    md={12}
                    xs={12}
                  >
                    <Field
                      name="email"
                      label="Email"
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
                </Grid>
              );

              break;
            case 3:
              return (
                <Grid item xl={12} md={12} sm={12}>
                  <Grid
                    className={classes.marginTop}
                    style={{ marginBottom: "10px" }}
                    item
                    xl={12}
                    md={12}
                    xs={12}
                  >
                    <Field
                      name="country"
                      label="Your Country"
                      component={renderSelectFieldEdit}
                    >
                      {" "}
                      {countryFlagEmoji.list.map((data) => {
                        return (
                          <option value={data.name}>
                            {data.emoji} {"  "} {data.name}{" "}
                          </option>
                        );
                      })}
                    </Field>
                  </Grid>
                  <span style={{ marginTop: "35px" }}>Date Of Birth</span>
                  <Grid
                    item
                    style={{ display: "flex", justifyContent: "space-between" }}
                    xl={12}
                    md={12}
                    xs={12}
                  >
                    <Grid
                      className={classes.marginTop}
                      item
                      xl={3}
                      md={3}
                      xs={3}
                    >
                      <Field
                        name="date"
                        placeholder="01"
                        component={renderSelectFieldEdit}
                      >
                        {dates.map((data) => {
                          return <option value={data}>{data}</option>;
                        })}
                      </Field>{" "}
                    </Grid>
                    <Grid
                      className={classes.marginTop}
                      item
                      xl={3}
                      md={3}
                      xs={3}
                    >
                      <Field
                        name="month"
                        placeholder="03"
                        component={renderSelectFieldEdit}
                      >
                        {month.map((data) => {
                          return <option value={data}>{data}</option>;
                        })}
                      </Field>{" "}
                    </Grid>
                    <Grid
                      className={classes.marginTop}
                      item
                      xl={4}
                      md={4}
                      xs={4}
                    >
                      <Field
                        name="year"
                        placeholder="2003"
                        component={renderSelectFieldEdit}
                      >
                        {" "}
                        {setOfYears.map((data) => {
                          return <option value={data}>{data}</option>;
                        })}
                      </Field>
                    </Grid>
                  </Grid>
                </Grid>
              );

              break;

            default:
              break;
          }
        })()}
        <Grid
          item
          xl={12}
          xs={12}
          spacing={0}
          className={classes.flexController}
        >
          <Grid item xs={12} sm={6} xl={6}>
            {/*  */}

            <div className={classes.steps}>Step {activeStep} of 3</div>
            <div
              className={
                activeStep == 1
                  ? classes.step_line1
                  : activeStep == 2
                  ? classes.step_line2
                  : classes.step_line3
              }
            ></div>
          </Grid>
          <Grid item xs={12} sm={6} xl={6}>
            <FilledButton
              buttonText={activeStep >= 3 ? "Finish" : "Continue"}
              buttonFn={
                activeStep < 3
                  ? () => setActiveStep(activeStep + 1)
                  : () => setActiveStep(activeStep)
              }
              type={activeStep >= 3 ? "submit" : "button"}
              disabled={checkDisabledButton()}
            />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default AccountSignUpForm;
