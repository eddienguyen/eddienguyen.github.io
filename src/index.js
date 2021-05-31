import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import routes from 'routes';
import registerServiceWorker from './registerServiceWorker';

import 'theme/globalStyle';

ReactDOM.render(
    <AppContainer>
        {routes}
    </AppContainer>,
    document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
    module.hot.accept('./routes', () => {
        const routes = require('./routes').default;
        ReactDOM.render(
            <AppContainer>
                {routes}
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
