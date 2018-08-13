import styled from 'styled-components';

import media from 'theme/media';
import { white } from 'theme/variables';

export const ImageButton = styled.div`
    cursor: pointer;
    overflow: hidden;
    display: inline-block;

    & > img {transition: transform 0.3s ;}
    &:hover{
        & > img{
            filter: blur(3px);
            transform: scale(1.05);
        }
    }
`;

export const Header = styled.div`
    text-align: center;
    color: ${white};
    ${media.tablet`

    `};
    ${media.phone`
        font-size: 1em;
    `};
`;