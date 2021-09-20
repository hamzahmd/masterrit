import React, { Fragment } from "react";
import { useStyles } from "./CardStyles";
import { Typography, Grid, Box } from "@material-ui/core";
import womanBitcoin from "../../assets/images/womanbitcoin.png";

const PaySection = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Typography component="div" className={classes.topheader}>
        ONE TAP TO <span className={classes.tophighlight}> PAY</span>
      </Typography>

      <Grid containter className={classes.gridContainer}>
        <Grid item md={6} className={classes.gridPay}>
          <Box className={classes.payFreely}>
            <Typography variant="div" className={classes.headerPay}>
              PAY <span className={classes.highlightPay}>FREELY</span>
            </Typography>
            <Typography variant="p" className={classes.para}>
              Masterrit Pay is the upcoming Masterrit service created to expand
              your freedom and convenience to spend on the things you love
              around the world with peace of mind.
            </Typography>
            <Typography variant="p" className={classes.para}>
              Masterrit Pay is accepted in 200+ Countries and territories thanks
              to MasterCard’s Digital Enablement Service, practically anywhere
              with an NFC contactless terminal.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box className={classes.imagePay}>
            <img src={womanBitcoin} alt="womanbitcoin" />
          </Box>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PaySection;
