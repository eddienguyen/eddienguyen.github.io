import styled from 'styled-components';

import media from 'theme/media';
import { red } from 'theme/variables';

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

export const Header = styled.h1`
    text-align: center;
    margin-top: 0;
    color: ${red};
    ${media.tablet`

    `};
    ${media.phone`
        font-size: 1em;
    `};
`;