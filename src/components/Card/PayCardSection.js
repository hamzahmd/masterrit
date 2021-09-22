import React from "react";
import creditcard from "../../assets/images/creditcard.png";
import { Box, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./CardStyles";

const PayCardSection = () => {
  const classes = useStyles();
  return (
    <Grid containter className={classes.cardContainer}>
      <Grid item md={6} sm={12} xs={12} className={classes.gridPay}>
        <Box className={classes.payCard}>
          <Typography variant="div" className={classes.headerPay}>
            MASTERRIT <span className={classes.highlightPay}>PAY CARD</span>
          </Typography>
          <Typography variant="p" className={classes.para}>
            Masterrit Pay Card is the card associated with the Masterrit reward
            program.
          </Typography>
          <Typography variant="p" className={classes.para}>
            It represents the standard and most popular method to freely manage
            your payments through ATMs and NFC Terminals around the world within
            the Master Card network.
          </Typography>
        </Box>
      </Grid>
      <Grid item md={6} sm={12} xs={12}>
        <Box className={classes.creditcardImg}>
          <img src={creditcard} alt="creditcard" className={classes.cardImg} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default PayCardSection;
