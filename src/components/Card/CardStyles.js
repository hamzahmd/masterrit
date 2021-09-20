import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  topheader: {
    width: "100%",
    height: "180px",
    textAlign: "center",
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: "36px",
    lineHeight: "120px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "26px",
      lineHeight: "32px",
      textAlign: "left",
      zIndex: 1000,
    },
  },
  tophighlight: {
    backgroundImage: "linear-gradient(90deg, #4C73FF -100%, #FF4CD8 100%)",
    backgroundSize: "100%",
    WebkitBackgroundClip: "text",
    MozBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozTextFillColor: "transparent",
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
  },

  headerPay: {
    textAlign: "center",
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "36px",
    lineHeight: "40px",
    textAlign: "left",
    marginBottom: "36px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "26px",
      lineHeight: "32px",
      textAlign: "left",
      zIndex: 1000,
    },
  },
  highlightPay: {
    fontWeight: "900",
    backgroundImage: "linear-gradient(90deg, #4C73FF -100%, #FF4CD8 100%)",
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
    fontSize: "16px",
    lineHeight: "18px",
    color: "#666666",
    marginBottom: "16px",
  },
  payFreely: {
    width: "67.5%",
    display: "flex",
    flexDirection: "column",
  },
  gridPay: {
    // height: "50vh",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  imagePay: {
    marginRight: "2rem",
    display: "flex",
    justifyContent: "center",
  },
}));
