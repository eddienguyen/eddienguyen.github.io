// Notes:

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import App from './containers/App';

export default (
    <Router>
        <App>
            <Switch>
                <Route exact path='/' component={Home} />
            </Switch>
        </App>
    </Router>
);


// class  extends Component {
//   render() {
//     return (

//     );
//   }
// }

// export default ;