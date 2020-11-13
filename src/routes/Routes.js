import React from "react";
import { Route, Switch } from "react-router-dom";

// all the routes in the app
import Home from "../pages/Home";
import Splash from "../pages/Splash";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";

const Routes = () => {
  return (
    <Switch>
      <Route component={Login} path="/login" />
      <Route component={SignUp} path="/signup" />
      <Route exact component={Splash} path="/" />
      <Route component={Profile} path="/profile" />
      <Route component={Home} path="/home" />
    </Switch>
  );
};

export default Routes;
