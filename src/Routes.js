import React, { useState, Suspense } from "react";
import { Route, Router, Switch } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import { createBrowserHistory } from "history";
import LandingPage from "./pages/LandingPage.js";
import AboutPage from "./pages/AboutPage.js";
import AccountCreation from "./pages/AccountCreation";
import AccountLogin from "./pages/AccountLogin.js";
import Navbar from "./components/Wrapper/Navbar.js";
import Footer from "./components/Wrapper/Footer.js";

export const PrivateRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return <Component {...props} />;
    }}
  />
);

export default function Routes() {
  const [loading] = useState(false);

  if (loading) {
    return "Loading..";
  }
  return (
    <Router history={createBrowserHistory()}>
      <CssBaseline />

      {/* <Suspense fallback={<h1>"Loading.."</h1>}> */}
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/signup" component={AccountCreation} />
        <Route exact path="/signin" component={AccountLogin} />
      </Switch>
      {/* </Suspense> */}
      <Footer />
    </Router>
  );
}
