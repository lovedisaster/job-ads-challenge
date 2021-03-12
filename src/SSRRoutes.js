import React from "react";
import { StaticRouter, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";

export const SSRRoutes = () => {
  return (
    <StaticRouter>
      <Home/>
    </StaticRouter>
  );
};
