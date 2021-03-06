import { hydrate } from "react-dom";
import StateProvider from "./StateProvider";
import { ClientRoutes } from "./ClientRoutes";
import React from "react";
import { Link } from "react-router-dom";

const wrapper = document.getElementById("root");

hydrate(
  <StateProvider initState={window.initData}>
    <ClientRoutes />
  </StateProvider>,
  wrapper
);
