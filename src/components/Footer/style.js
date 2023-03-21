import styled from 'styled-components';

import { black } from "theme/variables";

export const StyledFooter = styled.footer`
    font-size: 0.5rem;
    background-color: ${black};
`

export const StyledList = styled.ul`
    transition: all .3s ease-in-out;
    overflow: hidden;
    height: ${props => props.show ? "auto" : "0"}
`

export const Toggler = styled.button`
    background: transparent;
    border: 0 none;
    cursor: pointer;
`;