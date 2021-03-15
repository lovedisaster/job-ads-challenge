import React from 'react';
import HomePage from '../HomePage';
import TestRenderer from 'react-test-renderer';

describe("Test ad product page", () => {
    it("Home page snapshot" , () => {
        const MockStateProps = {
               initState:{
                  ads:[
                     {
                        code:"CLASSIC",
                        name:"Classic Ad",
                        description:"Offers the most basic level of advertisement",
                        price:269.99
                     },
                     {
                        code:"STANDOUT",
                        name:"Stand out Ad",
                        description:"Allows advertisers to use a company logo and use a longer presentation text",
                        price:322.99
                     },
                     {
                        code:"PREMIUM",
                        name:"Premium Ad",
                        description:"Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility",
                        price:394.99
                     }
                  ]
               }
         }
        const RenderedHomePage = TestRenderer.create(<HomePage state={MockStateProps} dispatch={() => {}}></HomePage>).toJSON();
        expect(RenderedHomePage).toMatchSnapshot();
    });
});