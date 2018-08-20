import styled from 'styled-components';

import { black } from 'theme/variables';
import media from 'theme/media';

export const Background = styled.div`
    position: fixed;
    background-image: url(${require('assets/Ava-portrait.jpg')});
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: right;
    background-color: ${black};
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: -99;

    ${media.phone`
        background-size: 100%;
        opacity: 0.4;
    `};

    ${media.tablet`
        background-size: 100%;
        opacity: 0.4;
    `};
`;

export const Intro = styled.div`
    display: flex;
    flex-direction: column;
`;
export const IntroBanner = styled.div`
    height: 100vh;
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    align-items: center;
    font-size: 1.5em;

    ${media.phone `
        font-size: 1em;
        text-align: center;
    `};

    ${media.tablet`
        font-size: 1em;
        text-align: center;
    `}
`;

export const Image = styled.img`
    max-width: 60%;
`;

