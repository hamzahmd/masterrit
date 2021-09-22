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
      marginTop: "20px",
      paddingLeft: "10px",
      height: "60px",
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
    marginBottom: "80px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginBottom: "20px",
    },
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "150px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      marginBottom: "20px",
    },
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
    [theme.breakpoints.down("sm")]: {
      margin: "0 10px",
      width: "100%",
    },
  },
  payCard: {
    width: "67.5%",
    display: "flex",
    flexDirection: "column",
    paddingRight: "3rem",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
      width: "100%",
      paddingRight: "0",
    },
  },
  gridPay: {
    // height: "50vh",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
    },
  },
  imagePay: {
    marginRight: "2rem",
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0",
    },
  },
  imageSafe: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "20px",
    },
  },
  secureText: {
    display: "flex",
    alignItems: "center",
  },
  boxBtn: {
    display: "flex",
    width: " 100%",
    justifyContent: "center",
    marginBottom: "80px",
    [theme.breakpoints.down("sm")]: {
      width: " 85%",
      margin: "40px 20px",
    },
  },

  secureContainer: {
    marginBottom: "180px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "40px",
    },
  },

  cardImg: {
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  },
  creditcardImg: {
    width: "100%",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
}));
