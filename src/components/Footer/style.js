import styled from 'styled-components';

import {} from "theme/variables";

export const StyledFooter = styled.footer`
    font-size: 0.5rem;
`

export const StyledList = styled.ul `
    transition: all .3s ease-in-out;
    overflow: hidden;
    height: ${props => props.show ? "auto" : "0"}
`

export const Toggler = styled.button `
    background: transparent;
    border: 0 none;
    cursor: pointer;
`;