import express from 'express';
import config from "../config";
// var ReactDomString = require("../../dist/main-server");
import {renderToString} from 'react-dom/server';
import StateProvider from '../../src/StateProvider';
import {SSRRoutes} from '../../src/SSRRoutes';
import React from "react";

const DEALTYPES = {
  EXTRA: "EXTRA",
  DISCOUNT: "DISCOUNT",
}

const initState = {
  rules: [
    {
      clientCode: "SB",
      rules: [
        {adCode: "CLASSIC", dealSpecs: [
          {type: DEALTYPES.EXTRA, specs: {buy: 2, take:3}}
        ]}
      ]
    },
    {
      clientCode: "ACR",
      rules: [
        {adCode: "STANDOUT", dealSpecs: [
          {type: DEALTYPES.DISCOUNT, specs: {discountPrice: 299.99}}
        ]}
      ]
    },
    {
      clientCode: "MY",
      rules: [
        {adCode: "PREMIUM", dealSpecs: [
          {type: DEALTYPES.DISCOUNT, specs: {discountPrice: 389.99}},
          {type: DEALTYPES.EXTRA, specs: {buy: 4, take: 5}},
        ]}
      ]
    },
  ], 
  ads: [
    {code: "CLASSIC", name: "Classic Ad", description: "Offers the most basic level of advertisement", price: 269.99},
    {code: "STANDOUT", name: "Stand out Ad", description: "Allows advertisers to use a company logo and use a longer presentation text", price: 322.99},
    {code: "PREMIUM", name: "Premium Ad", description: "Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility", price: 394.99}
  ]
}

const routers = function(app) {

      const ReactDomString = renderToString(
        <StateProvider initState={initState}>
          <SSRRoutes/>
        </StateProvider>);
      
      app.use("/home",function (req, res, next) {
        res.render('index', { ReactDom : ReactDomString, initData: JSON.stringify(initState)});
        next();
      });
      return app;
  }

export default routers;
