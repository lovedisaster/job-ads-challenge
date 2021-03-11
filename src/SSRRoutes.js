import React from "react";
import { StaticRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";

export const SSRRoutes = ({ initState }) => {
  return (
    <StaticRouter>
      <Home initState={initState} />
    </StaticRouter>
  );
};
