import React from "react";
import { Route, Switch } from "react-router-dom";

// all the routes in the app
import Home from "../pages/Home";
import Splash from "../pages/Splash";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

const Routes = () => {
  return (
    <Switch>
      <Route exact component={Splash} path="/" />
      <Route component={Profile} path="/profile" />
      <Route component={Home} path="/home" />
      <Route component={Login} path="/login" />
    </Switch>
  );
};

export default Routes;
