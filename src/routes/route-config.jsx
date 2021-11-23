import React from 'react';
import {IndexRoute, Route} from 'react-router';
import App from './app';
import Home from './routes/home';
import Page1 from './routes/page1';

export default Main(
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="page1" component={Page1} />
        </Route>               
);