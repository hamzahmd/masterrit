import React from "react";
import GridComponent from "../../utilities/GridComponent";
import { makeStyles } from "@material-ui/core/styles";
import boardLogo from "../../assets/images/board.png";
import UnFilledButton from "../../utilities/UnFilledButton";

const useStyles = makeStyles((theme) => ({
  header1: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "30px",
    color: "#2B2B2B",
    margin: "5px 0px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  header2: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "30px",
    margin: "5px 0px",
    color: "#2B2B2B",
    backgroundImage: "linear-gradient(97.42deg, #4C73FF 0%, #FF4CD8 100%)",
    backgroundSize: "100%",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  header1small: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "24px",
    color: "#2B2B2B",
    margin: "3px 0px",
    display: "none",
    lineHeight: "113.5%",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
    },
  },
  header2small: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "30px",
    margin: "0px 0px",
    display: "none",
    color: "#2B2B2B",
    lineHeight: "113.5%",
    backgroundImage: "linear-gradient(97.42deg, #4C73FF 0%, #FF4CD8 100%)",
    backgroundSize: "100%",
    fontSize: "30px",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "52px",
      fontSize: "24px",
    },
  },

  para: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "14px",
    lineHeight: "26px",
    color: "#666666",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
      color: "#666666",
      lineHeight: "145%",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      marginTop: "0px",
      marginBottom: "18px",
    },
  },

  image: {
    width: "80%",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "45.85px",
    },
  },
}));

const ChildComponentA = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <p className={classes.header1small}>BORN OUT OF PERSONAL HUNGER</p>
      <p className={classes.header2small}>TO MAKE A DIFFERENCE</p>
      <img src={boardLogo} alt="board" className={classes.image} />
    </React.Fragment>
  );
};

const ChildComponentB = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <p className={classes.header1}>BORN OUT OF PERSONAL HUNGER</p>
      <p className={classes.header2}>TO MAKE A DIFFERENCE</p>
      <p className={classes.para}>
        Mastrerrit was birthed out of personal hunger to make a difference in
        the world of trading. We understand that information is vital in
        achieving success in cryptocurrency and forex; that’s why we started
        Masterrit. We have built an army of highly successful crypto and forex
        traders with mouth-watering testimonies.
      </p>
      <p className={classes.para}>
        Join the largest trading community now and become one of our
        super-traders.
      </p>
      <UnFilledButton
        buttonText={"Join Now"}
        buttonFn={() => {
          console.log("done");
        }}
      />
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
