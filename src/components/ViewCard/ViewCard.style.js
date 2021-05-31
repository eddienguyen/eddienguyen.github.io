import styled from 'styled-components';

import media from 'theme/media';

export const ImageResponsive = styled.div`
    align-self: flex-start;
    /* flex: 1 2 auto; */
    ${media.phone`
        
        > img {
            width: 100%;
        }

    `}
`;

