import styled, { css } from 'styled-components';

export const Title = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    /* select child elements with below syntax */
    /* > span {    } */

    ${({ bgImagePath }) => bgImagePath && css`
        background: url(${bgImagePath});
    `}
`;