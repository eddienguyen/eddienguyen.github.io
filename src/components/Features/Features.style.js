import styled from 'styled-components';

import { white } from 'theme/variables';
import media from 'theme/media';
import { Container } from 'theme/grid';

export const Background = styled.div`
    background-color: ${white};
    /* position: absolute;
    left: 0;
    z-index: -2;
    width: 100vw;
    height: 100vh; */
`;

export const FeaturesContainer = styled(Container)`
    height: 100vh;
`;


