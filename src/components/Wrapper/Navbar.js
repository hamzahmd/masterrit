import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import DrawerIcon from "../../assets/images/drawer.png";
import CrossIcon from "../../assets/images/cross.png";
import LineNav from "../../assets/images/HomeIndicator.png";
import Logo from "../../assets/images/logo.png";
import FilledButton from "../../utilities/FilledButton";
import { useStyles } from "./NavbarStyles";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
  Box,
} from "@material-ui/core";

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [click, setClick] = useState(false);
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
    setClick(!click);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
    setClick(!click);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      elevation={0}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "left" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "left" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      className={classes.navMenu}
    >
      <Box className={classes.navMenuDrawer}>
        <MenuItem component={Link} to="/about">
          <p className={classes.navLink}>About Us</p>
        </MenuItem>
        <MenuItem component={Link} to="/">
          <p className={classes.navLink}>Testimonials</p>
        </MenuItem>
        <MenuItem component={Link} to="/">
          <p className={classes.navLink}>Community</p>
        </MenuItem>
        <MenuItem component={Link} to="/card" onClick={handleProfileMenuOpen}>
          <p className={classes.navLink}>Card</p>
        </MenuItem>
        <MenuItem component={Link} to="/">
          <p className={classes.navLink}>Community</p>
        </MenuItem>
        <MenuItem component={Link} to="/">
          <p className={classes.navLink}>Privacy Policy</p>
        </MenuItem>
        <MenuItem component={Link} to="/">
          <p className={classes.navLink}>Terms & Conditions</p>
        </MenuItem>
        <Box className={classes.starterBtn}>
          <FilledButton
            buttonText={"Get Started"}
            buttonFn={() => history.push("/signup")}
            width={"300px"}
          />
          <Link className={classes.loginNav} to="/signin">
            Login to existing profile
          </Link>
          <img src={LineNav} alt="lineNav" />
        </Box>
      </Box>
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
              <img src={click ? CrossIcon : DrawerIcon} alt="drawer" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
