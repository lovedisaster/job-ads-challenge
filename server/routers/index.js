
import {renderToString} from 'react-dom/server';
import StateProvider from '../../src/StateProvider';
import {SSRRoutes} from '../../src/SSRRoutes';
import React from "react";
import {initState} from "../mockData/mockData";

const routers = function(app) {

      const ReactDomString = renderToString(
        <StateProvider initState={initState}>
          <SSRRoutes/>
        </StateProvider>);
      
      app.use("/home",function (req, res, next) {
        res.render('index', { ReactDom : ReactDomString, initData: JSON.stringify(initState)});
        next();
      });
      app.use("/signin",function (req, res, next) {
        res.redirect('/home');
        next();
      });
      app.use("/checkout",function (req, res, next) {
        res.redirect('/home');
        next();
      });


      return app;
  }

export default routers;
