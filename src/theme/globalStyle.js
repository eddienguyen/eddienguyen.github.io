import { injectGlobal } from 'styled-components';

import { white } from 'theme/variables';
// eslint-disable-next-line
injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700,900');

    body{
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        color: ${ white };
    }
`;