import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import SignIn from "./components/signin/SignIn";
import CheckOut from "./components/checkout/CheckOut";
import { createBrowserHistory } from "history";

export let history = CLIENT ? createBrowserHistory() : {};

export const ClientRoutes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact={true} path="/home">
          <Home />
        </Route>
        <Route exact={true} path="/signin">
          <SignIn />
        </Route>
        <Route exact={true} path="/checkout">
          <CheckOut />
        </Route>
      </Switch>
    </Router>
  );
};
