import React, { Component } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Routes from "./Routes";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: `rgb(220, 0, 78)`,
    },

    error: {
      main: "#ff0000",
    },
    warning: {
      main: "#ffa500",
    },
    info: {
      main: "#7ccfda",
    },
  },
  typography: {
    fontFamily: ['"Mulish"', "sans-serif"].join(","),
  },
});

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <ThemeProvider theme={theme}>
        {/* <Header/> */}
        <React.Fragment>
          {/* <Grid container justify="center"> */}
          <Routes />
          {/* </Grid> */}
        </React.Fragment>
        {/* <Footer /> */}
      </ThemeProvider>
    );
  }
}

export default App;
