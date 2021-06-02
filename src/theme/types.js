import styled from 'styled-components';

import { blue, lightBlue } from './variables';

export const Anchor = styled.a`
    color: ${lightBlue};
    text-decoration: none;
    position: relative;

    &:after{
        content: ' ';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 0%;
        width: 100%;
        background-color: ${lightBlue};
        z-index: -3;
        transition: height .1s, background-color .1s;
    } 

    &:hover:after {
        height: 90%;
        background-color: ${blue};
        z-index: -1;
    }
`;