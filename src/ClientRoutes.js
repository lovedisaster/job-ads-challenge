import React from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';

export const ClientRoutes = (props) => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/home">
                    <Home initState={props.initState}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

