import React from 'react';
import { StaticRouter,Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';


export const SSRRoutes = () => {
    return(
        <StaticRouter>
            <Switch>
                <Route exact={true} path="/home">
                    <Home/>
                </Route>     
            </Switch>
        </StaticRouter>
    )
}
