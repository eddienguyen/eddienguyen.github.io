// Notes:

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home/Home';
import App from './containers/App/App';

export default (
    <Router>
        <App>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </App>
    </Router>
);