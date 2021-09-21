import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    height: "100px",
    [theme.breakpoints.only("xs")]: {
      flexGrow: 0,
      height: "60px",
      marginTop: "10px",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    padding: "0 20px",
    color: "inherit",
    textDecoration: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  removeSmall: {
    marginRight: "40px",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    // marginLeft: "20px",
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
    },
    // [theme.breakpoints.down('sm')]: {
    //     display: 'none'
    //   },
  },
  sectionMobile: {
    display: "flex",
    flexGrow: 2,
    justifyContent: "space-between",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  logoImg: {
    [theme.breakpoints.down("sm")]: {
      width: "70%",
    },
  },
  logoContainer: {
    [theme.breakpoints.down("sm")]: {
      padding: "0",
    },
  },
  drawMenuBtn: {
    padding: "15px 26px",
    borderRadius: "20px",
    background: "rgba(0, 0, 0, 0.05)",
    position: "sticky",
  },
  navMenuDrawer: {
    width: "350px",
  },
  navMenu: {
    marginTop: "52px",
  },
  navLink: {
    lineHeight: "0.8",
  },
  starterBtn: {
    display: "flex",
    width: " 100%",
    justifyContent: "center",
    marginTop: "120px",
    alignItems: "center",
    flexDirection: "column",
  },
  loginNav: {
    color: "4C73FF",
    marginTop: "15px",
    marginBottom: "35px",
  },
}));
