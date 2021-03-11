import express from 'express';
import config from "../config";
// var ReactDomString = require("../../dist/main-server");
import {renderToString} from 'react-dom/server';
import App from '../../src/App';
import {SSRRoutes} from '../../src/SSRRoutes';
import React from "react";

const initState = {rules: [], ads: []}
const routers = function(app) {

      const ReactDomString = renderToString(
        <App>
          <SSRRoutes initState={initState}/>
        </App>);
      
      app.use("/home",function (req, res, next) {
        res.render('index', { ReactDom : ReactDomString, initData:{rules: [], ads: []}});
        next();
      });
      return app;
  }

export default routers;
