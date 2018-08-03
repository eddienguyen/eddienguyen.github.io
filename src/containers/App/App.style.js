import styled from 'styled-components';

import { black } from 'theme/variables';

export const Background = styled.div`
    position: fixed;
    background-color: ${black} ;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -999;
`;
