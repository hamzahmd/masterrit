import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  gridParent: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "20px",
      paddingRight: "20px",
    },
    [theme.breakpoints.only("xs")]: {
      paddingLeft: "13px",
      paddingRight: "13px",
    },
  },
}));

const GridComponent = ({
  childComponentA,
  childComponentB,
  background,
  opacity,
  marginBottom,
}) => {
  const classes = useStyles();
  console.log(background);
  return (
    <Grid
      className={classes.gridParent}
      container
      spacing={0}
      style={
        (background
          ? { backgroundColor: background }
          : { background: "inherit" },
        opacity ? { opacity: opacity } : { opacity: 1 },
        marginBottom
          ? {
              marginBottom: "0",
            }
          : { marginBottom: "72px" })
      }
    >
      <Grid item xl={6} md={6} sm={12} xs={12} className={classes.gridChild}>
        {childComponentA}
      </Grid>
      <Grid item xl={6} md={6} sm={12} xs={12}>
        {childComponentB}
      </Grid>
    </Grid>
  );
};

export default GridComponent;
