import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../../utilities/style.css";
import lines3 from "../../assets/images/lines3.png";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexFlow: "column",
    height: "800px",
    [theme.breakpoints.down("sm")]: {
      height: "1400px",
      padding: "0 20px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0 15px",
      margin: "0px",
    },
  },

  upperBox: {
    background:
      "linear-gradient(180deg, rgba(254, 254, 254, 0) 0 %, #FEFEFE 41.15 %, #FEFEFE 64.06 %, rgba(255, 255, 255, 0) 100 %)",
    fontSize: "24px",
    lineHeight: "150%",
    textAlign: "center",
    color: "#2B2B2B",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "50vw",
    zIndex: 10000,
    background: "#fff",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      textAlign: "left",
    },
  },

  middleBox: {
    background: "#FEFEFE",
    backdropFilter: "blur(44px)",
    padding: theme.spacing(3),
    width: "90%",
    textAlign: "left",
    fontSize: "16px",
    color: "grey",
    fontWeight: "#1b1b1b",
    marginTop: "40px",
    border: "3px solid",
    borderImageSlice: 3,
    borderImageSource: "linear-gradient(97.42deg, #4C73FF 0%, #FF4CD8 100%)",
    minWidth: "720px",
    maxWidth: "720px",

    [theme.breakpoints.down("sm")]: {
      minWidth: "0",
    },
    [theme.breakpoints.only("xs")]: {
      minWidth: "0",
      width: "100%",
      padding: "0px",
    },
  },
  middleHead: {
    marginTop: "10px",
    textAlign: "center",
    backgroundImage: "linear-gradient(97.42deg, #4C73FF 0%, #FF4CD8 100%)",
    backgroundSize: "100%",
    fontSize: "30px",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",
    marginBottom: "0px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  lowerBox: {
    background: "linear-gradient(97.42deg, #4C73FF 0%, #FF4CD8 100%)",
    border: "2px solid #FFFFFF",
    margin: "40px 0 20px",
    fontSize: "16px",
    boxSizing: "border-box",
    boxShadow: "0px 2px 68px rgba(76, 115, 255, 0.3)",
    backdropFilter: "blur(34px)",
    borderRadius: "30px",
    color: "#fff !important",
    padding: theme.spacing(3),
    minWidth: "720px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "90vw",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "95vw",
    },
  },

  white: {
    color: "#fff !important",
  },
  disclamer: {
    marginTop: "10px",
    marginBottom: "55px",
    fontWeight: "400",
    color: "grey",
    fontSize: "18px",
    textAlign: "left",
    maxWidth: "80vw",
    [theme.breakpoints.only("sm")]: {
      marginBottom: "100px",
    },
    [theme.breakpoints.only("xs")]: {
      marginBottom: "50px",
      fontSize: "14px",
      lineHeight: "21px",
      padding: "0px",
      maxWidth: "100vw",
    },
    height: "auto",
  },
  applyBackground: {
    zIndex: "-2",
    position: "absolute",
    bottom: "-1px",
    [theme.breakpoints.only("lg")]: {
      display: "none",
    },
    [theme.breakpoints.only("md")]: {
      display: "none",
    },
    [theme.breakpoints.only("xl")]: {
      left: "100px",
    },

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  imageLine: {
    width: "72%",
  },
}));

const Section6 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.applyBackground}>
        <img src={lines3} className={classes.imageLine} />
      </div>
      <div className={classes.upperBox}>
        Learn the Secrets to Maximize Your Results with GPS Academy’s EXCLUSIVE
        Training Series and Tools
      </div>
      <div className="box-two">
        <h2 className={classes.middleHead}>Masterrit Academy’s Membership</h2>
        <ul>
          <li style={{ paddingBottom: "10px" }}>
            Understanding Bitcoin and Cryptocurrencies
          </li>
          <li style={{ paddingBottom: "10px" }}>
            Where and how to purchase Bitcoin and other cryptocurrencies
          </li>
          <li style={{ paddingBottom: "10px" }}>
            Learn how to make money STARTING TODAY from Cryptocurrency Trading
            through our Trade
          </li>
        </ul>
      </div>
      <div className={classes.lowerBox}>
        <h2 className={classes.white}>NOW System !</h2>
        <ul className={classes.white}>
          <li style={{ paddingBottom: "10px" }}>
            Access to our EXCLUSIVE Signals
          </li>
          <li style={{ paddingBottom: "10px" }}>
            Access to our EXCLUSIVE INVESTMENT IDEAS
          </li>
          <li style={{ paddingBottom: "10px" }}>Bitcoin Hedging</li>
        </ul>
      </div>
      <div className={classes.disclamer}>
        DISCLAIMER
        <br />
        “Masterrit trainers provide an informational service only and are not
        responsible for any investments made applying this information. The
        results described are not typical and are not guarantees of future
        income. Any investment carries risk, and it is the investor's own
        obligation to weigh the risks and benefits. It's possible that you'll
        lose some or all of your money. We refuse to take responsibility or
        liability for your usage of the coaching programs' information.
      </div>
    </div>
  );
};

export default Section6;
