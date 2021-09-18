import React from "react";
import GridComponent from "../../utilities/GridComponent";
import { makeStyles } from "@material-ui/core/styles";
import bitcoinLogo from "../../assets/images/bitcoin.png";
import networkLogo from "../../assets/images/network.png";

const useStyles = makeStyles((theme) => ({
  root: {
    background:
      "linear-gradient(180deg, #FEFEFE 0%, rgb(182 198 254 / 30%) 100%)",
  },
  highlight: {
    backgroundImage: "linear-gradient(97.42deg, #4C73FF 0%, #FF4CD8 100%)",
    backgroundClip: "text",
    textFillColor: "white",
  },
  header: {
    paddingLeft: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
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
      fontSize: "20px",
      color: "#666666",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "16px",
      lineHeight: "150%",
    },
  },
  image: {
    width: "80%",
    height: "auto",
    filter: "drop-shadow(10px 24px 74px rgba(76, 115, 255, 0.15))",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  boxOne: {
    border: "1px solid #4C73FF",
    color: "#4C73FF",
    padding: "10px 20px",
    background: "rgba(255, 255, 255, 0.7)",
    boxShadow: "2px 2px 10px #b9b9b9",
    boxSizing: "border-box",
    // backdropFilter: "blur(14px)",
    borderRadius: "10px",
    fontSize: "15px",
    lineHeight: "150%",
    maxWidth: "30vw",
    position: "absolute",
    left: "300px",
    [theme.breakpoints.down("sm")]: {
      position: "static",
      textAlign: "center",
      maxWidth: "350px",
      marginBottom: "40px",
    },
  },

  boxTwo: {
    padding: "10px 20px",
    background: "rgba(255, 255, 255, 0.7)",
    boxShadow: "2px 2px 10px #b9b9b9",
    boxSizing: "border-box",
    borderRadius: "10px",
    fontSize: "15px",
    lineHeight: "150%",
    maxWidth: "30vw",
    position: "relative",
    left: "70px",
    bottom: "50px",
    zIndex: "auto",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      position: "static",
      textAlign: "center",
      maxWidth: "350px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      textAlign: "left",
      marginBottom: "20px",
    },
  },
  smallBitcoin: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
      width: "100px",
      height: "100px",
    },
  },
  largeBitcoin: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  bitcoinBox: {
    background: "rgba(246, 246, 246, 0.7)",
    // backdropFilter: "blur(14px)",
    borderRadius: "10px",
    fontSize: "15px",
    lineHeight: "150%",
    color: "#000000",
  },
  header1: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "113.5%",
    fontSize: "30px",
    color: "#2B2B2B",
    margin: "5px 0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
      textAlign: "left",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px",
    },
  },
  gradient: {
    backgroundColor: "#f3ec78",
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
    margin: "1px 0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
      lineHeight: "113.5%",
      textAlign: "left",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "7.4px",
    },
  },
  removeSmall: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  displaySmall: {
    display: "none",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
    },
  },
}));

const ChildComponentA = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <p className={classes.para}>
        Masterrit has a well-established affiliate marketing program that
        assists people across the world to achieve the unimaginable in terms of
        wealth accumulation.
      </p>
      <p className={classes.para}>
        We have assisted so many people to make a huge amount of money within
        the shortest time ever with modern and sophisticated skills in affiliate
        marketing.
      </p>
      <div className={classes.displaySmall}>
        <img src={networkLogo} alt="network" className={classes.image} />
      </div>
      <div className={classes.boxOne}>
        We provide a step-by-step formula and the training needed to achieve the
        highest ranks.
      </div>
      <img
        src={bitcoinLogo}
        className={classes.largeBitcoin}
        alt="bitcoin"
        style={{ zIndex: 10 }}
      />
      <div className={classes.boxTwo}>
        <img src={bitcoinLogo} alt="bitcoin" className={classes.smallBitcoin} />
        <p>
          We accept cryptocurrency as our fees and your earnings can also be
          paid with cryptocurrency. Dynamism and integrity stand us out from all
          our contemporaries all the time.
        </p>
      </div>
      <div className={classes.bitcoinBox}></div>
    </React.Fragment>
  );
};

const ChildComponentB = () => {
  const classes = useStyles();

  return (
    <div className={classes.removeSmall}>
      <img src={networkLogo} alt="network" className={classes.image} />
    </div>
  );
};

const Top = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <p className={classes.header1}>LET'S WORK TOGETHER </p>
        <p className={classes.header1}>TO IMPROVE YOUR NET WORTH </p>
        <p className={classes.gradient}>BY TAKING ADVANTAGE OF YOUR NETWORK</p>
      </div>
      <GridComponent
        childComponentA={<ChildComponentA />}
        childComponentB={<ChildComponentB />}
      />
    </div>
  );
};

export default Top;
