// Notes:

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'containers/Home/Home';
import App from 'containers/App/App';
import Projects from 'containers/Projects/Projects';

export default (
    <Router>
        <App>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/projects' component={Projects} />
            </Switch>
        </App>
    </Router>
);