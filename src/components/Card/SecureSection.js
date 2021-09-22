import React from "react";
import securesafe from "../../assets/images/securesafe.png";

import { Box, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./CardStyles";

const SecureSection = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.secureContainer}>
      <Grid item md={7} sm={12} xs={12}>
        <Box className={classes.imageSafe}>
          <img src={securesafe} alt="safe" className={classes.cardImg} />
        </Box>
      </Grid>
      <Grid item md={5} sm={12} xs={12} className={classes.secureText}>
        <Box className={classes.payFreely}>
          <Typography variant="div" className={classes.headerPay}>
            HIGHLY <span className={classes.highlightPay}>SECURE</span>
          </Typography>
          <Typography variant="p" className={classes.para}>
            The Masterrit PAY service is fast, easy, and secure, thanks to
            MasterCard’s Digital Enablement Service.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SecureSection;
