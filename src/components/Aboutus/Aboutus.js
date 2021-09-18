import React from "react";
import GridComponent from "../../utilities/GridComponent";
import { makeStyles } from "@material-ui/core/styles";
import aboutus from "../../assets/images/aboutus.png";
import Navbar from "../Wrapper/Navbar";
import lines2 from "../../assets/images/lines2.png";

const useStyles = makeStyles((theme) => ({
  header: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "48px",
    lineHeight: "50px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
      lineHeight: "36px",
      textAlign: "left",
    },
  },
  highlight: {
    backgroundImage: "linear-gradient(97.42deg, #4C73FF 0%, #FF4CD8 100%)",
    backgroundSize: "100%",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",
  },
  para: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "26px",
    color: "#666666",
    maxWidth: "518px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
      color: "#2B2B2B",
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  para1: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      fontSize: "19px",
      color: "#666666",
      display: "inline",
      lineHeight: "145%",
    },
  },
  image: {
    width: "100%",
    height: "auto",
    filter: "drop-shadow(10px 24px 74px rgba(76, 115, 255, 0.15))",
  },

  applyBackground: {
    position: "absolute",
    left: "100px",
    [theme.breakpoints.only("lg")]: {
      display: "none",
    },
    [theme.breakpoints.only("md")]: {
      display: "none",
    },
    [theme.breakpoints.only("xl")]: {
      left: "1160px",
    },

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  imageLine: {
    width: "90%",
  },
}));

const ChildComponentA = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <h1 className={classes.header}>
        ABOUT <span className={classes.highlight}>US</span>
      </h1>
      <p className={classes.para}>
        Our mission is to provide our customers and affiliates the highest
        quality products, tools, systems, resources, and everything they need to
        maximize their cryptocurrency results!
      </p>
    </React.Fragment>
  );
};

const ChildComponentB = () => {
  const classes = useStyles();

  return (
    <>
      <div style={{ position: "relative" }}>
        <img src={aboutus} alt="mobile" className={classes.image} />
      </div>
      <p className={classes.para1}>
        Our mission is to provide our customers and affiliates the highest
        quality products, tools, systems, resources, and everything they need to
        maximize their cryptocurrency results!
      </p>
    </>
  );
};

const Top = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.applyBackground}>
        <img src={lines2} className={classes.imageLine} />
      </div>

      <Navbar />
      <GridComponent
        childComponentA={<ChildComponentA />}
        childComponentB={<ChildComponentB />}
      />
    </>
  );
};

export default Top;
