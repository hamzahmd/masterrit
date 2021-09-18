import React from "react";
import GridComponent from "../../utilities/GridComponent";
import { makeStyles } from "@material-ui/core/styles";
import mobileLogo from "../../assets/images/mobile.png";
import FilledButton from "../../utilities/FilledButton";
import UnFilledButton from "../../utilities/UnFilledButton";
import { useHistory } from "react-router";
import lines1 from "../../assets/images/lines1.png";
import Navbar from "../../components/Wrapper/Navbar";
import "../../utilities/style.css";

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
      zIndex: 1000,
    },
  },
  highlight: {
    backgroundImage: "linear-gradient(97.42deg, #4C73FF 0%, #FF4CD8 100%)",
    backgroundSize: "100%",
    WebkitBackgroundClip: "text",

    MozBackgroundClip: "text",
    fontSize: "48px",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",

    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "900",
    margin: "3px 0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
      lineHeight: "36px",
      textAlign: "left",
      zIndex: 1000,
    },
  },
  para: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "26px",
    color: "#666666",
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
      fontSize: "16px",
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
  smallButtons: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      marginTop: "50px",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "32px",
    },
  },
  removeSmall: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  headerController: {
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50px",
      marginTop: "50px",
      zIndex: 1000,
    },
  },

  box1: {
    position: "absolute",
    width: "250px",
    height: "auto",
    padding: theme.spacing(2),
    left: "350px",
    top: "70px",
    background: "rgba(247, 247, 247, 0.7)",
    border: "1px solid #FFFFFF",
    boxSizing: "border-box",
    backdropFilter: "blur(14px)",
    borderRadius: "10px",
    color: "#000",
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      left: "0px",
      top: "0px",
      height: "auto",
    },
    [theme.breakpoints.only("xs")]: {
      position: "absolute",
      left: "0px",
      height: "auto",
      top: "-35px",
    },
  },
  box2: {
    position: "absolute",
    width: "420px",
    height: "auto",
    right: "280px",
    bottom: "80px",
    background: "rgba(246, 246, 246, 0.7)",
    border: "1px solid #FFFFFF",
    boxSizing: "border-box",
    backdropFilter: "blur(14px)",
    borderRadius: "10px",
    color: "#000",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      left: "100px",
      width: "280px",
    },
    [theme.breakpoints.only("xs")]: {
      position: "absolute",
      left: "20px",
      height: "auto",
      bottom: "-15px",
      marginBottom: "32px",
    },
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
  const history = useHistory();
  return (
    <React.Fragment>
      <div className={classes.headerController}>
        <span className={classes.header}> THE </span>
        <span className={classes.highlight}>FASTEST</span>
        <span className={classes.highlight}>-</span>
        <span className={classes.highlight}>GROWING </span>
        <span className={classes.header}>TRADING COMMUNITY</span>
      </div>
      <p className={classes.para}>
        This is where dreams of making a huge fortune from trading become
        reality. Our members enjoys fantastically sure trading real-time signals
        .
      </p>
      <div className={classes.removeSmall}>
        <FilledButton
          buttonText={"Get Started"}
          buttonFn={() => history.push("/signup")}
        />
      </div>
    </React.Fragment>
  );
};

const ChildComponentB = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <div style={{ position: "relative" }}>
        <img src={mobileLogo} alt="mobile" className={classes.image} />
        <div className={classes.box1}>
          Masterrit is a community of people aiming to change their lives and
          make an impact in the world
        </div>
        <div className={classes.box2}>
          Whether you are new or an intermediate to trading , our community of
          skilled analysts and traders are here for you.
        </div>
      </div>
      <p className={classes.para1}>
        This is where dreams of making a huge fortune from trading become
        reality. Our members enjoys fantastically sure trading real-time signals
        .
      </p>
      <div className={classes.smallButtons}>
        <FilledButton
          buttonText={"Get Started"}
          buttonFn={() => history.push("/signup")}
        />
        <span style={{ width: "20px" }}></span>
        <UnFilledButton
          buttonText={"Learn More"}
          buttonFn={() => {
            console.log("done");
          }}
        />
      </div>
    </>
  );
};

const Top = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.applyBackground}>
        <img src={lines1} className={classes.imageLine} />
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
