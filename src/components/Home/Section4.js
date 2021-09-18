import React from "react";
import GridComponent from "../../utilities/GridComponent";
import { makeStyles } from "@material-ui/core/styles";
import dblmobileLogo from "../../assets/images/dblmobile.png";

const useStyles = makeStyles((theme) => ({
  header1: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "30px",
    color: "#2B2B2B",
    margin: "5px 0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      textAlign: "left",
      width: "320px",
      height: "27px",
      fontWeight: "bold",
    },
  },
  header2: {
    backgroundImage: "linear-gradient(97.42deg, #4C73FF 0%, #FF4CD8 100%)",
    backgroundSize: "100%",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "30px",
    margin: "5px 0px",
    color: "#2B2B2B",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      textAlign: "left",
      marginTop: "1px",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "32px",
    },
  },

  highlight: {
    color: "#4C73FF",
  },

  para: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "26px",
    color: "#666666",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
      color: "#666666",
    },
  },
  removeSmall: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  displaySmall: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
    },
  },

  image: {
    width: "80%",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "20px",
    },
  },
}));

const ChildComponentA = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.displaySmall}>
        <p className={classes.header1}>RECIEVE DAILY </p>
        <p className={classes.header2}>REAL TIME TRADES</p>
      </div>
      <img src={dblmobileLogo} alt="two mobiles" className={classes.image} />
    </React.Fragment>
  );
};

const ChildComponentB = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.removeSmall}>
        <p className={classes.header1}>RECIEVE DAILY </p>
        <p className={classes.header2}>REAL TIME TRADES</p>
      </div>
      <p className={classes.para}>
        Our bots send out trades daily including short & long term crypto
        trades, as well as stock FX & Commodities trades. Every trader wants to
        act fast. It’s important to see the real-time picture of the market and
        receive immediate alerts.
      </p>
    </React.Fragment>
  );
};

const Top = () => (
  <GridComponent
    childComponentA={<ChildComponentA />}
    childComponentB={<ChildComponentB />}
  />
);

export default Top;
