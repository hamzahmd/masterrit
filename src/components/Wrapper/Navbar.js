import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import DrawerIcon from "../../assets/images/drawer.png";
import Logo from "../../assets/images/logo.png";
import FilledButton from "../../utilities/FilledButton";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
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
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const history = useHistory();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem component={Link} to="/notifications">
        <p>Notifications</p>
      </MenuItem>
      <MenuItem component={Link} to="/card" onClick={handleProfileMenuOpen}>
        <p>Card</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow} style={{ background: "transparent" }}>
      <AppBar
        position="static"
        elevation={0}
        style={{ background: "transparent" }}
      >
        <Toolbar>
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => history.push("/")}
            >
              <img src={Logo} />
            </IconButton>
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
              component={Link}
              to="/testimonials"
            >
              Testimonials
            </Typography>
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
              component={Link}
              to="/community"
            >
              Community
            </Typography>
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
              component={Link}
              to="/card"
            >
              Card
            </Typography>
          </div>

          <div className={classes.grow} />
          <div className={classes.removeSmall}>
            {window.location.pathname === "/" && (
              <FilledButton
                buttonText={"Get Started"}
                buttonFn={() => history.push("/signup")}
              />
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show 4 new mails"
              color="inherit"
              onClick={() => history.push("/")}
              className={classes.logoContainer}
            >
              <img src={Logo} className={classes.logoImg} />
            </IconButton>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
              className={classes.drawMenuBtn}
            >
              <img src={DrawerIcon} alt="drawer" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
