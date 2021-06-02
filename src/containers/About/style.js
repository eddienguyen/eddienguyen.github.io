import styled from 'styled-components';

import media from 'theme/media';
import { red } from 'theme/variables';

export const Title = styled.h1`
    text-align: center;
    color: ${red};
    text-transform: uppercase;
`;

export const Copy = styled.div`
    
    h3 {
        color: ${red};
    }

    h4 {
        margin-bottom: 0.5em;

        + p {
            margin-top: 0.5em;
        }
    }
    
`;